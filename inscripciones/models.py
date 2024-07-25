from django.db import models
from alumnos.models import Alumno
from carreras.models import Carrera

class Materia(models.Model):
    nombre=models.CharField(max_length=60)
    carrera= models.ForeignKey(Carrera, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.nombre} : {self.carrera}'
    
class Llamado(models.Model):
    fecha = models.DateTimeField()
    
    def __str__(self):
        return f'Fecha y hora del examen: {self.fecha}'
    
#Entidad que surge a partir de la relacion N:M de materia y llamado
class Mesa(models.Model):
    llamado= models.ForeignKey(Llamado, on_delete=models.CASCADE)
    materia= models.ForeignKey(Materia, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.llamado} - Materia: {self.materia}'
    
class Inscripcion(models.Model):
    dni = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    mesa = models.ForeignKey(Mesa, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'Alumno: {self.dni} - Examen: {self.mesa}'
    
    class Meta:
        verbose_name_plural = "Inscripciones"
