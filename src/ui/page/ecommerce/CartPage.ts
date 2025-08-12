import { BasePage } from '../BasePage';
import { expect } from '@playwright/test';

export class CartPage extends BasePage {
    private selectors = {
        cartItems: '.cart-item',
        checkoutButton: '#checkout',
        emptyCartMessage: '.empty-cart-message'
    };

    async proceedToCheckout() {
        await this.page.getByRole('button', { name: 'Checkout❯' }).click();
        await this.page.waitForLoadState('networkidle');
    }

    async placeOrder() {
        await this.page.getByRole('textbox', { name: 'Select Country' }).click();
        await this.page.getByRole('textbox', { name: 'Select Country' }).pressSequentially('Ind');
        await this.page.getByRole('button', { name: 'India' }).last().click();
        await this.page.getByText('Place Order').click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.getByRole('heading', { name: 'Thankyou for the order.' })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: 'ZARA COAT 3 Qty: 1', exact: true })).toBeVisible();
    }
}