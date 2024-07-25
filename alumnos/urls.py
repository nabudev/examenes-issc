from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import *

#api versioning
router= routers.DefaultRouter()
router.register(r'alumnos', AlumnoView, 'alumnos')

urlpatterns = [
    path("alumnos/", include(router.urls)),
    path("docs/", include_docs_urls(title='Alumnos API'))
]