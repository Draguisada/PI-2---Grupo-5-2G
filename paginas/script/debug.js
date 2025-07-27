// Debug

let poste1 = new Poste(1, 1, '1','1', null);
let poste2 = new Poste(2, 2, '2','2', [poste1]);
let poste3 = new Poste(3, 3, '3','3', [poste2]);
let poste4 = new Poste(4, 4, '4','4', [poste3]);


poste1.novaNotificacao('ola mundo');
poste1.novaNotificacao('ola mundo denovo!', 1);
poste1.novaNotificacao('ola mundo denovo denovo!');

pegarPoste(poste1);