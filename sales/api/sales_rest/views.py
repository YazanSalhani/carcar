from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Salesperson, Customer, Sale, AutomobileVO
from common.json import SalespersonEncoder, CustomerEncoder, SaleEncoder


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
            response = JsonResponse(
                {"message": "Could not create the salesperson"}
            )
            response.status_code = 400
            return response


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
            salesperson = Salesperson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
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
    else: #POST
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the customer"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET", "DELETE"])
def api_show_customer(request, pk):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"Message": "Customer does not exist"})
            response.status_code = 404
            return response
    else: #DELETE
        try:
            customer = Customer.objects.get(id=pk)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            return JsonResponse({"Message": "Customer does not exist"})

@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder= SaleEncoder,
        )
    else: #POST
        content = json.loads(request.body)

        try:
            automobile_vo_vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=automobile_vo_vin)
            content["automobile"] = automobile

            salesperson_id = content["salesperson"]
            salesperson = Salesperson.objects.get(id=salesperson_id)
            content["salesperson"] = salesperson

            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer

            sale = Sale.objects.create(**content)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )

        except AutomobileVO.DoesNotExist:
            response = JsonResponse({"Message": "Invalid automobile. Could not create the sale."})
            response.status_code = 400
            return response
        except Salesperson.DoesNotExist:
            response = JsonResponse({"Message": "Invalid salesperson. Could not create the sale."})
            response.status_code = 400
            return response
        except Customer.DoesNotExist:
            response = JsonResponse({"Message": "Invalid customer. Could not create the sale."})
            response.status_code = 400
            return response



@require_http_methods(["GET", "DELETE"])
def api_show_sale(request, pk):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False
            )
        except Sale.DoesNotExist:
            response = JsonResponse({"Message": "Sale does not exist"})
            response.status_code = 404
            return response
    else: #DELETE
        try:
            sale = Sale.objects.get(id=pk)
            sale.delete()
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )
        except Sale.DoesNotExist:
            return JsonResponse({"Message": "Sale does not exist"})
