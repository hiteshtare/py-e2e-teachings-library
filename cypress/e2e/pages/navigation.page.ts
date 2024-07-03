// Import custom config
import { TEST_CONFIG } from "../config";

// Import custom modules
import { captureSreenshot } from "../util/common.util";

export class NavigationPages {
  btnFilterTitle = ".elementor-toggle-title";
  divFilterTab = "#elementor-tab-content-1091";


  checkIfElementNotVisible(selector: string) {
    captureSreenshot(1000);

    cy.get(selector).should('not.be.visible');
  }

  checkIfElementIsVisible(selector: string) {
    captureSreenshot(1000);

    cy.get(selector).should('be.visible');
  }

}