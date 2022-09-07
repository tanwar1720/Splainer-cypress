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
        cy.contains('Click right here').click()
        cy.go('back')
        cy.contains('Sign up for splainer').click()
        cy.go('back')
        cy.get('h3').each(($el,index,$list),()=>
        {  
             const name = $el.contains('Lakshmi Chaudhry','Sara Varghese','Rachel John','Ayaan Malhotr','Anushree Kaushal')

               if ($el.name))
               {
                    cy.log('Yes we the owner of Splainer')
                
               }
               else{
                     cy.log('Not found')
               }
        })
        
        
        
       
    })
})