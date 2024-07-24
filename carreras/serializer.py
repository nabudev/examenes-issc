from rest_framework import serializers
from .models import *

class TecProfSerializer(serializers.ModelSerializer):
    class Meta:
        model= TecProf
        fields= '__all__'
        
class AnioCarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model= AnioCarrera
        fields= '__all__'

class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model= Carrera
        fields= '__all__'