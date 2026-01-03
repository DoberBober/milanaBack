# Важно учесть: #
В контенте могут быть эмодзи.
Нужно переопределить стандартную кодировку MySQL.

`ALTER DATABASE db_name CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;`

`ALTER TABLE db_name.table_name_1 CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`

Не забыть про `django_admin_log`.

# Preparations: #

- `.env` file.
- Switch DB-type in `back/settings.py`.
- Migrations.
- For adding emoji-support use `db_collation="utf8mb4_unicode_ci"` on `TextField`.

# Install with virtual environment: #

- Create venv: `python3 -m venv venv`.
- Activate venv: `source venv/bin/activate`.
- Install packages: `pip install -r req.txt`.

# Install with Docker: #

- Build: `docker-compose build`.
- Run: `docker-compose up -d`.
- Shutdown: `docker-compose down`.
- Execute a command in a running container: `docker exec -it django_app bash`.
- Leave container: `exit`.
