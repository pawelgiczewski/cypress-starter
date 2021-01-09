import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Then("User clicks Ask server for random cat fact button", () => {
    cy.get('[automation-id=get-fact-button]').click();
})

Then("Number of displayed cat facts is {int}", (catFactsNumber: number) => {
    cy.get('[automation-id=fact]').should('have.length', catFactsNumber);
})

Then("Fact with text {string} is displayed", (fact: string) => {
    cy.get('[automation-id=fact]').should('have.text', fact);
})

Then("Loading spinner is displayed", (fact: string) => {
    cy.get('[automation-id=loading-spinner]').should('exist');
})