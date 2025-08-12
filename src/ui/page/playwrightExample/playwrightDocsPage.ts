import { BasePage } from '../BasePage';
import { expect } from '@playwright/test';

export class PlaywrightDocsPage extends BasePage {

    async navigateToLoginPage(url: string) {
        await this.page.goto(url);
    }

    async verifyContent(dataTable: { rawTable: string[][] }) {
        for (let index = 0; index < dataTable.rawTable.length; index++) {
            const element = dataTable.rawTable[index][0];
            await expect(this.page?.getByText(element).first()).toBeVisible();
        }
    }

    async verifyText(text: string) {
        const element = await this.page.getByText(text).first();
        if (!element) {
            throw new Error(`Text "${text}" not found on the page`);
        }
        await expect(element).toBeVisible();
    }
}
