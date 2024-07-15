from django.db import models

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

class Salesperson(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200, unique=True)

class Customer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    address = models.CharField(max_length=250, unique=True)
    phone_number = models.CharField(max_length=25, unique=True)

class Sale(models.Model):
    price = models.SmallIntegerField()
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile_sales",
        on_delete=models.CASCADE,
    )

    salesperson = models.ForeignKey(
        Salesperson,
        related_name="salesperson_sales",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer_sales",
        on_delete=models.CASCADE,
    )
