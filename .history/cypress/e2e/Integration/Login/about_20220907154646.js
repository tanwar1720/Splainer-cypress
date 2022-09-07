/// <reference types="cypress" />

describe('About module',() => {
    it('Show_aboutPage',() => {
        cy.visit('https://staging.splainer.in/about')
        cy.get('.nav-link.active').click()
        cy.get('.col-md-4.d-none.d-md-block').find('img').should('be.visible')
        cy.get('h1').should('contain.text','Life Before Splainer')
        cy.get('p').eq(0).should('be.visible')
        cy.get('.mt-0').should('contain.text','Life After Splainer')
        cy.get('p').eq(1).should('be.visible')
        cy.get('p').eq(1).find('a').should('contain.text','Click right here')
        cy.contains('a:visible','href')
        
        
        
       
    })
})