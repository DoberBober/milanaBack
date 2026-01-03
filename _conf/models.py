from django.db import models
from django.utils import timezone
# from tinymce import models as tinymce_models

# Create your models here.
class PublicManager(models.Manager):
	def get_queryset(self):
		return super().get_queryset().filter(public=True)


class BaseModel(models.Model):
	# test_field = tinymce_models.HTMLField(verbose_name='Поле с редактором')
	public = models.BooleanField(default=True, verbose_name='Публикация')
	created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')
	updated = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

	meta_title = models.CharField(blank=True, default='', max_length=256, verbose_name='Мета-заголовок')
	meta_description = models.CharField(blank=True, default='', max_length=256, verbose_name='Мета-описание')

	objects = models.Manager()
	pub_objects = PublicManager()

	class Meta:
		abstract = True
