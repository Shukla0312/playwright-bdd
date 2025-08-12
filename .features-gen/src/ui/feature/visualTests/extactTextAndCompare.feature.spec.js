// Generated from: src\ui\feature\visualTests\extactTextAndCompare.feature
import { test } from "playwright-bdd";

test.describe('OCR from image', () => {

  test('Extract text from image and print it in the console', async ({ Given, When, page, Then }) => { 
    await Given('I navigate to Skills You Need website'); 
    await When('I capture the image', null, { page }); 
    await Then('I should see the extracted text printed in the console', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\ui\\feature\\visualTests\\extactTextAndCompare.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to Skills You Need website","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I capture the image","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the extracted text printed in the console","stepMatchArguments":[]}]},
]; // bdd-data-end