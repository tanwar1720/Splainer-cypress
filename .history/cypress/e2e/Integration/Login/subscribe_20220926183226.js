/// <reference types="cypress" />


const emailNo = Math.random();

describe('subscribePage', () => {
    beforeEach(() => {
        cy.visit('https://staging.splainer.in/')
    })
    it('signupPage', () => {
        cy.visit('https://staging.splainer.in/')
        cy.get('.nav-link ').eq(1).click()
        cy.url().should('include', 'https://staging.splainer.in/subscribe')
        // For asserting that imgs are loaded or not.
        cy.get('.w-100')
            .should('be.visible')
            .and('have.prop', 'naturalWidth')
            .should('be.greaterThan', 0)
        cy.get('.text-blue').eq(0).click()
        //For scroll,use scrollTo function
        cy.scrollTo('bottom')
        cy.get('h3').eq(7).should('have.text', 'FAQs about our pricing plan')
        cy.get('.card.referal-disc-card').should('be.visible')
        cy.get('.card.referal-disc-card').eq(0).should('contain.text', 'Gimme a 2 week pass!')
        cy.get('h3').eq(1).should('contain.text', 'Be my BFF(ok, for a year)')
        cy.get('h3').eq(2).should('contain.text', 'Love ya,but let’s take it slow...')
        cy.get('p').eq(1).should('contain.text', 'Take us for a spin for free!')
        cy.get('p').eq(2).should('contain.text', 'Yearly subscription')
        cy.get('p').eq(3).should('contain.text', 'Quarterly subscription')
        cy.get('.btn.btn-blue-o.px-3.btn-sub').should('be.visible')
        cy.get('.card.referal-disc-card').eq(0).should('contain.text', '*OTP Required')
        cy.get('sup').should('be.visible')
        cy.get('small').should('have.css', '1') // For asserting the text having css 1
        cy.get('.card.referal-disc-card').each(($el, index, $list) => {
            if ($el.find('small')) {
                cy.wrap($el).should('be.visible')
            }

            else {
                cy.log('Not found')
            }
        })

        cy.get('.card.referal-disc-card').each(($el, index, $list) => {
            if ($el.get('.pl-md-1 > .card > div.text-center > .btn')) {
                cy.wrap($el).should('contain.text', 'Sign me up!')
            }

            else {
                cy.log('Not found')
            }
        })
        cy.get('b').should('contain.text', 'Student discount')
        cy.get('span').eq(5).click()
        cy.get('span:visible').eq(6).click()
        cy.get('span:visible').eq(7).click()
        cy.get('span:visible').eq(8).click()
        cy.get('span:visible').eq(9).click()
        cy.get('span:visible').eq(10).click()

    })
    it('Getting  14 Days trial', () => {
        cy.get('.nav-link ').eq(1).click()
        cy.url().should('include', 'https://staging.splainer.in/subscribe')
        cy.get('.btn.btn-blue-o.px-3.btn-sub').should('contain.text', 'Sign me up!')
        cy.get('.btn.btn-blue-o.px-3.btn-sub').eq(0).click()
        cy.get('#first_name').type('Rupali')
        cy.get('#last_name').type('kumar')
        cy.get('#emaiId').type('kumarroshan1703+' + emailNo + '@gmail.com')
        cy.get('select').eq(0).select('18-24').invoke('val').should('eq', '18-24')
        cy.get('#gender').eq(0).select('Male').should('have.value', 'Male')
        cy.get('#password').type('123456')
        cy.get('#confpassword').type('123456')
        cy.get('select').eq(2).select('+91 (India)').should('have.value', 'India')
        cy.get('#contact_no').type('0987654321')
        cy.wait(1000)
        cy.get('#get-otp').click()
        cy.task("generateOTP", "yourSecret").then((token) => {
            cy.get('#otp').type(token, { force: true })
        })
        cy.get('#subscribe').click()
        cy.wait(1000)
        cy.get('.swal-modal').contains('OTP Mismatch')



    })

    it.only ('Subscribe page after Login',()=>
    {
        cy.visit('https://staging.splainer.in/log-in')
        cy.get('li').eq(6).click()
        cy.get('#email').type('sam.tanwar1703@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#Login').click()
        cy.url().should('includes.string', 'https://staging.splainer.in/user/myAccount')
        cy.wait(1000)
        cy.get('.nav-item').eq(1).click()
        cy.url().should('contain','subscribe')
        cy.get('.container').eq(2).find('h2').title('Subscribe to Splainer')
        cy.get('.card.referal-disc-card').should('be.equal','2')
        
    })
})




