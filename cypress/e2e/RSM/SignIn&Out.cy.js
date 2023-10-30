describe ('Login Test', function () {
    // Test Case
    // it ('Login Page', function(){
    //      // test step for URL launching
      
    //      cy.visit("https://retailsappqa.azurewebsites.net");      
      
    // })

it.only('the ', function(){
    
    cy.viewport('macbook-13')
    cy.visit("https://retailsappqa.azurewebsites.net");
    cy.visit("https://retailsappqa.azurewebsites.net/auth/login");
     cy.get(':nth-child(2) > .form-control')
       .type('rohith')
     cy.get(':nth-child(3) > .form-control')
     .type('anos@123')
     cy.get('#kt_login_signin_form > :nth-child(4)')
     .type('{enter}')
    
     cy.contains('Master').click()
     cy.contains('Rohith').click()

     cy.get('#kt_header_user_menu_toggle')
     cy.wait(2500)
     cy.get('.symbol-label').click()
     cy.wait(2500)
     cy.get('.fs-6 > :nth-child(7) > .menu-link').click()

})

    
it('the ', function(){
    //  cy.get('#\#kt_header_menu > :nth-child(2) > .menu-link')
    //  cy.get('#\#kt_header_menu > :nth-child(2) > .menu-link > .menu-title')
    cy.contains('Master').click()
    cy.wait(20)
    cy.contains('Products').click()
    // works better for Stones
    cy.contains('Stones').click()   
    cy.get('.card-toolbar > .d-flex > .btn').click()
    cy.get('app-add-edit-stone > :nth-child(2) > form.ng-pristine > .card > .card-body > .row > .col-md-12 > .form-control').type('Citrine')
    // cy.get('app-add-edit-stone > :nth-child(2) > form.ng-pristine > .card > .card-body > .row > :nth-child(2) > .form-control').type(260)
    cy.get(':nth-child(4) > .form-control').type('100')
    cy.get('form.ng-dirty > .card > .card-body > .row > .col-md-auto > .btn').click()
    cy.get('.btn-close').click()
    cy.contains('Products').click()
   
    
    cy.get(':nth-child(1) > .cdk-column-actions > .me-2 > a > .material-symbols-rounded').click()
   
    cy.get('form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-control').clear().type('Chains-L ')
    cy.get('form.ng-valid > :nth-child(1) > :nth-child(2) > .chosen-select > .ng-select-container').click()
    // cy.get('form.ng-dirty > :nth-child(1) > :nth-child(2) > .chosen-select > .ng-select-container > .ng-arrow-wrapper').click()
    cy.get('#aceedc45aaeb-2 > .ng-option-label').click()
    // to clear 
    cy.get(':nth-child(2) > .chosen-select > .ng-select-container > .ng-clear-wrapper').click()
    
    // cy.go('forward')
    cy.get(':nth-child(2) > :nth-child(1) > .chosen-select > .ng-select-container').click().clear().type('Anklet{enter}')  
    cy.get(':nth-child(2) > :nth-child(1) > .chosen-select > .ng-select-container > .ng-arrow-wrapper').click()
    cy.get('.col-lg-6.ng-star-inserted > .form-control').clear().type('10')
    cy.go('forward')
    // cy.get('.mt-3.ng-star-inserted > :nth-child(1) > .chosen-select > .ng-select-container').click()
    // cy.get('.mt-3.ng-star-inserted > :nth-child(1) > .chosen-select > .ng-select-container > .ng-arrow-wrapper').select('cm').click()
    cy.get('.ng-star-inserted > .material-symbols-rounded').click()

    cy.get('.mt-3.ng-star-inserted > :nth-child(1) > .chosen-select > .ng-select-container')
    cy.get('.mt-8 > .col-md-12 > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(1)').click()
    cy.get('.col-md-4 > .btn').click()
    // pen button
    cy.get(':nth-child(1) > :nth-child(2) > [style="cursor: pointer; margin-right: 5px;"]').click()
    // save button
    cy.get('.col-md-4 > .btn').click()
    // x button to close pop up
    cy.get('.col-md-2 > .d-grid > .btn-close').click()

    // HUID -
    cy.get(':nth-child(6) > :nth-child(2) > .form-check-input').click()
    // HUID -
    cy.get(':nth-child(6) > :nth-child(3) > .form-check-input')
    // Fixed 
    cy.get('.col-lg-2 > .form-check-input')
    // Weight
    cy.get('.col-lg-5 > .form-check-input').click()
    // Input Field
    cy.get(':nth-child(9) > :nth-child(1) > .form-control').clear().type('500').click()
    // + Range
    cy.get(':nth-child(9) > :nth-child(2) > .btn').click()
    // to enter range from 
    cy.get(':nth-child(3) > :nth-child(1) > .row > :nth-child(1) > .form-control').click().type('50').click()
    
    // to enter range - to
    cy.get(':nth-child(3) > :nth-child(1) > .row > .col-lg-3 > .form-control').click().type('100').click()
    // to enter changes per gram
    cy.get(':nth-child(3) > .form-control').click().type('1200')
    // to save the product
    cy.get('.d-grid > .btn').click()
    // x button to close entire product pop up
    // cy.contains('.btn-close').click()

   

   
    cy.url().should('include','/manage-prices')



        
    // cy.contains('Purities').click()
    // cy.contains('Counters').click()
    // cy.contains('IP Security').click()
    

    //make it work or else leave it

    // cy.contains('More').trigger('mouseover')
    // cy.get('Sales').should('be.visible')
    // cy.url().should('include','/Sales') 

    // cy.contains('Old Jewellery').click()

    // cy.contains('Sales').click()
    // cy.contains('Stock Tally').click()
    // cy.contains('Daily Accounts').click()
    // cy.contains('Manage Approval').click()
    // cy.contains('Staff').click()
    // cy.contains('Customers').click()
    // cy.contains('Outstandings').click()
    // cy.contains('Transactions').click()
    // cy.contains('Delivery').click()
    // cy.contains('General Transactions').click()
   




       
       })
})