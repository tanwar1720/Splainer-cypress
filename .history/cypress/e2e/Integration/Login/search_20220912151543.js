describe('Search_page',()=>
{
    it ('Search',()=>
    {
        cy.visit('https://staging.splainer.in/')
        cy.get('.fa.fa-search').eq('0').click()
        cy.get('#searchQuery').should('be.visible')
        cy.get('#searchQuery').type('sanity breaks')
        cy.get('.card-deck').each(($el) =>
       /* {
            if($el.find('Sanity Break'))
            {
              cy.wrap($el).should('be.visible')
            }
            else{
                cy.log('Not Found')
            }
            
        })*/
        {
            if($el.get(':nth-child(2) > .card-deck > .card > .card-body > .card-title > a'))
            {
              cy.wrap($el).click()
            }
            else{
                cy.log('Not Found')
            }
            
        })
    
       // cy.get(':nth-child(2) > .card-deck > .card > .card-body > .card-title > a')

        


    })
})