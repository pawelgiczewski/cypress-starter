import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Then(/Click link/, () => {
    cy.clickLink('click me')
});

Then(/Click navigating to api/, () => {
    cy.clickLink('link to external api')
});

Then(/Check if stubbed json is displayed/, () => {
    cy.contains('{"stupid":"stub"}')
});