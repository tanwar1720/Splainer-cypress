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
    it('LoginafterReadmeNow',()=>
    {
      cy.login()

    })
    })

    
 }) 
