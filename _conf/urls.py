from django.urls import path, include

from _conf.views import upload_tinymce

urlpatterns = [
	path('upload_image', upload_tinymce, name="upload_image"),
]
