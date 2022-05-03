from django.contrib import admin
from .models import Category, Product, Addition, About, Order

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Addition)
admin.site.register(About)
admin.site.register(Order)