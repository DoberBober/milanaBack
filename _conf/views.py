import os
from uuid import uuid4

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import user_passes_test
from django.conf import settings
from django.http import JsonResponse


# Create your views here.
@csrf_exempt
@user_passes_test(lambda u: u.is_superuser)
def upload_tinymce(request):
	if request.method != "POST":
		return JsonResponse({'Error Message': "Wrong request"})

	file_obj = request.FILES['file']
	file_name_suffix = file_obj.name.split(".")[-1]
	if file_name_suffix not in ["jpg", "png", "jpeg", "webp"]:
		return JsonResponse({"Error Message": f"Неподдерживаемый формат ({file_name_suffix}). Поддерживаемые форматы: .jpg, .png, .webp, .jpeg"})

	isExist = os.path.exists(os.path.join(settings.MEDIA_ROOT, 'from_admin'))
	if not isExist:
		os.makedirs(os.path.join(settings.MEDIA_ROOT, 'from_admin'))

	file_path = os.path.join(settings.MEDIA_ROOT, 'from_admin', file_obj.name)

	if os.path.exists(file_path):
		file_obj.name = str(uuid4()) + '.' + file_name_suffix
		file_path = os.path.join(settings.MEDIA_ROOT, 'from_admin', file_obj.name)

	with open(file_path, 'wb+') as f:
		for chunk in file_obj.chunks():
			f.write(chunk)

		return JsonResponse({
			'message': 'Изображение загружено.',
			'location': os.path.join(settings.MEDIA_URL, 'from_admin', file_obj.name)
		})
