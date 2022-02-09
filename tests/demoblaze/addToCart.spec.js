const { test, expect} = require('@playwright/test');


test("Add To Cart @demoblaze",async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('#tbodyid > div:nth-child(1) > div > a')
    await page.click('#tbodyid > div.row > div > a')
    await page.click('#cartur')
    const product= await page.locator('#tbodyid > tr > td:nth-child(2)')
    await expect(product).toContainText("Samsung galaxy s6");
});