from .views import categories_list, categories_products, product_addition, promotions, ProductDetailView, ProductListView
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('categories/', categories_list),
    path('categories/<int:category_id>/products/', categories_products),
    path('categories/<int:category_id>/products/<int:pk>/', ProductDetailView.as_view()),
    path('categories/<int:category_id>/products/<int:product_id>/addition/', product_addition),
    path('products/', ProductListView.as_view()),
    path('products/<int:pk>/', ProductDetailView.as_view()),
    path('products/<int:product_id>/addition/', product_addition),
    path('promotions/',promotions)

]