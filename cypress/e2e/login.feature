Feature: Testing login for a Standard user

    A Standard user should have a glitch free login experience
    Scenario: A standard user should be able to login to Zero Bank
    Given I launch the Zero Bank site
    When I submit login
    Then I should see the home page