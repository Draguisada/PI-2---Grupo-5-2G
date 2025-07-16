
from django.contrib.auth.models import AbstractUser
from django.db import models

class Usuario(AbstractUser):
    TIPO_USUARIO = (
        ('empresa', 'Empresa'),
        ('funcionario', 'Funcionário'),
    )
    tipo = models.CharField(max_length=20, choices=TIPO_USUARIO)

class Empresa(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    nome_empresa = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=18)
    telefone = models.CharField(max_length=20)

class Funcionario(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
