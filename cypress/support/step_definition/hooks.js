import { After } from '@badeball/cypress-cucumber-preprocessor';

After({ tags: '@addProduct' }, () => {
    const testData = Cypress.env('testData');
    cy.deleteCarrinho(testData?.userId || 1)
});

After(() => {
    cy.screenshot();
});
