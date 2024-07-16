from json import JSONEncoder
from django.urls import NoReverseMatch
from django.db.models import QuerySet
from datetime import datetime, date
from sales_rest.models import AutomobileVO, Customer, Sale, Salesperson


class DateEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, (datetime, date)):
            return o.isoformat()
        else:
            return super().default(o)


class QuerySetEncoder(JSONEncoder):
    def default(self, o):
        if isinstance(o, QuerySet):
            return list(o)
        else:
            return super().default(o)


class ModelEncoder(DateEncoder, QuerySetEncoder, JSONEncoder):
    encoders = {}

    def default(self, o):
        if isinstance(o, self.model):
            d = {}
            if hasattr(o, "get_api_url"):
                try:
                    d["href"] = o.get_api_url()
                except NoReverseMatch:
                    pass
            for property in self.properties:
                value = getattr(o, property)
                if property in self.encoders:
                    encoder = self.encoders[property]
                    value = encoder.default(value)
                d[property] = value
            d.update(self.get_extra_data(o))
            return d
        else:
            return super().default(o)

    def get_extra_data(self, o):
        return {}

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
        "id"
    ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer",
        "id"
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),

    }
