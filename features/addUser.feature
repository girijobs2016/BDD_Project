Feature: Add user to User Management
    Background:
        Given Navigate to User Management Page
        When User provides firstname lastname email <gender> dob <businessUnit>

    Scenario Outline: Add User without Admin Enabled
        And click on save and close button
        Then User added successfully
        Examples:
            | gender | businessUnit |
            | Male   | IT Admin     |
            | Female | Finance      |
            | Other  | Development  |

    Scenario Outline: Add user with Admin Enabled
        And Enable Admin button
        And click on save and close button
        Then User added successfully
        Examples:
            | gender | businessUnit |
            | Male   | IT Admin     |