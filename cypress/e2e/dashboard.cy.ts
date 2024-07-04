import { NavigationPages } from "./pages/dashboard.page";

const navigationPages = new NavigationPages();

describe("Dashboard page", () => {
  beforeEach(() => {
    cy.visit("/teachings-library");
  });

  it("should open Dashboard page", () => {
    cy.screenshot({ capture: "fullPage" });
  });

  it("Filter menu should not be visible by default", () => {
    navigationPages.checkIfElementNotVisible(navigationPages.divFilterTab);
  });

  it("Filter menu should be visible when clicked on Accordian title", () => {
    cy.get(navigationPages.btnFilterTitle).click();

    navigationPages.checkIfElementIsVisible(navigationPages.divFilterTab);
  });

  it("Filter menu should be visible when clicked on Accordian area", () => {
    cy.get("#elementor-tab-title-1091").click();

    navigationPages.checkIfElementIsVisible(navigationPages.divFilterTab);
  });

  it("Filter menu should be visible when clicked on Accordian right carot icon", () => {
    cy.get(".elementor-toggle-icon-closed").click();

    navigationPages.checkIfElementIsVisible(navigationPages.divFilterTab);
  });
});
