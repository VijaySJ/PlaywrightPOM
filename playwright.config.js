// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    trace: 'on-first-retry',
    headless: false, // Enables headless mode
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'], 
          },
    },
  ],
});