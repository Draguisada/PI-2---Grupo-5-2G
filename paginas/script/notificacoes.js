const descDeTextbox = document.querySelector('#pop-up #descricao');
const popUp = document.getElementById('pop-up');
const sectionNot = document.getElementById('sec-notificacoes');

function limparHTMLNot() {
    sectionNot.innerHTML = '';
}

function acharIndiceDeXemY(elemento, pai) {
    let lista = pai.children;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elemento) {
            return i;
        }
    }
}

function toggleCriarNotificacao(bool) {
    if (!(bool)) {
        popUp.style.display = 'none';
    } else {
        popUp.style.display = 'flex';
    }
    
}

function adicionarNotificacao(notificacao) {
    sectionNot.innerHTML = `${notificacao.innerHTML} ${sectionNot.innerHTML}`;   
}

function carregarTodasNotificacoes(arrayEmpresa) {

    for (let i = 0; i < arrayEmpresa.length; i++) {
        arrayEmpresa[i].notificacoes.forEach((infos) => {
            adicionarNotificacao(new Notificacao(...infos))
        })
    }

}





carregarTodasNotificacoes(empresa_logada.__postes)