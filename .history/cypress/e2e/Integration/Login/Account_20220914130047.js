/// <reference types="cypress" />


describe('myAccount', () => {
    it('Accountveiw', () => {
        cy.visit('https://staging.splainer.in/')
        cy.get('li').eq(6).click()
        cy.get('#email').type('sam.tanwar1703@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#Login').click()
        cy.url().should('have.string', 'https://staging.splainer.in/user/myAccount')
        cy.get('.accCard').should('be.visible')
        cy.get('.accCard').eq(0).find('h2').should('have.text', 'my profile')
        cy.get('.accCard').eq(0).find('img').should('be.visible')
        cy.get('p').find('b').should('contain.text', 'sumit tanwar')
        cy.get('p').eq(0).should('be.visible')
        cy.get('.accCard').eq(1).should('be.visible')
        cy.get('.accCard').eq(1).should('contain.text', 'my subscription')
        cy.get('.accCard').eq(1).find('img').should('be.visible')
        cy.get('p').eq(1).find('b').contains('Type: NONE')
        cy.get('#startDate').should('be.visible')
        cy.get('p').eq(1).find('label').should('be.visible')
        cy.get('.text-center.btns.d-flex.justify-content-between').should('be.visible')
        cy.get('.text-center.btns.d-flex.justify-content-between').should('contain.text', 'Renew')
        cy.get('.btn.btn-blue.btn-block.mt-2').should('be.visible').and('contain.text', 'Become a Founding Member')
        cy.get('h1').should('contain.text', 'my referrals')
        cy.get('.row.justify-content-center.ref-count').should('be.visible')
        cy.get('.col-md-4').should(($el) => {
            expect($el).to.have.length(3)

            expect($el.eq(0)).to.contain('Total Referrals')
            expect($el.eq(1)).to.contain('Available Rewards')
            expect($el.eq(2)).to.contain('Claimed Rewards')
        })
        cy.get('.row.justify-content-center.ref-count').find('.dog').should('be.visible')
        cy.get('a').each(($l) => {
            const flag = $l.text()
            cy.log(flag.length)
        })
        cy.get('h3').should('includes.text','Share your love for splainer — earn ours!')
        cy.get('#refLink').should('have.value','https://staging.splainer.in/referral/TW90F2T')
        cy.get('p').should('have.css','3')


    })
})