Feature: Product API Validation
  As a user
  I want to retrieve product information
  So that I can view product details

@product @api
Scenario Outline: Get product by ID succesfully
Given My product data is "<product>"
When I get product by its Id
Then the response status should be "200"
    And the response json should contain the expected data

 Examples:
      | product |
      | garrafa |