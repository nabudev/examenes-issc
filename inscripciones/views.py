from rest_framework import viewsets
from .serializer import *
from .models import *
# Create your views here.
class MateriaView(viewsets.ModelViewSet):
    serializer_class= MateriaSerializer
    queryset= Materia.objects.all()
    
class LLamadoView(viewsets.ModelViewSet):
    serializer_class= LlamadoSerializer
    queryset= Llamado.objects.all()
    
class MesaView(viewsets.ModelViewSet):
    serializer_class= MesaSerializer
    queryset= Mesa.objects.all()
    
class InscripcionView(viewsets.ModelViewSet):
    
    queryset= Inscripcion.objects.all()
    
    def get_serializer_class(self):
        if self.action == 'create':
            return InscripcionCreateSerializer
        return InscripcionDetailSerializer
