

// // debug inicio
// const botoesObj = document.getElementsByClassName('botoes')[0];

// console.log(botoesObj);

// botoesObj.addEventListener('click', changeDropdown);
// // debug fim
let postePrincipal;

const popUp = document.getElementById('pop-up');
const secNot = document.getElementById('sec-notificacoes');
const nomePoste = document.getElementById('nomePoste');
const descDeTextbox = document.querySelector('#pop-up #descricao');

function dropdownButton(event) {
    let pai = event.parentNode;
    let conteudo = pai.getElementsByClassName('dropdown-conteudo')[0];

    // let crioncas = conteudo.childNodes;

    conteudo.classList.toggle('show-flex');
}

function changeStatusTo(element) {
    let parent = element.parentElement.parentElement.children[0];
    let mudarPara = element.innerText;

    parent.innerText = mudarPara;
    parent.title = mudarPara;

    // Para mudar no objeto Poste
    let notTotal = element.parentElement.parentElement.parentElement;
    let index = secNot.childElementCount - acharIndiceDeXemY(notTotal, secNot) - 1; //-1 pra ajustar pro Array

    postePrincipal.notificacoes[index][3] = typeSNotmenos1[mudarPara];

    // poste1.notificacoes[index][poste1.notificacoes[0].length-1]
}

function deleteNotificacao(e) {
    e.parentElement.parentElement.remove();

    // Para mudar no objeto Poste
    let notTotal = e.parentElement.parentElement.parentElement;
    let index = secNot.childElementCount - acharIndiceDeXemY(notTotal, secNot) - 1; //-1 pra ajustar pro Array

    postePrincipal.notificacoes.pop(index);

    // poste1.notificacoes[index][poste1.notificacoes[0].length-1]
}

function criarNotificacao() {
    if (!(postePrincipal)) {
        alert('Sem nenhum poste selecionado!');
        return;
    }
    //
    let descricao = descDeTextbox.value;
    popUpToggle(false);
    descDeTextbox.value = '';

    //
    postePrincipal.novaNotificacao(descricao);
    pegarPoste(postePrincipal)
}

function limparHTMLNot() {
    secNot.innerHTML = '';
}

function acharIndiceDeXemY(elemento, pai) {
    let lista = pai.children;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elemento) {
            return i;
        }
    }
}

function popUpToggle(bool) {
    if (!(bool)) {
        popUp.style.display = 'none';
    } else {
        popUp.style.display = 'flex';
        popUp.children[2].innerText = `Criando notificação no ${postePrincipal.titulo}`
    }
    
}



// 1° parte é a página, agora é a integração com o resto

function pegarPoste(poste) { // Objeto poste
    postePrincipal = poste;
    limparHTMLNot();
    nomePoste.innerText = poste.titulo;
    let postes = [...poste.notificacoes]
    postes.forEach((infos) => {
        new Notificacao(...infos)
    })
}



let postePegado = localStorage.getItem('poste');

if (postePegado != 'null' || postePegado != '') pegarPoste(empresa_logada.__postes[parseInt(postePegado)]);
localStorage.setItem('poste', null);