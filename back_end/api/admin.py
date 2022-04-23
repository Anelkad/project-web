from django.contrib import admin
from .models import Category, Product, Promotion, Addition

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Promotion)
admin.site.register(Addition)