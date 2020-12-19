/// <reference types="cypress" />

declare namespace Cypress {
  // add custom Cypress command to the interface Chainable<Subject>
  interface Chainable<Subject=any> {
    // let TS know we have a custom command cy.clickLink(...)
    clickLink(label: string | number | RegExp): void
  }

  // add properties the application adds to its "window" object
  // by adding them to the interface ApplicationWindow
  interface ApplicationWindow {
    // let TS know the application's code will add
    // method window.add with the following signature
    add(a: number, b: number): number
  }
}
