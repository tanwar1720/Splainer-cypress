describe('Account creation',() =>
{
    it ('Free subscribe',()=>
    {
       cy.visit('https://staging.splainer.in/')
       cy.get('li').eq(1).click()
       cy.get('.card.referal-disc-card').eq(0).should('be.visible')
       cy.get('.btn.btn-blue-o.px-3.btn-sub').eq(0).click()
       cy.get('.modal-body').should('have.string','Subscribe')

    })
})