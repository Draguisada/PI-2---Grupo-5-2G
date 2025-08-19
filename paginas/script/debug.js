// Debug

function mostrarVariaveis(...itens) {
    itens.forEach((item) => {
        console.log(item);
    })
    console.log('##########')
}

function postesToString() {
    
    let objs = '';
    let conexcoes = ``;
    
    // Esse código utiliza localId, então "não funcionaria" no global
    empresa_logada.__postes.forEach((e) => {
        if (e.conexcoes != []){
            e.conexcoes.forEach((p) => {
            conexcoes += `empresa_logada.__postes[${e._localId}].adicionarConexcao(empresa_logada.__postes[${p._localId}]) \n`;}
        )};


        objs += `new Poste(${e.lat}, ${e.lng}, empresa_logada.nome, 'IFC - Campus concórdia', [], {});\n`;
    });

    console.log(objs);
    console.log('')
    console.log('/* Conexções */')
    console.log('')
    console.log(conexcoes);

}

function postesToSQL() {
let objs = '';
    
    // Esse código utiliza localId, então "não funcionaria" no global
    empresa_logada.__postes.forEach((e) => {


        objs += `INSERT INTO poste (id, coord_lat, coord_lng, empresa_dona, regiao, status, conexcoes) VALUES (${e._globalId}, ${e.lat}, ${e.lng}, ${localStorage.getItem('empresa_logada')}, ${e.regiao}, ${e.status}, {});\n`;

    });

    console.log(objs);
}