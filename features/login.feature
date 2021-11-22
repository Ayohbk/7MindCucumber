Feature: EMAIL LOG IN

    Feature : This feature is to test that a user is able to log into the 7mind 
    app with valid username and password.
  
   Scenario Outline: As a user, I should be logged in successfuly after entering valid login details

        Given User is on the first page
        When User clicks on CONTINUE button
        Then LOGIN or REGISTER option page is displayed
        When User clicks on LOGIN button
        Then Email or Facebook login option page is displayed
        When User clicks on EMAIL button 
        Then email address input field is displayed to the user
        When User enters valid email address and clicks enter on phone touchscreen
        Then password input field is displayed to the User
        When User enters valid password and clicks enter on the phone touchscreen
        Then User is successfully logged in and homepage is displayed
        

      

    
  

  