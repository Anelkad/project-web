from django.db import models
from django.db.models import CharField, FloatField, TextField, IntegerField
from django.db.models.fields.related import ForeignKey

class Category(models.Model):
    title = CharField(max_length=255)
    image = CharField(max_length=255, default ='')

    class Meta:
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.pk,
            'title': self.title,
            'image': self.image
        }

    def __str__(self):
        return self.title


class Product(models.Model):
    name = CharField(max_length=255)
    category = ForeignKey(Category, on_delete=models.CASCADE)
    description = TextField(default='')
    price = IntegerField(default=10000)
    img1 = TextField(default='')
    img2 = TextField(default='')
    img3 = TextField(default='')
    like_count = IntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Products'

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'price': self.price,
            'img1': self.img1,
            'img2': self.img2,
            'img3': self.img3,
            'like_count': self.like_count
        }

    def __str__(self):
        return f'{self.name} | {str(self.category)}'

class Addition(models.Model):
    name = CharField(max_length=255)
    product = ForeignKey(Product, on_delete=models.CASCADE)
    description = TextField()
    price = IntegerField()
    img1 = TextField()
    img2 = TextField()
    img3 = TextField()
    like_count = IntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Additions'

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'product': self.product,
            'description': self.description,
            'price': self.price,
            'img1': self.img1,
            'img2': self.img2,
            'img3': self.img3,
            'like_count': self.like_count
        }

    def __str__(self):
        return self.name

class About(models.Model):
    description = TextField()
    contacts = CharField(max_length=11)
    email = CharField(max_length=50)

    def to_json(self):
        return {
            'id': self.pk,
            'description': self.description,
            'contacts': self.contacts,
            'email': self.email
        }

    def __str__(self):
        return self.contacts

class Order(models.Model):
    name = TextField()
    contacts = TextField()
    address = TextField()
    product = TextField()

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'contacts': self.contacts,
            'address': self.address,
            'product':self.product,
        }
