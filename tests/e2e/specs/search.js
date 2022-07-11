// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:8080");
  });
  it("Input and Choose Singapore: input to search city", () => {
    cy.wait(1000);
    cy.get("#input-search").type("a", { delay: 1000 });
    cy.wait(1000);
    cy.get("#city-0").click();
    cy.wait(1000);
    cy.get("#search-button").click();
    cy.wait(4000);
    cy.get("#title-0").should("be.visible");
  });
  it("Input and Choose Kuala Lumpur: input to search city", () => {
    cy.wait(1000);
    cy.get("#input-search").type("a", { delay: 1000 });
    cy.wait(1000);
    cy.get("#city-1").click();
    cy.wait(1000);
    cy.get("#search-button").click();
    cy.wait(4000);
    cy.get("#error-text").should("be.visible");
    cy.wait(1000);
    cy.get("#error-text")
      .first()
      .should(
        "contain",
        "Sorry! We couldn't find any properties for your search."
      );
  });
  it("Input and Choose Manila input to search city", () => {
    cy.wait(1000);
    cy.get("#input-search").type("a", { delay: 1000 });
    cy.wait(1000);
    cy.get("#city-2").click();
    cy.wait(1000);
    cy.get("#search-button").click();
    cy.wait(4000);
    cy.get("#error-text").should("be.visible");
    cy.wait(1000);
    cy.get("#error-text")
      .first()
      .should("contain", "Opps, something went wrong");
    cy.get("#error-description")
      .first()
      .should("contain", "error message here");
  });

  it("Page not found case", () => {
    cy.wait(1000);
    cy.visit("http://localhost:8080/not-found");
    cy.wait(1000);
    cy.contains("h1", "404 not found");
  });
});
