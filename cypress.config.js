const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "www.saucelabs.com",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
