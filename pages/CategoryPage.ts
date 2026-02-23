import type {Page, Locator } from '@playwright/test'//importing Page, Locator from playwright/test


export class CategoryPage
{
readonly page: Page;

//contructor
  constructor(page: Page) //pass the page
  {
    this.page = page;//initialize the constructor


    //locators
    //page.getByText('HP LP3065', { exact: true }).click();

  }

  //actions or methods
  async openProductByName (productName: string)//productName is the parameter
  {
    await this.page.getByText(productName, { exact: true }).click();
  }
}

