const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7ibary',
  viewportWidth: 1920,
  viewportHeight: 927,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  video: true, // Add the video configuration here
  chromeWebSecurity: false, // Add this line to disable Chrome web security
});