// Muitas das funções daqui são iguais a do historico

const descDeTextbox = document.querySelector('#pop-up #descricao');
const popUp = document.getElementById('pop-up');
const sectionNot = document.getElementById('sec-notificacoes');
const nomePoste = document.getElementById('nomePoste');

let posteSelecionado;
let indiceSelecionado;

// Limpar os dados das notificações
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
        descDeTextbox.value = '';
    } else {
        popUp.style.display = 'flex';
        listarArrayEmElement(nomePoste, 'option', empresa_logada.__postes);
        nomePoste.selectedIndex = indiceSelecionado-1;
    }
}

// Mudar status de alguma notificação
// Aparentemente eu tava com preguiça e não fiz algo usando a classe notificação
// Se conseguir fazer por aqui tudo bem, mas se achar melhor colocar no objetos.js eu coloco. @SamuVortmann
function changeStatusTo(element) {    
    element.title = element.value;

    // Para mudar no objeto Poste
    let notTotal = element.parentElement.parentElement;
    let id = notTotal.children[0].children[1];

    let [poste, notif, index] = acharPostePeloID(id); // Retorna o poste e a notificação

    notif[3] = typeSNotmenos1[element.value];
}

// Deletar deletar notificação (apenas html) ??? mds eu tava com mt preguiça, esse nem tem implementação geral ~ Bruno
function deleteNotificacao(e) {
    // Para mudar no objeto Poste
    let notTotal = e.parentElement.parentElement;
    let id = notTotal.children[0].children[1];

    let [poste, notif, index] = acharPostePeloID(id);
    poste.notificacoes.splice(index, 1, '');

    notTotal.remove();
}

// Adiciona os objetos Notificações, e atualiza eles antes de colocar no html
function adicionarNotificacao(notificacao) {
    notificacao.atualizarNotificacao();
    sectionNot.innerHTML = `${notificacao.innerHTML} ${sectionNot.innerHTML}`;
}

// Pega as notificações e adiciona ela no principal da página
function carregarTodasNotificacoes(arrayEmpresa) {
    sectionNot.innerHTML = '';

    for (let i = 0; i < arrayEmpresa.length; i++) {
        if (arrayEmpresa[i].notificacoes.length >= 1){
            arrayEmpresa[i].notificacoes.forEach((infos) => {
                if (infos){
                    adicionarNotificacao(new Notificacao(...infos))
                }
            });

            sectionNot.innerHTML = `<div class='hr'><span>${arrayEmpresa[i].titulo}</span>
                                    <a class="irHistorico" onclick="localStorage.setItem('poste', ${i})" href="./historico.html" target="_blank"></a></div>
                                    ${sectionNot.innerHTML}`;
        }
    }

    selecionarTextoCertoDropdowns()
}

// Apenas front-end
function selecionarTextoCertoDropdowns() {
    let dropdowns = document.getElementsByClassName('dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
        let element = dropdowns[i];
        let index = typeSNotmenos1[element.title];
        element.selectedIndex = index;
    };
}

function acharPostePeloID(idTotal) {
    indices = idTotal.innerText.split('#')[1].split('-');
    //o indice[0] é o indice do poste, e o indice[1] é o indice da notificação dentro do poste.
    return [empresa_logada.__postes[indices[0]], empresa_logada.__postes[indices[0]].notificacoes[indices[1]-1], parseInt(indices[1])-1]
    // Retorna o poste e a notificação
}

function recarregarPagina() {
    carregarTodasNotificacoes(empresa_logada.__postes);
}

function handleChangePoste(nome) {
    indiceSelecionado = nome.slice(nome.indexOf('#')+1)
    posteSelecionado = parseInt(indiceSelecionado-1);
};

// Criar nova notificação usando o objetos.js
function criarNotificacao() {
    let text = descDeTextbox.value;

    empresa_logada.__postes[posteSelecionado].novaNotificacao(text);
    toggleCriarNotificacao(false);

    carregarTodasNotificacoes(empresa_logada.__postes);
}

// Valores padrão





// BD

async function carregarPostesDoBD() {
    const response = await fetch('http://localhost:3001/postes', {
        method: "GET",
    });

    const postes = await response.json();

    postes.forEach(function(ponto) {
        new Poste(parseFloat(ponto.lat), parseFloat(ponto.lng), empresa_logada.db_id, [], {}, ponto.status, ponto.id)    
    });
    carregarTodasNotificacoes(empresa_logada.__postes);
}

async function carregarNotificacoesDoBD() {
    const response = await fetch('http://localhost:3001/notificacoes/:id_empresa', {
        method: "GET",
    });

    const postes = await response.json();

    postes.forEach(function(ponto) {
        new Poste(parseFloat(ponto.lat), parseFloat(ponto.lng), empresa_logada.db_id, [], {}, ponto.status, ponto.id)    
    });
    carregarTodasNotificacoes(empresa_logada.__postes);
}

carregarPostesDoBD();
handleChangePoste('Poste #1');
