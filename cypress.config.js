const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // 1. Aciona o tradutor Badeball
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      // 2. Troca o motor padrão pelo Esbuild e intercepta os arquivos .feature
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});