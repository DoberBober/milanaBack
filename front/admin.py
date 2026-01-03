from django.contrib import admin

from front.models import Front


# Register your models here.
@admin.register(Front)
class FrontAdmin(admin.ModelAdmin):
	list_display = ['title',]

	fields = (
		'title',
		('front_seo_title', 'front_seo_description',),
	)

	def has_delete_permission(self, request, obj=None):
		return False

	def has_add_permission(self, request, obj=None):
		if Front.objects.exists():
			return False
		return True
