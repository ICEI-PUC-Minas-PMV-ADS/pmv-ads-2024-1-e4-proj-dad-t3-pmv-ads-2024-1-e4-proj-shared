# Plano de Testes de Software
### Contexto

- **Usuários Regulares:** Podem criar, visualizar, editar e excluir reservas.
- **Condomínios:** Podem ver uma lista de todos os usuários regulares associados, cancelar a associação de usuários, ver uma lista de todas as reservas atuais feitas pelos usuários e cancelar reservas inserindo uma justificativa.

A aplicação possui uma API REST, um aplicativo móvel e um aplicativo web. Tanto o aplicativo web quanto o móvel se comunicam com a API REST.

### Cenários de Teste

#### Testes de Unidade
1. **API REST (.NET Web API - xUnit)**
    - Registro de usuários regulares e condomínios.
    - Criação, visualização, edição e exclusão de reservas por usuários regulares.
    - Listagem de usuários regulares associados a um condomínio.
    - Cancelamento de associação de usuários por um condomínio.
    - Listagem de reservas atuais por um condomínio.
    - Cancelamento de reservas por um condomínio com justificativa.

2. **Aplicativo Web (SvelteKit - Jest)**
    - Fluxo de registro de usuários.
    - Interface de criação, edição, visualização e exclusão de reservas.
    - Interface de listagem de usuários regulares para condomínios.
    - Interface de cancelamento de associação de usuários por condomínios.
    - Interface de listagem e cancelamento de reservas com justificativa.

3. **Aplicativo Móvel (React Native com Expo Router - Jest)**
    - Fluxo de registro de usuários.
    - Interface de criação, edição, visualização e exclusão de reservas.
    - Interface de listagem de usuários regulares para condomínios.
    - Interface de cancelamento de associação de usuários por condomínios.
    - Interface de listagem e cancelamento de reservas com justificativa.

#### Testes de Integração
1. **Fluxos de Registro e Autenticação**
    - Testar o registro e login de usuários regulares e condomínios.
    - Verificar a comunicação correta entre a API REST e os aplicativos web e móvel.

2. **Fluxos de Reservas**
    - Testar a criação, edição, visualização e exclusão de reservas pelos usuários regulares.
    - Verificar a atualização e sincronização de dados entre a API REST e os aplicativos web e móvel.

3. **Gestão de Usuários e Reservas por Condomínios**
    - Testar a listagem de usuários regulares associados a um condomínio.
    - Testar o cancelamento de associação de usuários por um condomínio.
    - Testar a listagem e cancelamento de reservas com justificativa por um condomínio.
    - Verificar a comunicação correta e atualização de dados entre a API REST e os aplicativos web e móvel.

### Ferramentas Utilizadas
- **API REST:** xUnit para testes de unidade e Swagger para testes de integração.
- **Aplicativo Web:** Jest para testes de unidade e Cypress para testes de integração.
- **Aplicativo Móvel:** Jest para testes de unidade e Appium para testes de integração.

### Seleção de Cenários de Teste
Os cenários de teste foram selecionados com base nos requisitos principais da aplicação, abrangendo tanto as funcionalidades de usuários regulares quanto de condomínios. Foram avaliados os seguintes recursos:
- Registro e autenticação de usuários.
- Gestão de reservas por usuários regulares.
- Gestão de usuários e reservas por condomínios.

O grupo de usuários escolhido para participar dos testes incluiu tanto usuários finais (usuários regulares e representantes de condomínios) quanto a equipe de desenvolvimento para garantir uma cobertura abrangente dos cenários e validação dos requisitos.

## Ferramentas Utilizadas nos Testes

As seguintes ferramentas foram selecionadas para testar os diferentes componentes da aplicação:

### API REST (.NET Web API)
- **Testes de Unidade:** xUnit
  - **Descrição:** xUnit é um framework de testes unitários para .NET. Utilizamos o xUnit para escrever e executar testes unitários na API REST, verificando o comportamento de classes, métodos e componentes individualmente. Ele oferece uma estrutura simples e eficaz para organizar e executar testes, garantindo que cada unidade de código funcione conforme o esperado.
- **Testes de Integração:** Swagger
  - **Descrição:** Swagger é um conjunto de ferramentas open-source que ajuda a projetar, construir, documentar e consumir APIs RESTful. Utilizamos o Swagger para testar a funcionalidade e a resposta dos endpoints da API, garantindo que ela funcione conforme o esperado e atenda aos requisitos especificados.

### Aplicação Web (SvelteKit)
- **Testes de Unidade:** Jest
  - **Descrição:** Jest é um framework de teste para JavaScript, especialmente adequado para testes de unidades em aplicações web. Utilizamos o Jest para escrever e executar testes unitários na aplicação web, verificando o comportamento de componentes, funções e lógica de negócio. Ele oferece recursos avançados, como snapshots e mocking, facilitando a criação de testes robustos e confiáveis.
- **Testes de Integração:** Cypress
  - **Descrição:** Cypress é uma ferramenta de teste end-to-end moderna e poderosa, construída para a web. Utilizamos o Cypress para criar e executar testes end-to-end, integração e unitários na aplicação web desenvolvida em SvelteKit. Ele permite testar a aplicação no navegador, simulando as interações reais dos usuários com a interface.

### Aplicação Móvel (React Native com Expo Router)
- **Testes de Unidade:** Jest
  - **Descrição:** Jest é utilizado para testes unitários na aplicação móvel desenvolvida com React Native. Assim como na aplicação web, o Jest oferece uma maneira simples e poderosa de escrever e executar testes unitários, garantindo a qualidade e a confiabilidade do código fonte.
- **Testes de Integração:** Appium
  - **Descrição:** Appium é uma ferramenta open-source para automação de testes em aplicativos móveis, suportando múltiplas plataformas como Android e iOS. Utilizamos o Appium para realizar testes automatizados que simulam a interação do usuário com o aplicativo, garantindo que a experiência do usuário seja consistente e satisfatória.
