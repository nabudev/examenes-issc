# Generated by Django 5.0.7 on 2024-08-16 06:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('alumnos', '0003_userprofile'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
