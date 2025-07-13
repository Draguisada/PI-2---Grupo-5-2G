let idNotificacao = 1

// // debug inicio
// const botoesObj = document.getElementsByClassName('botoes')[0];

// console.log(botoesObj);

// botoesObj.addEventListener('click', changeDropdown);
// // debug fim

const allNot = document.getElementById('all-notificacoes');

function dropdownButton(event) {
    let pai = event.parentNode;
    let conteudo = pai.getElementsByClassName('dropdown-conteudo')[0];

    let crioncas = conteudo.childNodes;

    conteudo.classList.toggle('show-dropdown');
}

function changeDropdown(event) {
    if (event.target.childElementCount >= 1) {
        return;
    }

    let texto = event.target.innerText;
    
    let target = event.target;
    if (target.classList.length == 0) {
        target = target.parentNode.parentNode.childNodes;

        target.forEach((element) => {
            
            if (element.nodeName == 'BUTTON' && element.classList.contains('dropdown-button')) {
                target = element;
                target.click();
                return;
            }
        });

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

