Feature: End to end cart process

Background: 
    Given User navigates to the application

Scenario Outline: Add to cart
    And User enter the username as "<username>"
    And User enter the password as "<Password>"
    When User click on the login button
    Then Login should be sucess with title as "Swag Labs"
    And user add an item to the cart
    Then the cart should get updated
    Then do checkout process

    Examples: 
      | username                | Password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |