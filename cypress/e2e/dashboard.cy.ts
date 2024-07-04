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

  describe.skip("Item card", () => {
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

  const goToNextPage = () => {
    cy.get("@nextButton")
      .invoke("attr", "disabled")
      .then((disabled) => {
        cy.get("@nextButton").should('exist');
        if (disabled === "disabled") {
          cy.get("@nextButton").should("have.attr", "disabled");
        } else {
          cy.get("@nextButton").click().then(goToNextPage);
        }
      });
  };

  function maybeClickNext(page = 1) {
    // the Next button is always present
    // let's get its attribute "disabled"

    let btnNext = "";
    if (page === 1) {
      btnNext = ".prev-next > .jet-filters-pagination__link";
    } else {
      btnNext = ".next > .jet-filters-pagination__link";
    }

    cy.get(btnNext, { log: false })
      .invoke({ log: false }, "attr", "disabled")
      .then((disabled) => {
        if (disabled === "disabled") {
          cy.log("Last page!");
        } else {
          cy.log(`Page ${page}`);
          // not the end yet, sleep half a second for clarity,
          // click the button, and recursively check again
          cy.get(btnNext)
            .click()
            .then(() => maybeClickNext(page + 1));
        }
      });
  }

  describe("Pagination", () => {
    it("clicks the Next button until we get to the last page", () => {
      cy.contains("Next").as("nextButton").click({force:true});
      goToNextPage();

      // the HTML table on the page is paginated
      // can you click the "Next" button until
      // we get to the very last page?
      // button selector ".prev-next > .jet-filters-pagination__link"

      // maybeClickNext();

      // cy.log("**confirm we are on the last page**");
      // cy.get(".prev-next > .jet-filters-pagination__link").should("be.disabled");
      // cy.get("[value=last]").should("be.disabled");
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
