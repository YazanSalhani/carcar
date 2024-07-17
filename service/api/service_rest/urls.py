from django.urls import path
from .views import api_technicians, api_technician, api_appointments, api_appointment


urlpatterns = [
    path('technicians/', api_technicians, name='list_technicians'),
    path('technicians/<int:pk>/', api_technician, name='delete_technician'),
    path('appointments/', api_appointments, name='list_appointments'),
    path('appointments/<int:pk>/', api_appointment, name='delete_appointment'),
    path('appointments/<int:pk>/finish/', api_appointment, name='appointment_finish'),
    path('appointments/<int:pk>/cancel/', api_appointment, name='appointment_cancel'),
]
