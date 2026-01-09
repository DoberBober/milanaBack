import re
from django import template

register = template.Library()


@register.filter(name="get_phone_link")
def get_phone_link(phone: str) -> str:
	"""
	Usage: {{ phone|get_phone_link }}
	"""
	if not phone:
		return ""

	s = str(phone).strip()
	if not s:
		return ""

	cleaned = re.sub(r"[^\d+]", "", s)

	if "+" in cleaned and not cleaned.startswith("+"):
		cleaned = cleaned.replace("+", "")

	digits_only = re.sub(r"\D", "", cleaned)

	if len(digits_only) == 11 and digits_only.startswith("8"):
		return f"tel:+7{digits_only[1:]}"
	if len(digits_only) == 11 and digits_only.startswith("7"):
		return f"tel:+{digits_only}"
	if cleaned.startswith("+7") and len(digits_only) == 11 and digits_only.startswith("7"):
		return f"tel:+{digits_only}"

	if cleaned.startswith("+"):
		return f"tel:+{digits_only}"
	return f"tel:{digits_only}" if digits_only else ""
