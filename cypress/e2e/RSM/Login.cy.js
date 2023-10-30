describe ('Login Test', function () {
// Test Case
it.only('Login Page', function(){
     // test step for URL launching
  
     cy.visit("https://retailsappqa.azurewebsites.net/auth/login");      
  
})
// Test Case- Login
it ('Login', function(){
     // test step for URL launching
  
     cy.visit("https://retailsappqa.azurewebsites.net/auth/login");
     cy.get(':nth-child(2) > .form-control')
       .type('rohith')
     cy.get(':nth-child(3) > .form-control')
     .type('anos@123')
     cy.get('#kt_login_signin_form > :nth-child(4)')
     .type('{enter}')

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


