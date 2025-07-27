let idPostes = 0;

class Poste {
    constructor(coord_x, coord_y, empresa_dona, regiao, conexcoes = null, empresas_associadas = {}, status = 2) {
        this.nome = 'Poste #'+ ++idPostes;

        this.x = coord_x;
        this.y = coord_y;
        this.regiao = regiao; // Str

        this.dona = empresa_dona; // Str
        this.associadas = empresas_associadas; // Objeto {empresa: serviço: array}
        this.status = typeStatus[status]; // Apenas -> 1: Ativo ; 0: Desligado ; 2: Em manutenção;

        this.conexcoes = conexcoes; // Lista objetos de outros postes => Ou null
        // Conexões vai servir como apenas ir, nunca voltar (se ter um loop vai dar problema)

        this.notificacoes = [];
        this.idNotificacao = 0; // id para as notificações | local
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

    novaNotificacao(descricao, status) {
        // Por enquanto, vai ser uma lista de notificações que ficam armazenadas numa lista dentro do objeto poste, que quando
        // entra na página de notificações, você plota o poste que você quer ver e ele puxa as notificações
        // Por enquanto, sem o banco de dados, irá ser preciso criar tudo no main.js

        this.notificacoes.push([descricao, ++this.idNotificacao, new Date().toLocaleString(), status]) // Status

    }
}

const typeNot = ['Ativa', 'Concluida', 'Manut.'];
class Notificacao {
    constructor(descricaoNotificacao='', idNotificacao, data, status) {
        this.descricaoNotificacao = descricaoNotificacao;
        this.idNotificacao = idNotificacao;
        this.data = data;

        this.insertNotifc();
    }


    insertNotifc() {

        secNot.innerHTML += `<div class="notificacao">

                <div class="identificacao">
                    <p>Notificação ${this.data}</p>
                    <p>${this.idNotificacao}</p>
                </div>

                <div class="descricao">
                    <p>${this.descricaoNotificacao.slice(0, 160)}</p>
                    <p>${this.descricaoNotificacao.slice(160, 360)}</p>
                </div>

                <div class="botoes">
                    <button class="dropdown-button" onclick="dropdownButton(this)" title="${typeNot[0]}">${typeNot[0]}</button>
                    <div class="dropdown-conteudo">
                        <button onclick="changeStatusTo(this)">${typeNot[0]}</button>
                        <button onclick="changeStatusTo(this)">${typeNot[1]}</button>
                        <button onclick="changeStatusTo(this)">${typeNot[2]}</button>
                    </div>

                    <button class="lixo" onclick="deleteNotificacao(this)"></button>
                </div>

        </div>`


        // let notListened = document.getElementById('notListened');

        // notListened.addEventListener('click', changeDropdown);


        // notListened.id = '';
    }
}


// Debug

let poste1 = new Poste(1, 1, '1','1', null);
let poste2 = new Poste(2, 2, '2','2', [poste1]);
let poste3 = new Poste(3, 3, '3','3', [poste2]);
let poste4 = new Poste(4, 4, '4','4', [poste3]);


poste1.novaNotificacao('ola mundo');
poste1.novaNotificacao('ola mundo denovo!');
poste1.novaNotificacao('ola mundo denovo denovo!');