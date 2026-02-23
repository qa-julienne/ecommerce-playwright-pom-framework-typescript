import { expect, type Page, type Locator } from '@playwright/test';

export class CheckoutPage {
readonly page: Page;
readonly loginLink: Locator;
readonly dropdownShippingAdddress: Locator;
readonly selectShipAddress: Locator;
readonly shippingConfirmation: Locator;
readonly shippingMethod: Locator;
readonly btnContinue: Locator;
readonly paymentMethod: Locator;
readonly btnConfirmOrder: Locator;
readonly confirmationMessage: Locator;


 
  constructor(page: Page) //pass the page
  {
    this.page = page;//initialize the constructor

    //locators
    this.loginLink = page.getByRole('link', { name: 'login page' });
    this.dropdownShippingAdddress = page.locator('#input-shipping-address');
    this.selectShipAddress = page.locator('#input-shipping-address');
    this.shippingConfirmation = page.getByText('Success: You have changed');
    this.shippingMethod = page.locator('#button-shipping-methods');
    this.btnContinue = page.getByRole('button', { name: 'Continue' });
    this.paymentMethod = page.locator('#button-payment-methods');
    //this.btnContinuePaymentMethod = page.locator("//button[@id='button-payment-method']");
    this.btnConfirmOrder = page.getByRole('button', { name: 'Confirm Order' });
    this.confirmationMessage = page.getByRole('heading', { name: 'Your order has been placed!' });
  }

  async clickLoginLink(): Promise<void>
  {
    await this.loginLink.click();
  }

  async selectShippingAddress(): Promise<void>
  {
    await this.dropdownShippingAdddress.click();
    await this.selectShipAddress.selectOption({ index: 1 });
  }


  async selectShippingMethod(): Promise<void>
  {
    await this.shippingMethod.click();
    await this.btnContinue.click();
    
    await expect(this.paymentMethod).toBeVisible();
  }


  async selectPaymentMethod(): Promise<void>
  {
    await this.paymentMethod.click();
    await this.btnContinue.click();

    await expect(this.btnConfirmOrder).toBeEnabled();
  }


  async clickConfirmOrder(): Promise<void>
  {
    await this.btnConfirmOrder.click();
  }
}
