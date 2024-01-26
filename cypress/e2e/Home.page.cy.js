class HomePage {
  visitHomePage() {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.url().should('include', 'index.html');
  }

  fillSearchBox(searchTerm) {
    cy.get('#searchTerm').type(`online {enter}`);
  }

  verifySearchResults() {
    cy.get('.top_offset > h2:nth-child(3)').should('be.visible');
  }
}

export default HomePage;

  