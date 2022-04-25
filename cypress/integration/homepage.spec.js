describe('Loading Page', () => {
  


it('As a user, I should see the header with logo, dropdown menu, and a Go To Favorites button', () => {
  cy.intercept('GET', "https://api.teleport.org/api/urban_areas/slug:buffalo/", {
      statusCode: 200,
      fixture: 'cityData.json'
    }).as('matchedUrl')
  // cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/scores', {
  //   statusCode: 200,
  //   fixture: 'cityScores.json'
  // }).as("matchedUrl")
  // cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/details', {
  //   statusCode: 200,
  //   fixture: 'cityDetails.json'
  // }).as("matchedUrl")
  // cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/images/', {
  //   statusCode: 200,
  //   fixture: 'cityImages.json'
  // }).as("matchedUrl")
  cy.visit('http://localhost:3000/')
  .get('header').get('img').should('have.attr', 'src')
  .get('select').should('have.value', null)
  .get('.favorites-switch').contains("Go To Favorites")
});



});

