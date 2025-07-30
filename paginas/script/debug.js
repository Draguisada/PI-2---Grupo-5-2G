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
    postes.forEach((e) => {
        if (e.conexcoes != []){
            // conexcoes += e.conexcoes.map((p) => `(postes[${p._localId}])`).join(`, postes[${localId}].adicionarConexcao`);
            // conexcoes += `, postes[${localId}].adicionarConexcao \n`;

            e.conexcoes.forEach((p) => {
            conexcoes += `postes[${e._localId}].adicionarConexcao(postes[${p._localId}]) \n`;}
        )};


        objs += `new Poste(${e.lat}, ${e.lng}, ${empresa_logada.nome}, 'IFC - Campus concórdia', [], {});\n`;
    });

    console.log(objs);
    console.log('')
    console.log('/* Conexções */')
    console.log('')
    console.log(conexcoes);

}

new Poste(-27.200476, -52.082809, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.2007753911968, -52.08286800859833, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.201086459985614, -52.08293655069477, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.20140254853843, -52.08299958260662, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.20156953835548, -52.083038474637334, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.201682852731718, -52.083074684459035, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.2019977468146, -52.083121623116796, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.20229832670031, -52.083190019446675, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.20225419399006, -52.08341532500393, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.20241998975695, -52.08351322563297, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.202623953995204, -52.08324500473148, empresa_logada.nome, 'IFC - Campus concórdia', [], {});
new Poste(-27.202332917190695, -52.082921798545186, empresa_logada.nome, 'IFC - Campus concórdia', [], {});

// desenharLinhaEntre(-27.2007753911968, -52.08286800859833,-27.200476, -52.082809);



postes[0].adicionarEmpresaAssociadas("Isada's Corp", 'Luz', 'Internet')
postes[0].adicionarEmpresaAssociadas("LaRa's Corp", 'Internet')

postes[0].novaNotificacao('ola mundo');
postes[0].novaNotificacao('ola mundo denovo!', 1);
postes[0].novaNotificacao('ola mundo denovo denovo!');