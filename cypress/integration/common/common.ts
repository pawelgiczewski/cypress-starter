import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('Error popup is displayed', () => {
    cy.get('[automation-id=error-popup').should('exist');
});

Given('Error popup is not displayed', () => {
    cy.get('[automation-id=error-popup').should('not.exist');
});

Given('User clicks OK button', () => {
    cy.get('[automation-id=ok-button]').click();
});

Then("Cat fact API returns 500 http code", () => {
    cy.intercept('https://cat-fact.herokuapp.com/facts/random', { statusCode: 500 });
})

Then("Cat fact API responds with text {string}", (catFact: string) => {
    cy.intercept('https://cat-fact.herokuapp.com/facts/random', { 
        statusCode: 200,
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify(generateResponseBody(catFact))
    });
})

Then("Cat fact API responds with {int} milliseconds delay", (delay: number) => {
    cy.intercept('https://cat-fact.herokuapp.com/facts/random', { 
        statusCode: 200,
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify(generateResponseBody('Test message')),
        delayMs: delay
    });
})

function generateResponseBody(message: string) {
    return {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "591f9890d369931519ce353d",
        "__v": 0,
        "text": message,
        "source": "api",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-01-04T01:10:54.673Z",
        "used": false,
        "user": "5a9ac18c7478810ea6c06381"
    }
}