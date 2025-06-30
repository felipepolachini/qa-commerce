# language: en
Feature: Required Fields Validation
  Background:
    Given I am on the home page

  @checkout @e2e @pending
  Scenario: Display error messages when required fields are missing
    And I have added a product to the cart "<productName>"
    And I am on the checkout page
    When I confirm the purchase
    Then I should see the error messages 
    And the checkout should not be completed

    Examples:
      | productName   |
      | moletom_capuz1 |
