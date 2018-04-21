from django.contrib import admin

# Register your models here.
from .models import Organization, Card, Gather

admin.site.register(Organization)
admin.site.register(Card)
admin.site.register(Gather)
