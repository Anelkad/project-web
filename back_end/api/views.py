import json
from .models import Category, Product, Addition, About, Order
from django.http.response import JsonResponse
from api.serializers import CategorySerializer, ProductSerializer, AdditionSerializer, OrderSerializer, AboutSerializer

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
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
            return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
          serializer = CategorySerializer(category) 
          return JsonResponse(serializer.data)

@api_view(['GET'])
def categories_products(request, category_id):
    try:
        products = Category.objects.get(id=category_id).product_set.all()
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = ProductSerializer(products, many = True)
        return JsonResponse(serializer.data, safe=False)



class ProductListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, category_id = None):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data)

    def post(self, request, category_id = None):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class ProductDetailView(APIView):
    
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Product.objects.get(id=pk)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, request, pk, category_id = None):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk, category_id = None):
        product = self.get_object(pk)
        serializer = ProductSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, category_id = None):
        product = self.get_object(pk)
        product.delete()
        return Response({'message': 'deleted'}, status=204)


def product_addition(request, product_id, category_id=None):
    try:
        addition = Addition.objects.get(product=product_id)
        serializer = AdditionSerializer(addition)
    except Addition.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(serializer.data, safe=False)


@api_view(['POST', 'GET'])
def create_order(request):
    permission_classes = (IsAuthenticated,)
    
    if request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        print(request.data['product'])
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'GET':
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many = True)
        return Response(serializer.data)

@api_view(['GET'])
def show_about(request):
    if request.method == 'GET':
        about = About.objects.get(id=1)
        serializer = AboutSerializer(about)
        return Response(serializer.data)

@api_view(['GET'])
def like_product(request, pk):
    try:
        product = Product.objects.get(id=pk)
        product.like_count+=1
        product.save()
    except Product.DoesNotExist as e:
            return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
          serializer = ProductSerializer(product) 
          return JsonResponse(serializer.data)

@api_view(['GET'])
def like_addition(request, pk):
    try:
        addition = Addition.objects.get(product=pk)
        addition.like_count+=1
        addition.save()
    except Addition.DoesNotExist as e:
            return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
          serializer = AdditionSerializer(addition) 
          return JsonResponse(serializer.data)