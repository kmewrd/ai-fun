describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('should have the page title and form visible on page load', () => {
    cy.get('h1')
      .contains('Movie Idea Generator')
      .get('form')
      .should('be.visible')
  })
})