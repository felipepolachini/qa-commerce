import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the checkout page", () => {
  cy.clickGoToCart();
  cy.goToCheckout();
});

When("I fill in the required fields", () => {
  cy.fillCheckoutFormFields();
});

When("I select payment method", () => {
  cy.setPaymentMethod();
});

When("I confirm the purchase", () => {
  cy.checkTerms();
  cy.submitCheckout();
});
