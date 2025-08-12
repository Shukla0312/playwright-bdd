import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: ['src/ui/feature/**/*.feature', 'src/api/feature/**/*.feature'],
  steps: ['src/ui/step/**/*.ts', 'src/api/step/**/*.ts']
});

export default defineConfig({
  testDir,
  reporter: [
    ['list'],  // optional CLI output
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    navigationTimeout: 60000,
    actionTimeout: 10000,
    screenshot: 'only-on-failure',
    trace: 'on',
    video: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});