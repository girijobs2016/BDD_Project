Feature: Add user to User Management
    Background:
        Given Navigate to User Management Page
        

    Scenario Outline: Add User as Non Admin
        When User provides "<firstname>" "<lastname>" "<email>"
        And  select "<gender>" "<businessUnit>"
        And select DOB
        And Disable Admin button
        And click on save and close button
        Then User added successfully
        Examples:
            | firstname | lastname | email | gender | businessUnit |
            | demo1 | test1 | demo123@gmail.com | male | IT Admin | 
            | demo2 | test2 | demo234@gmail.com | female | Finance | 
            | demo3 | test3 | demo345@gmail.com | other | Development | 

    Scenario Outline: Add user as Admin
        When User provides "<firstname>" "<lastname>" "<email>"
        And  select "<gender>" "<businessUnit>"
        And select DOB
        And click on save and close button
        Then User added successfully
        Examples:
            | firstname | lastname | email | gender | businessUnit |
            | demo4 | test4 | demo456@gmail.com | male | IT Admin |