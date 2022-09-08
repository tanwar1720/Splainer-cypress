describe('faqs_sweets',()=>
{
    it ('faq-page',()=>
    {
        cy.visit('https://staging.splainer.in/faq')
        cy.get('.nav-link.active').click()
        cy.get('h1').should('be.visible')
        cy.get('h1').should('contain.text','Splainer FAQs!')
    })
})