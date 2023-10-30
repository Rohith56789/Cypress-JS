describe ('Login Test', function () {
    // Test Case
it('the ', function(){
    cy.visit("https://retailsappqa.azurewebsites.net");
    cy.viewport('macbook-13')
    cy.visit("https://retailsappqa.azurewebsites.net");
     cy.get(':nth-child(2) > .form-control')
       .type('rohith')
     cy.get(':nth-child(3) > .form-control')
     .type('anos@123')
     cy.get('#kt_login_signin_form > :nth-child(4)')
     .type('{enter}')

    cy.contains('Master').click()
    cy.contains('Products').click()

    cy.contains('Prices').click()
    cy.contains('Inventory').click()
    cy.wait(2000)
    cy.contains('History').click()
    cy.wait(2000)
    // to scroll down 
    cy.scrollTo(0, 100) // Scroll the window 500px down
    cy.wait(5000)

    // scroll to bottom
    cy.scrollTo('bottom') // Scroll 'sidebar' to its bottom
    cy.wait(2000)
    // pages
    cy.get('.mat-select-arrow').click()
    // cy.get('#mat-option-15 > .mat-option-text').click()
    cy.get('#mat-option-11').click()
    // cy.get('.row > .d-flex > :nth-child(2)').type('100').click()
    cy.scrollTo('top')
    
    cy.wait(5000)

      cy.contains('Estimation').click()
    // more tab 
    cy.contains('More').click()
    cy.contains('Staff').click()

    cy.contains('Add Staff').click()    

    cy.get(':nth-child(1) > :nth-child(1) > .form-control').click().type('B')
    cy.get('.ng-invalid.ng-dirty > .card > .card-body > :nth-child(1) > :nth-child(2) > .form-control').click().type('Anandi')
    // username
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').click().type('BAnandi')
    cy.get(':nth-child(4) > .form-control').click().type('1248464865')
    cy.get(':nth-child(5) > .form-control').click().type('anandi@gmail.com')
    // address
    cy.get('.col-lg-12 > .input-group > .form-control').type('Tilak Nagar')
    // Area
    cy.get(':nth-child(2) > :nth-child(3) > .form-control').type('Lake')
    // select City
    cy.get(':nth-child(4) > .chosen-select > .ng-select-container').type('Mumbai{enter}')
    // role --  needed click()
    cy.get(':nth-child(1) > .chosen-select > .ng-select-container').type('Staff{enter}') 
    // aadhar number
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').click().type('8484848451')
    
    cy.scrollTo(0, 500) // Scroll the window 500px down
      cy.scrollTo('bottom') // Scroll 'sidebar' to its bottom

    // Calendar job Start Date
    cy.get(':nth-child(3) > .mt-5 > .form-control').type('20/05/1990')
   
})

})