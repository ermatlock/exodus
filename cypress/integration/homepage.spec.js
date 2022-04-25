describe('Loading Page', () => {
  


it('As a user, I should see the header with logo, dropdown menu, and a Go To Favorites button', () => {
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
  cy.visit('http://localhost:3000/')
  .get('header').get('img').should('have.attr', 'src')
  .get('select').should('have.value', null)
  .get('.favorites-switch').contains("Go To Favorites")
  .should('be.visible')
});

it('As a user, I should see statistics for my chosen city', () => {
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
  cy.visit('http://localhost:3000/')
  .get('.top-bar').get("h1").contains('Buffalo, New York')
  .get('h2').contains('Overall City Score: 56.04 (ranking)')
  .get('h2').contains('LGBTQ Score: 86.72 (out of 100)')
  .get('h2').contains('Minoritized score: 0.59 (out of 1)')
  .should('be.visible')
});

it('As a user, I should see a city summary', () => {
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
  cy.visit('http://localhost:3000/')
  .get('.summary').contains('Buffalo, New York, is among the top cities with a')
  .should('be.visible')
});

it('As a user, I should have a favorite button that toggles from favorited to unfavorited', () => {
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
  cy.visit('http://localhost:3000/')
  .get('button').get('.true').click()
  .get('button').get('.false')
  .should('be.visible')
});

it('As a user, I should be able to select a city from the dropdown menu', () => {
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
  cy.visit('http://localhost:3000/')
  .get('select').get('option').contains('Austin')
  .should('be.visible')
});

it('As a user, I should be able to click the "go to favorites" button to go to the favorites page', () => {
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
  cy.visit('http://localhost:3000/')
  .get('select').get('option').contains('Austin')
  .should('be.visible')
});





});

