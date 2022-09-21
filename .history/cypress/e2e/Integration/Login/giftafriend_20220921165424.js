/// <reference types="cypress" />

describe('Gift a friend',()=>
{
 beforeEach(()=>
 {
    cy.visit('https://staging.splainer.in/')
    cy.get('.nav-link').eq(1).click()
 })
     it('Without login',()=>
    {
        cy.get('[data-type="YEARLY"]').eq(1).click()
        cy.wait(1000)
        cy.url().should('contain.text','log-in')

    })
})