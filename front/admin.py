from django.contrib import admin

from front.models import Front, Diplom, Review, Page, Post, Service, Faq, Order


@admin.register(Front)
class FrontAdmin(admin.ModelAdmin):
	list_display = ['title',]

	fieldsets = (
		(None, {
			'fields': (
				'title',
			)
		}),
		('SEO-настройки', {
			'fields': (
				('front_seo_title', 'front_seo_description',),
				('about_seo_title', 'about_seo_description',),
				('reviews_seo_title', 'reviews_seo_description',),
				('articles_seo_title', 'articles_seo_description',),
			)
		}),
		('Контактные данные', {
			'fields': (
				('phone', 'email',),
				'vk',
				'wa',
				'tg',
				'ok',
			)
		}),
		('О враче', {
			'fields': (
				('front_heading', 'front_desc',),
				'photo',
				'about_desc',
				'about_text',
				('point_1', 'point_2',),
			)
		}),
	)

	def has_delete_permission(self, request, obj=None):
		return False

	def has_add_permission(self, request, obj=None):
		if Front.objects.exists():
			return False
		return True


@admin.register(Diplom)
class DiplomAdmin(admin.ModelAdmin):
	list_display = ['title', 'show_on_front',]

	fields = (
		'show_on_front',
		'title',
		'photo',
	)


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
	list_display = ['title', 'show_on_front',]

	fields = (
		'show_on_front',
		'title',
		'text',
	)


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
	list_display = ['title',]

	fields = (
		'seo_title',
		'seo_description',
		'title',
		'text',
	)


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
	list_display = ['title',]

	fields = (
		('meta_title', 'meta_description',),
		'created',
		'type',
		'title',
		'desc',
		'text',
		'thumbnail',
		'video',
		'photo',
	)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
	list_display = ['title',]

	fields = (
		('meta_title', 'meta_description',),
		'created',
		('show_on_front', 'favorite',),
		('empty', 'parent',),
		'title',
		'text',
		'photo',
	)


@admin.register(Faq)
class FaqAdmin(admin.ModelAdmin):
	list_display = ['question',]

	fields = (
		'public',
		'services',
		'question',
		'answer',
	)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
	list_display = ['name', 'phone', 'url', 'created',]

	fields = (
		'created',
		'url',
		'name',
		'phone',
	)
