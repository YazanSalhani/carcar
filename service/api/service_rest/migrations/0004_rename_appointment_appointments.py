# Generated by Django 5.0.7 on 2024-07-16 15:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("service_rest", "0003_appointment_vip"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Appointment",
            new_name="Appointments",
        ),
    ]
