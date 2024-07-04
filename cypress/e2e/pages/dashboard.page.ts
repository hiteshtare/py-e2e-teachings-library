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

  //Checkboxlist
  checkboxlistCategory = '.elementor-element-f4e1846 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .jet-smart-filters-checkboxes > .jet-filter-items-dropdown > .jet-filter-items-dropdown__label';
  checkboxlistLanguage = '.elementor-element-b5b9f6e > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .jet-smart-filters-checkboxes > .jet-filter-items-dropdown > .jet-filter-items-dropdown__label';
  //Checkboxlist

  checkIfElementNotVisible(selector: string) {
    cy.get(selector).should('not.be.visible');

    captureSreenshot(500);
  }

  checkIfElementIsVisible(selector: string) {
    cy.get(selector).should('be.visible');

    captureSreenshot(500);
  }

  checkIfElementIsClickable(selector: string) {
    cy.get(selector).click();

    captureSreenshot(500);
  }

  selectDropdownOptionByValue(value: string) {
    cy.get(this.dropdownMediaType).select(value);

    captureSreenshot(3000);
  }
}