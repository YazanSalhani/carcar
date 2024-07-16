from django.urls import path
from .views import (
    api_list_salespeople,
    api_show_salesperson,
)

urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("salespeople/<int:pk>/", api_show_salesperson, name="api_show_salesperson"),
]
