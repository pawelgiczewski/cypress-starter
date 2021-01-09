Feature: App displays random cat facts

  @e2e
  Scenario: Random cat fact is displayed after clicking a button
    When User clicks Ask server for random cat fact button
    Then Number of displayed cat facts is 1
    When User clicks Ask server for random cat fact button
    Then Number of displayed cat facts is 2
    When User clicks Ask server for random cat fact button
    Then Number of displayed cat facts is 3

  @stub
  Scenario: Full cat fact text is displayed if it does not exceed 120 characters
    Given Cat fact API responds with text "This fact does not exceed 120 characters"
    When User clicks Ask server for random cat fact button
    Then Fact with text "This fact does not exceed 120 characters" is displayed

  @stub
  Scenario: Cat fact text is truncated if it exceeds 120 characters
    Given Cat fact API responds with text "This fact exceeds 120 characters, so it has to be truncated to 120 characters and will be followed with three dots. We cannot display so long messages :("
    When User clicks Ask server for random cat fact button
    Then Fact with text "This fact exceeds 120 characters, so it has to be truncated to 120 characters and will be followed with three dots. W..." is displayed

  @stub
  Scenario: Loading spinner is displayed if server responds slowly
    Given Cat fact API responds with 2000 milliseconds delay
    When User clicks Ask server for random cat fact button
    Then Loading spinner is displayed

  @stub
  Scenario: Error popus is displayed when cat facts API is unavailable
    Given Cat fact API returns 500 http code
    When User clicks Ask server for random cat fact button
    Then Error popup is displayed
    When User clicks OK button
    Then Error popup is not displayed
