# SHARED Sistema de gerenciamento de reservas

`CURSO: Análise e Desenvolvimento de Sistemas`

`Projeto: Desenvolvimento de uma aplicação distribuida`

`Eixo 4 - Turma 3`

O projeto consiste no desenvolvimento de uma plataforma digital para facilitar a reserva de espaços comunitários em condomínios residenciais. Através de uma aplicação web e móvel, os moradores poderão visualizar a disponibilidade dos espaços, fazer reservas de forma rápida e eficiente, e facilitar a comunicação com a administração do condomínio. Essa solução busca modernizar e otimizar o processo de gestão de espaços compartilhados, visando proporcionar uma melhor experiência para todos.

## Integrantes

<ol>
<li><a href="https://github.com/feuvpi">Fred Vasquez Pinheiro Gomes</a></li>
  
</ol>

## Orientador

* Leonardo Vilela Cardoso

## Instruções de utilização

**Requisitos**

* Docker instalado na máquina local
* Node.js instalado na máquina local (para executar o frontend web e mobile)
* Expo CLI instalado na máquina local (para executar o frontend mobile)
**Instalando as dependências**
-----------------------------

### API (.NET Web API com MongoDB)

1. Abra um terminal na raiz do projeto e execute o comando `dotnet restore` para instalar as dependências do .NET.
2. Execute o comando `docker-compose up -d` para iniciar o container do MongoDB em segundo plano.

### Frontend Web (SvelteKit)

1. Abra um terminal na raiz do projeto e execute o comando `npm install` para instalar as dependências do frontend web.

### Frontend Mobile (React Native com Expo)

1. Abra um terminal na raiz do projeto e execute o comando `npm install` para instalar as dependências do frontend mobile.
2. Execute o comando `expo start` para iniciar o servidor do Expo.

**Executar a aplicação**
-------------------------

### API (.NET Web API com MongoDB)

1. Execute o comando `dotnet run` para iniciar a API.
2. A API estará disponível em `https://localhost:44346`.

### Frontend Web (SvelteKit)

1. Execute o comando `npm run dev` para iniciar o frontend web em modo de desenvolvimento.
2. O frontend web estará disponível em `http://localhost:5173`.

### Frontend Mobile (React Native com Expo)

1. Abra um navegador e acesse `http://localhost:8081` para abrir o frontend mobile.
2. O frontend mobile utilizará o Expo Router para gerenciar as rotas.

**Observações**
---------------

* Certifique-se de que o Docker esteja instalado e configurado corretamente na máquina local.
* Certifique-se de que o Node.js e o Expo CLI estejam instalados e configured corretamente na máquina local.
* Se você tiver problemas para executar a aplicação, verifique os logs de cada componente para identificar o erro.

# Documentação

<ol>
<li><a href="docs/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>
<li><a href="docs/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/04-Projeto de Interface.md"> Projeto de Interface</a></li>
<li><a href="docs/05-Arquitetura da Solução.md"> Arquitetura da Solução</a></li>
<li><a href="docs/06-Template Padrão da Aplicação.md"> Template Padrão da Aplicação</a></li>
<li><a href="docs/07-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></li>
<li><a href="docs/08-Plano de Testes de Software.md"> Plano de Testes de Software</a></li>
<li><a href="docs/09-Registro de Testes de Software.md"> Registro de Testes de Software</a></li>
<li><a href="docs/10-Plano de Testes de Usabilidade.md"> Plano de Testes de Usabilidade</a></li>
<li><a href="docs/11-Registro de Testes de Usabilidade.md"> Registro de Testes de Usabilidade</a></li>
<li><a href="docs/12-Apresentação do Projeto.md"> Apresentação do Projeto</a></li>
<li><a href="docs/13-Referências.md"> Referências</a></li>
</ol>

# Código

<li><a href="src/README.md"> Código Fonte</a></li>

# Apresentação

<li><a href="presentation/README.md"> Apresentação da solução</a></li>
