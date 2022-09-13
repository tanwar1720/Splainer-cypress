/// <reference types="cypress" />

describe('myAccount',() => {

   // it('login',()=>
   // {
    //    cy.login()

   // })
     it('Accountveiw', () => {
       cy.login()
       cy.visit('https://staging.splainer.in/user/myAccount')
        cy.wait(1000)
        cy.url().should('contain.text','myAccount')


        
       

    })
})