from rest_framework import serializers
from .models import *
from alumnos.serializer import AlumnoSerializer

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
        
class InscripcionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Inscripcion
        fields='__all__'
        
