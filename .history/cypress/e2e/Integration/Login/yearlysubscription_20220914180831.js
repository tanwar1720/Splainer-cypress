describe('yearlySubscription _Testsuit',()=>
{
    it('Y.subscription_testcase',()=>
    {
        cy.visit('https://staging.splainer.in/')
        cy.get('.nav-link ').eq(1).click()
        cy.url().should('include', 'https://staging.splainer.in/subscribe')
    })
})