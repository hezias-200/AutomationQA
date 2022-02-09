
const { test, expect } = require('@playwright/test');
const { TestUI } = require('./Classes/testUI.spec');


test('Navbar include Solution tag @rto', async ({ page }) => {
  const navbarTest = new TestUI(page, '#mega-menu-item-12568 > a');
  
  await navbarTest.goto('https://qualitestgroup.com/');
  await navbarTest.getStarted('Solutions');

});
test('Navbar include Contact Us', async ({ page }) => {
  const navbarTest = new TestUI(page, '#updated_nav > div.main-nav__search > a.main-nav-btn > span');
  await navbarTest.goto('https://qualitestgroup.com/');
  await navbarTest.getStarted('Contact Us');
});


// test("Create Repo",async ({ request }) => {
//     // Create a new repository
//     const response = await request.post('/user/repos', {
//       data: {
//         name: "REPO"
//       }
//     });
//     expect(response.ok()).toBeTruthy();
//   });
// const USER = 'hezias-200';
// test("Delete Repo @deleteRepo",async ({ request }) => {
//     // Delete the repository
//     const response = await request.delete(`/repos/${USER}/REPO`);
//     expect(response.ok()).toBeTruthy();
//   });










// (async () => {
//   const browser = await chromium.launch()
//   const page = await browser.newPage()
//   await page.goto('https://danube-webshop.herokuapp.com')

//   const performanceTimingJson = await page.evaluate(() => JSON.stringify(window.performance.timing))
//   const performanceTiming = JSON.parse(performanceTimingJson)

//   console.log(performanceTiming)

//   const startToInteractive = performanceTiming.domInteractive - performanceTiming.navigationStart
//   console.log(`Navigation start to DOM interactive: ${startToInteractive}ms`)

//   await browser.close()
// })()