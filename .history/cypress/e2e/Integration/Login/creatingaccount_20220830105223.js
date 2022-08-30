describe('Account creation',() =>
{
    it ('Free subscribe',()=>
    {
       cy.visit('https://staging.splainer.in/')
       cy.get('li').eq(1).click()
       cy.get('.card.referal-disc-card').eq(0).should('be.visible')
       cy.get('.btn.btn-blue-o.px-3.btn-sub').eq(0).click()
       cy.wait(2000)
       cy.get('.modal-body').find('h5').expect('Subscribe').to.have.string('Subscribe')

    })
})