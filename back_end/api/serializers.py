from rest_framework import serializers
from api.models import Product, Category, Addition, Promotion

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
    name = serializers.CharField()

class PromotionSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    detail = serializers.CharField()