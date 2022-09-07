/// <reference types="cypress" />

describe('About module',() => {
    it('Show_aboutPage',() => {
        cy.visit('https://staging.splainer.in/about')
        cy.get('.nav-link.active').click()
        cy.get('.col-md-4.d-none.d-md-block').find('img').should('be.visible')
        cy.get('h1').should('contain.text','Life Before Splainer')
        cy.get('p').each(($el,index,$list),()=>
        {
             const nameText = $el.text()
             cy.log(nameText)
        })
        
       
    })
})