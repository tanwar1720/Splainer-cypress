/// <reference types="cypress" />

describe('myAccount',() => {

    it('login',()=>
    {
        cy.login()

    })
     it('Accountveiw', () => {
        cy.url().should('include.text','myAccount')

        
       

    })
})