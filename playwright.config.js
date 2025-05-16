import { defineConfig, devices } from '@playwright/test';

module.exports = {
  testDir: './src/tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  // globalSetup: require.resolve('./src/config/global-setup'), // Correct globalSetup path
  use: {
    // storageState: './storageState.json', // Use this session state file
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};
