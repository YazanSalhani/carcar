# Generated by Django 5.0.7 on 2024-07-16 21:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("sales_rest", "0003_alter_sale_price"),
    ]

    operations = [
        migrations.AlterField(
            model_name="sale",
            name="price",
            field=models.PositiveIntegerField(),
        ),
    ]
