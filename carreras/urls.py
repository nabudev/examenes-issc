from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import *

#api versioning
router= routers.DefaultRouter()
router.register(r'tecprof', TecProfView, 'tecprof')
router.register(r'aniocarrera', AnioCarreraView, 'aniocarrera')
router.register(r'carrera', CarreraView, 'carrera')

urlpatterns = [
    path("carreras/", include(router.urls)),
    path('docs/', include_docs_urls(title= 'Carreras API'))
]