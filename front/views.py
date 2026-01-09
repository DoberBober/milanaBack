from django.views.generic import TemplateView, DetailView, ListView

from front.models import Front, Diplom, Review, Page, Post, Service, Faq, Order


class FrontView(TemplateView):
	template_name = 'front.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['diploms'] = Diplom.objects.filter(show_on_front=True)
		context['services'] = Service.objects.filter(show_on_front=True)
		context['reviews'] = Review.objects.filter(show_on_front=True)
		return context


class AboutView(TemplateView):
	template_name = 'about.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['diploms'] = Diplom.objects.all()
		return context


class ArticlesView(TemplateView):
	template_name = 'articles.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['articles'] = Post.objects.filter(type=Post.TYPES.article)
		context['videos'] = Post.objects.filter(type=Post.TYPES.video)
		return context


class ArticleView(DetailView):
	template_name = 'article.html'
	model = Post
	context_object_name = 'post'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		# TODO.
		context['other'] = Post.objects.filter(type=Post.TYPES.article)
		return context


class ReviewsView(ListView):
	template_name = 'reviews.html'
	context_object_name = "reviews"
	queryset = Review.objects.all()


class ContactsView(TemplateView):
	template_name = 'contacts.html'


class PageView(DetailView):
	template_name = 'page.html'
	model = Page
	context_object_name = 'page'


class ServicesView(ListView):
	template_name = 'services.html'
	context_object_name = "services"
	queryset = Service.objects.all()


class ServiceView(DetailView):
	template_name = 'service.html'
	model = Service
	context_object_name = 'service'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['other'] = Service.objects.all().order_by('?')[:6]
		return context
