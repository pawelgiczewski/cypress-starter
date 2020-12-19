import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(/Open site/, () => {
    cy.visit('cypress/fixtures/test.html')
});

Then(/Click link/, () => {
    cy.get('a').contains('click me').click()
});