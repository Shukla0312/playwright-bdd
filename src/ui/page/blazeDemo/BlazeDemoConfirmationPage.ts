import { BasePage } from '../BasePage';

export class BlazeDemoConfirmationPage extends BasePage {
  async getConfirmationMessage() {
    const message = await this.page.textContent('h1');
    return message ? message.trim() : '';
  }
}
