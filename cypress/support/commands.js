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
Cypress.Commands.add("randomEmail", () => {
  const Chance = require("chance");
  const chance = new Chance();
  const username = chance.string({
    length: 8,
    pool: "abcdefghijklmnopqrstuvwxyz0123456789",
  });
  const domain = "example.com";
  const email = `${username}@${domain}`;
  return email;
});

Cypress.Commands.add("randomName", () => {
  const Chance = require("chance");
  const chance = new Chance();
  const randomName = chance.name();
  return randomName;
});
