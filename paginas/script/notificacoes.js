let idNotificacao = 1

// debug inicio
const botoesObj = document.getElementsByClassName('botoes')[0];

console.log(botoesObj);

botoesObj.addEventListener('click', changeDropdown);
// debug fim

const allNot = document.getElementById('all-notificacoes');

function dropdownButton(event) {
    let pai = event.parentNode;
    let conteudo = pai.getElementsByClassName('dropdown-conteudo')[0];

    let crioncas = conteudo.childNodes;

    conteudo.classList.toggle('show-dropdown');
}

function changeDropdown(event) {
    let texto = event.target.innerText;
    
    let target = event.target;
    if (target.classList.contains('dropdown-button')) {
        // console.log('é esse');
        return;
    } else if (target.classList.contains('lixo')) {
        // console.log('lixo');
        return;
    } else {
        target = target.parentNode.parentNode.childNodes[1];
        textoPai = target.innerText;
    }

    
    target.innerText = texto;

    if (texto == 'Ativo') {
        target.title = 'Ativo';
    } else if (texto == 'Feito') {
        target.title = 'Feito';
    } else {
        target.title = 'Manut';
    }
    

    
    
}

function deleteNotificacao(e) {
    e.parentElement.parentElement.remove()
}

function criarNotificacao() {
    let descricao = prompt('Descrição da notificação');
    new Notificacao(descricao);
}

