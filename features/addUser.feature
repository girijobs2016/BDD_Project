Feature: Add user to User Management
    
    Scenario Outline: Adding User to user-management page
        Given User Navigates directly to user-management page
        When Admin creates user by providing mandatory details "<firstname>","<lastname>","<email>","<gender>","<businessUnit>",DOB and "<adminFlag>" and save the details
        Then verify user added to user-management successfully "<verifyColName>"
        Examples:
            |firstname | lastname | email | gender | businessUnit | adminFlag | verifyColName | 
            | demo1 | test1 | demo123@gmail.com | male | IT Admin | yes | yes |
            | demo2 | test2 | demo234@gmail.com | female | Finance | no | no | 
            | demo3 | test3 | demo345@gmail.com | other | Development | yes | yes |


