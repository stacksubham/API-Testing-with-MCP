import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './sample',
  testMatch: '**/*.ts',
  timeout: 30000,
  reporter: 'list',
  use: {
    baseURL: 'https://gorest.co.in',
  },
});
