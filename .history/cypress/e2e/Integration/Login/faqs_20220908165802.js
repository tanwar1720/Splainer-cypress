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
        cy.get('.card-body').find('a').eq(0)
        cy.wait(1000)
      //  cy.get('.card-body').eq(1).should('be.visible')
        cy.get('button').each(($el)=>
        {
            cy.wrap($el).click({force:true})
        })
        cy.get('.card-body').eq(22).should('have.css','23')
        cy.get('.container').eq(2).find('.nav-logo').should('be.visible')
        cy.get('.container').find('b').should('be.visible')
        cy.get('.container').eq(2).find('a').contains('Sign up here!').click()
        cy.go('back')
        cy.get('.container').eq(2).find('a').contains('Terms & Conditions').click()
        cy.go('back')
        cy.get('.container').eq(2).find('a').each(($el)=>
        {
            const arr = []
            arr.push($el.text())
            cy.log(arr)
        })


          
    



    })
})