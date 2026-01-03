import hashlib
from django import template
from django.templatetags.static import static
from django.contrib.staticfiles import finders

register = template.Library()

@register.simple_tag
def static_hash(path):
	file_path = finders.find(path)
	if not file_path:
		return static(path)
	with open(file_path, 'rb') as f:
		file_hash = hashlib.md5(f.read()).hexdigest()[:8]
	return f"{static(path)}?v={file_hash}"
