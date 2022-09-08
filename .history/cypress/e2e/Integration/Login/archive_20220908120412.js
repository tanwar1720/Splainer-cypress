/// <reference types="cypress" />

describe('Archive', () => {
    it('about_Archive', () => {
        cy.visit('https://staging.splainer.in/archive')
        cy.get('.nav-link.active').click()
        // cy.get('a').each(($el)=>
        //{
        //  $el.text().click()

        // expect($el, tags).to.have.attr("href").not.contain("undefined")

        //  })

        // cy.get('.fa.fa-angle-right.fa-li').each(($el,index) =>
        //    {

        //expect($el).to.contain(link)
        //  })

        cy.get('.fa-ul').each(($el) => {
            $el.find('a').each(($a)=>
            {
                cy.get($a).text()
            })
            cy.wrap($el).click({force:true})
        })
    


    })
})