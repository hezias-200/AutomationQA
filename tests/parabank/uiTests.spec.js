const { test} = require('@playwright/test');
const { TestUI } = require('../Classes/testUI.spec');


test('Customer Login title @parabank', async ({ page }) => {
    const CustomerLoginTitle = new TestUI(page, '#leftPanel > h2');
    await CustomerLoginTitle.goto('https://parabank.parasoft.com/parabank/index.htm/');
    await CustomerLoginTitle.getStarted('Customer Login');
  });

  test('Username Titled @parabank', async ({ page }) => {
    const userNameTitle = new TestUI(page, '#loginPanel > form > p:nth-child(1) > b');
    await userNameTitle.goto('https://parabank.parasoft.com/parabank/index.htm/');
    await userNameTitle.getStarted('Username');
  
  });