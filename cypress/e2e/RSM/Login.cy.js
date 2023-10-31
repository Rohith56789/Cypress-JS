describe ('Login Test', function () {
// Test Case
it('Login Page', function(){
     // test step for URL launching
  
     cy.visit("https://retailsappqa.azurewebsites.net/auth/login");      
  
})
// Test Case- Login
it.only('Login', function(){
     // test step for URL launching
  
     cy.visit("https://retailsappqa.azurewebsites.net/auth/login");
     cy.get(':nth-child(2) > .form-control')
       .type('rohith')
     cy.get(':nth-child(3) > .form-control')
     .type('rohith')
     cy.get('#kt_login_signin_form > :nth-child(4)')
     .type('{enter}')

    
     cy.wait(2000)
     cy.scrollTo('bottom') // Scroll 'sidebar' to its bottom
     
})
// Test Case- user Unable to Login 
// it ('unable to Login ', function(){
//      // test step for URL launching
  
//      cy.visit("https://retailsappqa.azurewebsites.net/auth/login");
//      cy.get(':nth-child(2) > .form-control')
//        .type('rohith')
//      cy.get(':nth-child(3) > .form-control')
//      .type('rohith')
//      cy.get('#kt_login_signin_form > :nth-child(4)')
//      .type('{enter}')

// })


});


