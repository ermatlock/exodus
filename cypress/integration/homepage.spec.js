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
  .get('select').select('denver').should('have.value', 'denver')
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
  .get('.favorites-switch').contains('Go To Favorites')
  .get('.favorites-switch').click()
  .get('.favorites-switch').contains('Back To Main')
  .get('.favorites-switch').click()
  .should('be.visible')
});

it('As a user, I should see a widget with LGBT Rights', () => {
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
  .get('.embed-detail').should('be.visible')
  
});

it('As a user, if the server is down, I will get an error message', () => {
  cy.intercept('GET', "https://api.teleport.org/api/urban_areas/slug:buffalo/", {
      statusCode: 400,
      ok: false
    }).as('matchedUrl')
  cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/scores', {
    statusCode: 400,
      ok: false
  }).as("matchedUrl")
  cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/details', {
    statusCode: 400,
      ok: false
  }).as("matchedUrl")
  cy.intercept('GET', 'https://api.teleport.org/api/urban_areas/slug:buffalo/images/', {
    statusCode: 400,
      ok: false
  }).as("matchedUrl")
  cy.visit('http://localhost:3000/')
  .get('h1[class=".error-container"]')
  .contains("Sorry, We're having trouble getting that. Please try again!")
});


});

