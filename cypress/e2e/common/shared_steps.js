import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na tela de login", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("preencho o campo {string} com {string}", (nomeDoCampo, valorDoTexto) => {
    cy.get(`[data-test="${nomeDoCampo}"]`).type(valorDoTexto);
});

When("clico no botão {string}", (nomeDoBotao) => {
  cy.get(`[data-test="${nomeDoBotao}"]`).click();
});