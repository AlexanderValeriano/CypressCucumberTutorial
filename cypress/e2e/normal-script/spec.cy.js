describe("Login test", () => {
  it("Success login", () => {
    cy.visit("/");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should('contains','inventory.html')
  });
});
