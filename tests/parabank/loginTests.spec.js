const { test} = require('@playwright/test');
const { TestLogin } = require('../Classes/testLogin.spec');

test('Login Test @parabank', async ({ page }) => {
    const testLogin = new TestLogin(page);
    await testLogin.goto('https://parabank.parasoft.com/parabank/index.htm');
    await testLogin.inputUserName('#loginPanel > form > div:nth-child(2) > input','hezi');
    await testLogin.inputPassword('#loginPanel > form > div:nth-child(4) > input','12342');
    await testLogin.clickSubmit('#loginPanel > form > div:nth-child(5) > input');
    
  });



