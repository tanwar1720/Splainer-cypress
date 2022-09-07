/// <reference types="cypress" />

describe('About module', () => {
    it('Show_aboutPage', () => {
        cy.visit('https://staging.splainer.in/about')
        cy.get('.nav-link.active').click()
        cy.get('.col-md-4.d-none.d-md-block')
            .should('be.visible')
            .and('have.prop', 'naturalWidth')
            .should('be.greaterThan', 0)

    })
})