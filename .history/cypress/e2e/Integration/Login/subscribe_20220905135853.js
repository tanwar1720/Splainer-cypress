/// <reference types="cypress" />
describe('subscribePage', () => {
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
        cy.get('h3').eq(7).should('have.text','FAQs about our pricing plan')
        cy.get('.card.referal-disc-card').should('be.visible')
        cy.get('.card.referal-disc-card').eq(0).should('contain.text','Gimme a 2 week pass!')
        cy.get('h3').eq(1).should('contain.text','Be my BFF(ok, for a year)')
        cy.get('h3').eq(2).should('contain.text','Love ya,but let’s take it slow...')
        cy.get('p').eq(1).should('contain.text','Take us for a spin for free!')
        cy.get('p').eq(2).should('contain.text','Yearly subscription')
        cy.get('p').eq(3).should('contain.text','Quarterly subscription')
        cy.get('.btn.btn-blue-o.px-3.btn-sub').should('be.visible')
        cy.get('.card.referal-disc-card').eq(0).should('contain.text','*OTP Required')
        cy.get('sup').should('be.visible')
        cy.get('small').should('have.css','1') // For asserting the text having css 1
        cy.get('.card.referal-disc-card').each(($el,index,$list)=>
        {
            if($el.find('small')){
                cy.wrap($el).should('be.visible') }

             else{
                cy.log('Not found')
             }   
            
            
        })

        cy.get('.card.referal-disc-card').each(($el,index,$list)=>
        {
            if($el.get('.pl-md-1 > .card > div.text-center > .btn')){
                cy.wrap($el).should('contain.text','Sign me up!') }

             else{
                cy.log('Not found')
             }   
        })
        cy.get('b').should('contain.text','Student discount')
        cy.get('.owl-dot').each(($el,index,$list)=>
        {
            if($el.get('.owl-dot'))
            {
                cy.wrap($el).click()
            }
            else
            {
                cy.log('Not found the Dot tags')
            }
        })
            
            
    




        
 
         
            

    })
})