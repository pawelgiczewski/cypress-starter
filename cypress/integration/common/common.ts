import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(/Open site/, () => {
    cy.visit('cypress/fixtures/test.html')
});