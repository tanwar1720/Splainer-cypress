/// <reference types="cypress" />

describe('Loginpage', () => {
    before(() => {
        cy.fixture("example").then((result) => {
            let data = result
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