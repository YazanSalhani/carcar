from django.urls import path
from .views import api_technicians, api_technician, api_appointments


urlpatterns = [
    path('technicians/', api_technicians, name='list_technicians'),
    path('technicians/<int:pk>/', api_technician, name='delete_technician'),
    path('appointments/', api_appointments, name='list_appointments'),
]
