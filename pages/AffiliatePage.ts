import type {Page, Locator } from '@playwright/test'//importing Page, Locator from playwright/test


export class AffiliatePage {

  readonly page: Page;
  readonly clearCompany: Locator;
  readonly txtCompany: Locator;
  readonly txtWebSite: Locator;
  readonly txtTaxId: Locator;
  readonly chequePayeeName: Locator;
  readonly btnContinue: Locator;
  readonly successMessage: Locator;
  
  //contructor
  constructor(page: Page) //pass the page
  {
    this.page = page;//initialize the constructor

    //locators
    this.clearCompany = page.getByRole('textbox', { name: 'Company' });
    this.txtCompany = page.locator("#input-company");
    this.txtWebSite = page.getByRole('textbox', { name: 'Web Site' });
    this.txtTaxId = page.getByRole('textbox', { name: 'Tax ID' });
    this.chequePayeeName = page.getByRole('textbox', { name: '* Cheque Payee Name' });
    this.btnContinue = page.getByRole('button', { name: 'Continue' });
    this.successMessage = page.getByText('Success: Your affiliate');

 }

 async enterCompanyName(companyName: string):Promise<void>
  {
    await this.clearCompany.clear();
    await this.txtCompany.fill(companyName);
  }

   async enterWebSiteName(webSiteName: string):Promise<void>
  {
    await this.txtWebSite.clear();
    await this.txtWebSite.fill(webSiteName);
  }

  async enterTaxID(taxID: string):Promise<void>
  {
    await this.txtTaxId.clear();
    await this.txtTaxId.fill(taxID);
  }

  async enterChequePayeeName(chequePayeeName: string):Promise<void>
  {
    await this.chequePayeeName.clear();
    await this.chequePayeeName.fill(chequePayeeName);
  }

  async clickContinue():Promise<void>
  {
    await this.btnContinue.click();
  }
}
