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
        cy.get('[data-type="YEARLY"]').click()


    })
})