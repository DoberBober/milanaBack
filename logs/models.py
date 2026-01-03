from django.db import models
from django.utils import timezone

# Create your models here.
class Log(models.Model):
	created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')
	log_type = models.CharField(max_length=255, verbose_name='Тип записи')
	source = models.CharField(max_length=255, verbose_name='Источник лога')

	desc = models.TextField(blank=True, verbose_name='Описание ошибки')
	json_code = models.TextField(blank=True, verbose_name='JSON')
	request_code = models.TextField(blank=True, verbose_name='Request code')

	error = models.TextField(blank=True, verbose_name='Ошибка')
	trace = models.TextField(blank=True, verbose_name='Подробности ошибки')

	class Meta:
		db_table = '_logs'
		verbose_name = 'Запись лога'
		verbose_name_plural = 'Записи логов'

	def __str__(self):
		return self.created.strftime("%Y/%m/%d %H:%M:%S") + ', ' + self.log_type + ', ' + self.source
