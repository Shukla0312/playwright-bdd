import path from 'path';
import Tesseract from 'tesseract.js';
import { BasePage } from '../BasePage';
import { expect } from '@playwright/test';

export class CommonPage extends BasePage {

    async captureScreenshot(fileName: string) {
        const element = this.page.locator('[alt="Example basic bar chart"]').first();
        await element.waitFor();
        await element.scrollIntoViewIfNeeded();
        const screenshotPath = path.resolve('screenshots', fileName);
        await element.screenshot({ path: screenshotPath });
        await console.log(`Screenshot saved to ${screenshotPath}`);
    }

    async captureScreenshotAndExtractText(fileName = 'dashboard.png') {
        const locator = await this.page.locator('#myDiversityChart').first();
        await locator.waitFor();
        await locator.scrollIntoViewIfNeeded();
        const imagePath = path.resolve('screenshots', fileName);
        await locator.screenshot({ path: imagePath });
        const extractedText = await this.extractTextFromImage(imagePath);
        await expect(extractedText).toContain("Employee");
        return extractedText;
    }

    async extractTextFromImage(imagePath: string) {
        const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
        await console.log(`Extracted text: ${text}`);
        return text;
    }

    async verifyExtractedText(extractedText: string) {
        const expectedTexts = ['Some Data',
            'Category 1',
            'Category 2',
            'Category 3',
            'Category 4'];
        expectedTexts.forEach(expectedText => {
            expect(extractedText).toContain(expectedText);
        });
    }

    async extractTextFromCanvas() {
        let expected = ["350", "300", "[", "250", "200", "150", "100", "50", "January", "February", "March", "May", "June", "July", "August"];
        const canvas = this.page.locator('canvas').first();
        await canvas.waitFor();
        await canvas.scrollIntoViewIfNeeded();
        const imagePath = path.resolve('screenshots', 'canvas.png');
        await canvas.screenshot({ path: imagePath });
        const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
        await console.log(`Extracted text from canvas: ${text}`);
        expected.forEach(expected => {
            expect(text).toContain(expected);
        });
    }

    async captureAndCompareScreenshot() {
        const card = await this.page.locator(".logo").first();
        await card.screenshot({ path: 'screenshots/expected-card.png' }); // Uncomment to capture a new screenshot
        // await card.scrollIntoViewIfNeeded();
        // await this.page.waitForTimeout(1000); // Wait for animations or lazy load
        // await expect(card).toHaveScreenshot('expected-card.png', {
        //     threshold: 0.2,
        //     animations: 'disabled',
        // });
    }
}

