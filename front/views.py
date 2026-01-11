from django.views.generic import TemplateView, DetailView, ListView
from django.db.models import Q

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
		context['articles'] = Post.pub_objects.filter(type=Post.Type.ARTICLE)
		context['videos'] = Post.pub_objects.filter(type=Post.Type.VIDEO)
		return context


class ArticleView(DetailView):
	template_name = 'article.html'
	model = Post
	context_object_name = 'post'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['other'] = Post.pub_objects.filter(type=self.object.type).order_by('?')[:6]
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


class ServicesView(TemplateView):
	template_name = 'services.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['services'] = Service.pub_objects.filter(Q(type=Service.Type.SERVICE) & Q(parent__isnull=True))
		context['operations'] = Service.pub_objects.filter(Q(type=Service.Type.OPERATION) & Q(parent__isnull=True))
		return context


class ServiceView(DetailView):
	template_name = 'service.html'
	model = Service
	context_object_name = 'service'

	def get_queryset(self):
		qs = super().get_queryset()
		return qs.filter(empty=False)

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['other'] = Service.objects.filter(show_on_front=True).order_by('?')[:6]
		return context
