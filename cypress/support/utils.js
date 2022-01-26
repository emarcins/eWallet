const newTransaction = (title, amount, select) => {
    cy.get("button.add-transaction").click();
    cy.get("#name").type(title);
    cy.get("#amount").type(amount);
    cy.get("select").select(select);
    cy.get(".save").click();
}

export { newTransaction }