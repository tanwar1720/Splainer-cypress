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
        cy.get('#email').type('sam.tanwar1703@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#Login').click()
        cy.url().should('have.string','YEARLY')
        cy.get('.col-md-7').should('be.visible')
        cy.get('.w-100').should('be.visible')
        cy.get('.col-md-7').find('h1').should('have.text','Gift a Friend')
        cy.contains('.fa-ul','sumit tanwar')
        cy.get('h2').should('contain.text','To')
        cy.get("#first_name").type('Amita').should('have.value','Amita')
        cy.get('#last_name').type('Kumar').should('have.value','Kumar')
        cy.get('#emaiId').type('pedoli2577@bongcs.com',{delay :100})
        //cy.get('select').eq(0).select('+91 (India)').click()
       // cy.get('select').eq(2).select('+91 (India)').should('have.value', 'India')
        cy.get('.custom-select').select('India')


        
     })
})