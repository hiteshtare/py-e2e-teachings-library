// Import common util
import { checkIfElementIsClickable } from "./util/common.util";

import { DashboardPages } from "./pages/dashboard.page";

const dashboardPages = new DashboardPages();

describe("Dashboard page", () => {
  beforeEach(() => {
    cy.visit("/teachings-library");
  });

  it("should open Dashboard page", () => {
    cy.screenshot({ capture: "fullPage" });
  });

  it("Donate button - should be clickable", () => {
    checkIfElementIsClickable(dashboardPages.btnDonate);
  });
});
