Feature: The Happilee Website

  Scenario: performing demo login

    Given I am on the login page
    When Enter credentials of the login
    Then I should go to the project creation page

  Scenario: performing project Creation

    Given I am on the project creation page
    When Enter credentials of the project
    Then should display a message

  Scenario: performing Template Creation

    Given I am on the template creation page
    When Enter the credentials of the template
    Then should create the template
    
  Scenario: performing Broadcast Creation

    Given I am on the Broadcast creation page
    When Enter the credentials of the Broadcast
    Then should create the Broadcast
  Scenario: performing Business Creation

    Given I am on the Business creation page
    When Enter the credentials of the Business
    Then should create the Business
  