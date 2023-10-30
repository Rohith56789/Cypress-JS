describe('Visiting the Login Page', function () {

    // Test case 1
  
       it('Visit ', function (){
  
          // test step for URL launching
  
          cy.visit("https://retailsappqa.azurewebsites.net/auth/login");
         
  
       });
      
  
    });




   //  describe('Login Test', function () {

   //    // Test case 1
    
   //       it('Scenario 1 - positive', function (){
    
   //          // test step for URL launching
    
   //          cy.visit("https://retailsappqa.azurewebsites.net/auth/login");
   //          cy.title().should( 'eq', 'SignIn')
    
   //       });
   //        // Test case 2
    
   //       it('Scenario 2 - Negative', function (){
    
   //          // test step for URL launching
    
   //          cy.visit("https://retailsappqa.azurewebsites.net/auth/login");
   //          cy.title().should( 'eq', 'No SignIn ')
   //       });
    
   //    });