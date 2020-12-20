import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Then(/Click link/, () => {
    cy.clickLink('click me')
});