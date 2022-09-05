
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



        
 
         
            

    })
})