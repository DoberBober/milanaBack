from front.models import Front, Review


def common_data(request):
	return {
		'front': Front.objects.first(),
		'reviews_count': len(Review.objects.filter(public=True))
	}
