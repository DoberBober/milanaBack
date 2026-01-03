from front.models import Front

def common_data(request):
	return {
		'front': Front.objects.first()
	}
