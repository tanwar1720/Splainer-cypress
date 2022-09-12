
/// <reference types="cypress" />


describe('foundingMember',()=>
{
    it('founding_memberPage',()=>
    {
        cy.visit('https://staging.splainer.in/')
        cy.get('.nav-link ').eq(5).should('have.css','6')
        cy.get('.nav-link ').eq(5).click()
        cy.url().should('contain','founding-member')
        cy.get('.card.note-card.mb-3').find('p').eq(0).should('contain','Dear founding members,')
        cy.get('.sign').should('have.css','1')
        cy.get('p').eq(1).find('.sign').should('be.visible')
        cy.get('p').eq(1).should('contain.text','Founder, Splainer Media')
        cy.get('.thank').should('be.visible')
        cy.get('.data.d-block').should('be.visible')
        cy.get('#slider').should('be.visible')
        //cy.get('.noUi-touch-area').trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        // cy.get('.noUi-handle.noUi-handle-lower').invoke('val', 10000).trigger('change')
        cy.get('.slider.mt-3.d-none.d-md-block').should('be.visible')
        cy.get('.note:visible').should('be.visible')
        cy.get('.btn.btn-blue-o.btn-sub').should('contain.text','Count Me In!')
        cy.get('.d-block > .text-center > .btn').click()
        cy.get('.modal').should('be.visible')
        cy.get('.modal').should('contain.text','Subscribe')
        cy.get('.close > span').click()


        


    })
})