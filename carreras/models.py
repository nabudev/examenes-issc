from django.db import models

class TecProf(models.Model):
    nombre=models.CharField(max_length=60)
    
    def __str__(self):
        return self.nombre
    
    class Meta:
        verbose_name_plural = "Tecnicaturas/Profesorados"

class AnioCarrera(models.Model):
    anio= models.CharField(max_length=1)
    
    def __str__(self):
        return f'{self.anio}'
    
    class Meta:
        verbose_name_plural = "Año de la Carrera"

#Modelo principal que surge de la relacion N:M entre TecProf y AnioCarrera
class Carrera(models.Model):
    tecprof= models.ForeignKey(TecProf, on_delete=models.CASCADE)
    anio= models.ForeignKey(AnioCarrera, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'Carrera: {self.tecprof} - Año: {self.anio}'
