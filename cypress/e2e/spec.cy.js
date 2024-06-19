import '../support/commands'
import testCaseData from '../fixtures/example.json'

describe('template spec', () => {
  
  beforeEach(function () {

    // Preparing environments variables for this script run
    Cypress.env('stepNumber', 0)
    Cypress.env('writeFilePath', 'testLogs/testSpec/')
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.step('The test FAILED and the system provided the following message:')
      cy.writeFile(Cypress.env('writeFilePath') + Cypress.env('testDataID') + ' - ' + Cypress.env('testCaseDescription') + '.txt', this.currentTest.err, { log: false, flag: 'a+' })

    }
  })
  it('Just testing some random stuff on a website', () => {
    // Setting the correct values for environement variables
    Cypress.env('testCaseDescription', testCaseData.testCaseDescription)
    Cypress.env('testDataID', testCaseData.testCaseID)

    cy.writeFile(Cypress.env('writeFilePath') + Cypress.env('testDataID') + ' - ' + Cypress.env('testCaseDescription') + '.txt', 'Steps to reproduce\n', 'ascii')
    cy.step('Loading the current site tested: ' + Cypress.config().baseUrl)
    cy.visit('/')

    cy.step('Find and click the COMMANDS button in the top menu')
    cy.get('.dropdown-toggle').click()

    cy.step('Find and click the ACTIONS option from the dropdown menu')
    cy.get('.dropdown-menu > :nth-child(3) > a').click()

    cy.step('Find the EMAIL input box and type: fake@email.com ')
    cy.get('.action-email').type('fake@email.com')

    cy.step('Find and click the COMMANDS button in the top menu')
    cy.get('.dropdown-toggle').click()

    cy.step('Find and click the ASSERTIONS option from the dropdown menu')
    cy.get(':nth-child(8) > a').click()

    cy.step('Find and assert that the Link is active, has the attribute href and includes the text cypress.io')
    cy.get('.assertions-link').should('have.class', 'active')
    .and('have.attr', 'href')
    .and('include', 'Cypress.io')

    cy.step('*********************************** The test has passed **************************')
  })
})