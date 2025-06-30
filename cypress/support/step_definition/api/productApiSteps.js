import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given('My product data is {string}', (produto) => {
  cy.fixture(`apiTestData/produtos/GET/${produto}.json`).then((testData) => {
    Cypress.env('testData', testData);
  });
});

When('I get product by its Id', () => {
    cy.getProdutoById()
});


