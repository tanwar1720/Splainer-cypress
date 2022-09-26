
import dayjs from 'dayjs'
describe('First User interface', () => {
   
    const todaysDate = dayjs().format('MMM DD, YYYY')
    //  let nevbar
    // beforeEach(() => {
    //     cy.visit('https://staging.splainer.in/')
    // })
    // it('readmeNow', () => {

    //     cy.visit('https://staging.splainer.in/')
    //     cy.get('#headerPartial').should('have.css', '1')
    //     cy.get('.gif').should('be.visible')
    //     cy.get('h1').contains('Your world, explained.')
    //     nevbar = cy.get('.nav-link')
    //     nevbar.eq(0).click()
    //     cy.url().should('contains', 'gift-1')
    //     //   When user has to verify the whole url.
    //     cy.url().should('contain', 'posts')
    //     // when user has to verify by just one string word (use if the url get changed time to time).
    //     cy.get('p').eq(0).should('have.css', '1')
    //     cy.get('p').eq(2).invoke('text').should('not.be.empty')  /// independent of text 
    //     cy.get('tr td').eq(4).should('have.css', '6')
    //     cy.go('back')

    //     cy.get('.col-md-4').each(($el) => {
    //         cy.wrap($el).find('.owl-dot').each(($l) => {
    //             cy.wrap($l).click().should('be.visible')
    //             cy.wait(1000)

    //         })



    //     })
    // })
    // it('Read us Now ', () => {
    //     nevbar = cy.get('.nav-link')
    //     nevbar.eq(0).click()
    //     cy.url().should('contains', 'gift-1')
    //     //   When user has to verify the whole url.
    //     cy.url().should('contain', 'posts')
    //     // when user has to verify by just one string word (use if the url get changed time to time).
    //     cy.get('p').eq(0).should('have.css', '1')
    //     cy.get('p').eq(2).invoke('text').should('not.be.empty')  /// independent of text 
    //     cy.get('tr td').eq(4).should('have.css', '6')
    //     cy.go('back')
    // })
    // it('check all Anchor link', () => {
    //     cy.visit('https://staging.splainer.in/')
    //     cy.get('.nav-link').eq(0).click()
    //     cy.get("a").each($a => {
    //         const message = $a.text();
    //         expect($a, message).to.have.attr("href").not.contain("undefined")
    //     })
    // })
    // it('LoginafterReadmeNowmodule', () => {
    //     cy.visit('https://staging.splainer.in/')
    //     nevbar=cy.get('.nav-link')
    //     nevbar.eq(0).click()
    //     cy.url().should('contains','gift-1') 
    //  //   When user has to verify the whole url.
    //     cy.url().should('contain', 'posts')
    //   // when user has to verify by just one string word (use if the url get changed time to time).
    //     cy.get('p').eq(0).should('have.css','1')
    //     cy.get('p').eq(2).invoke('text').should('not.be.empty')  /// independent of text 
    //     cy.get('tr td').eq(4).should('have.css','6')
    //     cy.go('back')
    //     cy.get('li').eq(6).click()
    //     cy.get('#email').type('sam.tanwar1703@gmail.com')
    //     cy.get('#password').type('123456')
    //     cy.get('#Login').click()
    // })

    it('ReadNow after login(All three reads completed)', () => {
        cy.visit('https://staging.splainer.in/')
        cy.wait(1000)
        cy.get('.nav-link').eq(0).click()
        cy.url().should('have.string', 'https://staging.splainer.in/posts/2022/gift-1')
        cy.get('.date').should('be.visible')
  })
        it.only("Check date to be less or equal than todays", () => {
            cy.visit('https://staging.splainer.in/posts/2022/gift-1')
             const todaysDate = dayjs().format('MM,DD, YYYY')

             cy.get('.date', { timeout: 15000 }).invoke('text').should('not.equal',todaysDate)

            
        })

}) 
