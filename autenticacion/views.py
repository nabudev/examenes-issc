from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from .serializers import LoginSerializer
from django.contrib.auth.models import User
from alumnos.models import Alumno

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegistroView(APIView):
    def post(self, request):
        dni = request.data.get('dni')
        password = request.data.get('password')

        # Verificar si el DNI está en la base de datos de alumnos
        if not Alumno.objects.filter(dni=dni).exists():
            return Response({"error": "DNI no autorizado."}, status=status.HTTP_400_BAD_REQUEST)

        # Verificar si el usuario ya existe
        if User.objects.filter(username=dni).exists():
            return Response({"error": "Usuario ya registrado."}, status=status.HTTP_400_BAD_REQUEST)

        # Crear el usuario
        user = User.objects.create_user(username=dni, password=password)
        return Response({"message": "Registro exitoso."}, status=status.HTTP_201_CREATED)
