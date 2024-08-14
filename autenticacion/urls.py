from django.urls import path
from .views import LoginView, RegistroView

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('register/', RegistroView.as_view())
]
