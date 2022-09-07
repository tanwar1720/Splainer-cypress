
describe('Account creation', () => {

    it('Free subscribe', () => {
        cy.visit('https://staging.splainer.in/')
        cy.get('li').eq(1).click()
        cy.get('.card.referal-disc-card').eq(0).should('be.visible')
        cy.get('.btn.btn-blue-o.px-3.btn-sub').eq(0).click()
        cy.wait(2000)
        cy.get('.modal-body').should('include.text', 'Subscribe')
        cy.get('#first_name').type('Amit')
        cy.get('#last_name').type('kumar')
        cy.get('#emaiId').type('larose6666@seinfaq.com')
        //cy.get('select').eq(0).select('18-24').should('eq','18-24')
        cy.get('select').eq(0).select('18-24').invoke('val').should('eq', '18-24')
        cy.get('select').eq(1).select('Other').should('have.value', 'Other')
        cy.get('#password').type('123456')
        cy.get('#confpassword').type('123456')
        cy.get('select').eq(2).select('+91 (India)').should('have.value', 'India')
        cy.get('#contact_no').type('1234567892')
        cy.get('button').contains('Get OTP').click()
        cy.wait(1000)
        cy.task("generateOTP", "yourSecret").then((token) =>{
        cy.get('#otp').type(123456)})
        cy.get('#subscribe').click()
     })
    })