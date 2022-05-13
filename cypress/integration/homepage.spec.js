describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', { fixture: 'response.json' }).as('sci-fi data')

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

  it('should have a way to specify genre and theme to submit the form', () => {
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

  it('should add an idea card with the submitted genre and theme in results after submission', () => {
    cy.get('select[id="genre-select"]')
      .select('Sci-Fi')
      .get('input[id="theme-field"]')
      .type('Mars')
      .get('form button')
      .click()
    
    cy.get('section[class="ideas-wrapper"]')
      .should('have.descendants', 'div[class="card"]')
      .and('not.contain', 'No ideas to display...yet!')
    
    cy.get('div[class="card"]')
      .should('contain', 'Genre: Sci-Fi')
      .and('contain', 'Theme: Mars')
      .and('contain', 'Result: A group of astronauts are sent to Mars to find a new home for humanity, but they quickly realize that the planet is not as peaceful as they thought it was.')
  })
})

describe('Error Handling', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', { forceNetworkError: true }).as('network error')

    cy.visit('http://localhost:3000/');
  })

  it('should not allow a user to submit the form without a genre', () => {
    cy.get('input[id="theme-field"]')
      .type('Mars')
      .get('form button')
      .click()
    
    cy.get('form')
      .contains('Please select a genre from the dropdown menu.')
  })
})