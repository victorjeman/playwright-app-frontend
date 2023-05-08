import { test, expect } from '@playwright/test';

import { PROJECT } from './shared/project-constants';

// STEP-10.2: Import the login function
// import { login } from './shared/project-utils';

/*
 * STEP-10: Extract a function in a separate file.
 */
test.describe('grid', () => {
  test.beforeEach(async ({ page }) => {
    // STEP-10.3: Call the login function
    // await login(page);
  });

  test('1 item in row for mobile', async ({ page }) => {
    page.setViewportSize({ width: 500, height: 600 });

    const box = await page.getByTestId(PROJECT.PROJECT).first().boundingBox();
    const width = box?.width;

    await expect(width).toEqual(468);
  });
});
