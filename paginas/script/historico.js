

// // debug inicio
// const botoesObj = document.getElementsByClassName('botoes')[0];

// console.log(botoesObj);

// botoesObj.addEventListener('click', changeDropdown);
// // debug fim
let postePrincipal;

const popUp = document.getElementById('pop-up');
const sectionNot = document.getElementById('sec-notificacoes');
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
    let index = sectionNot.childElementCount - acharIndiceDeXemY(notTotal, sectionNot) - 1; //-1 pra ajustar pro Array

    postePrincipal.notificacoes[index][3] = typeSNotmenos1[mudarPara];

    // poste1.notificacoes[index][poste1.notificacoes[0].length-1]
}

function deleteNotificacao(e) {
    e.parentElement.parentElement.remove();

    // Para mudar no objeto Poste
    let notTotal = e.parentElement.parentElement.parentElement;
    let index = sectionNot.childElementCount - acharIndiceDeXemY(notTotal, sectionNot) - 1; //-1 pra ajustar pro Array

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
    togglePopUp(false);
    descDeTextbox.value = '';

    //
    postePrincipal.novaNotificacao(descricao);
    pegarPoste(postePrincipal)
}

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

function togglePopUp(bool) {
    if (!(bool)) {
        popUp.style.display = 'none';
    } else {
        popUp.style.display = 'flex';
        popUp.children[3].innerText = `Criando notificação no ${postePrincipal.titulo}`
    }
    
}

function adicionarNotificacao(notificacao) {
    
}


// 1° parte é a página, agora é a integração com o resto
// Como é só pra ver os postes da empresa logada, utilizaria um idLocal pra pegar da lista de postes (da empresa logada)
function handleChangePoste(nome) {
    let idOf = parseInt(nome.slice(nome.indexOf('#')+1)-1);
    pegarPoste(empresa_logada.__postes[idOf]);
}

function pegarPoste(poste) { // Objeto poste
    postePrincipal = poste;
    limparHTMLNot();
    nomePoste.value = poste.titulo;
    let notificacaoes = [...poste.notificacoes];
    notificacaoes.forEach((infos) => {
        new Notificacao(...infos);
    })
}

listarArrayEmElement(nomePoste, 'option', empresa_logada.__postes);


let postePegado = localStorage.getItem('poste');

if (postePegado == '' || postePegado == null || postePegado == 'null') {
    pegarPoste(empresa_logada.__postes[0])
} else {
    pegarPoste(empresa_logada.__postes[parseInt(postePegado)])
};
localStorage.setItem('poste', '');