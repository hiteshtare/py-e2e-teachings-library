import { NavigationPages } from "./pages/dashboard.page";

const navigationPages = new NavigationPages();

describe("Dashboard page", () => {
  beforeEach(() => {
    cy.visit("/teachings-library");
  });

  it("should open Dashboard page", () => {
    cy.screenshot({ capture: "fullPage" });
  });

  
});
