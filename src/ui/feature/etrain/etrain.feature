Feature: Train Search and Schedule View on eTrain

  Scenario: Search trains between two stations and view schedule
    Given I open the eTrain homepage
    When I enter "NDLS" as the source station
    And I enter "PUNE" as the destination station
    And I click on the search button
    Then I should see a list of trains running between "NDLS" and "PUNE"
    When I click on the train number of the first listed train
    Then I should be navigated to the train schedule page
    And I should see the train route, days of run, and class availability
