import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que realizo o login no sistema", () => {
  cy.login();
});

Given("que estou na tela de login", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("preencho o campo {string} com {string}", (nomeDoCampo, valorDoTexto) => {
    if(valorDoTexto !== ""){
      cy.get(`[data-test="${nomeDoCampo}"]`).type(valorDoTexto);
    }
});

When("clico no botão {string}", (nomeDoBotao) => {
  cy.get(`[data-test="${nomeDoBotao}"]`).click();
});

Then("devo ver a mensagem de sucesso {string}", (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});

Then("devo ver a mensagem de erro {string}", (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});