Cypress.Commands.add('getStripeElement', (fieldName) => {
    if (Cypress.config('chromeWebSecurity')) {
      throw new Error('To get stripe element `chromeWebSecurity` must be disabled');
    }
  
    const selector = `input[data-elements-stable-field-name="${fieldName}"]`;
  
    return cy
      .get('iframe')
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap)
      .find(selector);
  });


  Cypress.Commands.add('getByTestId', (testid) => {
    return cy.get(`[data-testid=${testId}]`)
  });

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import 'cypress-file-upload';
require('@cypress/xpath');
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
