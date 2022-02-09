
const { devices } = require('@playwright/test');

const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',

//   use: {
//     trace: 'on-first-retry',
//   },
use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      'Accept': 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': `token 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`,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },
],
};

module.exports = config;

