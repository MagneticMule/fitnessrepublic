/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  it("Navigates to page Memberships page and checks accessibility", () => {
    cy.get("nav").contains("Membership").click().checkA11y();
  });

  it("Navigates to Training page and checks accessibility", () => {
    cy.get("nav").contains("Training").click().checkA11y();
  });

  it("Navigates to Classes page and checks accessibility", () => {
    cy.get("nav").contains("Classes").click().checkA11y();
  });

  it("Navigates to About page and checks accessibility", () => {
    cy.get("nav").contains("About").click().checkA11y();
  });

  it("Navigates to About page and checks accessibility", () => {
    cy.get("nav").contains("Blog").click().checkA11y();
  });

  it("Focuses the header and asserts it's attributes", () => {
    cy.get("head").contains("FREE SEVEN DAY PASS").click();
  });
  // it("Focuses on the footer link and asserts its attributes", () => {
  //   cy.findAllByText("Gatsby").focus();
  //   cy.focused()
  //     .should("have.text", "Gatsby")
  //     .should("have.attr", "href", "https://www.gatsbyjs.com")
  //     .should("not.have.css", "outline-width", "0px");
  // });
});
