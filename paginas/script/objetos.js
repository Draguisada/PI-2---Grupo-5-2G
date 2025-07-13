class Notificacao {
    constructor(descricaoNotificacao='nulo') {
        this.descricaoNotificacao = descricaoNotificacao;

        this.insertNotifc();
    }


    insertNotifc() {

        allNot.innerHTML += `<div class="notificacao">

                <div class="identificacao">
                    <p>Notificação ${new Date().toLocaleString()}</p>
                    <p>${idNotificacao++}</p>
                </div>

                <div class="descricao">
                    <p>${this.descricaoNotificacao}</p>
                </div>

                <div class="botoes" id='notListened'>
                    <button class="dropdown-button" onclick="dropdownButton(this)" title="Ativo">Ativo</button>
                    <div class="dropdown-conteudo">
                        <button>Ativo</button>
                        <button>Feito</button>
                        <button>Manut.</button>
                    </div>

                    <button class="lixo" onclick="deleteNotificacao(this)"></button>
                </div>

        </div>`


        let notListened = document.getElementById('notListened');

        notListened.addEventListener('click', changeDropdown);


        notListened.id = '';
    }
}


new Notificacao('Teste');