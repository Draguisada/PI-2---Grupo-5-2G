
// Global -> Todas empresas lê essas variáveis
let globalIdPostes = 0;

// Local -> Apenas empresa logada lê
let idPostes = 0;
let postes = [];

// Banco de dados -> Depende do usuário de entrada
// Composta por 4 caractéres.
// const empresa_cod = '0413'; // 0413#1 -> empresa cód 0413 # poste 1
const empresa_logada = new Empresa("Isada's corp", '0413')
//


// front-end => Variaveis mudáveis
const statusColor = ['#FF7979', "#7ED957" ,"#598EFF", "#FF0000", "#00BF63", "#0051FF"]
const centroDoMapa = { lat: -27.200476, lng: -52.082809 }; // Entrada do IF
let map;
// Status geral
const typeStatus = ['Desligado', 'Ativo' ,'Em manutenção'];
const typeStatusmenos1 = {'Desligado': 0, 'Ativo': 1, 'Em manutenção': 2}
// Status da notificação
const typeNot = ['Ativa', 'Concluida','Manut.'];
const typeSNotmenos1 = {'Ativa': 0, 'Concluida': 1 ,'Manut.': 2}
