# language: en
Feature: Simple Checkout
  Background:
    Given I am on the home page
    
  @checkout @e2e
  Scenario Outline: Complete simple checkout with all required fields and payment method
    And I have added a product to the cart "<productName>"
    And I am on the checkout page
    When I fill in the required fields 
    And I select payment method
    And I confirm the purchase
    Then the order should be completed successfully

    Examples:
      | productName   |
      | moletom_capuz1 |