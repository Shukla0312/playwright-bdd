// Generated from: src\ui\feature\ecommerce\orderProduct.feature
import { test } from "playwright-bdd";

test.describe('Order Product', () => {

  test('Successful Product Order', async ({ Given, page, When, Then, And }) => { 
    await Given('I visit the eCommerce website', null, { page }); 
    await When('I enter valid username and password on Ecommerce login Page', null, { page }); 
    await Then('I should be logged in successfully'); 
    await When('I add a "Zara Coat 3" to the cart', null, { page }); 
    await And('I view the cart'); 
    await Then('I should see "Zara Coat 3" in the cart'); 
    await When('I proceed to checkout', null, { page }); 
    await And('I enter shipping details and confirm Order', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\ui\\feature\\ecommerce\\orderProduct.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I visit the eCommerce website","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter valid username and password on Ecommerce login Page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I add a \"Zara Coat 3\" to the cart","stepMatchArguments":[{"group":{"start":8,"value":"\"Zara Coat 3\"","children":[{"start":9,"value":"Zara Coat 3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I view the cart","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see \"Zara Coat 3\" in the cart","stepMatchArguments":[{"group":{"start":13,"value":"\"Zara Coat 3\"","children":[{"start":14,"value":"Zara Coat 3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I enter shipping details and confirm Order","stepMatchArguments":[]}]},
]; // bdd-data-end