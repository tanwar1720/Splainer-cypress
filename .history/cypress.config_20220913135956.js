const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hwhcf4',
  e2e: {
    setupNodeEvents(on, config) {
      on
      //("task" , {
       // generateOTP: require("cypress-otp")
     // })
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/Integration/Login/*.js'
  },
  env: {
    "email": "sam.tanwar1703@gmail.com",
    "Password": "123456"
  }
});
