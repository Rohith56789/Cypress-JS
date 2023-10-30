describe('Login and Logout Tests', () => {
    const users = [
      { username: 'rohith', password: 'anos@123' },
      { username: 'info@cixcent.com', password: 'din' },
      { username: 'S.Shredder', password: 'password@123' },
      { username: 'sarkarj', password: 'password@123' },
    //   { username: 'R.Swamy', password: 'password@123' },
    //   { username: 's.mahesh', password: 'password@123' },
      { username: 'superadmin', password: 'din' },
      // Add more user credentials as needed
    ];
  
    // Iterate through the list of users and test login/logout for each
    users.forEach((user) => {
      it(`Logs in and out as ${user.username}`, () => {
        // Visit the login page
        cy.visit('https://retailsappqa.azurewebsites.net');
  
        // Enter the username and password
        cy.get(':nth-child(2) > .form-control').type(user.username);
        cy.get(':nth-child(3) > .form-control').type(user.password);
  
        // Submit the login form
        cy.get('#kt_login_signin_form > :nth-child(4)').type('{enter}')
               


        // Assert that the user is logged in
        cy.contains('Master').click()

        cy.contains('Products').click()
        // cy.contains('Master').click()
        // cy.contains( user.username);
        // cy.wait(2500)
  
        // Perform some actions specific to the logged-in user
        // For example, navigate to different pages, perform tasks, etc.
  
        // Logout
        // cy.get('#kt_header_user_menu_toggle')
        // cy.wait(2500)
        // cy.get('.symbol-label').click()
        // cy.wait(2500)

        cy.contains('user').click()
        // cy.get('.fs-6 > :nth-child(7) > .menu-link').click()
        // Assert that the user is logged out
        cy.contains('Sign Out')
        cy.contains('Sign In'); // Assuming the login button is shown when not logged in
      });
    });
  });
  