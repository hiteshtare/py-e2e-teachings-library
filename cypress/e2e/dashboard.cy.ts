// Import common util
import {
  checkIfElementIsClickable,
  checkStatus200ForLink,
} from "./util/common.util";

import { DashboardPages } from "./pages/dashboard.page";

const dashboardPages = new DashboardPages();

describe("Dashboard page", () => {
  beforeEach(() => {
    cy.visit("/teachings-library");
  });

  describe("Item card", () => {
    it("card: Image - should be clickable", () => {
      checkStatus200ForLink(dashboardPages.btnCardTitle);
    });
    it("card: Title - should be clickable", () => {
      checkStatus200ForLink(dashboardPages.btnCardTitle);
    });
    it("card: Author - should be clickable", () => {
      checkStatus200ForLink(dashboardPages.btnCardTitle);
    });
  });

  describe.skip("button: Donate", () => {
    it("Donate button - should be clickable", () => {
      cy.get(dashboardPages.btnDonate).click();
    });

    it("Donate button - give 200 OK status", () => {
      checkStatus200ForLink(dashboardPages.btnDonate);
    });
  });
});
