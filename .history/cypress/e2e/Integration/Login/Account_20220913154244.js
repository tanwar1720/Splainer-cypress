/// <reference types="cypress" />

describe('myAccount',() => {
       it('Accountveiw', () => {
        cy.visit('https://staging.splainer.in/')
        cy.get('li').eq(6).click()
        cy.get('#email').type('sam.tanwar1703@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#Login').click()
        cy.url().should('contain.text','myAccount')


        
       

    })
})