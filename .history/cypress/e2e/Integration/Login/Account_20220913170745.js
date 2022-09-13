/// <reference types="cypress" />

describe('myAccount',() => {
       it('Accountveiw', () => {
        cy.visit('https://staging.splainer.in/')
        cy.get('li').eq(6).click()
        cy.get('#email').type('sam.tanwar1703@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#Login').click()
        cy.url().should('have.string','https://staging.splainer.in/user/myAccount')
        cy.get('.accCard').should('be.visible')
        cy.get('.accCard').eq(0).find('h2').should('have.text','my profile')
        cy.get('.accCard').eq(0).find('img').should('be.visible')
        cy.get('p').find('b').should('contain.text','sumit tanwar')
        cy.get('p').eq(0).should('be.visible')   
        cy.get('.accCard').eq(1).should('be.visible')
        cy.get('.accCard').eq(1).should('contain.text','my subscription')
        cy.get('.accCard').eq(1).find('img').should('be.visible')
        cy.get('p').eq(1).find('b').contains('Type: NONE')




        
       

    })
})