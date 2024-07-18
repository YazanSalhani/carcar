from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Salesperson, Customer, Sale, AutomobileVO
from common.json import SalespersonEncoder, CustomerEncoder, SaleEncoder


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    """
    Collection RESTful API handler for Salesperson objects in sales.

    GET:
    Returns a dictionary with a single key "salespeople", which
    is a list of the of the first name, last name, and employee id
    for the salesperson, along with its id.

    {
        "salespeople": [
                {
                "first_name": the salesperson's first name (string),
                "last_name": the salesperson's last name (string),
                "employee_id": first initial and last name of the salesperson (string),
                "id": database id for the salesperson (number),
                },
                ...
            ]
    }

    POST:
    Creates a salesperson resource and returns its dtails.

    {
        "first_name": the salesperson's first name (string),
        "last_name": the salesperson's last name (string),
        "employee_id": first initial and last name of the salesperson (string),
    }
    """
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder,
        )
    else:  # POST
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse({"message": "Could not create the salesperson"})
            response.status_code = 400
            return response


@require_http_methods(["GET", "DELETE"])
def api_show_salesperson(request, pk):
    """
    Single-object API for the Salesperson resource.

    GET:
    Returns the information for a Salesperson resource based on the value of the pk.

    {
        "first_name": the salesperson's first name (string),
        "last_name": the salesperson's last name (string),
        "employee_id": first initial and last name of the salesperson (string),
        "id": database id for the salesperson (number)
    }

    DELETE:
    Removes the salesperson resource from the application.
    """
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            return JsonResponse(salesperson, encoder=SalespersonEncoder, safe=False)
        except Salesperson.DoesNotExist:
            response = JsonResponse({"Message": "Salesperson does not exist"})
            response.status_code = 404
            return response
    else:  # DELETE
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
    """
    Collection RESTful API handler for Customer objects in sales.

    GET:
    Returns a dictionary with a single key "customers", which
    is a list of the of the first name, last name, address, and phone number
    for the customer, along with its id.

    {
        "customers": [
                {
                "first_name": the customer's first name (string),
                "last_name": the customer's last name (string),
                "address": the customer's address (string),
                "phone_number": the customer's phone number (string)
                "id": database id for the customer (number),
                },
                ...
            ]
    }

    POST:
    Creates a customer resource and returns its dtails.

    {
        "first_name": the customer's first name (string),
        "last_name": the customer's last name (string),
        "address": the customer's address (string),
        "phone_number": the customer's phone number (string)
    }
    """
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse({"customers": customers}, encoder=CustomerEncoder)
    else:  # POST
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse({"message": "Could not create the customer"})
            response.status_code = 400
            return response


@require_http_methods(["GET", "DELETE"])
def api_show_customer(request, pk):
    """
    Single-object API for Customer resource.

    GET:
    Returns the information for a Customer resource based on the value of the pk.

    {
        "first_name": the customer's first name (string),
        "last_name": the scustomer's last name (string),
        "address": the customer's address (string),
        "phone_number": the customer's phone number (string),
        "id": the database id for the customer (number)
    }

    DELETE:
    Removes the customer resource from the application.
    """
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(customer, encoder=CustomerEncoder, safe=False)
        except Customer.DoesNotExist:
            response = JsonResponse({"Message": "Customer does not exist"})
            response.status_code = 404
            return response
    else:  # DELETE
        try:
            customer = Customer.objects.get(id=pk)
            customer.delete()
            return JsonResponse(customer, encoder=CustomerEncoder, safe=False)
        except Customer.DoesNotExist:
            return JsonResponse({"Message": "Customer does not exist"})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    """
    Collection RESTful API handler for Sale objects in sales.

    GET:
    Returns a dictionary with a single key "sales", which
    is a list of the of the price, automobile, salesperson, and customer
    for the sale, along with its id. The autombile, salesperson, and customer are
    foreign keys to their respective models, and will return information about the
    specific automobile, salesperson, and customer resources (respectively).

    {
        "sales": [
            {
                "price": the price of the sale (number),
                "automobile": {
                    "vin": the vin number for the automobile (string),
                    "sold": if the automobile is sold or not (boolean)
                },
                "salesperson": {
                    "first_name": the salesperson's first name (string),
                    "last_name": the salesperson's last name (string),
                    "employee_id": first initial and last name of the salesperson (string),
                    "id": database id for the salesperson (number)
                },
                "customer": {
                    "first_name": the customer's first name (string),
                    "last_name": the scustomer's last name (string),
                    "address": the customer's address (string),
                    "phone_number": the customer's phone number (string),
                    "id": the database id for the customer (number)
                },
                "id": the database id for the sale (number)
            },
            ...
        ]
    }


    POST:
    Creates a sale resource and returns its details.

    {
        "automobile": the vin for the associated automobile (string),
        "salesperson": the database id for the associated salesperson (number),
        "customer": the database id for the associated customer (number),
        "price": the price of the car (number)
    }

    """
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
        )
    else:  # POST
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
            response = JsonResponse(
                {"Message": "Invalid automobile. Could not create the sale."}
            )
            response.status_code = 400
            return response
        except Salesperson.DoesNotExist:
            response = JsonResponse(
                {"Message": "Invalid salesperson. Could not create the sale."}
            )
            response.status_code = 400
            return response
        except Customer.DoesNotExist:
            response = JsonResponse(
                {"Message": "Invalid customer. Could not create the sale."}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET", "DELETE"])
def api_show_sale(request, pk):
    """
    Single-object API for Sale resource.

    GET:
    Returns the information for a Sale resource based on the value of the pk.

    {
        "price": the price of the sale (number),
        "automobile": {
            "vin": the vin number for the automobile (string),
            "sold": if the automobile is sold or not (boolean)
        },
        "salesperson": {
            "first_name": the salesperson's first name (string),
            "last_name": the salesperson's last name (string),
            "employee_id": first initial and last name of the salesperson (string),
            "id": database id for the salesperson (number)
        },
        "customer": {
            "first_name": the customer's first name (string),
            "last_name": the scustomer's last name (string),
            "address": the customer's address (string),
            "phone_number": the customer's phone number (string),
            "id": the database id for the customer (number)
        },
        "id": the database id for the sale (number)
    }

    DELETE:
    Removes the sale resource from the application.
    """
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=pk)
            return JsonResponse(sale, encoder=SaleEncoder, safe=False)
        except Sale.DoesNotExist:
            response = JsonResponse({"Message": "Sale does not exist"})
            response.status_code = 404
            return response
    else:  # DELETE
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
