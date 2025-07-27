"""
URL configuration for sistema project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login-empresa/', views.login_empresa, name='login_empresa'),
    path('login-funcionario/', views.login_funcionario, name='login_funcionario'),
    path('cadastro-empresa/', views.cadastro_empresa, name='cadastro_empresa'),
    path('cadastro-funcionario/', views.cadastro_funcionario, name='cadastro_funcionario'),
    
]
from django.urls import path
from . import views
    

path('contas/', include('contas.urls')),