// cypress/e2e/spec.cy.js
// import userdata from '../../fixtures/data.json'
// it('loads the same object', () => {
//   cy.fixture('user').then((users) => {
//     expect(users, 'the same data').to.deep.equal(users.name)
//   })
// // })


// describe('Login and Logout Tests', () => {

// it.only('Login Page',()=>{
// const data = require('./data.json');
// data.forEach((user) => {
// cy.visit('https://retailsappqa.azurewebsites.net');
// cy.get(':nth-child(2) >.form-control').type(user.username);
// cy.get(':nth-child(3) >.form-control').type(user.password);
// cy.get('#kt_login_signin_form > :nth-child(4)').type('{enter}')
// cy.contains("Master")

// })
// cy.get('.user-profile').should('be.visible');
import userdata from '../../fixtures/data.json'
describe('Login and Logout Tests', () => {

    before(function(){
        cy.fixture('testdata').then(function(testdata){
            this.data=testdata
        })
    })
    it('Login Page',()=>{
        cy.fixture('data.json').as('userData')

        cy.visit('https://retailsappqa.azurewebsites.net')
        
        cy.get(':nth-child(2) >.form-control').type("userData.name")
        cy.get(':nth-child(3) >.form-control').type("userData.pass")
        cy.get('#kt_login_signin_form > :nth-child(4)').type('{enter}')

        cy.wait(2000)
        cy.contains("Master")

    })

})