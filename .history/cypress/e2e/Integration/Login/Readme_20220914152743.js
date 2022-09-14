const dayjs = require('dayjs')

describe('First User interface',()=>
{
    it('readmeNow',()=>{
  
        cy.visit('https://staging.splainer.in/')
        cy.get('.nav-link').eq(0).click()
       // cy.url().should('include','https://staging.splainer.in/posts/2022/A-Taste-for-the-Exotic') 
       //When user has to verify the whole url.
       cy.url().should('contain', 'posts')
       // when user has to verify by just one string word (use if the url get changed time to time).
       cy.get('p').eq(0).should('have.css','1')
       cy.get('p').eq(2).invoke('text').should('not.be.empty')  /// independent of text 
       cy.get('tr td').eq(4).should('have.css','6')
        
    })
   it('checkon Anchor link',()=>
    {
        cy.visit('https://staging.splainer.in/')
        cy.get('.nav-link').eq(0).click()
        cy.get("a").each($a => {
          const message = $a.text();
          expect($a, message).to.have.attr("href").not.contain("undefined")
    })
    })
   it('LoginafterReadmeNowmodule',()=>
   {
    cy.visit('https://staging.splainer.in/')
    cy.get('li').eq(6).click()
    cy.get('#email').type('sam.tanwar1703@gmail.com')
    cy.get('#password').type('123456')
    cy.get('#Login').click()
   })
   it ('ReadNow after login(All three reads completed)',()=>
   {   cy.get('.nav-link').eq(0).click()
       cy.url().should('have.string','https://staging.splainer.in/posts/2022/gift-1')
       cy.get('.date').should('be.visible')

       //const dayjs = require('dayjs')


       /*const todaysDate = dayjs().format('MMM DD, YYYY')
       cy.log(todaysDate)
        
       it("Check date to be less or equal than todays", () => {
           cy.get('.date', { timeout: 15000 }).invoke('text').should('be.lte', todaysDate);

         })*/
       






      
   })

    
 }) 
