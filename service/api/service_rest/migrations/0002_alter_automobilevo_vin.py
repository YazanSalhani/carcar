# Generated by Django 5.0.7 on 2024-07-15 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("service_rest", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="automobilevo",
            name="vin",
            field=models.CharField(max_length=17, unique=True),
        ),
    ]
