from django.urls import path, include
from rest_framework import routers
from .views import *

#api versioning
router= routers.DefaultRouter()
router.register(r'alumnos', AlumnoView, 'alumnos')

urlpatterns = [
    path("alumnos/", include(router.urls))
]