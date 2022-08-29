
import { Given,When, And} from "cypress-cucumber-preprocessor/steps";


Given(' I open the splainer url page',()=>
{
    cy.visit('staging.splainer.in')

})
When ('I give the correct login credtionals ',()=>
{
    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('#email').type('sam.tanwar1703@gmail.com')
    cy.get('#password').type(123456)

})
And('click on login button',()=>
{
    cy.get('#Login').click()   

})

