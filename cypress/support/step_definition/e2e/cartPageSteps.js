import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Then("the product should be listed with correct quantity and price on cart", () => {
  cy.clickGoToCart()
  cy.verifyProductInfo()
});

Then("the total price should be calculated correctly", () => {
  cy.verifyTotalValue()
  cy.verifyShippingValue()
  cy.verifyTotalValueWithShipping()
});