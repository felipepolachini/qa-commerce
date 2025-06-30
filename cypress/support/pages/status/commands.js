import { elements as el } from "./elements"

Cypress.Commands.add('checkOrderMsg',()=>{
    cy.contains(el.orderMsg, 'Obrigado pelo seu pedido')
})

Cypress.Commands.add('checkOrderFinalMsg',()=>{
    cy.contains(el.orderFinalMsg, 'Agradecemos a sua preferência!')
})

Cypress.Commands.add('checkOrderDetails', () => {
    cy.get(el.order).invoke('text').should('not.be.empty')
    cy.get(el.order).should('contain.text','Pagamento aprovado')
    const product = Cypress.env('currentProduct');
    cy.get(el.order).should('contain.text',`R$${product.totalPrice}`)
})





