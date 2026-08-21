import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("o título de Produtos deve aparecer na tela", () => {
  cy.get('[data-test="title"]').should("be.visible");
});