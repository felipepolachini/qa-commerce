const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    ignoreVideos: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: false
  },
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'http://localhost:3000/',
    responseTimeout: 70000,
    defaultCommandTimeout: 70000,
    requestTimeout: 70000,
    pageLoadTimeout: 70000,
    trashAssetsBeforeRuns: true,
    screenshotsFolder: "./cypress/reports/screenshots",
    specPattern: "cypress/**/*.feature",
    env: {
      stepDefinitions: "cypress/support/step_definition/**/*.{js,ts}"
    },
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      require('cypress-mochawesome-reporter/plugin')(on);

       return config;
    },
  },
});
