describe('Daily Accounts', () => {

  it('Add Transaction', () => {
        
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



  })
})