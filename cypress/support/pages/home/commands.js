import { elements as el } from "./elements"

 Cypress.Commands.add('accessPage', (
    { cacheSession = false } = {}
 ) => {
    const login = () => {
        cy.intercept('GET', '/api/produtos?*').as('getProdutos');
        cy.visit('/')
        
        cy.title().should('eq', 'QA-Commerce - Home')
        cy.wait('@getProdutos');
    }

    const options = {
        cacheAcrossSpecs: false
    }

    if (cacheSession) {
        cy.session('qa-commerce', login, options)
    } else {
        login()
    }
 })

Cypress.Commands.add('setProduct', (product) => {
  return cy.fixture(`e2eTestData/produtos/${product}.json`).then((productData) => {
    Cypress.env('currentProduct', productData);
  });
});

Cypress.Commands.add('selectQuantity', () => {
  const product = Cypress.env('currentProduct');
  cy.contains(el.productName,product.name).parents('.card-body').within(()=>{
    cy.get(el.qtde).clear().type(product.quantity.toString());
  })
});


Cypress.Commands.add('clickAddToCart', () => {
  const product = Cypress.env('currentProduct');
  cy.contains(el.productName, product.name).parents('.card-body').within(() => {
    cy.get(el.addToCartBtn).click();
  });
});

Cypress.Commands.add('waitForAlertAndVerify', (expectedText) => {
  cy.get(el.alertToast).should('be.visible').and('contain.text', expectedText);
});

Cypress.Commands.add('verifyCartCount', () => {
  const product = Cypress.env('currentProduct');
  cy.get(el.cartCount).should('have.text', product.quantity.toString());
});

Cypress.Commands.add('clickGoToCart', () => {
  cy.contains(el.goToCart, 'CARRINHO').click();
});


