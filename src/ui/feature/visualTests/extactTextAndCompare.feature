Feature: OCR from image

  Scenario: Extract text from image and print it in the console
    Given I navigate to Skills You Need website
    When I capture the image
    Then I should see the extracted text printed in the console