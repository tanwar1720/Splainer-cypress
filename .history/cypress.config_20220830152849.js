const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task" , {
        generateOTP: require("cypress-otp")
      })
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/Integration/Login/*.js'
  },
});
