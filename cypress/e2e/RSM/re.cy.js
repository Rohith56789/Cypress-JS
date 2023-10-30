describe('Login Test',()=>{

    it('Sign In Form',()=>{
        cy.viewport('macbook-13')
     
    cy.visit("https://retailsappqa.azurewebsites.net");

    cy.get('[id="input- "]').click().type('rohith{enter}')
    cy.get('[id="input- "]').click().type('anos@123{enter}')

    // cy.contains('input:pasword').click().type('rohith{enter}')
    cy.get('type:Submit').click()
    
    // cy.get('#username').type('rohith{enter}')
    // cy.get('#password').type('anos@123{enter}')


})

})