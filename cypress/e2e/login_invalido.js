import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// O motor captura o que está entre aspas no Gherkin e joga na variável (email)
When("preencho o e-mail com {string}", (email) => {
  cy.get('[data-test="username"]').type(email);
});

When("preencho a senha com {string}", (senha) => {
  cy.get('[data-test="password"]').type(senha);
});

// Asserções agressivas: o Cypress escaneia a caixa vermelha de erro buscando o texto exato
Then("a mensagem de credenciais inválidas deve aparecer", () => {
  cy.get('[data-test="error"]').should('contain', 'do not match any user');
});

Then("a mensagem de usuário bloqueado deve aparecer", () => {
  cy.get('[data-test="error"]').should('contain', 'has been locked out');
});