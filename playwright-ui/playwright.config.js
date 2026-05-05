// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config({ path: '../.env' });

module.exports = defineConfig({
  // Directory where tests are located
  testDir: './tests',

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI
  retries: process.env.CI ? 2 : 0,

  // Number of parallel workers
  workers: process.env.CI ? 1 : undefined,

  // Reporter configuration
  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['junit', { outputFile: 'reports/junit/results.xml' }],
    ['list']
  ],

  // Global test settings
  use: {
    // Base URL for all tests
    baseURL: process.env.BASE_URL || 'https://automationexercise.com',

    // Collect trace on first retry
    trace: 'on-first-retry',

    // Take screenshot on failure
    screenshot: 'only-on-failure',

    // Record video on retry
    video: 'on-first-retry',

    // Global timeout for each action
    actionTimeout: 10000,

    // Viewport
    viewport: { width: 1280, height: 720 },

    // Ignore HTTPS errors
    ignoreHTTPSErrors: true
  }
});