Feature: Order Product

  Scenario: Successful Product Order
    Given I visit the eCommerce website
    When I enter valid username and password on Ecommerce login Page
    Then I should be logged in successfully
    When I add a "Zara Coat 3" to the cart
    And I view the cart
    Then I should see "Zara Coat 3" in the cart
    When I proceed to checkout
    And I enter shipping details and confirm Order
