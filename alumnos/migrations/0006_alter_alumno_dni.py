# Generated by Django 5.0.7 on 2024-08-17 03:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alumnos', '0005_alter_alumno_dni'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alumno',
            name='dni',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
