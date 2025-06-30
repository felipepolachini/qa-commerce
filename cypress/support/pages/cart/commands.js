import { elements as el } from "./elements"

Cypress.Commands.add('verifyProductName', () => {
    const product = Cypress.env('currentProduct');
    cy.get(el.productName).should('have.text', product.name)
})

Cypress.Commands.add('verifyProductInfo', () => {
    const product = Cypress.env('currentProduct');
    cy.get(el.productInfo).should('contain.text', `Preço: R$${product.price}`)
        .and('contain.text', `Quantidade: ${product.quantity}`)
        .and('contain.text', `Total: R$${product.subtotal}`)
})


Cypress.Commands.add('verifyTotalValue', () => {
    const product = Cypress.env('currentProduct');
    cy.get(el.totalValue).should('have.text', `Valor total do(s) Produto(s): R$${product.subtotal}`)
})

Cypress.Commands.add('verifyShippingValue', () => {
    const product = Cypress.env('currentProduct');
    cy.get(el.shippingValue).should('have.text',`Frete: R$${product.shipping}`)
})

Cypress.Commands.add('verifyTotalValueWithShipping', () => {
    const product = Cypress.env('currentProduct');
    cy.get(el.totalValueWithShipping).should('have.text', `Valor total + Frete fixo: R$${product.totalPrice}`)
})

Cypress.Commands.add('goToCheckout', () => {
    cy.get(el.goToCheckout).click()
})


Cypress.Commands.add('clickRemoveButton', () => {
    cy.get(el.removeButton).click()
})

