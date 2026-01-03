import json
import traceback
from typing import Any, Optional, Literal
from datetime import datetime, timedelta
from django.utils import timezone

from logs.models import Log

# Создание лога.
def create_log(
		log_type: Literal['SUCCESS', 'ERROR', 'CRITICAL', 'INFO', 'CORE'],
		source: str,
		desc: str,
		json_code: Optional[Any] = '',
		request_code: Optional[Any] = '',
		error: Optional[Exception] = ''
	):
	"""Создание лога.
	@param: log_type Тип лога (успешно, ошибка)
	@param: source Источник (название файла)
	@param: desc Описание
	@param: json_code Участок кода, который вызвал ошибку
	@param: request_code Отправляемый json
	@param: error Ошибка, которую выдал код
	"""
	_log_type = log_type
	_source = source
	_desc = desc
	try:
		_json_code = json.dumps(json_code, ensure_ascii=False)
	except Exception as e:
		_json_code = json_code
	try:
		_request_code = json.dumps(request_code, ensure_ascii=False)
	except Exception as e:
		_request_code = request_code

	_error = error

	if error:
		_trace = traceback.format_exc()
	else:
		_trace = ''

	Log.objects.create(log_type=_log_type, source=_source, desc=_desc, json_code=_json_code, error=_error, trace=_trace, request_code=_request_code)
	# delete_old_logs()

# def delete_old_logs():
# 	time_period = timezone.now() - timedelta(days=30)
# 	old_logs = Log.objects.filter(created__lt=time_period)

# 	old_logs.delete()
