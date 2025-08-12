import { BasePage } from '../BasePage';

export class HRMSLoginPage extends BasePage {
  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
