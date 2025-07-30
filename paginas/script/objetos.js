

class Poste {
    constructor(coord_lat, coord_lng, empresa_dona, regiao, conexcoes = [], empresas_associadas = {}, status = 2) {
        this.titulo = 'Poste #'+ ++idPostes;
        this._globalId = globalIdPostes;
        this._localId = idPostes-1;
        this._StringGlobalId = `${empresa_cod}#${++globalIdPostes}`;

        this.lat = coord_lat;
        this.lng = coord_lng;
        this.regiao = regiao; // Str

        this.dona = empresa_dona; // Str
        this.associadas = empresas_associadas; // Objeto {empresa: serviço: array}
        this.status = typeStatus[status]; // Apenas -> 1: Ativo ; 0: Desligado ; 2: Em manutenção;

        this.conexcoes = conexcoes; // Lista objetos de outros postes => Ou null
        // Conexões vai servir como apenas ir, nunca voltar (se ter um loop vai dar problema)

        this.notificacoes = [];
        this.idNotificacao = 0; // id para as notificações | local

        this.atualizarPontoMaps();
        postes.push(this);
    }

    setStatus(toStatusNum) { // Recebe valor de, 0, 1, 2
        let toStatus = typeStatus[toStatusNum];
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

    adicionarConexcao(conectar) {
        this.conexcoes.push(conectar);
    }

    novaNotificacao(descricao, status = 0) {
        // Por enquanto, vai ser uma lista de notificações que ficam armazenadas numa lista dentro do objeto poste, que quando
        // entra na página de notificações, você plota o poste que você quer ver e ele puxa as notificações
        // Por enquanto, sem o banco de dados, irá ser preciso criar tudo no main.js

        this.notificacoes.push([descricao, ++this.idNotificacao, new Date().toLocaleString(), status]) // Status
    }

    atualizarPontoMaps() {
        this.obj = {
            lat: this.lat,
            lng: this.lng,
            title: this.titulo,
            
            content: `
                <div class="maps-content">
                    <h2>${this.titulo}</h2>
                    <h3 class="maps-status" title="${this.status}">${this.status}</h3>

                    <p>Empresa dona: ${this.dona}</p>
                    <p>Empresas associadas: ${Object.keys(this.associadas)}</p>


                    <a href="./historico.html" onclick="localStorage.setItem('poste', ${this._localId})" target="_blank">Histórico</a>
                    <p onclick="postes[${this._localId}].setStatus(0)">set Desativo</p>
                    <p onclick="postes[${this._localId}].setStatus(1)">set Ativo</p>
                    <p onclick="postes[${this._localId}].setStatus(2)">set Manutenção</p>
                </div>
            `,
        };
    }
}

const typeNot = ['Ativa', 'Concluida', 'Manut.'];
const typeSNotmenos1 = {'Ativa': 0, 'Concluida': 1, 'Manut.': 2}
class Notificacao {
    constructor(descricaoNotificacao='', idNotificacao, data, status = 0) {
        this.descricaoNotificacao = descricaoNotificacao;
        this.idNotificacao = idNotificacao;
        this.data = data;
        this.status = status;

        this.insertNotifc();
    }


    insertNotifc() {

        secNot.innerHTML = `<div class="notificacao">

                <div class="identificacao">
                    <p>Notificação ${this.data}</p>
                    <p>ID #${this.idNotificacao}</p>
                </div>

                <div class="descricao">
                    <p>${this.descricaoNotificacao.slice(0, 160)}</p>
                    <p>${this.descricaoNotificacao.slice(160, 360)}</p>
                </div>

                <div class="botoes">
                    <button class="dropdown-button" onclick="dropdownButton(this)" title="${typeNot[this.status]}">${typeNot[this.status]}</button>
                    <div class="dropdown-conteudo">
                        <button onclick="changeStatusTo(this)">${typeNot[0]}</button>
                        <button onclick="changeStatusTo(this)">${typeNot[1]}</button>
                        <button onclick="changeStatusTo(this)">${typeNot[2]}</button>
                    </div>

                    <button class="lixo" onclick="deleteNotificacao(this)"></button>
                </div>

        </div> ${secNot.innerHTML}`


        // let notListened = document.getElementById('notListened');

        // notListened.addEventListener('click', changeDropdown);


        // notListened.id = '';
    }
}


