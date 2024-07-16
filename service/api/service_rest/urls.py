from django.urls import path
from .views import api_technicians, api_technician


urlpatterns = [
    path('technicians/', api_technicians, name='list_technicians'),
    path('technicians/<int:pk>/', api_technician, name='delete_technician'),
]
