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

class Poste {
    constructor(coord_x, coord_y, empresa_dona, empresas_associadas, regiao, conexcoes, status) {
        this.x = coord_x;
        this.x = coord_y;
        this.regiao = regiao; // Str

        this.dona = empresa_dona; // Str
        this.associadas = empresas_associadas; // Objeto {empresa: serviço}
        this.status = typeStatus[status]; // Apenas -> 0: Ativo ; 1: Desligado ; 2: Em manutenção;

        this.conexcoes = conexcoes; // Lista objetos de outros postes => Ou null
        // Conexões vai servir como apenas ir, nunca voltar (se ter um loop vai dar problema)
    }

    setStatus(toStatus) {
        toStatus = typeStatus[toStatus];
        let element = this;

        let listaConexcoes = this.conexcoes;

        // Elemento atual mudar
        if (element.status == typeStatus[0] && toStatus == typeStatus[2]) {
            element.status = toStatus;
        } else if (toStatus == typeStatus[1] || toStatus == typeStatus[2]) {
            element.status = toStatus;
        }

        // SE não ter postes associados.
        if (!(listaConexcoes)) {
            return;
        }

        // Mudar postes associados
        for (let i = 0; i<listaConexcoes.length; i++) {
            element = listaConexcoes[i];
            if (element.status == toStatus) {
                element = listaConexcoes[i];
                continue;
            };

            if (element.status == typeStatus[0] && toStatus == typeStatus[2]) {
                element.setStatus(typeStatusmenos1[toStatus])
            }
            if (toStatus == typeStatus[1] || toStatus == typeStatus[2]){
                element.setStatus(typeStatusmenos1[toStatus]);
            }
            
        };

    }

    adicionarEmpresaAssociadas(empresa, servico) {
        this.associadas[empresa] = servico
    }

    adicionarServido(empresa, servico) {

    }
}

new Notificacao('Teste');