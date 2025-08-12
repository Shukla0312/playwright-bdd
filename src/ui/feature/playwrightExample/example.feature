Feature: Example feature

    Scenario: Open Playwright website
        Given I open the Playwright website
        Then the title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"
        When I click on the "Docs" link
        And I click on the "How to install Playwright" link
        Then I should see the following headings and content:
            | Installing Playwright  |
            | init playwright@latest |
            | What's Installed       |
        And I should see the code block with text "npm init playwright@latest"
        When I click on the "Community" link
        And I click on the "Ambassador page" link
        Then I should see the "Meet the Ambassadors" text