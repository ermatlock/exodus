describe('Loading Page', () => {


  it('As a user, I should see the header with logo, Back To Main button', () => {
    cy.intercept('GET', "https://api.teleport.org/api/urban_areas/slug:buffalo/", {
        statusCode: 200,
        fixture: 'cityData.json'
      }).as('matchedUrl')
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/scores', {
      statusCode: 200,
      fixture: 'cityScores.json'
    }).as("matchedUrl")
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/details', {
      statusCode: 200,
      fixture: 'cityDetails.json'
    }).as("matchedUrl")
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/images/', {
      statusCode: 200,
      fixture: 'cityImages.json'
    }).as("matchedUrl")
    cy.visit('http://localhost:3000/favorites')
    .get('header').get('img').should('have.attr', 'src')
    .get('.favorites-switch').contains("Back To Main")
    .should('be.visible')
  });

  it('As a user, I should be able to click the "back top main" button to go to the homepage', () => {
    cy.intercept('GET', "https://api.teleport.org/api/urban_areas/slug:buffalo/", {
        statusCode: 200,
        fixture: 'cityData.json'
      }).as('matchedUrl')
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/scores', {
      statusCode: 200,
      fixture: 'cityScores.json'
    }).as("matchedUrl")
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/details', {
      statusCode: 200,
      fixture: 'cityDetails.json'
    }).as("matchedUrl")
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/images/', {
      statusCode: 200,
      fixture: 'cityImages.json'
    }).as("matchedUrl")
    cy.visit('http://localhost:3000/favorites')
    .get('.favorites-switch').contains('Back To Main')
    .get('.favorites-switch').click()
    .get('.favorites-switch').contains('Go To Favorites')
    .get('.favorites-switch').click()
    .should('be.visible')
  });

  it('As a user, I should be able to click the "see city stats" button to go to the homepage with the new page loaded', () => {
    cy.intercept('GET', "https://api.teleport.org/api/urban_areas/slug:buffalo/", {
        statusCode: 200,
        fixture: 'cityData.json'
      }).as('matchedUrl')
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/scores', {
      statusCode: 200,
      fixture: 'cityScores.json'
    }).as("matchedUrl")
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/details', {
      statusCode: 200,
      fixture: 'cityDetails.json'
    }).as("matchedUrl")
    cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/images/', {
      statusCode: 200,
      fixture: 'cityImages.json'
    }).as("matchedUrl")
    cy.visit('http://localhost:3000/favorites')
    cy.get("#")
    .should('be.visible')
  });

})