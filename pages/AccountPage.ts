import type {Page, Locator } from '@playwright/test'//importing Page, Locator from playwright/test

export class AccountPage
{
readonly page: Page;
readonly myAccountHeading: Locator;
readonly affiliateLink: Locator;

//contructor
  constructor(page: Page) //pass the page
  {
    this.page = page;//initialize the constructor
    
    //locators
    this.myAccountHeading = page.locator("//h1[normalize-space()='My Account']");
    this.affiliateLink = page.getByRole('link', { name: 'Affiliate', exact: true });

}

//actions or methods
async clickAffiliateLink():Promise <void>
{
    await this.affiliateLink.click();
}
}
