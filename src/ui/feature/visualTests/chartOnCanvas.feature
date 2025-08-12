Feature: OCR from image

  Scenario: Extract text from image and print it in the console
    Given I visit the charts page
    When I should extract the text from canvas and print it in the console
    Then I should see the extracted text printed in the console