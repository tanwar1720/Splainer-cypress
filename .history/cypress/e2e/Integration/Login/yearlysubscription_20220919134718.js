/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

const emailNo = Math.random();
describe('yearlySubscription _Testsuit', () => {
    it('Y.subscription_testcase', () => {
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
        cy.wait(2000)
        cy.get('.modal-body').contains('Subscribe')
        cy.get('#first_name').type('Rupali')
        cy.get('#last_name').type('kumar')
        cy.get('#emaiId').type('kumarroshan1703+' + emailNo + '@gmail.com')
        cy.get('select').eq(0).select('18-24').invoke('val').should('eq', '18-24')
        cy.get('#gender').eq(0).select('Male').should('have.value', 'Male')
        cy.get('#password').type('123456')
        cy.get('#confpassword').type('123456')
        cy.get('select').eq(2).select('+91 (India)').should('have.value', 'India')
        cy.get('#contact_no').type('1234567892')
        cy.get('#subscribe').contains('Subscribe Now & Pay')
        cy.get('#subscribe').click()
        cy.get('#subscribe').should('contain.text', '2999')

        //     cy.wait(5000)
        // cy.log('.razorpay-checkout-frame').get('body').find('button:visible')
        // cy.get('.solidbg.svelte-tx5emc').shadow().find('.new-method.has-tooltip.false.svelte-1kfpmw0').click()
        //    cy.frameLoaded('.razorpay-checkout-frame').should('have.css','1')
        //    cy.wait(3000)
        //    cy.iframe('.original-amount').should('be.visible')
        //  cy.origin('https://staging.splainer.in/user/buy_subscription_razorpay',()=>
        //   { 
        //     cy.wait(5000)
        //     cy.get('body').should('be.visible')
        //     cy.get('.svelte-zf5zxn').click()
        //   })













    })
})