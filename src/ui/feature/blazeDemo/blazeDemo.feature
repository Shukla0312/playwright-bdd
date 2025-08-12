Feature: Purchase a flight from Boston to London on BlazeDemo

  Scenario: User selects a United Airlines flight and completes the purchase

    Given I visit BlazeDemo flight page
    When I select departure city as "Boston"
    And I select destination city as "London"
    And I click on Find Flights
    And I choose the flight with airline "United Airlines"
    And I fill in the passenger details:
      | Name               | Rahul Shukla     |
      | Address            | 123 Main St.     |
      | City               | Anytown          |
      | State              | Delhi            |
      | Zip Code           | 123456           |
      | Credit Card Number | 4111111111111111 |
      | Month              | 11               |
      | Year               | 2027             |
      | Name on Card       | Rahul Shukla     |
    And I click on Purchase Flight
    Then I should see the message "Thank you for your purchase today!"
