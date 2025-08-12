Feature: Mock API Call for Product Details

  Scenario: Verify the product details after mocking the API response
    Given I visit the eCommerce website
    When I enter valid username and password on Ecommerce login Page
    Then I should be logged in successfully
    When I click on View "Zara Coat 3"
    Then I should mock the response for the product details and change the price to 100
    And I should see the updated product details with the new price