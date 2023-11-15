import 'cypress-plugin-stripe-elements';

const preprocessor = require("@cypress/ts-preprocessor");

module.exports = (on, config) => {
  on("file:preprocessor", preprocessor());
  // Add any other Cypress configurations here if needed.
};
