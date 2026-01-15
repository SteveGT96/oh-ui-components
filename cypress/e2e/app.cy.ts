describe("App e2e", () => {
  it("should load the app and increment counter", () => {
    cy.visit("/");
    cy.contains("Vite + React").should("be.visible");
    cy.get("button").contains("count is 0").click();
    cy.get("button").should("contain", "count is 1");
  });
});
