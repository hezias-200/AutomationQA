const { expect } = require('@playwright/test');

exports.TestLogin = class TestLogin {
    constructor(page) {
        this.page = page;
      }
      async goto(url) {
        await this.page.goto(`${url}`);
      }
      async inputUserName(locator,userName) {
        await this.page.fill(`${locator}`,`${userName}`);
      }
      async inputPassword(locator,password) {
        await this.page.fill(`${locator}`,`${password}`);
      }
      async clickSubmit(submit) {
        await this.page.click(`${submit}`);
      }
    }    
