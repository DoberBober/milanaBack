from django.db import models

# Create your models here.
class SEO(models.Model):
	title = models.CharField(blank=False, max_length=256, verbose_name='Название')

	front_seo_title = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО заголовок для главной')
	front_seo_description = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО описание для главной')

	class Meta:
		db_table = '_seo'
		verbose_name = 'СЕО'
		verbose_name_plural = 'СЕО'

	def __str__(self):
		return self.title
