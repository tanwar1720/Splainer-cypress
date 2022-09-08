describe('faqs_sweets',()=>
{
    it ('faq-page',()=>
    {
        cy.visit('https://staging.splainer.in/faq')
        cy.get('.nav-link.active').click()
        cy.get('h1').should('be.visible')
        cy.get('h1').should('contain.text','Splainer FAQs!')
        cy.get('h2').should('be.visible')
        cy.get('h2').each(($a)=>
        {
            cy.log($a.text())
        })
        cy.get('.card-body').find('a').should('have.text','splainer')



    })
})