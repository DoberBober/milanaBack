#!/usr/bin/env python
from __future__ import annotations

import os
import sys
from typing import List, Tuple

# --- Django bootstrap ---
def setup_django() -> None:
	os.environ.setdefault("DJANGO_SETTINGS_MODULE", "back.settings")

	import django  # noqa: WPS433
	django.setup()


def fetch_one(cursor, sql: str, params: Tuple = ()) -> Tuple:
	cursor.execute(sql, params)
	row = cursor.fetchone()
	if row is None:
		raise RuntimeError(f"No rows returned for query: {sql}")
	return row


def fetch_all(cursor, sql: str, params: Tuple = ()) -> List[Tuple]:
	cursor.execute(sql, params)
	return cursor.fetchall()


def main() -> int:
	setup_django()

	from django.db import connection, DatabaseError  # noqa: WPS433

	TARGET_CHARSET = "utf8mb4"
	TARGET_COLLATION = "utf8mb4_unicode_ci"

	convert_existing = "--convert-existing" in sys.argv
	# Можно переопределить collation: --collation=utf8mb4_0900_ai_ci
	for arg in sys.argv:
		if arg.startswith("--collation="):
			TARGET_COLLATION = arg.split("=", 1)[1].strip()

	try:
		with connection.cursor() as cursor:
			(schema,) = fetch_one(cursor, "SELECT DATABASE()")
			(charset, collation) = fetch_one(
				cursor,
				"""
				SELECT DEFAULT_CHARACTER_SET_NAME, DEFAULT_COLLATION_NAME
				FROM information_schema.SCHEMATA
				WHERE SCHEMA_NAME = DATABASE()
				""",
			)

		print(f"DB `{schema}`: charset={charset} collation={collation}")

		if charset.lower() == TARGET_CHARSET and collation.lower() == TARGET_COLLATION.lower():
			print("OK: Database defaults already set to utf8mb4.")
		else:
			alter_db_sql = (
				f"ALTER DATABASE `{schema}` "
				f"CHARACTER SET {TARGET_CHARSET} COLLATE {TARGET_COLLATION};"
			)
			print(f"Attempting: {alter_db_sql}")

			with connection.cursor() as cursor:
				cursor.execute(alter_db_sql)

			print("OK: Database defaults updated.")

		# Дополнительно фиксируем текущую сессию
		try:
			with connection.cursor() as cursor:
				cursor.execute(f"SET NAMES {TARGET_CHARSET} COLLATE {TARGET_COLLATION};")
		except DatabaseError:
			pass

		if convert_existing:
			with connection.cursor() as cursor:
				tables = fetch_all(
					cursor,
					"""
					SELECT TABLE_NAME
					FROM information_schema.TABLES
					WHERE TABLE_SCHEMA = %s AND TABLE_TYPE = 'BASE TABLE'
					""",
					(schema,),
				)

			if not tables:
				print("No tables found to convert.")
				return 0

			print(f"Converting {len(tables)} tables ...")
			for (table_name,) in tables:
				sql = (
					f"ALTER TABLE `{schema}`.`{table_name}` "
					f"CONVERT TO CHARACTER SET {TARGET_CHARSET} COLLATE {TARGET_COLLATION};"
				)
				with connection.cursor() as cursor:
					cursor.execute(sql)
				print(f"OK: {table_name}")

		print("Done.")
		return 0

	except DatabaseError as e:
		# На shared-хостинге часто нет прав на ALTER DATABASE
		print("ERROR: Cannot update database charset/collation automatically.")
		print("Likely reason: insufficient MySQL privileges on shared hosting.")
		print("")
		print("If phpMyAdmin allows it, run this SQL manually:")
		try:
			from django.db import connection  # noqa: WPS433
			with connection.cursor() as cursor:
				(schema,) = fetch_one(cursor, "SELECT DATABASE()")
		except Exception:
			schema = "<db_name>"

		print(
			f"ALTER DATABASE `{schema}` CHARACTER SET utf8mb4 COLLATE {TARGET_COLLATION};"
		)
		print("")
		print("Original error:")
		print(str(e))
		return 2

	except Exception as e:
		print("ERROR:", str(e))
		return 1


if __name__ == "__main__":
	raise SystemExit(main())
