describe('Login Interface',function()
{
    it ('Login with correct creditionals',function()
    {
     cy.visit('staging.splainer.in')
     cy.wait(4000)
     cy.get(':nth-child(7) > .nav-link').click()
     cy.get('#email').type('sam.tanwar1703@gmail.com')
     cy.get('#password').type(123456)
     cy.get('#Login').click()   












    })
})