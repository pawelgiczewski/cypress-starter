Feature: Test feature

  @all @first
  Scenario: This is test scenario 1
    Given Open site
    Then Click link

  @all @second
  Scenario: This is test scenario 2
    Given Open site
    Then Click link

  @all
  Scenario: This is test scenario 3
    Given Open site
    Then Click link

  @all @stubbed
  Scenario: Test mock
    Given Open site
    Then Click navigating to api
    Then Check if stubbed json is displayed