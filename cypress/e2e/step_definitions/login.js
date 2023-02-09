import {
<<<<<<< HEAD
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'
=======
  Given, When, And, Then,
} from "@badeball/cypress-cucumber-preprocessor";

const loginPage = require("../../pages/LoginPage");
>>>>>>> c334d53 (New changes)

Given("A web browser is at the saucelabs login page", () => {
  cy.visit("/");
});

<<<<<<< HEAD
When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
=======
When("A user enters the username {string}", (username) => {
  loginPage.typeUsername(username);
});

When("A user provides incorrect credentials", (table) => {
>>>>>>> c334d53 (New changes)
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});
<<<<<<< HEAD
=======

And("A user enters the password {string}", (password) => {
  loginPage.typePassword(password);
});

And("A user clicks on the login button", () => {
  loginPage.clickLogin();
});

>>>>>>> c334d53 (New changes)
Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
