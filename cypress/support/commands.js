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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('login', () => {
    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNWI3MjdkZjA4YjdhZjI2OWQxZjNjOTE2IiwiaWF0IjoxNTM0MjMwMDAwfQ.afpdLgYPZu-6PHR3dQW255nd5jDHcGieF2XV3dPVPck')    
    window.localStorage.setItem('actualTeamId', '5b727e5c585efd6a4ff0e13c')
    window.localStorage.setItem('version', '0.2.3')
})