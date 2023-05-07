import { test, expect, type Page } from '@playwright/test';

import { PROJECT } from './shared/project-constants';
import { login } from './shared/project-utils';

async function resetApiData(request) {
  await request.get('http://localhost:8080/reset');
}

async function projectCreate(page: Page) {
  await page.getByLabel('Project title').fill(PROJECT.CREATE_PROJECT_TITLE);
  await page.getByLabel('Project title').press('Enter');

  await page.getByLabel('Project title').fill('');
}

async function updateProject(page: Page) {
  await page.getByTestId(PROJECT.UPDATE_BTN).click();
  await page.getByTestId(PROJECT.UPDATE_INPUT).fill(PROJECT.UPDATE_PROJECT_NEW_TITLE);
  await page.getByTestId(PROJECT.UPDATE_APPLY_CHANGES).click();
}

async function deleteProject(page: Page) {
  await page.getByTestId(PROJECT.DELETE_BTN).click();
}

test.describe('CRUD operations', () => {
  test.beforeAll(async ({ request }) => {
    await resetApiData(request);
  });

  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('create', async ({ page }) => {
    await projectCreate(page);

    // Problem 1 with this selector:
    // It finds also the notification that has the same text
    // await expect(page.getByText('Project from playwright test')).toBeAttached();
    await expect(
      page.getByTestId(PROJECT.PROJECT).getByText(PROJECT.CREATE_PROJECT_TITLE)
    ).toBeAttached({
      timeout: 10 * 10000,
    });
  });

  test('delete', async ({ page }) => {
    await deleteProject(page);

    await expect(
      page.getByTestId(PROJECT.PROJECT).getByText(PROJECT.DELETE_PROJECT_TITLE)
    ).toBeHidden();
  });

  test('update', async ({ page }) => {
    await updateProject(page);

    await expect(page.getByText(PROJECT.UPDATE_PROJECT_NEW_TITLE)).toBeVisible();
  });
});

test.describe('CRUD notifications', () => {
  test.beforeAll(async ({ request }) => {
    await resetApiData(request);
  });

  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('update notification', async ({ page }) => {
    await updateProject(page);

    await expect(page.getByText(/updated successfully/)).toBeVisible();
  });

  test('delete notification', async ({ page }) => {
    await deleteProject(page);

    await expect(page.getByText(/deleted successfully/)).toBeVisible();
  });
});

// TODO - session 1 individual work
test.describe('CRUD priority', () => {
  test.beforeAll(async ({ request }) => {
    await resetApiData(request);
  });

  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('priority is added', async ({ page }) => {});

  test('priority has the correct color', async ({ page }) => {});
});
