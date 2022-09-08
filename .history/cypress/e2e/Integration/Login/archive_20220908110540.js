/// <reference types="cypress" />

describe('Archive',()=>
{
    it('about_Archive',()=>
    {
        cy.visit('https://staging.splainer.in/archive')
        cy.get('.nav-link.active').click()
        cy.get('a').each(($el)=>
        {
           const tags =  $el.text()
           expect($el, tags).to.have.attr("href").not.contain("undefined")
        })
       /* cy.get('.fa.fa-angle-right.fa-li').each(($el,index,$list)=>
        {
            const linkTags = $el.get('.fa.fa-angle-right.fa-li')
            linkTags
            cy.go('back')

        })*/
        cy.get('.fa.fa-angle-right.fa-li').each((item) => {
           // const title = item.find('h1').first().text();
            const link = item.find('a')
          
            cy.visit(link.attr('href'))
          
            cy.get('h1').should('have.text', link)
            cy.go('back')
          });


    })
})