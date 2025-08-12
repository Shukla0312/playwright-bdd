import { BasePage } from '../BasePage';

export class BlazeDemoPurchasePage extends BasePage {
  async fillForm(data: Record<string, string>) {
   // await this.page.pause();
    for (const [key, value] of Object.entries(data)) {
      await this.page.getByRole('textbox', { name: key, exact: true }).fill(value);
    }
  }

  async clickPurchaseFlight() {
    await this.page.click('[value="Purchase Flight"]');
  }
}
