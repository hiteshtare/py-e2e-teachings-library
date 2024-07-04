// Import custom config
import { TEST_CONFIG } from "../config";

// Import custom modules
import { captureSreenshot } from "../util/common.util";

export class NavigationPages {

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
}