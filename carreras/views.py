from rest_framework import viewsets
from .serializer import *
from .models import *
# Create your views here.
class TecProfView(viewsets.ModelViewSet):
    serializer_class= TecProfSerializer
    queryset= TecProf.objects.all()
    
class AnioCarreraView(viewsets.ModelViewSet):
    serializer_class= AnioCarreraSerializer
    queryset= AnioCarrera.objects.all()
    
class CarreraView(viewsets.ModelViewSet):
    serializer_class= CarreraSerializer
    queryset= Carrera.objects.all()
