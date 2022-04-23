from .views import categories_list, categories_products, products_list, product_detail, product_addition, promotions
from django.urls import path
#from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    #path('login/', obtain_jwt_token),
    path('categories/', categories_list),
    #path('categories/',CompanyListView.as_view()),
    #path('categories/<int:pk>/', CompanyDetailView.as_view()),
    path('categories/<int:category_id>/products/', categories_products),
    path('categories/<int:category_id>/products/<int:product_id>/', product_detail),
    path('categories/<int:category_id>/products/<int:product_id>/addition/', product_addition),
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
    path('products/<int:product_id>/addition/', product_addition),
    path('promotions/',promotions)

]