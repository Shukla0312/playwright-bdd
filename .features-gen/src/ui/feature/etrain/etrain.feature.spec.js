// Generated from: src\ui\feature\etrain\etrain.feature
import { test } from "playwright-bdd";

test.describe('Train Search and Schedule View on eTrain', () => {

  test('Search trains between two stations and view schedule', async ({ Given, page, When, And, Then }) => { 
    await Given('I open the eTrain homepage', null, { page }); 
    await When('I enter "NDLS" as the source station'); 
    await And('I enter "PUNE" as the destination station'); 
    await And('I click on the search button'); 
    await Then('I should see a list of trains running between "NDLS" and "PUNE"'); 
    await When('I click on the train number of the first listed train'); 
    await Then('I should be navigated to the train schedule page'); 
    await And('I should see the train route, days of run, and class availability'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\ui\\feature\\etrain\\etrain.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the eTrain homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter \"NDLS\" as the source station","stepMatchArguments":[{"group":{"start":8,"value":"\"NDLS\"","children":[{"start":9,"value":"NDLS","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I enter \"PUNE\" as the destination station","stepMatchArguments":[{"group":{"start":8,"value":"\"PUNE\"","children":[{"start":9,"value":"PUNE","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I click on the search button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see a list of trains running between \"NDLS\" and \"PUNE\"","stepMatchArguments":[{"group":{"start":46,"value":"\"NDLS\"","children":[{"start":47,"value":"NDLS","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":57,"value":"\"PUNE\"","children":[{"start":58,"value":"PUNE","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click on the train number of the first listed train","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the train schedule page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And I should see the train route, days of run, and class availability","stepMatchArguments":[]}]},
]; // bdd-data-end