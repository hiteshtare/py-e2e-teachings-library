describe("Teaching library", () => {
  describe("Dashboard", () => {
    beforeEach(() => {
      cy.visit("/teachings-library");
    });

    it("should open Dashboard page", () => {
    });


    it("Filter menu should not be visible by default", () => {
      cy.get('#elementor-tab-content-1091').should('not.be.visible');
    });

    it("Filter menu should be visible when clicked on Accordian area", () => {
      cy.get('#elementor-tab-title-1091').click();

      cy.get('#elementor-tab-content-1091').should('be.visible');
    });

    it("Filter menu should be visible when clicked on Accordian title", () => {
      cy.get('.elementor-toggle-title').click();

      cy.get('#elementor-tab-content-1091').should('be.visible');
    });

    it("Filter menu should be visible when clicked on Accordian right carot icon", () => {
      cy.get('.elementor-toggle-icon-closed').click();

      cy.get('#elementor-tab-content-1091').should('be.visible');
    });
  })
})