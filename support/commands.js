
import loc from './locators'


Cypress.Commands.add('login', (user, passwd) => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type('309.lucas@gmail.com')
    cy.get(loc.LOGIN.PASSWORD).type('36201193')
    cy.contains(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
    cy.get(loc.FECHARMSG, {timeout:80000}).click({force:true})



})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
    cy.get(loc.FECHARMSG, {timeout:80000}).click({force:true})


})