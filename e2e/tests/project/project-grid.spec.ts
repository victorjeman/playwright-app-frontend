import { test, expect } from '@playwright/test';

import { PROJECT } from './shared/project-constants';
import { login } from './shared/project-utils';

test.describe('grid', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('1 item in row for mobile', async ({ page }) => {
    page.setViewportSize({ width: 500, height: 600 });

    const box = await page.getByTestId(PROJECT.PROJECT).first().boundingBox();
    const width = box?.width;

    await expect(width).toEqual(468);
  });
});
