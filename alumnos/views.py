from rest_framework import viewsets
from .serializer import *
from .models import *
# Create your views here.
class AlumnoView(viewsets.ModelViewSet):
    serializer_class= AlumnoSerializer
    queryset= Alumno.objects.all()
    
    
