describe('yearlySubscription _Testsuit',()=>
{
    it('Y.subscription_testcase',()=>
    {
        cy.visit('https://staging.splainer.in/')
        cy.get('.nav-link ').eq(1).click()
        cy.url().should('include', 'https://staging.splainer.in/subscribe')
        cy.get('.col-md-4.px-md-2').should('be.visible')
        cy.get('.col-md-4.px-md-2').find('p').contains('Yearly subscription')
        cy.get('.col-md-4.px-md-2').text(2999).should('be.visible')
        


    })
})