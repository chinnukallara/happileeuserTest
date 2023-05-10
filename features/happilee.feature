Feature: The Happilee Website

  Scenario Outline: performing demo login

    Given I am on the login page
    When Enter credentials of the login
    Then I should go to the project creation page

  Scenario Outline: performing template Creation

    Given I am on the project creation page
    When Enter credentials of the project
    Then should display a message