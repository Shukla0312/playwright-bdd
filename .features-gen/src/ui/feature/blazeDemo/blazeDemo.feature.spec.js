// Generated from: src\ui\feature\blazeDemo\blazeDemo.feature
import { test } from "playwright-bdd";

test.describe('Purchase a flight from Boston to London on BlazeDemo', () => {

  test('User selects a United Airlines flight and completes the purchase', async ({ Given, page, When, And, Then }) => { 
    await Given('I visit BlazeDemo flight page', null, { page }); 
    await When('I select departure city as "Boston"'); 
    await And('I select destination city as "London"'); 
    await And('I click on Find Flights'); 
    await And('I choose the flight with airline "United Airlines"', null, { page }); 
    await And('I fill in the passenger details:', {"dataTable":{"rows":[{"cells":[{"value":"Name"},{"value":"Rahul Shukla"}]},{"cells":[{"value":"Address"},{"value":"123 Main St."}]},{"cells":[{"value":"City"},{"value":"Anytown"}]},{"cells":[{"value":"State"},{"value":"Delhi"}]},{"cells":[{"value":"Zip Code"},{"value":"123456"}]},{"cells":[{"value":"Credit Card Number"},{"value":"4111111111111111"}]},{"cells":[{"value":"Month"},{"value":"11"}]},{"cells":[{"value":"Year"},{"value":"2027"}]},{"cells":[{"value":"Name on Card"},{"value":"Rahul Shukla"}]}]}}, { page }); 
    await And('I click on Purchase Flight'); 
    await Then('I should see the message "Thank you for your purchase today!"', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\ui\\feature\\blazeDemo\\blazeDemo.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I visit BlazeDemo flight page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I select departure city as \"Boston\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Boston\"","children":[{"start":28,"value":"Boston","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I select destination city as \"London\"","stepMatchArguments":[{"group":{"start":29,"value":"\"London\"","children":[{"start":30,"value":"London","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I click on Find Flights","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I choose the flight with airline \"United Airlines\"","stepMatchArguments":[{"group":{"start":33,"value":"\"United Airlines\"","children":[{"start":34,"value":"United Airlines","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I fill in the passenger details:","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And I click on Purchase Flight","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the message \"Thank you for your purchase today!\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Thank you for your purchase today!\"","children":[{"start":26,"value":"Thank you for your purchase today!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end