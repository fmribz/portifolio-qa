import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("o ícone do carrinho deve exibir a quantidade {string}", (quantidade) => {
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', quantidade);
});