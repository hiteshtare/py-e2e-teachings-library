// Import custom config
import { TEST_CONFIG } from "../config";

// Import custom modules
import { captureSreenshot } from "../util/common.util";

export class NavigationPages {
  btnFilterTitle = ".elementor-toggle-title";
  divFilterTab = "#elementor-tab-content-1091";

  //Dropdown
  dropdownMediaType = ".jet-select__control";
  dropdownMediaType_AudioValue = "7948";
  dropdownMediaType_VideoValue = "7949";
  //Dropdown

  checkIfElementNotVisible(selector: string) {
    captureSreenshot(1000);

    cy.get(selector).should('not.be.visible');
  }

  checkIfElementIsVisible(selector: string) {
    captureSreenshot(1000);

    cy.get(selector).should('be.visible');
  }

  selectDropdownOptionByValue(value: string) {
    cy.get(this.dropdownMediaType).select(value);
    captureSreenshot(3000);
  }
}