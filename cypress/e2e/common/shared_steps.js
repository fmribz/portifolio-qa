import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que realizo o login no sistema", () => {
  cy.login();
});

Given("que estou na tela de login", () => {
  cy.visit("https://www.saucedemo.com/");
});

Given("que estou na tela de testes de rede do Cypress", () => {
  cy.visit('https://example.cypress.io/commands/network-requests');
});

Given("intercepto a rota de comentarios", () => {
  cy.intercept('GET', '**/comments/*', { fixture: 'comentario_hackeado.json'}).as('chamadaRede');
});

When("preencho o campo {string} com {string}", (nomeDoCampo, valorDoTexto) => {
    if(valorDoTexto !== ""){
      cy.get(`[data-test="${nomeDoCampo}"]`).type(valorDoTexto);
    }
});

When("clico no botão {string}", (nomeDoBotao) => {
  cy.get(`[data-test="${nomeDoBotao}"]`).click();
});

When("clico no botão de buscar dados", () => {
  cy.get('.network-btn').click();
});

Then("devo ver a mensagem de sucesso {string}", (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});

Then("devo ver a mensagem de erro {string}", (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});

Then("a tela deve exibir a minha carga hackeada", () => {
  cy.wait('@chamadaRede');
  cy.contains('Sucesso absoluto!').should('be.visible');
});