const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I launch the Zero Bank site', () => {
cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I submit login', () => {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click()
    cy.contains('.btn').click
})

Then('I should see the home page', () => {
    cy.get('#homeMenu > div:nth-child(1) > strong:nth-child(1)').should('be.visible')
})