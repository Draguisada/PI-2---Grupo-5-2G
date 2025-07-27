let idNotificacao = 1

// // debug inicio
// const botoesObj = document.getElementsByClassName('botoes')[0];

// console.log(botoesObj);

// botoesObj.addEventListener('click', changeDropdown);
// // debug fim

const secNot = document.getElementById('sec-notificacoes');

function dropdownButton(event) {
    let pai = event.parentNode;
    let conteudo = pai.getElementsByClassName('dropdown-conteudo')[0];

    // let crioncas = conteudo.childNodes;

    conteudo.classList.toggle('show-dropdown');
}

function changeStatusTo(element) {
    let parent = element.parentElement.parentElement.children[0];
    let mudarPara = element.innerText;

    parent.innerText = mudarPara;
    parent.title = mudarPara;
}

function deleteNotificacao(e) {
    e.parentElement.parentElement.remove()
}

function criarNotificacao() {
    let descricao = prompt('Descrição da notificação');
    new Notificacao(descricao);
}

