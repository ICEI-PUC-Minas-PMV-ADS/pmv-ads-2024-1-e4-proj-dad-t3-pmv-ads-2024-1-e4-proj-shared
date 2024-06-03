# Plano de Testes de Software

## Cenários de Teste Selecionados

### Registro de Usuário
- **Cenário:** Registro de um usuário regular.
  - **Requisito Satisfeito:** O usuário regular deve ser capaz de se registrar na aplicação.
  - **Ferramentas Utilizadas:** Postman (para testar a API REST), Cypress (para testar o fluxo de registro na aplicação web), Appium (para testar o fluxo de registro na aplicação móvel).

### Criação de Reserva
- **Cenário:** Criação de uma nova reserva por um usuário regular.
  - **Requisito Satisfeito:** O usuário regular deve ser capaz de criar novas reservas.
  - **Ferramentas Utilizadas:** Postman (para testar a API REST), Cypress (para testar a criação de reservas na aplicação web), Appium (para testar a criação de reservas na aplicação móvel).

### Visualização e Edição de Reservas
- **Cenário:** Visualização e edição de uma reserva existente por um usuário regular.
  - **Requisito Satisfeito:** O usuário regular deve ser capaz de visualizar e editar reservas existentes.
  - **Ferramentas Utilizadas:** Postman (para testar a API REST), Cypress (para testar a visualização e edição de reservas na aplicação web), Appium (para testar a visualização e edição de reservas na aplicação móvel).

### Deleção de Reserva
- **Cenário:** Deleção de uma reserva por um usuário regular.
  - **Requisito Satisfeito:** O usuário regular deve ser capaz de deletar reservas existentes.
  - **Ferramentas Utilizadas:** Postman (para testar a API REST), Cypress (para testar a deleção de reservas na aplicação web), Appium (para testar a deleção de reservas na aplicação móvel).

### Listagem de Usuários Regulares
- **Cenário:** Listagem de todos os usuários regulares associados a um condomínio.
  - **Requisito Satisfeito:** O condomínio deve ser capaz de ver uma lista de todos os usuários regulares associados a ele.
  - **Ferramentas Utilizadas:** Postman (para testar a API REST), Cypress (para testar a listagem na aplicação web), Appium (para testar a listagem na aplicação móvel).

### Cancelamento de Associação
- **Cenário:** Cancelamento da associação de um usuário regular por um condomínio.
  - **Requisito Satisfeito:** O condomínio deve ser capaz de cancelar a associação de usuários regulares.
  - **Ferramentas Utilizadas:** Postman (para testar a API REST), Cypress (para testar o cancelamento na aplicação web), Appium (para testar o cancelamento na aplicação móvel).

### Listagem e Cancelamento de Reservas
- **Cenário:** Listagem de todas as reservas atuais e cancelamento de uma reserva por um condomínio.
  - **Requisito Satisfeito:** O condomínio deve ser capaz de ver uma lista de todas as reservas atuais feitas pelos usuários e cancelar essas reservas com uma justificativa.
  - **Ferramentas Utilizadas:** Postman (para testar a API REST), Cypress (para testar a listagem e cancelamento na aplicação web), Appium (para testar a listagem e cancelamento na aplicação móvel).

## Grupo de Usuários Escolhido para Participar nos Testes
Os testes foram realizados com dois grupos principais de usuários:
1. **Usuários Regulares:** Participaram dos testes de registro, criação, visualização, edição e deleção de reservas.
2. **Condomínios:** Participaram dos testes de listagem de usuários regulares, cancelamento de associação e gerenciamento de reservas.

## Ferramentas Utilizadas nos Testes
As seguintes ferramentas foram utilizadas para testar os diferentes componentes da aplicação:
- **API REST (.NET Web API):** Testada utilizando o Postman para verificar a funcionalidade e resposta dos endpoints.
- **Aplicação Web (SvelteKit):** Testada utilizando o Cypress para verificar os fluxos de usuário e interações na interface web.
- **Aplicação Móvel (React Native com Expo Router):** Testada utilizando o Appium para garantir a funcionalidade e usabilidade na plataforma móvel.