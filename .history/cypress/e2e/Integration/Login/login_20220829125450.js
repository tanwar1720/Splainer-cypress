describe('Login page ', () => {
  it('Login with correct creditionals ', () => 
  {
    cy.visit('https://staging.splainer.in/')
    cy.get('.nav-link.active').click()
    cy.get('#email').type('sam.tanwar1703@gmail.com')
    cy.get('#password').type('123456')
    cy.get('#Login').click()
    cy.url().should('have.string','myAccount')
  })
})