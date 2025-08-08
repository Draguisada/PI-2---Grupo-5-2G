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

## Inicializando o projeto
O projeto não tem dependencial até o momento de 07/08 sem o Back-end, então dependências nem outros meios precisam ser instalados, apenas abrir o index.html na pasta inicial do site.
Lá, será encontrada a primeira página com a descrição do site, logo a um botão de cadastrar.

**Uma dependência pessoal**: a API KEY do _Google Maps JavaScript API_ para o maps.html funcionar. -> Se não terem a chave, mande email para o Bruno que ele envia a chave API dele.

---

## Navegação
A navegação principal sem o back-end incluido, não requerirá uma conta a ser criada, é utilizada uma empresa fictícia de demonstração "Isada's Corp" para os testes. Então o login e cadastro não irá necessitar de informações para logar/cadastrar.

Assim que logado, será aberto o mapa onde a maior ação do projeto acontece. Do lado direito será possível ver a navbar padrão do site, com as abas de: perfil da empresa (ainda não implementado no dia 07/08), notificações gerais e sair.
Ainda no mapa, se você clicar em algum poste, você poderá abrir o histórico de notificações daquele poste.

Nas notificações gerais, aparecerá todas as notificações de todos os postes, podendo clicar no simbolo de sino do lado do poste para entrar no histórico dele.

No histórico de qualquer poste, se você clicar no Poste #xxx poderá acessar os outros postes.

---

## Mapa
O mapa é a parte mais complexa do sistema, também a parte central dele. Á principio está logado na empresa "Isada's Corp", com postes do IFC já mapeados. Uma empresa real iria ver algo semelhantes.

Cada poste tem um ID, Empresa dona, empresas associadas com seus serviços e status do poste.

Clicando no marcador do poste é possível ver o seu menu com as informações. Junto disso um modo de mudar o status do poste.

Status podem ser: Desligado `#FF7979`, Ligado `#7ED957`  ou Em Manutenção `#598EFF`.

Para adicionar postes, existem dois meios, pelo mapa e pelo menu, pelo mapa é apenas clicando nele que irá pedir confirmação da adição do poste ao mapa. A explicação pelo menu está a seguir.

### Menu à esquerda

#### Adicionar postes em coordenadas específicas
O primeiro botão é para adicionar um poste na coordenada escrita, pedindo a longitude e latitude. Ele criará um poste igual quando você clica no mapa.

#### Atualizar mapa (possível remoção futura)
Segundo botão, usado para atualizar o mapa, usado para depurração, possível remoção futura.

#### Conexções
Terceiro botão, usado para conectar postes.

Postes são conectados unidirecionais, e é possível ver as conexções clicando neste botão.
Ao entender as conexções, se você alterar os status dos postes conectados eles irão alterar seu status em cascata, assim mostrando o fluxo de se algum poste foi desligado, quantos postes foram e até aonde.

Com o botão de conexção dos postes ligado, é possível conectar postes, clicando em cima do poste que irá vir o sinal, para o que o sinal irá. Isso é indicado pela região do ícone do poste se tornar amarelo.

#### Adicionar empresas associadas;

Abaixo do botão de conexção (ainda está em desenvolvimento), é para a adição das empresas associadas, mostrando todas as empresas fictícias disponíveis (mas modular se for adicionado outras empresas) e colocando os serviços que elas podem propor, adicionando apenas as que terem algum texto. | Esse botão é apenas acessível se você selecionar vários postes segurando CTRL e clicando em postes.

---

## Notificações
As notificações abrange tanto a página de notificações gerais como o histórico de notificações, ambos tem funcionalidades parecidas.

A principio, nenhum poste terá notificações, que então poderão ser adicionadas a postes individuais, nas páginas tem um botão de "Criar notificação", onde ele pedirá a descrição da notificação, e se estiver nas notificações gerais, o poste para adicionar a notificação.

As notificações podem estar Ativas (problema ainda não foi resolvido), Concluídas (problema já foi resolvido) ou "Manutenção" (problema está sendo resolvido.).
É possível deletar as notificações independentemente.
Na esquerda da notificação é possível ver o ID dela, junto da data de criação.

Notificações pré-definidas: Poste #1, #2, #4 e #6

Na versão atual sem banco de dados não é possível alternar entre página de histórico e notificação sem perder os dados, então por enquanto só fica os pré-definidos ou apenas as notificações modificadas enquanto estiver na página.
