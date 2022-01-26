import { newTransaction } from "./../../../../eWallet/cypress/support/utils";

describe("eWallet app testing", () => {
  context("Loading app", () => {
    it("Main page is loading and has a proper header", () => {
      cy.visit("/eWallet/index.html");
      cy.get("header p").should("contain.text", "finance manager");
    });
  });
  context("Adding transactions", () => {
    //first transaction
    const firstTitle = "Monthly salary";
    const firstAmount = "5000";
    const firstSelect = "income";

    //second transaction
    const secondTitle = "New iPad";
    const secondAmount = "-2000";
    const secondSelect = "shopping";

    //third transaction
    const thirdTitle = "Dinner";
    const thirdAmount = "-150zł";
    const thirdSelect = "food";

    //fourth transaction
    const fourthTitle = "Cinema";
    const fourthAmount = "-25zł";
    const fourthSelect = "leisure";

    it("Adding first transaction - income section", () => {
      newTransaction(firstTitle, firstAmount, firstSelect);
    });

    it("Adding second transaction - shopping section", () => {
      newTransaction(secondTitle, secondAmount, secondSelect);
    });

    it("Adding third transaction - dinner section", () => {
      newTransaction(thirdTitle, thirdAmount, thirdSelect);
    });

    it("Adding fourth transaction - leisure section", () => {
      newTransaction(fourthTitle, fourthAmount, fourthSelect);
    });
  });
  context("Changing color of the page", () => {
    it("Turn on 'dark mode'", () => {
      cy.get("button.dark").click();
    });
  });
  context("Delete transaction", () => {
    it("Delete single transaction - second expense", () => {
      cy.get(".transaction").eq(2).find("button.delete").click();
    });
  });
  context("Delete all transactions", () => {
    it("Click in the 'Delete all' button", () => {
      cy.get("button.delete-all").click();
    });
  });
});
