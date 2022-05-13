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

  it('should display results underneath the form', () => {
    cy.get('h2')
      .contains('Results')
      .get('section[class="ideas-wrapper"]')
      .should('be.visible')
  })

  it('should display a friendly message if no results exist', () => {
    cy.get('section[class="ideas-wrapper"]')
      .contains('No ideas to display...yet!')
  })

  it('should have a way to specify genre and theme to submit', () => {
    cy.get('form')
      .should('have.descendants', 'select')
      .and('have.descendants', 'input')

    cy.get('select[id="genre-select"]')
      .select('Sci-Fi')
      .should('have.value', 'Sci-Fi')

    cy.get('input[id="theme-field"]')
      .type('Mars')
      .should('have.value', 'Mars')
  })
})