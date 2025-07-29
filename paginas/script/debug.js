// Debug

new Poste(-27.200476, -52.082809, "Isada's Corp",'IFC - Campus concórdia', null);
new Poste(-27.2007753911968, -52.08286800859833, "Isada's Corp",'IFC - Campus concórdia', [postes[0]]);
// let poste3 = new Poste(3, 3, '3','3', [poste2])
// let poste4 = new Poste(4, 4, '4','4', [poste3]);

postes[0].adicionarEmpresaAssociadas("Isada's Corp", 'Luz', 'Internet')
postes[0].adicionarEmpresaAssociadas("LaRa's Corp", 'Internet')

postes[0].novaNotificacao('ola mundo');
postes[0].novaNotificacao('ola mundo denovo!', 1);
postes[0].novaNotificacao('ola mundo denovo denovo!');
