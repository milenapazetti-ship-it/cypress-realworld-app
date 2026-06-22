describe('Successful login', () => {
  it('Should login with a valid user', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signin-username"]').type('Heath93')
    cy.get('[data-test="signin-password"]').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.url().should('not.include', '/signin')
  })
})

describe('Login with invalid credentials', () => {
  it('Should display an error message when logging in with invalid credentials', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signin-username"]').type('invaliduser')
    cy.get('[data-test="signin-password"]').type('wrongpassword')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"]').should('be.visible')
  })
})

describe('Successful user registration', () => {
  it('Should register a new user with valid information', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('[data-test="signup-first-name"]').type('Milena')
    cy.get('[data-test="signup-last-name"]').type('Corazza')
    cy.get('[data-test="signup-username"]').type('milena_tester_' + Date.now())
    cy.get('[data-test="signup-password"]').type('s3cret123')
    cy.get('[data-test="signup-confirmPassword"]').type('s3cret123')
    cy.get('[data-test="signup-submit"]').click()
    cy.url().should('include', '/signin')
  })
})

describe('User registration with incomplete information', () => {
  it('Should display error messages when trying to register without filling all required fields', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('[data-test="signup-first-name"]').click()
    cy.get('[data-test="signup-last-name"]').click()
    cy.get('[data-test="signup-username"]').click()
    cy.get('body').click(0, 0)
    cy.contains('First Name is required').should('be.visible')
  })
})