import { type Page, expect } from '@playwright/test';

export async function login(page: Page) {
  await page.goto('/');
  await page.getByRole('button', { name: 'Sign in / Victor / admin' }).click();
  await expect(page).toHaveURL('/projects');
}
