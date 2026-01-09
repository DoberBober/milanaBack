import re
from django import template

register = template.Library()


@register.filter(name="first_letter")
def first_letter(name: str) -> str:
	"""
	Usage: {{ title|first_letter }}
	"""
	if not name:
		return ""

	return name[:1]
