
describe('Search_page', () => {
    it('Search', () => {
        cy.visit('https://staging.splainer.in/')
        cy.get('.fa.fa-search').eq('0').click()
        cy.get('#searchQuery').should('be.visible')
        cy.get('#searchQuery').type('sanity breaks')
        cy.get('.card-deck').each(($el) => {
            if ($el.find('Sanity Break')) {
                cy.wrap($el).should('be.visible')
            }
            else {
                cy.log('Not Found')
            }

        })
        cy.get('.card-deck').each(($el) => {
            if ($el.text().includes('Sanity Break')) {
                cy.get('.card-title').should('be.visible')
            }
            else {
                cy.log('Not Found')
            }

        })
        cy.get('#section-filters').should('be.visible')
        cy.get('.fa-ul').each(($el,index,$list)=>{

            const Text = $el.text()
            if(Text.includes('The Interval'))
            {
                cy.get(':nth-child(14) > a').click()
                    
            }
           
        })
        // For asserting number of links on page.
     /*   cy.get("a").each($a => {
            const message = $a.text();
            expect($a, message).to.have.attr("href").not.contain("undefined")
          })*/

          cy.get('#search-reset').click()
          cy.get('.btn.btn-blue-o.btn-sm.view-more').should('have.property','button')
        
        
        




    })
})