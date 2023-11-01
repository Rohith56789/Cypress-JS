describe('Login and Logout Tests', () => {
    const users = [
      { username: 'rohith', password: 'anos@123' },
      { username: 'S.Shredder', password: 'password@123' },
      { username: 'sarkarj', password: 'password@123' },
      { username: 'R.Swamy', password: 'password@123' },
      { username: 's.mahesh', password: 'password@123' },
      
      { username: 'KKai', password: 'password@123' },
    // { username: 'info@cixcent.com', password: 'din' },
      //  { username: 'superadmin', password: 'din' }
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
               
        cy.wait(2000)
        // Assert that the user is logged in

        cy.get('.symbol-label').click()

        // if it doesn't work
        cy.go('forward')
        // cy.get(':nth-child(7) > .menu-link').click()
        // Assert that the user is logged out
        cy.contains('Sign Out').click()
        // Assuming the login button is shown when not logged in

      });
    });
  });
  