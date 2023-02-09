@regression
Feature: WebdriverUniversity Contact Us Page
    @valid
    Scenario: Contact us form submission
        Given I access the WebdriverUniversity Login Portal Page
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type an eamil adress
        And I type a comment
        And I click on the submit button
        Then I should be presented with the following message validation succeeded
    # @invalid
    # Scenario: Login using invalid credentials
    #     Given I access the WebdriverUniversity Login Portal Page
    #     When I enter a username webdriver
    #     And I enter a password webdriver333
    #     And I click on the login button
    #     Then I should be presented with the following message validation failed

    # @smoke
    # Scenario Outline: Test Login via WebdriverUniversity Login Portal
    #     Given I access the WebdriverUniversity Login Portal Page
    #     When I enter a username <username>
    #     And I enter a password <password>
    #     And I click on the login button
    #     Then I should be presented with the following message <message>

    #     Examples:
    #         | username  | password     | message              |
    #         | webdriver | webdriver123 | validation succeeded |
    #         | webdriver | webdriver333 | validation failed    |
    #         | repay     | password333  | validation failed    |