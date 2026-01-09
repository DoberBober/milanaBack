from django.db import models
from django.utils import timezone

from tinymce import models as tinymce_models

from _conf.models import BaseModel


class Front(models.Model):
	title = models.CharField(blank=False, max_length=256, verbose_name='Название')

	front_seo_title = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО заголовок для главной')
	front_seo_description = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО описание для главной')

	about_seo_title = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО заголовок для страницы "О враче"')
	about_seo_description = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО описание для страницы "О враче"')

	contacts_seo_title = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО заголовок для страницы "Контакты"')
	contacts_seo_description = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО описание для страницы "Контакты"')

	reviews_seo_title = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО заголовок для страницы "Отзывы"')
	reviews_seo_description = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО описание для страницы "Отзывы"')

	articles_seo_title = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО заголовок для страницы "Статьи"')
	articles_seo_description = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО описание для страницы "Статьи"')

	services_seo_title = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО заголовок для страницы "Услуги"')
	services_seo_description = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО описание для страницы "Услуги"')

	phone = models.CharField(blank=True, default='', max_length=256, verbose_name='Телефон')
	email = models.CharField(blank=True, default='', max_length=256, verbose_name='Почта')

	vk = models.CharField(blank=True, default='', max_length=256, verbose_name='Вконтакте')
	wa = models.CharField(blank=True, default='', max_length=256, verbose_name='Whatsapp')
	tg = models.CharField(blank=True, default='', max_length=256, verbose_name='Telegram')
	ok = models.CharField(blank=True, default='', max_length=256, verbose_name='Одноклассники')

	photo = models.ImageField(upload_to='front/', blank=False, verbose_name='Фото врача', help_text="900x732")
	front_heading = models.CharField(blank=False, default='', max_length=256, verbose_name='Заголовок на главной')
	front_desc = models.CharField(blank=False, default='', max_length=256, verbose_name='Вводный текст на главной')

	about_desc = tinymce_models.HTMLField(verbose_name='Текст в блоке "О враче"')
	point_1 = models.CharField(blank=True, default='', max_length=256, verbose_name='Пункт 1 в блоке "О враче"', help_text='Для выделения большими - тег b')
	point_2 = models.CharField(blank=True, default='', max_length=256, verbose_name='Пункт 2 в блоке "О враче"', help_text='Для выделения большими - тег b')

	about_heading = models.CharField(blank=False, default='', max_length=256, verbose_name='Заголовок на странице "О враче"')
	about_text = tinymce_models.HTMLField(verbose_name='Текст на странице "О враче"')


	class Meta:
		db_table = '_front'
		verbose_name = 'Настройки и главная'
		verbose_name_plural = 'Настройки и главная'

	def __str__(self):
		return self.title


class Diplom(models.Model):
	show_on_front = models.BooleanField(default=True, verbose_name='Отображать на главной')
	title = models.CharField(blank=False, max_length=256, verbose_name='Название')
	photo = models.ImageField(upload_to='front/', blank=True, verbose_name='Фото врача', help_text="530x380")


	class Meta:
		db_table = 'diploms'
		verbose_name = 'Диплом'
		verbose_name_plural = 'Дипломы'

	def __str__(self):
		return self.title


class Review(models.Model):
	show_on_front = models.BooleanField(default=True, verbose_name='Отображать на главной')
	title = models.CharField(blank=False, max_length=256, verbose_name='Имя')
	text = models.TextField(blank=True, verbose_name='Текст отзыва')


	class Meta:
		db_table = 'reviews'
		verbose_name = 'Отзыв'
		verbose_name_plural = 'Отзывы'

	def __str__(self):
		return self.title


class Page(models.Model):
	seo_title = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО заголовок')
	seo_description = models.CharField(blank=True, default='', max_length=256, verbose_name='СЕО описание')
	title = models.CharField(blank=False, max_length=256, verbose_name='Название')
	slug = models.SlugField(max_length=255, unique=True, verbose_name='URL')
	text = tinymce_models.HTMLField(verbose_name='Текст')


	class Meta:
		db_table = 'pages'
		verbose_name = 'Страница'
		verbose_name_plural = 'Страницы'

	def __str__(self):
		return self.title


class Post(BaseModel):
	TYPES = (
		("article", "Статья"),
		("video", "Видео"),
	)

	type = models.CharField(max_length=128, verbose_name='Тип поста', choices=TYPES, default=TYPES[0])
	title = models.CharField(blank=False, max_length=256, verbose_name='Название')
	slug = models.SlugField(max_length=255, unique=True, verbose_name='URL')
	desc = models.TextField(blank=True, verbose_name='Вводный текст')
	text = tinymce_models.HTMLField(verbose_name='Текст')
	thumbnail = models.ImageField(upload_to='posts/', blank=False, verbose_name='Картинка в списке', help_text="760x480")
	video = models.TextField(blank=True, verbose_name='Видео')
	photo = models.ImageField(upload_to='posts/', blank=True, verbose_name='Картинка в статье', help_text="2360x800")

	class Meta:
		db_table = 'articles'
		verbose_name = 'Пост'
		verbose_name_plural = 'Посты'
		ordering = ['-created',]

	def __str__(self):
		return self.title


class Service(BaseModel):
	TYPES = (
		("service", "Услуга"),
		("operation", "Операция"),
	)

	show_on_front = models.BooleanField(default=True, verbose_name='Отображать на главной')
	empty = models.BooleanField(default=False, verbose_name='Не открывать страницу')
	favorite = models.BooleanField(default=False, verbose_name='Выделить на странице услуг')

	parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='childs', verbose_name='Родительская услуга')
	type = models.CharField(max_length=128, verbose_name='Тип поста', choices=TYPES, default=TYPES[0])

	title = models.CharField(blank=False, max_length=256, verbose_name='Название')
	slug = models.SlugField(max_length=255, unique=True, verbose_name='URL')
	text = tinymce_models.HTMLField(verbose_name='Текст', blank=True)
	photo = models.ImageField(upload_to='services/', blank=True, verbose_name='Картинка в статье', help_text="2360x800")

	class Meta:
		db_table = 'services'
		verbose_name = 'Услуга'
		verbose_name_plural = 'Услуги'
		ordering = ['title',]

	def __str__(self):
		return self.title


class Faq(BaseModel):
	services = models.ManyToManyField(
		Service,
		blank=True,
		related_name='faq',
		verbose_name='В каких услугах отображать вопрос'
	)

	question = models.CharField(blank=False, max_length=512, verbose_name='Вопрос')
	answer = tinymce_models.HTMLField(verbose_name='Ответ')

	class Meta:
		db_table = 'faq'
		verbose_name = 'Вопрос-ответ'
		verbose_name_plural = 'Вопросы-ответы'

	def __str__(self):
		return self.question


class Order(models.Model):
	created = models.DateTimeField(default=timezone.now, verbose_name='Дата создания')
	url = models.CharField(blank=False, max_length=1024, verbose_name='URL')
	name = models.CharField(blank=False, max_length=512, verbose_name='Имя')
	phone = models.CharField(blank=False, max_length=512, verbose_name='Телефон')

	class Meta:
		db_table = 'orders'
		verbose_name = 'Запись'
		verbose_name_plural = 'Записи'
		ordering = ['-created',]

	def __str__(self):
		return f'{self.name} {self.phone}'
