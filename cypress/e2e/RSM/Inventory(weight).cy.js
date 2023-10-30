
describe ('Login Test', function () {
    // Test Case
    it('Login Page', function(){
         // test step for URL launching
      
         cy.visit("https://retailsappqa.azurewebsites.net");      
      
    })
    // Test Case- Login
    it.only('Login', function(){
         // test step for URL launching
         cy.viewport('macbook-15')
         cy.visit("https://retailsappqa.azurewebsites.net");
         cy.get(':nth-child(2) > .form-control')
           .type('rohith')
         cy.get(':nth-child(3) > .form-control')
         .type('anos@123')
         cy.get('#kt_login_signin_form > :nth-child(4)')
         .type('{enter}')


        cy.contains('Master').click()
        cy.contains('Products').click()
        cy.wait(10)
        //  Navigate on to Inventory
        cy.contains('Inventory').click()
        cy.wait(5000)
        cy.contains('Stock Summary').click()
        // cy.wait(60)
        cy.contains('History').click()
        // navigates to Wgt
        cy.get('.btn-group > :nth-child(1)').click()
      
        cy.wait(100)
      
        cy.get(':nth-child(2) > .chosen-select > .ng-select-container > .ng-value-container > .ng-input').click()
        cy.get(':nth-child(2) > .chosen-select > .ng-select-container > .ng-arrow-wrapper').type('Gold')
        cy.get(':nth-child(3) > .chosen-select > .ng-select-container').click().type('carat{enter}')
        cy.get(':nth-child(3) > .chosen-select > .ng-select-container > .ng-arrow-wrapper').click()
        cy.get('#btnSearch').click()


        cy.scrollTo(0, 500) // Scroll the window 500px down
        cy.get('.sidebar').scrollTo('bottom') // Scroll 'sidebar' to its bottom

        cy.get('.mat-paginator-container')
        cy.get('.mat-form-field-infix')

        cy.get('.mat-select-arrow').click()
        // cy.get('#mat-option-13 > .mat-option-text')
        cy.get('#mat-option-15 > .mat-option-text').click()
        
        // cy.get('.btn-group > :nth-child(2)').select(2)
        // cy.get(':nth-child(1) > .cdk-column-actions > .row > .print-icon > .material-symbols-rounded').click()
        // cy.go('back')
        // cy.contains('Master')

     // convert to pdf 
        cy.get('.row > .d-flex > :nth-child(2)').click().type('100').click()
       
    })
   
    



    // it('manage-Master' , function() {
    
    //     cy.visit("https://retailsappqa.azurewebsites.net/dashboard");
    //     cy.get('#\#kt_header_menu > :nth-child(2) > .menu-link')
    //     cy.get('#\#kt_header_menu > :nth-child(2) > .menu-link > .menu-title')
    //     .type('Click')
    // });
    
    
})