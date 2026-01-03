import json

from django.contrib import admin
from django.utils.safestring import mark_safe

from pygments import highlight
from pygments.lexers import JsonLexer
from pygments.formatters import HtmlFormatter

from logs.models import Log


@admin.register(Log)
class LogAdmin(admin.ModelAdmin):
	list_display = ['created', 'log_type', 'source', 'desc', 'error',]
	search_fields = ['trace', 'error', 'json_code',]
	readonly_fields = ('json_pretty',)

	fields = [
		'created',
		'log_type',
		'source',
		'desc',
		'json_pretty',
		'json_code',
		'request_code',
		'error',
		'trace',
	]

	list_filter = ['created', 'log_type', 'source']

	def has_add_permission(self, request, obj=None):
		return False

	def has_change_permission(self, request, obj=None):
		return False

	def json_pretty(self, instance):
		_json = json.loads(instance.json_code)
		response = json.dumps(_json, sort_keys=True, indent=4, ensure_ascii=False).encode('utf8')
		formatter = HtmlFormatter()
		response = highlight(response, JsonLexer(), formatter)
		style = "<style>" + formatter.get_style_defs() + "</style><br>"
		return mark_safe(style + response)
