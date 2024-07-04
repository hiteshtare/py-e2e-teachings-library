//Import test data for Books
const testDataForURL = require("../fixtures/teachingsLibrary_url.json");

describe.skip("URL Testing", () => {
  describe("Teaching URLs: OK status", () => {
    testDataForURL.forEach((testCase: any, index: number) => {
      it(`#${index + 1} URL with Title:${
        testCase["YSS New URL (Redirection TO)"]
      } should give 200 OK status`, () => {
        cy.request("HEAD", `${testCase["URLs for testing before redirection"]}`)
          .its("status")
          .should("eq", 200);

        cy.log(
          `#${index + 1} URL with Title: ${
            testCase["YSS New URL (Redirection TO)"]
          }`
        );
      });
    });
  });

  describe("Blog URLs: Redirection", () => {
    const urlStringMatch = "/teachings-library/";

    testDataForURL.forEach((testCase: any, index: number) => {
      it(`#${index + 1} Blog url with Title:${
        testCase["YSS Old URL (Redirection FROM)"]
      } should redirect to Teaching Library url`, () => {
        const urlRedirectionFrom = testCase["YSS Old URL (Redirection FROM)"];
        cy.visit(urlRedirectionFrom);

        cy.url().should("include", urlStringMatch);

        cy.log(
          `#${index + 1} Blog url with Title: ${
            testCase["YSS New URL (Redirection FROM)"]
          }`
        );
        
        cy.screenshot({ capture: "viewport" });
      });
    });
  });
});
