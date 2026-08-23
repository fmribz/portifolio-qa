import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("o ícone do carrinho deve exibir a quantidade {string}", (quantidade) => {
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', quantidade);
});

Then("o ícone de quantidade do carrinho não deve ser exibido", () => {
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
});