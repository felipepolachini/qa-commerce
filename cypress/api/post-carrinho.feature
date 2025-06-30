Feature: Cart API Validation
  As a user
  I want to add products to cart
  So that I can manage my shopping cart

@api @addProduct
Scenario Outline: Add product to cart successfully
Given My product to cart is "<product>"
When I execute post to insert product in the cart
Then the response status should be "201"
    And the product should be added to cart succesfully

When I get cart by product user Id
    Then the response status should be "200"
    And the cart response should contain the expected "<product>"

Examples:
  | product |
  | ecobag |
