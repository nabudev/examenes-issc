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
    
    def validate(self, data):
        dni = data.get('dni')
        mesa = data.get('mesa')

        # Validación de inscripción duplicada
        if Inscripcion.objects.filter(dni=dni, mesa=mesa).exists():
            raise serializers.ValidationError("El alumno ya está inscrito en esta mesa.")

        return data
        
class InscripcionDetailSerializer(serializers.ModelSerializer):
    mesa = MesaSerializer()
    class Meta:
        model = Inscripcion
        fields = '__all__'

class InscripcionUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscripcion
        fields = '__all__'
    
    def validate(self, data):
        dni = data.get('dni')
        mesa = data.get('mesa')

        # Validación de inscripción duplicada
        if Inscripcion.objects.filter(dni=dni, mesa=mesa).exists():
            raise serializers.ValidationError("Ya estás inscripto en esta mesa.")
        return data   
