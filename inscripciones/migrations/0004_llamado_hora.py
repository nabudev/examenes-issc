# Generated by Django 5.0.7 on 2024-07-26 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inscripciones', '0003_alter_llamado_fecha'),
    ]

    operations = [
        migrations.AddField(
            model_name='llamado',
            name='hora',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
