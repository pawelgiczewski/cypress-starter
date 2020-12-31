import { Before } from "cypress-cucumber-preprocessor/steps"

Before({tags: '@stubbed'}, function () {
    cy.intercept('http://external.api/', { fixture: 'stub.json'})
})