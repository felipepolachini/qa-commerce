Cypress.Commands.add('getProdutoById', () => {
    const product = Cypress.env('testData');

    cy.request({
        method: 'GET',
        url: `${Cypress.config('baseUrl')}api/produtos/${product.id}`,
        headers: {
          'accept': 'application/json'
        },
        failOnStatusCode: false
    }).then((response) => {
        Cypress.env('responseBody', response);
    });
});
