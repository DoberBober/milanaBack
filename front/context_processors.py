from front.models import SEO

def common_data(request):
	return {
		'seo': SEO.objects.first()
	}
