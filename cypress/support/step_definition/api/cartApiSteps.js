import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('My product to cart is {string}', (product) => {
  cy.setCartProduct(product)
});

When('I execute post to insert product in the cart', () => {
    cy.postCarrinho()
});

When('I get cart by product user Id', () => {
  const testData = Cypress.env('testData');
  cy.getCarrinho(testData.userId);
});


Then('the product should be added to cart succesfully', () => {
  const response = Cypress.env('responseBody');

  expect(response.body.message).to.eq("Produto adicionado ao carrinho com sucesso.")
  expect(response.body).to.have.property("id").to.not.be.null

});

Then('the cart response should contain the expected {string}', (product) => {
  cy.setCart(`${product}Cart`).then(() => {

    const currentCart = Cypress.env('currentCart');
    const response = Cypress.env('responseBody');

    const isContained = response.body.some(item =>
      Object.keys(currentCart).every(key => item[key] === currentCart[key])
    );
    expect(isContained).to.be.true;
  });

})

