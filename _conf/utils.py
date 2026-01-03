import os

from django.core.exceptions import ValidationError
from django.core.mail import send_mail, EmailMessage
from django.utils.html import escape
from django.template.loader import render_to_string

from django.conf import settings

from logs.utils import create_log


def mail_sender(subject, text):
	"""Отправка письма.
	@param: subject Тема письма
	@param: text Текст письма
	"""

	try:
		email = EmailMessage(subject, text, settings.EMAIL_HOST_USER, [settings.EMAIL_ADMIN])
		email.content_subtype = 'html'
		html_content = render_to_string('mail_template.html', {'title': subject, 'data': text})
		email.body = html_content
		email.send()

		return True

	except Exception as e:
		create_log('CRITICAL', 'utils: mail_sender', 'Ошибка отправки письма', text, '', e)
		return False


def validate_image_extension(file):
	ext = os.path.splitext(file.name)[1].lower()
	allowed = ['.jpg', '.jpeg', '.png', '.svg', '.webp']
	if ext not in allowed:
		raise ValidationError(f'Недопустимый формат файла: {ext}. Разрешены: {", ".join(allowed)}')
