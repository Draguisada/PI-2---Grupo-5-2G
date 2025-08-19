// 0 -> Empresa
// 1 -> Funcionário
let estaEm = 0;

const logar = document.getElementById('login-button');
const seletor = document.getElementById('selector');

function setQuem(status) {
    estaEm = status;

    if (estaEm) {
        funcionario();
    } else {
        empresa();
    }
}

function funcionario() {
    seletor.children[0].classList.add('nao-selecionado')
    seletor.children[1].classList.remove('nao-selecionado')

}

function empresa() {
    seletor.children[0].classList.remove('nao-selecionado')
    seletor.children[1].classList.add('nao-selecionado')

}

logar.addEventListener('click', (e) => {

    const emailSelecionado = document.getElementById('email').value;
    if (emailSelecionado.search('@') == -1) {
        e.preventDefault();
    }
    const senhaSelecionado = document.getElementById('senha').value;
    const codUnicSelecionado = document.getElementById('codUnic').value;

    for (let i = 0; i < empresas.length; i++){
        let empresa = empresas[i];
        if (empresa.__email == emailSelecionado && empresa.__senha == senhaSelecionado /* && empresa.__cod == codUnicSelecionado*/) {
            localStorage.setItem('empresa_logada', i);
            e.preventDefault();
            // window.location.replace('mapa.html');
            window.location.href = 'mapa.html'; 
            
            return;
        };
    }

    
})