const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I was on the homepage', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
})

When('I filled in the search box', () => {
    cy.get('#searchTerm').type('online {enter}')
})

Then('I looked at the search results', () => {
    cy.get('.top_offset > h2:nth-child(3)').should('be.visible')
})