from django.contrib import admin

from front.models import SEO


# Register your models here.
@admin.register(SEO)
class SEOAdmin(admin.ModelAdmin):
	list_display = ['title',]

	fields = (
		'title',
		('front_seo_title', 'front_seo_description',),
	)

	def has_delete_permission(self, request, obj=None):
		return False

	def has_add_permission(self, request, obj=None):
		if SEO.objects.exists():
			return False
		return True
