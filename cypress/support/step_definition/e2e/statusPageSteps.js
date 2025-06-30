import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("the order should be completed successfully", () => {
  cy.checkOrderMsg()
  cy.checkOrderFinalMsg()
  cy.checkOrderDetails()
});
