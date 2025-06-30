# language: en
Feature: Add Product to Cart
  Background:
    Given I am on the home page

  @addProduct @e2e
  Scenario Outline: Add product to cart without login and verify correct information
    And My product is "<productName>"
    When I add the product
    Then it should be added to the cart successfully
      And the product should be listed with correct quantity and price on cart
      And the total price should be calculated correctly

    Examples:
      | productName   |
      | moletom_capuz1 |