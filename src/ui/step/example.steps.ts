import { expect } from '@playwright/test';
import { Given, When, Then } from '../../resources/config/fixture';
import { ConfigManager } from '../../resources/config/ConfigManager';
import { PlaywrightDocsPage } from '../page/playwrightExample/playwrightDocsPage';

let docsPage: PlaywrightDocsPage;
let url = ConfigManager.PLAYWRIGHT_URL;

Given('I open the Playwright website', async ({ page }) => {
  docsPage = new PlaywrightDocsPage(page);
  await docsPage.goto(url);
});

Then('the title should be {string}', async ({ page }, expectedTitle: string) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

When('I click on the {string} link', async ({ page }, linkText: string) => {
  await page.click(`text=${linkText}`);
});

Then('I should see the following headings and content:', async ({ }, dataTable) => {
  await docsPage.verifyContent(dataTable);
});

Then('I should see the code block with text {string}', async ({ page }, expectedText: string) => {
  const codeBlock = await page.innerText('pre');
  expect(codeBlock).toContain(expectedText);
});

Then('I should see the {string} text', async ({ }, text: string) => {
  await docsPage.verifyText(text);
});