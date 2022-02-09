const { test} = require('@playwright/test');
const { TestUI } = require('../Classes/testUI.spec');


test('Samsung galaxy s6 title', async ({ page }) => {
    const Samsunggalaxys6Title = new TestUI(page, '#tbodyid > div:nth-child(1) > div > div > h4 > a');
    await Samsunggalaxys6Title.goto('https://www.demoblaze.com/');
    await Samsunggalaxys6Title.getStarted(' Samsung galaxy s6 ');
  });


  test.describe.parallel('suite', () => {
    test('runs in parallel 1', async ({ page }) => {
      const navBarHome= new TestUI(page, '#login2');
      await navBarHome.goto('https://www.demoblaze.com/');
      await navBarHome.getStarted('Log in');

     });
    test('runs in parallel 2', async ({ page }) => { 
      const navBarCart= new TestUI(page, '#cartur');
      await navBarCart.goto('https://www.demoblaze.com/');
      await navBarCart.getStarted('Cart');
     });
  });