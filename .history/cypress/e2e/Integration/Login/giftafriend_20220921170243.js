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
        cy.url().should('have.string','log-in')
        cy.get('.card.p-3.p-md-4').should('be.visible')
        cy.get('.card.p-3.p-md-4').find('h1').should('have.text','Login to your account!')
        cy.get('input[type="email"]').type('sam.tanwar1703@gmail.com')
        cy.get('input[type="password"]').type('123456')
        cy.get('#Login').click()


    })
})