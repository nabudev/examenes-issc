from django.db import models
from carreras.models import Carrera

class Alumno(models.Model):
    dni= models.IntegerField(primary_key=True)
    apellido= models.CharField(max_length=30)
    nombre= models.CharField(max_length=30)
    carrera= models.ForeignKey(Carrera, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.apellido+ " " + self.nombre
    

    