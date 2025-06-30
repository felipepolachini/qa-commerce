import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the home page", () => {
  cy.accessPage()
});

Given("My product is {string}", (productName) => {
  cy.setProduct(productName)
});

When("I add the product", () => {
  cy.selectQuantity()
  cy.clickAddToCart()
});

Given("I have added a product to the cart {string}", (productName) => {
  cy.setProduct(productName);
  cy.selectQuantity();
  cy.clickAddToCart();

  cy.waitForAlertAndVerify("Produto adicionado ao carrinho!")
  cy.verifyCartCount()
});

Then("it should be added to the cart successfully", () => {
  cy.waitForAlertAndVerify("Produto adicionado ao carrinho!")
  cy.verifyCartCount()
});

