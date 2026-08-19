import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na tela de login", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("preencho o campo e-mail com um e-mail válido", () => {
  cy.get('[data-test="username"]').type("standard_user");
});

When("preencho o campo senha com uma senha válida", () => {
  cy.get('[data-test="password"]').type("secret_sauce");
});

When("clico em Acessar", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("o título de Produtos deve aparecer na tela", () => {
  cy.get('[data-test="title"]').should("be.visible");
});