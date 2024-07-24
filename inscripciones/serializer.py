from rest_framework import serializers
from .models import *

class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model: Materia
        fields='__all__'
        
class LLamadoSerializer(serializers.ModelSerializer):
    class Meta:
        model: Llamado
        fields='__all__'
        
class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model: Mesa
        fields='__all__'
        
class InscripcionSerializer(serializers.ModelSerializer):
    class Meta:
        model: Inscripcion
        fields='__all__'
        
