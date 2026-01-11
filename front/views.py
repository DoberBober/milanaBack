from django.views.generic import TemplateView, DetailView, ListView
from django.db.models import Q
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.utils.http import urlencode
from django.views.decorators.http import require_POST


from front.models import Front, Diplom, Review, Page, Post, Service, Faq, Order
from _conf.utils import mail_sender

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
	template_name = "articles.html"
	paginate_by = 9

	def _apply_search(self, qs, q: str):
		if not q:
			return qs
		search_q = Q(title__icontains=q) | Q(desc__icontains=q)
		return qs.filter(search_q)

	def _paginate(self, qs, page_param: str):
		paginator = Paginator(qs, self.paginate_by)
		page_number = self.request.GET.get(page_param) or 1
		return paginator.get_page(page_number)

	def _build_next_url(self, page_obj, page_param: str, q: str | None):
		if not page_obj.has_next():
			return None

		params = {page_param: page_obj.next_page_number()}
		if q:
			params["q"] = q

		return f"{self.request.path}?{urlencode(params)}"

	def get(self, request, *args, **kwargs):
		q = (request.GET.get("q") or "").strip()

		articles_qs = (
			Post.pub_objects.filter(type=Post.Type.ARTICLE)
			.order_by("-created")
		)
		videos_qs = (
			Post.pub_objects.filter(type=Post.Type.VIDEO)
			.order_by("-created")
		)

		articles_qs = self._apply_search(articles_qs, q)
		videos_qs = self._apply_search(videos_qs, q)

		articles_page = self._paginate(articles_qs, "page")
		videos_page = self._paginate(videos_qs, "vpage")

		if request.headers.get("x-requested-with") == "XMLHttpRequest":
			target_list = request.GET.get("list", "articles")

			if target_list == "videos":
				page_obj = videos_page
				html = render_to_string(
					"includes/_post_cards.html",
					{"page_obj": page_obj, "is_video": True},
					request=request,
				)
				next_url = self._build_next_url(page_obj, "vpage", q)
			else:
				page_obj = articles_page
				html = render_to_string(
					"includes/_post_cards.html",
					{"page_obj": page_obj, "is_video": False},
					request=request,
				)
				next_url = self._build_next_url(page_obj, "page", q)

			return JsonResponse({"html": html, "next_url": next_url})

		context = self.get_context_data(**kwargs)
		context.update(
			{
				"q": q,
				"articles_page": articles_page,
				"videos_page": videos_page,
				"articles_next_url": self._build_next_url(articles_page, "page", q),
				"videos_next_url": self._build_next_url(videos_page, "vpage", q),
			}
		)
		return self.render_to_response(context)


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


@require_POST
def create_order(request):
	name = (request.POST.get("name") or "").strip()
	phone = (request.POST.get("tel") or "").strip()
	page_url = (request.POST.get("url") or "").strip()

	if not page_url:
		page_url = request.META.get("HTTP_REFERER", "")

	if not name or not phone:
		return JsonResponse({"ok": 0, "error": "name/phone required"}, status=400)

	order = Order.objects.create(
		url=page_url,
		name=name,
		phone=phone,
	)

	subject = f"Новая запись на приём (Order #{order.id})"
	message = (
		f"Создана новая запись:\n\n"
		f"ID: {order.id}\n"
		f"Имя: {order.name}\n"
		f"Телефон: {order.phone}\n"
		f"URL: {order.url}\n"
	)

	mail_sender(subject, message)

	return JsonResponse({"ok": 1})
