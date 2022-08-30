const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/Integration/Login/*.js'
  },
     module.exports = on => {
    on("task", {
      generateOTP: require("cypress-otp")
    });
  }
});
