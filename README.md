# Projeto Integrador 2
## Grupo 5 - Sistema de gerenciamento de postes de luz

### Integrantes:
- Bruno Tochetto
- Kayron Rian Alves
- Kauã Nunes
- Maria Antônia Bernardes
- Nicoly Quechine de Sá
- Samuel Vortmann
- Rômulo Perin

---
# Requisitos
- [Node.js](https://nodejs.org)  
- [PostgreSQL](https://www.postgresql.org/) (com [pgAdmin](https://www.pgadmin.org/) para gerenciamento)  

## Inicializando o projeto
Após a instalação do projeto, vá para o seu terminal do Postgres e execute todos os comandos dos arquivos `criacao.sql` e depois `adicionarValoresBase.sql` na pasta back-end.
(Apenas execute os comandos do `adicionarValoresBase.sql` se já quiser dados pré-definidos para teste, se não, não é necessário.)

Com isto, terá que configurar o pdAdmin para fazer um hosting do banco de dados. Com esses dados precisará colocar nas variáveis constantes destacadas no arquivo `server.js`;
na pasta back-end, execute o comando `npm install` em um terminal, para instalar as dependências do projeto, logo após isso, `npm start`.

Para abrir o sistema em sí, abra o arquivo index.html na pasta inicial do site.
Lá, será encontrada a primeira página com a descrição do site e um botão de cadastrar e login.

**Uma dependência pessoal**: a API KEY do _Google Maps JavaScript API_ para o maps.html funcionar. -> é possível rodar em a API KEY, apenas será deixado uma marca d'água;

---

## Navegação
A navegação principal requerirá uma conta a ser criada, é utilizada uma empresa fictícia de demonstração, "LaRas Corp","Isada's Corp", "Sperb"s Corp", "Veriatos"s Corp" já estão criadas no banco de dados dos arquivos.

Assim que logado, será aberto o mapa onde a maior ação do projeto acontece. Do lado direito será possível ver a navbar padrão do site, com as abas de: perfil da empresa, notificações gerais e deslogar.
Ainda no mapa, se você clicar em um postes, você poderá abrir o histórico de notificações daquele poste.

Nas notificações gerais, aparecerá todas as notificações de todos os seus postes, podendo clicar no simbolo de sino do lado do poste para entrar no histórico dele.

No histórico de qualquer poste, se você clicar no Poste #xxx poderá acessar os outros postes.

--- ** um poste será criado na sua conta do Banco de Dados.

## Mapa
O mapa é a parte mais complexa do sistema, também a parte central dele. Se você ter os dados de demonstração, e estiver logado na empresa "Isada's Corp", terá postes do IFC já mapeados. Uma empresa real iria ver algo semelhantes.

Cada poste tem um ID, Empresa dona, empresas associadas com seus serviços e status do poste.

Clicando no marcador do poste é possível ver o seu menu com as informações. Junto disso um modo de mudar o status do poste.

Status podem ser: Desligado `#FF7979`, Ligado `#7ED957`  ou Em Manutenção `#598EFF`. Que irá mudar a sua cor respectivamente.

Para adicionar postes, existem dois meios, pelo mapa e pelo menu, pelo mapa é apenas clicando nele que irá pedir confirmação da adição do poste ao mapa. A explicação pelo menu está a seguir.

### Menu à esquerda

#### Adicionar postes em coordenadas específicas
O primeiro botão é para adicionar um poste na coordenada escrita, pedindo a longitude e latitude. Ele criará um poste igual quando você clica no mapa.

#### Atualizar mapa (possível remoção futura)
Segundo botão, usado para atualizar o mapa.

#### Conexções
Terceiro botão, usado para conectar postes. // Infelizmente não implementado no banco de dados, mas se conectado no front-end ele irá atualizar em cascada.

Postes são conectados unidirecionais, e é possível ver as conexções clicando neste botão.
Ao entender as conexções, se você alterar os status dos postes conectados eles irão alterar seu status em cascata, assim mostrando o fluxo de se algum poste foi desligado, quantos postes foram e até aonde.

Com o botão de conexção dos postes ligado, é possível conectar postes, clicando em cima do poste que irá vir o sinal, para o que o sinal irá. Isso é indicado pela região do ícone do poste se tornar amarelo.

#### Adicionar empresas associadas;

Abaixo do botão de conexção, está o botão de adição das empresas associadas, mostrando todas as empresas disponíveis e colocando os serviços que elas podem propor, adicionando apenas as que terem algum texto. | Esse botão é apenas acessível se você selecionar vários postes segurando CTRL e clicando em postes.

Empresas associadas a um poste pode ver ele normalmente, editando seu status, adicionando notificações ou deixando como Desligado, ligado ou em manutenção.

#### Centralizar o mapa;

De principio, o mapa iniciará no oceano atlântico, ou coordenadas 0, 0, clicando neste botão é possível mudar o centro do mapa para o seu desejo.
---

## Notificações
As notificações abrange tanto a página de notificações gerais como o histórico de notificações, ambos tem funcionalidades parecidas.

A principio, nenhum poste terá notificações, que então poderão ser adicionadas a postes individuais, nas páginas tem um botão de "Criar notificação", onde ele pedirá a descrição da notificação, e se estiver nas notificações gerais, o poste para adicionar a notificação.

As notificações podem estar Ativas (o problema ainda não foi resolvido), Concluídas (o problema já foi resolvido) ou "Manutenção" (o problema está sendo resolvido.).
É possível deletar as notificações independentemente.
Na esquerda da notificação é possível ver o ID dela, junto da data de criação.


# Demonstração
Se execute o `adicionarValoresBase.sql`, seguintes empresas estarão disponíveis com seguintes dados:

- Email: guilherme@siteinformativo.com
- Senha: asdf

Aqui os postes de Piratuba são mapeados.

- Email: drag@isada.com
- Senha: 1234

Aqui os postes do IFC são mapeados, alguns com notificações.