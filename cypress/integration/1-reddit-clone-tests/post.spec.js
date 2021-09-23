/// <reference types="cypress" />

describe("testing our reddit clone", () => {
  beforeEach(() => {
    cy.request("http://localhost:3000/posts/delete_all");
    cy.visit("http://localhost:3001");
  });

  it("properly handles a new post", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get("#nameInput").type("I am a name");
    cy.get("#descriptionInput").type("I am a description");
    cy.get("button").click();
    cy.get("#postResult").first().should("have.text", "Success");
    cy.get("li").contains("I am a name").should("be.visible");
  });
});
