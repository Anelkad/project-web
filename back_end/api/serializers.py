from rest_framework import serializers
from api.models import Product, Category, Addition, Order,About

#serializers.ModelSerializer
class ProductSerializer(serializers.ModelSerializer):
    name = serializers.CharField()

    class Meta:
        model = Product
        fields = ('id', 'name', 'category', 'description', 'price', 'img1', 'img2', 'img3', 'like_count')

class AdditionSerializer(serializers.ModelSerializer):
    name = serializers.CharField()

    class Meta:
        model = Addition
        fields = ('id', 'name', 'product', 'description', 'price', 'img1', 'img2', 'img3', 'like_count')

#serializers.Serializer
class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    image = serializers.CharField()

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields =  ('id', 'name', 'address','contacts', 'product')

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields =  ('id', 'description', 'contacts','email')
