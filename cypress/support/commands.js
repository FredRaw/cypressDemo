// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * @name step
 * @description Recording the steps to a file. If something fails, you will have generated steps to reproduce!
*    - In the BeforeEach block: (resets autocounter of stepNumber)
*      Cypress.env('stepNumber', 0)
*      Cypress.env('writeFilePath', 'testLogs/xxxxNameOfYourDesiredFolderxxxx/')
*    - In the AfterEach block: (writes the error message to file)
*      cy.writeFile(Cypress.env('writeFilePath') + Cypress.env('testDataID') + ' - ' + Cypress.env('testCaseComment') + '.txt', this.current.err, { log: false, flag: 'a+' })
*    - In the beginning of the it block: (Sets the beginning of the file)
*      Cypress.env('testCaseComment', testCaseData.comment)
*      Cypress.env('testDataID', testCaseData.testCaseID)
*      cy.writeFile(Cypress.env('writeFilePath') + Cypress.env('testDataID') + ' - ' + Cypress.env('testCaseComment') + '.txt', 'Steps to reproduce\n', 'ascii')
 * @param {string} stepDescription -> What the step does. Try to be specific so that it is easy to understand.
 */
Cypress.Commands.add('step', (stepDescription) => {
    const stepNumber = Cypress.env('stepNumber') + 1
    const step = stepNumber + ' - ' + stepDescription + '\n'
    const logFilePath = Cypress.env('writeFilePath') + Cypress.env('testDataID') + ' - ' + Cypress.env('testCaseDescription') + '.txt'
    cy.writeFile(logFilePath, step, { log:false, flag: 'a+'})
    Cypress.env('stepNumber', stepNumber)
})