from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Salesperson, Customer, Sale, AutomobileVO

from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]

class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id"
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "sale",
        "automobile",
        "salesperson",
        "customer",
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),

    }

@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder,
        )
    else: # POST
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"Message": "Invalid entry"},
                status=400
            )


@require_http_methods(["GET", "DELETE"])
def api_show_salesperson(request, pk):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"Message": "Salesperson does not exist"})
            response.status_code = 404
            return response
    else: # DELETE
        try:
            count, _ = Salesperson.objects.filter(id=pk).delete()
            return JsonResponse({"Deleted": count > 0})
        except Salesperson.DoesNotExist:
            return JsonResponse({"Message": "Salesperson does not exist"})




@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder
        )
