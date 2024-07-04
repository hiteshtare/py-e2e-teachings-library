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

    describe.skip("dropdown: Media Type", () => {

      it("dropdown: Media Type - should have default value", () => {
        cy.get(navigationPages.dropdownMediaType)
          .select(0)
          .should("have.value", "");
      });

      it("dropdown: Media Type - should have 1st option equal to (text/value) Audio:7948", () => {
        cy.get(navigationPages.dropdownMediaType)
          .select(1)
          .should("have.value", navigationPages.dropdownMediaType_AudioValue);
      });

      it("dropdown: Media Type - should have 2nd option equal to (text/value) Video:7949", () => {
        cy.get(navigationPages.dropdownMediaType)
          .select(2)
          .should("have.value", navigationPages.dropdownMediaType_VideoValue);
      });

      it("dropdown: Media Type - 1st option selection should work", () => {
        navigationPages.selectDropdownOptionByValue(
          navigationPages.dropdownMediaType_AudioValue
        );
      });

      it("dropdown: Media Type - 2nd option selection should work", () => {
        navigationPages.selectDropdownOptionByValue(
          navigationPages.dropdownMediaType_VideoValue
        );
      });
    });

    describe("checkboxlist: Category", () => {
      it("checkboxlist: Category - should be clickable", () => {
        navigationPages.checkIfElementIsClickable(navigationPages.checkboxlistCategory);
      });
    });

    describe("checkboxlist: Language", () => {
      it("checkboxlist: Language - should be clickable", () => {
        navigationPages.checkIfElementIsClickable(navigationPages.checkboxlistLanguage);
      });
    });
  });
});
