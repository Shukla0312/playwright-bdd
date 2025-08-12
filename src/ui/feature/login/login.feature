@feature:Login
Feature: Login Functionality
  Scenario: Successful login with valid credentials
    Given I visit the eCommerce website
    When I enter valid username and password on Ecommerce login Page
    Then I should be logged in successfully
    When I click on the logout button
    Then I should be logged out successfully

  Scenario: Failed login with invalid credentials
    Given I visit the eCommerce website
    When I enter invalid username and password on Ecommerce login Page
    Then I should see an error message

  Scenario: Failed login without credentials
    Given I visit the eCommerce website
    When I click on the login button without entering credentials
    Then I should see a mandatory field error message