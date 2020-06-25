Feature: Add user to User Management
    
    Scenario Outline: Adding User to user-management as General User
        Given User Navigates directly to user-management page and click add user
        When User provides basic details like firstname as "demo", lastname as "test" and email as "demo123@gmail.com"
        And User disable admin flag indicator
        And  User selects the required "<gender>" ,"<businessUnit>", DOB and save the details
        Then User added successfully to user-management
        Examples:
            | gender | businessUnit |
            | male | IT Admin | 
            | female | Finance | 
            | other | Development | 

    Scenario Outline: Adding User to user-management as admin User
        Given User Navigates directly to user-management page and click add user
        When User provides basic details like firstname as "demo", lastname as "test" and email as "demo123@gmail.com"
        And  User selects the required "<gender>" ,"<businessUnit>", DOB and save the details
        Then User added successfully to user-management
        Examples:
            | gender | businessUnit |
            | male | IT Admin | 

