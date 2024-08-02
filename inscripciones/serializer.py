from rest_framework import serializers
from .models import *

class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Materia
        fields='__all__'
        
class LlamadoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Llamado
        fields='__all__'
        
class MesaSerializer(serializers.ModelSerializer):
    materia = MateriaSerializer()
    llamado = LlamadoSerializer()
    class Meta:
        model= Mesa
        fields='__all__'
        
class InscripcionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscripcion
        fields = '__all__'
        
class InscripcionDetailSerializer(serializers.ModelSerializer):
    mesa = MesaSerializer()
    class Meta:
        model = Inscripcion
        fields = '__all__'

class InscripcionUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscripcion
        fields = '__all__'
        
