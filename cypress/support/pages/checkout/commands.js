import { elements as el } from "./elements"
import { faker } from '@faker-js/faker'

Cypress.Commands.add('fillCheckoutFormFields', () => {
    cy.get(el.firstName).type(faker.person.firstName())
    cy.get(el.lastName).type(faker.person.lastName())
    cy.get(el.address).type(faker.location.streetAddress())
    cy.get(el.number).type(faker.number.int({ min: 1, max: 5 }))
    cy.get(el.cep).type(faker.location.zipCode('########'))
    cy.get(el.phone).type(faker.phone.number().substring(0, 10))
    cy.get(el.email).type(faker.internet.email())
})

Cypress.Commands.add('setPaymentMethod', () => {
    const product = Cypress.env('currentProduct');
    cy.get(`#payment-${product.payment}`).check().should('be.checked')
    
    if (product.payment === 'card') {
        fillCreditCard()
    } else if (product.payment === 'pix') {
        validatePixDetails()
    } else if (product.payment === 'boleto') {
        validateBoletoDetails()
    }
})


Cypress.Commands.add('checkTerms', () => {
    cy.get(el.terms).check().should('be.checked')
})

Cypress.Commands.add('submitCheckout', () => {
    cy.get(el.submitButton).click()
})


function validatePixDetails() {
    cy.get(el.pixDetails).should('be.visible')
        .and('contain.text', 'Detalhes do Pix')
        .and('contain.text', 'Chave Pix:')
    cy.get(el.pixKey).should('not.be.empty')
}

function validateBoletoDetails() {
    cy.get(el.boletoDetails).should('be.visible')
        .and('contain.text', 'Detalhes do Boleto')
        .and('contain.text', 'Código de Boleto:')
    cy.get(el.boletoCode).should('not.be.empty')
}


function fillCreditCard() {
    const futureDate = faker.date.between({ from: '2026-01-01', to: '2030-12-31' });
    const expiry = `${String(futureDate.getMonth() + 1).padStart(2, '0')}/${String(futureDate.getFullYear()).slice(-2)}`;
    
    cy.get(el.cardNumber).type(faker.finance.creditCardNumber());
    cy.get(el.cardExpiry).type(expiry);
    cy.get(el.cardCvc).type(faker.finance.creditCardCVV());
};




