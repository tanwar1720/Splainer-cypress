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

        /*cy.get('.fa-ul').eq(0).find('li').each(($a)=>
            {
                // cy.get($el)
                cy.wrap($a).click()
                cy.wait(2000)
                cy.go('back')
                cy.wait(2000)
            })*/
          var Link = cy.get('.fa-ul').eq(0).find('a').eq(0).click()
           Link.url().should('have.string','https://staging.splainer.in/posts/2022/gift-1')
         
     
    


    })
})