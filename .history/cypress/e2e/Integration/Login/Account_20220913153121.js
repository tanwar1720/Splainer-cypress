/// <reference types="cypress" />

describe('myAccount',() => {

    it('login',()=>
    {
        cy.login()

    })
     it('Accountveiw', () => {
        cy.visit('https://staging.splainer.in/user/myAccount')


        
       

    })
})