Feature: User Authentication tests

  Background: 
    Given User navigates to the application
    #And User click on the login link

  Scenario Outline: Login should be sucess
    And User enter the username as "<username>"
    And User enter the password as "<Password>"
    When User click on the login button
    Then Login should be sucess with title as "Swag Labs"

    Examples: 
      | username                | Password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

  Scenario Outline: Login should be not be sucess
    And User enter the username as "<username>"
    And User enter the password as "<Password>"
    When User click on the login button
    Then Login should fail
Examples: 
      | username                | Password     |
      | locked_out_user         | secret_sauce |