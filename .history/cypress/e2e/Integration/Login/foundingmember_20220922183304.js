
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
        cy.get('.slider.mt-3.d-none.d-md-block').should('be.visible')
        cy.get('.note:visible').should('be.visible')

        var priceSlider = cy.get('#slider');
        cy.log(priceSlider)
          cy.get('.noUi-touch-area')
          .invoke('val', 25)
          .trigger('change')
          .get('.noUi-touch-area').click()
          





        cy.get('.btn.btn-blue-o.btn-sub').should('contain.text','Count Me In!')
        cy.get('.d-block > .text-center > .btn').click()
        cy.get('.modal').should('be.visible')
        cy.get('.modal').should('contain.text','Subscribe')
        cy.get('.close').click({force:true})
       // cy.get('.modal-body').find('.close > span').click()
        cy.get('.container').eq(2).should('be.visible')
        cy.get('.container').eq(2).should('contain.text','splainer')


        


    })
})