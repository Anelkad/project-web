import json
from .models import Category, Product, Addition, Promotion
from django.http.response import JsonResponse
from api.serializers import CategorySerializer, ProductSerializer, AdditionSerializer, PromotionSerializer

from rest_framework.permissions import IsAuthenticated

#fbv
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response

#cbv
from rest_framework.views import APIView
from django.shortcuts import Http404
from rest_framework import status

@api_view(['GET'])
def categories_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many = True)
        return Response(serializer.data)

@api_view(['GET'])
def categories_products(request, category_id):
    try:
        products = Category.objects.get(id=category_id).product_set.all()
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = ProductSerializer(products, many = True)
        return JsonResponse(serializer.data, safe=False)

def products_list(request):
    pass

class ProductListView(APIView):
    
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data)

    #permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

def product_detail(request, product_id):
    pass

class ProductDetailView(APIView):
    
    #permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Product.objects.get(id=pk)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk=None):
        product = self.get_object(pk)
        serializer = ProductSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        product = self.get_object(pk)
        product.delete()
        return Response({'message': 'deleted'}, status=204)


def product_addition(request, product_id):
    try:
        additions = Addition.objects.get(id=product_id).addition_set.all()
        serializer = AdditionSerializer(addition, many = True)
    except Addition.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(serializer.data, safe=False)

def promotions(request):
    promotions = Promotion.objects.all()
    serializer = PromotionSerializer(promotions, many = True)
    return JsonResponse(serializer.data, safe=False)
