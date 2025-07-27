class Notificacao {
    constructor(descricaoNotificacao='nulo') {
        this.descricaoNotificacao = descricaoNotificacao;

        this.insertNotifc();
    }


    insertNotifc() {

        secNot.innerHTML += `<div class="notificacao">

                <div class="identificacao">
                    <p>Notificação ${new Date().toLocaleString()}</p>
                    <p>${idNotificacao++}</p>
                </div>

                <div class="descricao">
                    <p>${this.descricaoNotificacao}</p>
                </div>

                <div class="botoes">
                    <button class="dropdown-button" onclick="dropdownButton(this)" title="Ativa">Ativa</button>
                    <div class="dropdown-conteudo">
                        <button onclick="changeStatusTo(this)">Ativa</button>
                        <button onclick="changeStatusTo(this)">Concluida</button>
                        <button onclick="changeStatusTo(this)">Manut.</button>
                    </div>

                    <button class="lixo" onclick="deleteNotificacao(this)"></button>
                </div>

        </div>`


        // let notListened = document.getElementById('notListened');

        // notListened.addEventListener('click', changeDropdown);


        // notListened.id = '';
    }
}

class Poste {
    constructor(coord_x, coord_y, empresa_dona, regiao, conexcoes = null, empresas_associadas = {}, status = 2) {
        this.x = coord_x;
        this.y = coord_y;
        this.regiao = regiao; // Str

        this.dona = empresa_dona; // Str
        this.associadas = empresas_associadas; // Objeto {empresa: serviço: array}
        this.status = typeStatus[status]; // Apenas -> 1: Ativo ; 0: Desligado ; 2: Em manutenção;

        this.conexcoes = conexcoes; // Lista objetos de outros postes => Ou null
        // Conexões vai servir como apenas ir, nunca voltar (se ter um loop vai dar problema)
    }

    setStatus(toStatus) { // Recebe valor de, 0, 1, 2
        toStatus = typeStatus[toStatus];
        let element = this;

        let listaConexcoes = this.conexcoes;

        // Elemento atual mudar
        this.status = toStatus;

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

            element.setStatus(typeStatusmenos1[toStatus]);            
        };

    }

    adicionarEmpresaAssociadas(empresa, ...servico) {
        this.associadas[empresa] = [servico];
    }

    adicionarServico(empresa, servico) {
        this.associadas[empresa] = this.associadas[empresa].push(servico);
    }

    _mudarRegiao(regiaoNova) {
        this.regiao = regiaoNova;
    }
}





// Debugs
new Notificacao('Teste');


let not1 = new Poste(1, 1, '1','1', null);
let not2 = new Poste(2, 2, '2','2', [not1]);
let not3 = new Poste(3, 3, '3','3', [not2]);
let not4 = new Poste(4, 4, '4','4', [not3]);