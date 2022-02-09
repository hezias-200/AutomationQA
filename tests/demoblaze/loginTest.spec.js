const { test, expect, chromium } = require('@playwright/test');

test("signIn @demoblaze", async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.click('#login2')
  await page.fill('#loginusername', 'hezi');
  await page.fill('#loginpassword', '1234');
  await page.click('#logInModal > div > div > div.modal-footer > button.btn.btn-primary');
  const buttonLogout = await page.locator('#logout2')
  await expect(buttonLogout).toBeVisible();
});


test("user Exist @demoblaze",async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.click('#login2');
  await page.fill('#loginusername','hezi');
  await page.fill('#loginpassword','1234644444444444444');
  await page.click('#logInModal > div > div > div.modal-footer > button.btn.btn-primary');
   page.on('dialog', async dialog => {
     console.log(dialog.message());
    });
  })

test.describe('Alert @demoblaze', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
  });

  test('should trigger an alert with a message', async ({ page }) => {

    await page.click('#login2');

    await page.fill('#loginusername', 'hezi');

    await page.fill('#loginpassword', '12456');

    page.on('dialog', async dialog => {
      console.log(dialog.message());
      expect(dialog.message()).toContain('Wrong password.');

      await dialog.accept();



    });

    await page.click('#logInModal > div > div > div.modal-footer > button.btn.btn-primary');

    await delay(3000); // <-- here we wait 3s

  });


});

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))