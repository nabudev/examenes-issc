from rest_framework import serializers
from .models import *
from carreras.serializer import CarreraSerializer

class AlumnoSerializer(serializers.ModelSerializer):
    carrera= CarreraSerializer
    class Meta:
        model= Alumno
        fields= '__all__'