import { CommonPage } from '../page/Common/commonPage';
import { ConfigManager } from '../../resources/config/ConfigManager';
import { Given, When, Then, Before } from '../../resources/config/fixture';

let commonPage: CommonPage;

// Initialize the page object before each scenario
Before(async ({ page }) => {
  commonPage = new CommonPage(page);
});

Given('I visit the charts page', async () => {
  await commonPage.goto(ConfigManager.CHARTJS_URL);
});

Given('I navigate to Skills You Need website', async () => {
  await commonPage.goto(ConfigManager.SKILLS_YOU_NEED_URL);
});

When('I capture the image', async ({ page }) => {
  commonPage = new CommonPage(page);
  await commonPage.captureScreenshot('charts.png');
});

When('I capture image of the dashboard and extract the text', async ({ page }) => {
  commonPage = new CommonPage(page);
  await commonPage.captureScreenshotAndExtractText('dashboard.png');
});

Then('I should see the extracted text printed in the console', async ({ page }) => {
  commonPage = new CommonPage(page);
  let extractedText = await commonPage.extractTextFromImage('screenshots/charts.png');
  await commonPage.verifyExtractedText(extractedText);
});

When('I should extract the text from canvas and print it in the console', async ({ page }) => {
  commonPage = new CommonPage(page);
  await commonPage.extractTextFromCanvas();
});

Then('I capture and compare the screenshot', async ({ page }) => {
  commonPage = new CommonPage(page);
  await commonPage.captureAndCompareScreenshot();
});
