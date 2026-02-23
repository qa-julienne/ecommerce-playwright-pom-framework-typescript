import type {Page, Locator } from '@playwright/test'//importing Page, Locator from playwright/test

export class HomePage {
  readonly page: Page;// The current page variable is the same as the Page interface variable
  readonly myAccountIcon: Locator;
  readonly laptopsAndNotebooksMenu: Locator;
  readonly showAllLaptopsAndNotebooks: Locator;
  readonly checkoutLink: Locator;
  readonly loginLink: Locator;


  //contructor
  constructor(page: Page) //pass the page
  {
    this.page = page;//initialize the constructor

    //locators
    // Header / top navigation
    this.myAccountIcon = page.getByRole('link', { name: ' My Account ' });
    this.laptopsAndNotebooksMenu = page.getByRole('link', { name: 'Laptops & Notebooks', exact: true });
    this.showAllLaptopsAndNotebooks = page.getByRole('link', { name: 'Show All Laptops & Notebooks' });
    this.checkoutLink = page.getByRole('link', { name: ' Checkout' });

    // My Account dropdown
    this.loginLink = page.getByRole('link', { name: 'Login' });
  }

  //actions or methods
  async goto():Promise <void> {
    await this.page.goto('https://cloudberrystore.services/');
  }

  async openMyAccount():Promise <void> {
    await this.myAccountIcon.click();
  }

  async clickLogin():Promise <void> {
    await this.loginLink.click();
  }

  async openAllLaptopsAndNotebooks():Promise <void>  {
    await this.laptopsAndNotebooksMenu.click();
    await this.showAllLaptopsAndNotebooks.click();
  }

  async goToCheckout():Promise <void> {
    await this.checkoutLink.click();
  }
}

