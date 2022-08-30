describe('Account creation',() =>
{
    it ('Free subscribe',()=>
    {
       cy.visit('https://staging.splainer.in/')
       cy.get('li').eq(1).click()
       cy.get('.card.referal-disc-card').eq(0).should('be.visible')

    })
})