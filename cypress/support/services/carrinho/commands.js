Cypress.Commands.add('postCarrinho', () => {
    const productToCart = Cypress.env('testData');

    cy.request({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}api/carrinho`,
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        body: productToCart,
        failOnStatusCode: false
    }).then((response) => {
        Cypress.env('responseBody', response);
    });
});

Cypress.Commands.add('getCarrinho', (userId) => {

    cy.request({
        method: 'GET',
        url: `${Cypress.config('baseUrl')}api/carrinho/${userId}`,
        headers: {
            'accept': 'application/json'
        },
        failOnStatusCode: false
    }).then((response) => {
        Cypress.env('responseBody', response);
    });
});

Cypress.Commands.add('deleteCarrinho', (userId) => {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.config('baseUrl')}api/carrinho/${userId}`,
        headers: {
            'accept': 'application/json'
        },
        failOnStatusCode: false
    }).then((response) => {
        Cypress.env('responseBody', response);
    });
});


Cypress.Commands.add('setCartProduct', (product) => {
  cy.fixture(`apiTestData/carrinho/POST/${product}.json`).then((productToCart) => {
    Cypress.env('testData', productToCart);
  });
});


Cypress.Commands.add('setCart', (cart) => {
  return cy.fixture(`apiTestData/carrinho/GET/${cart}.json`).then((cartData) => {
    Cypress.env('currentCart', cartData);
  });
})
