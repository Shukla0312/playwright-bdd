// Generated from: src\ui\feature\playwrightExample\example.feature
import { test } from "playwright-bdd";

test.describe('Example feature', () => {

  test('Open Playwright website', async ({ Given, page, Then, When, And }) => { 
    await Given('I open the Playwright website', null, { page }); 
    await Then('the title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"', null, { page }); 
    await When('I click on the "Docs" link', null, { page }); 
    await And('I click on the "How to install Playwright" link', null, { page }); 
    await Then('I should see the following headings and content:', {"dataTable":{"rows":[{"cells":[{"value":"Installing Playwright"}]},{"cells":[{"value":"init playwright@latest"}]},{"cells":[{"value":"What's Installed"}]}]}}); 
    await And('I should see the code block with text "npm init playwright@latest"', null, { page }); 
    await When('I click on the "Community" link', null, { page }); 
    await And('I click on the "Ambassador page" link', null, { page }); 
    await Then('I should see the "Meet the Ambassadors" text'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\ui\\feature\\playwrightExample\\example.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open the Playwright website","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then the title should be \"Fast and reliable end-to-end testing for modern web apps | Playwright\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Fast and reliable end-to-end testing for modern web apps | Playwright\"","children":[{"start":21,"value":"Fast and reliable end-to-end testing for modern web apps | Playwright","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I click on the \"Docs\" link","stepMatchArguments":[{"group":{"start":15,"value":"\"Docs\"","children":[{"start":16,"value":"Docs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I click on the \"How to install Playwright\" link","stepMatchArguments":[{"group":{"start":15,"value":"\"How to install Playwright\"","children":[{"start":16,"value":"How to install Playwright","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the following headings and content:","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And I should see the code block with text \"npm init playwright@latest\"","stepMatchArguments":[{"group":{"start":38,"value":"\"npm init playwright@latest\"","children":[{"start":39,"value":"npm init playwright@latest","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I click on the \"Community\" link","stepMatchArguments":[{"group":{"start":15,"value":"\"Community\"","children":[{"start":16,"value":"Community","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I click on the \"Ambassador page\" link","stepMatchArguments":[{"group":{"start":15,"value":"\"Ambassador page\"","children":[{"start":16,"value":"Ambassador page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Meet the Ambassadors\" text","stepMatchArguments":[{"group":{"start":17,"value":"\"Meet the Ambassadors\"","children":[{"start":18,"value":"Meet the Ambassadors","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end