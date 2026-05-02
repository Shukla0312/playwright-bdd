// Generated from: src/ui/feature/login/login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Successful login with valid credentials', { tag: ['@regression'] }, async ({ Given, When, Then }) => { 
    await Given('I visit the eCommerce website'); 
    await When('I enter valid username and password on Ecommerce login Page'); 
    await Then('I should be logged in successfully'); 
    await When('I click on the logout button'); 
    await Then('I should be logged out successfully'); 
  });

  test('Failed login with invalid credentials', { tag: ['@regression'] }, async ({ Given, When, Then }) => { 
    await Given('I visit the eCommerce website'); 
    await When('I enter invalid username and password on Ecommerce login Page'); 
    await Then('I should see an error message'); 
  });

  test('Required field validation on login form', { tag: ['@regression'] }, async ({ Given, When, Then }) => { 
    await Given('I visit the eCommerce website'); 
    await When('I click on the login button without entering credentials'); 
    await Then('I should see a mandatory field error message'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src/ui/feature/login/login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I visit the eCommerce website","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter valid username and password on Ecommerce login Page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on the logout button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be logged out successfully","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":10,"tags":["@regression"],"steps":[{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I visit the eCommerce website","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I enter invalid username and password on Ecommerce login Page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":["@regression"],"steps":[{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I visit the eCommerce website","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click on the login button without entering credentials","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see a mandatory field error message","stepMatchArguments":[]}]},
]; // bdd-data-end