# Automate test via Playwright.js framework

### **Description** 
Automate test with playwright framework , written with javascript.\
the purpose of the project build automation system test for UI and API.\
Links: playwright.dev/docs/pom

-  TEST PROJECT
  - Project: typicode
  - website: https://jsonplaceholder.typicode.com
  - type: restful api test 

 <BR>

- TEST PROJECT
  - Project: demoblaze
  - website: https://www.demoblaze.com/
  - type: UI tests

- TEST PROJECT
  - Project: parabank
  - website: https://parabank.parasoft.com/
  - type: UI tests
  
 <BR>
 <BR>

**Project structure**
```
Playwright_Automation
└─ tests
   ├─ Classes
   │  ├─ testLogin.spec.js
   │  └─ testUI.spec.js
   ├─ demoblaze
   │  ├─ addToCart.spec.js
   │  ├─ loginTest.spec.js
   │  └─ testUi.spec.js
   ├─ example.spec.js
   ├─ global-setup.js
   ├─ parabank
   │  ├─ loginTests.spec.js
   │  └─ uiTests.spec.js
   └─ typicode
      └─ API'S
         └─ tests.spec.js
```
 
 **Precondition**
 - node.js v14.15.3 or above
 - playwright framework

**Installation**
```js
/*
$ git clone <https git repository>
$ npm i -D @playwright/test
$ npx playwright install
*/
```
**Execution with terminal**
```js
//Run all tests
$ npx playwright test
//Run demoblaze tests
$ npx playwright test -g @demoblaze
//Run parabank tests 
$ npx playwright test -g @parabank 
//Run typicode include API'S tests
$ npx playwright test -g @typicode 
//Run ui test with debug mode
$ npx playwright test -g @demoblaze --debug
//Run ui test only with firefox browser
$ npx playwright test -g @demoblaze  --project=firefox 

//Check report (html)
$ npx playwright show-report

```

**Output**
![Reports](https://user-images.githubusercontent.com/62279337/153243278-edc88d2b-7bd8-4387-b89b-26e616980af0.JPG)

<BR>

**Have fun!.**

<BR>
<BR>
<BR>

