// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const Config = ({
  testDir: './tests',
  timeout: 40 * 1000, // Set a global timeout of 30 seconds for each test
  expect: {

    timeout: 5000 // Set a timeout of 5 seconds for expect assertions
  },
  reporter : 'html',
  use: {
    browserName: 'chromium', // Use Chromium browser
    headless: false, // Run tests in headful mode (visible browser)
    screenshot: 'only-on-failure', // Take a screenshot only on test failure
    trace : 'on'


    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

});

module.exports = Config
