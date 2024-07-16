from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Appointments, Technician, AutomobileVO
from common.json import ModelEncoder
# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold"
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id"
    ]

class AppointmentsEncoder(ModelEncoder):
    model = Appointments
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "vip",
        "customer",
        "technician",
        "id"
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except:
            return JsonResponse(
                {"message": "Invalid entry"},
                status=400,
            )


@require_http_methods(["DELETE", "GET"])
def api_technician(request, pk):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=pk)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            technician = Technician.objects.get(id=pk)
            technician.delete()
            return JsonResponse({"message": "Technician was deleted"})
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointments.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentsEncoder
        )
    else:
        content = json.loads(request.body)

        try:
            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician

            appointment = Appointments.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentsEncoder,
                safe=False
            )

        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status=400,
            )


@require_http_methods(["DELETE", "GET"])
def api_appointment(request,pk):
    if request.method == "GET":
        try:
            appointment = Appointments.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentsEncoder,
                safe=False
            )
        except appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            appointment = Appointments.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentsEncoder,
                safe=False,
            )
        except Appointments.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
