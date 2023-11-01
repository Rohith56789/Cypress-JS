describe ('Login Test', function () {
    it.only('Login', function(){
        // test step for URL launching
     
        cy.visit("https://retailsappqa.azurewebsites.net/auth/login");
        cy.get(':nth-child(2) > .form-control')
          .type('rohith')
        cy.get(':nth-child(3) > .form-control')
        .type('anos@123')
        cy.get('#kt_login_signin_form > :nth-child(4)')
        .type('{enter}')
   
        cy.wait(2000)
        cy.contains("Master").click()
        cy.wait(2000)
        cy.scrollTo('bottom') // Scroll 'sidebar' to its bottom
        cy.scrollTo('top') // Scroll 'sidebar' to its top
        cy.wait(2000)
        cy.contains('More').trigger('mouseover').should('be.visible')
        cy.contains('Staff').trigger('mouseover').should('be.visible'["background-color"-"rgb(242, 242, 242)"]);
    
 
        cy.contains('Customers').trigger('mouseover').color('black').should('be.visible')
        cy.contains('OutStandings').trigger('mouseover').should('be.visible')
        cy.contains('Transactions').trigger('mouseover').should('be.visible')
        cy.contains('Delivery').trigger('mouseover').should('be.visible')
        cy.contains('General Transactions').trigger('mouseover').should('be.visible')
        cy.contains('Old Jewellery').trigger('mouseover').should('be.visible')
        cy.contains('Sales').trigger('mouseover').should('be.visible')
        cy.contains('StockTally').trigger('mouseover').should('be.visible')
        cy.contains('Daily Accounts').trigger('mouseover').should('be.visible')
        cy.contains('Manage Approval').trigger('mouseover').should('be.visible')
        // cy.get('').trigger('mouseover').should('be.visible')
 


   })
})