describe('Search_page',()=>
{
    it ('Search',()=>
    {
        cy.visit('https://staging.splainer.in/')
        cy.get('.fa.fa-search').eq('0').click()
        cy.get('#searchQuery').should('be.visible')
        cy.get('#searchQuery').type('sanity breaks')
        cy.get('.card-deck').each(($el),()=>
        {
            $el.get('.card-deck').should('contain.text','Sanity Break')
        })
        


    })
})