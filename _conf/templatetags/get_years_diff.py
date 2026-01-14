from django import template
import datetime

register = template.Library()

@register.filter(name='get_years_diff')
def get_years_diff(value):
	return datetime.datetime.now().year - int(value)
