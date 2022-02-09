// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.TestUI = class TestUI {

  constructor(page,locator) {
    this.page = page;
    this.locator = page.locator(`${locator}`);
  }

  async goto(url) {
    await this.page.goto(`${url}`);
  }

  async getStarted(title) {
    await expect(this.locator).toHaveText(`${title}`);
  }

}



// const { test, expect } = require('@playwright/test');


// const test_qulititestUI = {

//  navbarTest: test('Navbar include Solution tag @navbar', async ({ page }) => {
//   await page.goto('https://qualitestgroup.com/');
//   const title = page.locator('#mega-menu-item-12568 > a');
//   await expect(title).toHaveText('Solutions');
// }),
// navbarTest2:test('Navbar include Contact Us @navbar', async ({ page }) => {
//   await page.goto('https://qualitestgroup.com/');
//   const title = page.locator('#updated_nav > div.main-nav__search > a.main-nav-btn > span');
//   await expect(title).toHaveText('Contact Us');
// })
// }

// module.exports = test_qulititestUI;