  describe('Login page ', () => {
    it('Login with correct creditionals ', () => 
    {
      cy.visit('https://staging.splainer.in/')
      cy.get('li').eq(6).click()
      cy.get('#email').type('sam.tanwar1703@gmail.com')
      cy.get('#password').type('123456')
      cy.get('#Login').click()
      cy.url().should('includes.string','https://staging.splainer.in/user/myAccount')
      cy.wait(1000)
      cy.get('#navbarDropdown').click()
      cy.wait(1000)
      cy.get('a.dropdown-item.pointer').click()
      cy.url().should('have.string','https://staging.splainer.in/log-in')
    })
    it ('Login with incorrect credtionals',()=>
    {
      cy.visit('https://staging.splainer.in/log-in')
      cy.get('li').eq(6).click()
      cy.get('#email').type('sam.tanwar1704@gmail.com')
      cy.get('#password').type('12345')
      cy.get('#Login').click()
      cy.get('.swal-modal').contains('Please recheck and re-enter the email id and password.')
      cy.on('window:alert',(str)=>
      {
        expect(str).to.equal('Please recheck and re-enter the email id and password.')
      })
    })
    it('Forgot password',()=>
    {
      cy.visit('https://staging.splainer.in/')
      cy.get('li').eq(6).click()
      cy.get('.btn.btn-link').eq(0).click()







    })
  })