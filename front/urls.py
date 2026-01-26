from django.urls import path

from front.views import FrontView, AboutView, ContactsView, ReviewsView, ServicesView, ServiceView, ArticlesView, ArticleView, PageView
from front.views import create_order, add_review
from front.views import SitemapHTML, SitemapXML

urlpatterns = [
	path('', FrontView.as_view(), name="front"),
	path('about/', AboutView.as_view(), name="about"),
	path('contacts/', ContactsView.as_view(), name="contacts"),
	path('reviews/', ReviewsView.as_view(), name="reviews"),
	path('services/', ServicesView.as_view(), name="services"),
	path('services/<str:slug>/', ServiceView.as_view(), name="service"),
	path('articles/', ArticlesView.as_view(), name="articles"),
	path('articles/<str:slug>/', ArticleView.as_view(), name="article"),
	path("orders/create/", create_order, name="create_order"),
	path('add_review/', add_review, name='add_review'),
	path('sitemap.html', SitemapHTML.as_view(), name='sitemap_html'),
	path('sitemap.xml', SitemapXML.as_view(), name='sitemap_xml'),
	path('<str:slug>/', PageView.as_view(), name="page"),
]
