import { NavigationPages } from "./pages/dashboard.page";

const navigationPages = new NavigationPages();

describe("Teaching library", () => {
  describe.skip("Dashboard Page", () => {
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

  describe("Working of Filter Menu", () => {
    beforeEach(() => {
      cy.visit("/teachings-library");

      //Open filter menu
      cy.get(navigationPages.btnFilterTitle).click();
    });

    describe.skip("Media Type dropdown", () => {

      it("Media Type dropdown - should have default value", () => {
        cy.get(navigationPages.dropdownMediaType)
          .select(0)
          .should("have.value", "");
      });

      it("Media Type dropdown - should have 1st option equal to (text/value) Audio:7948", () => {
        cy.get(navigationPages.dropdownMediaType)
          .select(1)
          .should("have.value", navigationPages.dropdownMediaType_AudioValue);
      });

      it("Media Type dropdown - should have 2nd option equal to (text/value) Video:7949", () => {
        cy.get(navigationPages.dropdownMediaType)
          .select(2)
          .should("have.value", navigationPages.dropdownMediaType_VideoValue);
      });

      it("Media Type dropdown - 1st option selection should work", () => {
        navigationPages.selectDropdownOptionByValue(
          navigationPages.dropdownMediaType_AudioValue
        );
      });

      it("Media Type dropdown - 2nd option selection should work", () => {
        navigationPages.selectDropdownOptionByValue(
          navigationPages.dropdownMediaType_VideoValue
        );
      });
    });
  });
});
