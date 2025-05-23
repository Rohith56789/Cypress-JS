const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sha3yr',
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      // for Html reports
      require('cypress-mochawesome-reporter/plugin')(on); 
    },
  },
});
