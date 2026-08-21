import { Then } from "@badeball/cypress-cucumber-preprocessor";

// Asserções agressivas: o Cypress escaneia a caixa vermelha de erro buscando o texto exato
Then("a mensagem de credenciais inválidas deve aparecer", () => {
  cy.get('[data-test="error"]').should('contain', 'do not match any user');
});

Then("a mensagem de usuário bloqueado deve aparecer", () => {
  cy.get('[data-test="error"]').should('contain', 'has been locked out');
});