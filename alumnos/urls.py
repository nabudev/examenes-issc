from django.urls import path, include
from rest_framework import routers
from .views import *

#api versioning
router= routers.DefaultRouter()
router.register(r'alumno', AlumnoView, 'alumno')

urlpatterns = [
    path("alumnos", include(router.urls))
]