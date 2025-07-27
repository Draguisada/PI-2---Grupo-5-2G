from django.shortcuts import render

from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from .models import Usuario, Empresa, Funcionario
from .forms import LoginForm, CadastroEmpresaForm, CadastroFuncionarioForm

def login_empresa(request):
    if request.method == "POST":
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            usuario = form.get_user()
            if usuario.tipo == 'empresa':
                login(request, usuario)
                return redirect('home')
    else:
        form = LoginForm()
    return render(request, 'login_empresa.html', {'form': form})

def login_funcionario(request):
    if request.method == "POST":
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            usuario = form.get_user()
            if usuario.tipo == 'funcionario':
                login(request, usuario)
                return redirect('home')
    else:
        form = LoginForm()
    return render(request, 'login_funcionario.html', {'form': form})

def cadastro_empresa(request):
    if request.method == 'POST':
        form = CadastroEmpresaForm(request.POST)
        if form.is_valid():
            usuario = form.save(commit=False)
            usuario.set_password(usuario.password)
            usuario.tipo = 'empresa'
            usuario.save()
            Empresa.objects.create(usuario=usuario, nome_empresa="Nome", cnpj="123456789", telefone="99999-9999")
            login(request, usuario)
            return redirect('home')
    else:
        form = CadastroEmpresaForm()
    return render(request, 'cadastro_empresa.html', {'form': form})

def cadastro_funcionario(request):
    if request.method == 'POST':
        form = CadastroFuncionarioForm(request.POST)
        if form.is_valid():
            usuario = form.save(commit=False)
            usuario.set_password(usuario.password)
            usuario.tipo = 'funcionario'
            usuario.save()
            Funcionario.objects.create(usuario=usuario)
            login(request, usuario)
            return redirect('home')
    else:
        form = CadastroFuncionarioForm()
    return render(request, 'cadastro_funcionario.html', {'form': form})
