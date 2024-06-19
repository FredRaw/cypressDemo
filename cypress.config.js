const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    testCaseDescription: "",
    testDataID: 0,
    writeFilePath: "",
    stepNumber: 0
  },
  e2e: {
    baseUrl: "https://example.cypress.io",
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
