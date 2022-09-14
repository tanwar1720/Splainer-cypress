
describe('yearlySubscription _Testsuit',()=>
{
    it('Y.subscription_testcase',()=>
    {
        cy.visit('https://staging.splainer.in/')
        cy.get('.nav-link ').eq(1).click()
        cy.url().should('include', 'https://staging.splainer.in/subscribe')
        cy.get('.col-md-4.px-md-2').should('be.visible')
        cy.get('.col-md-4.px-md-2').find('p').contains('Yearly subscription')
        cy.get('.col-md-4.px-md-2').find('small').should('be.visible')
        cy.get('.btn.btn-blue-o.w-100.btn-sub').eq(0).should('be.visible')
        cy.get('.btn.btn-blue-o.w-100.btn-sub').eq(0).contains('Sign me up!')
        cy.get('.btn.btn-blue-o.w-100.btn-sub').eq(0).click()
        cy.get('.modal-body').should('be.visible')
        cy.get('.modal-body').contains('Subscribe')
        cy.get('#first_name').type('Amitt')
        cy.get('#last_name').type('kumar')
        cy.get('#emaiId').type('kumarroshan1703@gmail.com')
        cy.get('select').eq(0).select('18-24').invoke('val').should('eq', '18-24')
        cy.get('select').eq(0).should('have.value','Male')

        






        


    })
})