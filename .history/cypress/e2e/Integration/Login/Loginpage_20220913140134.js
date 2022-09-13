/// <reference types="cypress" />

let data
describe('Loginpage',()=>
{   before(function(){
    cy.fixture("example").then(function(result)
    {
        data = result
    })
})
    it('pageobjectdesgin',()=>
    {
        cy.visit('https://staging.splainer.in/')
        cy.get('li').eq(6).click()
        cy.get('#email').type()
        cy.get('#password').type(data.Password)
        cy.get('#Login').click()
       
    })
})