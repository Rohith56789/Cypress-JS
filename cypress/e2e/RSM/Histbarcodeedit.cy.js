describe ('Login Test', function () {
// Test Case
it('Login Page', function(){
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
        cy.wait(50)
        cy.contains('Stock Summary').click()
        // cy.wait(60)
        cy.contains('History').click()
        // navigates to generate MRP
        cy.get('.btn-group > :nth-child(2)').click()

// to edit barcode with number 
cy.get('.barcode number').find('25').should('have.length',5)
		.and('have.class', 'dropdown')     

cy.get('.col-md-6 > .chosen-select > .ng-select-container').click().clear().type('Gold{enter}')
cy.get(':nth-child(2) > .col-sm-6 > .chosen-select > .ng-select-container').click().type('pure{enter}')
// inside block
cy.get(':nth-child(2) > .col-sm-6 > .chosen-select > .ng-select-container').click().type('Gold{enter}')
cy.get('silver').click().type('Gold{enter}')


})

})