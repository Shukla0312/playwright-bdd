// Generated from: src\api\feature\apiCallMocking.feature
import { test } from "playwright-bdd";

test.describe('Mock API Call for Product Details', () => {

  test('Verify the product details after mocking the API response', async ({ Given, page, When, Then, And }) => { 
    await Given('I visit the eCommerce website', null, { page }); 
    await When('I enter valid username and password on Ecommerce login Page', null, { page }); 
    await Then('I should be logged in successfully'); 
    await When('I click on View "Zara Coat 3"', null, { page }); 
    await Then('I should mock the response for the product details and change the price to 100', null, { page }); 
    await And('I should see the updated product details with the new price', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\api\\feature\\apiCallMocking.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I visit the eCommerce website","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter valid username and password on Ecommerce login Page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on View \"Zara Coat 3\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Zara Coat 3\"","children":[{"start":17,"value":"Zara Coat 3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should mock the response for the product details and change the price to 100","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And I should see the updated product details with the new price","stepMatchArguments":[]}]},
]; // bdd-data-end