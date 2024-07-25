from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import *

#api versioning
router= routers.DefaultRouter()
router.register(r'materia', MateriaView, 'materia')
router.register(r'llamado', LLamadoView, 'llamado')
router.register(r'mesa', MesaView, 'mesa')
router.register(r'inscripcion', InscripcionView, 'inscripcion')

urlpatterns = [
    path("inscripciones/", include(router.urls)),
    path("docs/", include_docs_urls(title= 'Inscripciones API'))
]