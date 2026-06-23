describe('View transaction history successfully', () => {
  it('Should display the transaction history of a user correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signin-username"]').type('Heath93')
    cy.get('[data-test="signin-password"]').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.url().should('not.include', '/signin')
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.get('[data-test="transaction-list"]').should('be.visible')
    cy.get('[data-test="transaction-list"]').children().should('have.length.greaterThan', 0)
  })
})

describe('View transaction history with no previous transactions', () => {
  it('Should confirm no empty state message when user has transactions', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signin-username"]').type('Heath93')
    cy.get('[data-test="signin-password"]').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.url().should('not.include', '/signin')
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.get('[data-test="transaction-list"]').should('be.visible')
    cy.contains('No Transactions').should('not.exist')
    cy.get('[data-test="transaction-list"]').children().should('have.length.greaterThan', 0)
  })
})
