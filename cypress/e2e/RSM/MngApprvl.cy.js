describe ("Approval Module", function(){
    // Test Case
    it('Manage Approval Page ', function(){
        cy.visit("https://retailsappqa.azurewebsites.net");
        cy.viewport('macbook-13')
        cy.visit("https://retailsappqa.azurewebsites.net");
         cy.get(':nth-child(2) >.form-control')
          .type('rohith')
         cy.get(':nth-child(3) >.form-control')
        .type('anos@123')
         cy.get('#kt_login_signin_form > :nth-child(4)')
        .type('{enter}')

        cy.contains("Master").click()
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.contains("Dashboard").click()
        cy.wait(1000)
        cy.contains("Prices").click()
        cy.wait(1000)
        cy.contains("Inventory").click()
        cy.contains("Estimation").click()
        
       
              // Select the element you want to hover over
            //   cy.get('span.menu-link')
            cy.get('span.menu-link > #font-styles').invoke('show')
            cy.wait(1000)
            cy.contains('Staff').invoke('show')
                // .trigger('mouseover')
                // .should('have.css', 'background-color', 'rgb(255, 77, 0)'); // Replace with your assertions
          
        // cy.get('span.menu-link')
        // cy.contains("More").click()
        // more
        // cy.contains('More').trigger('mouseover')
        cy.wait(1000)
        cy.contains('Staff').trigger('mouseover').should('be.visible')
        cy.wait(1000)
        cy.contains('Customers').trigger('mouseover').should('be.visible')
        cy.wait(1000)
        cy.contains('Transactions').trigger('mouseover').should('be.visible')
        cy.wait(1000)
        cy.contains('Daily Accounts').trigger('mouseover').should('be.visible')
        
        cy.wait(1000)   
        cy.contains("Manage Approval").click()
        cy.wait(1000)
        cy.scrollTo('bottomRight').trigger('mouseover')
       
    
    })

})