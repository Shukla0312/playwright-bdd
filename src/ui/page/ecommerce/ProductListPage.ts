import { BasePage } from '../BasePage';
import { expect } from '@playwright/test';

export class ProductListPage extends BasePage {
    private selectors = {
        productItems: '.product-item',
        addToCartButtons: '.add-to-cart',
        cartIcon: '[routerlink="/dashboard/cart"]'
    };

    async addProductToCart(productName: string) {
        await this.page.locator(".card-body").filter({ hasText: productName }).getByRole("button", { name: "Add to Cart" }).click();
    }

    async gotoCart() {
        await this.page.click(this.selectors.cartIcon);
        await this.page.waitForLoadState('networkidle');
    }

    async verifyProductInCart(productName: string) {
       await expect(this.page.getByRole('heading', { name: productName })).toBeVisible();
    }

    async clickOnViewProduct(productName: string) {
        await this.page.locator(".card-body").filter({ hasText: productName }).getByRole("button", { name: "View" }).click();
        await this.page.waitForLoadState('networkidle');
    }
}
