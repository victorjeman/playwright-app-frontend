import { test, expect } from '@playwright/test';

test.describe('project CRUD operations', () => {
  const projectThumbnailTestId = 'project-thumbnail';

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Sign in / Victor / admin' }).click();
    await expect(page).toHaveURL('/projects');
  });

  test('project create', async ({ page }) => {
    const newProjectTitle = 'qa-project-create';

    await page.getByLabel('Project title').fill(newProjectTitle);
    await page.getByLabel('Project title').press('Enter');

    await page.getByLabel('Project title').fill('');

    // Problem 1 with this selector:
    // It finds also the notification that has the same text
    // await expect(page.getByText('Project from playwright test')).toBeAttached();

    await expect(page.getByTestId(projectThumbnailTestId).getByText(newProjectTitle)).toBeAttached({
      timeout: 10 * 10000,
    });
  });

  test.only('project delete', async ({ page }) => {
    const projectToDeleteTitle = 'qa-for-delete';
    const deleteButtonTestId = `project-thumbnail-delete-${projectToDeleteTitle}`;

    await page.getByTestId(deleteButtonTestId).click();

    await expect(
      page.getByTestId(projectThumbnailTestId).getByText(projectToDeleteTitle)
    ).toBeHidden();
  });
});
