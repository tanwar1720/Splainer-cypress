// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// This is a parent command --
 Cypress.Commands.add('login', (Loginflow) => { 
    let data
describe('Loginpage', () => {
    before(() => {
        cy.fixture("example").then((result) => {
            data = result
        })
    })
    it('pageobjectdesgin', () => {
        cy.visit('https://staging.splainer.in/')
        cy.get('li').eq(6).click()
        cy.get('#email').type(data.email)
        cy.get('#password').type(data.Password)
        cy.get('#Login').click()

    })
})



 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

