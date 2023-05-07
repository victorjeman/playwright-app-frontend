import { test, expect, type Page } from '@playwright/test';

import { PROJECT } from './shared/project-constants';
import { login } from './shared/project-utils';

/*
 * STEP-1: Test your first test :P.
 * TIP:
 * Run `yarn qa` or `npm run qa` in your CLI to start the project and run this test from the ui.
 *
 * STEP-2: Break the test to see how it feels.
 * TIP:
 * Add an extra letter inside the button's name.
 */
test('login button is visible', async ({ page }) => {
  await page.goto('/');

  const adminLoginButton = await page.getByRole('button', { name: 'Sign in / Victor / admin' });

  //* Q:  What is the difference between these two login buttons?
  // const loginButton = await page.getByRole('button', { name: /admin/ });

  await expect(adminLoginButton).toBeVisible();
});

test.describe('CRUD operations', () => {
  /*
   * STEP-6: Use the `beforeAll` hook to reset the API data
   */
  // STEP-6.1: Use the `beforeAll` hook attached to the `test`.
  // STEP-6.2: Extract the `request` API.
  // STEP-6.3: DO a `get` request to `http://localhost:8080/reset`.
  // STEP-6.4: Question - Is it important to be able to reset the environment?

  /*
   * STEP-4: Login before each test.
   */
  test.beforeEach(async ({ page }) => {
    // !IMPORTANT: Remove this code before commit
    await page.goto('/');
    const adminLoginButton = await page.getByRole('button', { name: 'Sign in / Victor / admin' });
    await adminLoginButton.click();

    // STEP-4.1: Go to the main page.
    // STEP-4.2: Get the admin login button.
    // STEP-4.3: Click on the login button.
    // STEP-4.4: Check the third step to see if it works.
  });

  /*
   * STEP-3: Make sure you see the projects page.
   * TIP:
   * The test should fail without the extra code that we need to add in the next step.
   */
  test('can see projects', async ({ page }) => {
    // !IMPORTANT: Remove this code before commit
    await page.goto('/projects');
    await expect(page).toHaveURL('/projects');

    // STEP-3.1: Go to the main page.
    // STEP-3.2: Expect the new page to have the "projects" URL
  });

  /*
   * STEP-5: Create a project
   */
  test('create', async ({}) => {
    // STEP-5.1: Save the project name in a variable.
    // const newProjectName = '';
    //
    // STEP-5.2: Get the input by label.
    // const input = ''
    //
    // STEP-5.3: Fill the input.
    // await input.what()
    //
    // STEP-5.4: Submit the project.
    // await input.what()
    //
    // STEP-5.5: Get the newly added project by text
    // const newProject = ''
    //
    // STEP-5.6: Test if the new project is attached to the DOM.
    // await expect(what).toBeWhat();
    //
    // STEP-5.7: Is there a problem?  What is the problem?
    //
    // STEP-5.8: Use `{exact: true}` as the second param for `getByText` method.
    //
    // STEP-5.10: Get the thumbnails using the test id.
    // Narrow down the search by chaining it with `getByText` method
    // const newProject = ''
    // await expect(what).toBeWhat();
    //
    // STEP-5:11: Use predefined constants from a dedicated file
    // Use the constants from `project-constants.ts`
    // Use `CREATE_PROJECT_TITLE`
    // Use `CREATE_INPUT_LABEL`
    // Use `PROJECT`
  });

  /*
   * STEP-7: Delete a project
   */
  test('delete', async ({}) => {
    // STEP-7.3: Select the delete button
    // const deleteButton = what?;
    //
    // STEP-7.4: Click the button
    //
    // STEP-7.5: Test that be project is deleted(hidden)
    // await expect(what?).toBeWhat();
  });

  /*
   * STEP-8: Update a project
   */
  test('update', async ({}) => {
    // await updateProject(page);
    // STEP-8.3: Get the update button
    //
    // STEP-8.4: Click the update button
    //
    // STEP-8.7: Fill the input, use the `UPDATE_PROJECT_NEW_TITLE` from  constants
    //
    // STEP-8.10 - Get the apply changes button and click it
    //
    // STEP-8.11 - Check if the newly added project is visible
    // await expect(what?).toBeWhat();
  });
});

/*
 * STEP-9: Notifications and some reusable functions
 */
test.describe('CRUD notifications', () => {
  test.beforeAll(async ({}) => {
    // STEP-9.5: Call the reset api function.
  });

  test.beforeEach(async ({}) => {
    // STEP-9.6: Call the login function.
  });

  test('update notification', async ({}) => {
    // STEP-9.7: Call the update project function.
    // STEP-9.8: Check that the notifications is visible.
    // TIP: All success notifications contain the following text `updated successfully`.
  });

  test('delete notification', async ({}) => {
    // STEP-9.9: Call the delete project function.
    // STEP-9.10: Check that the notifications is visible.
  });
});

// TODO - individual work
test.describe('CRUD priority', () => {
  test('priority is added', async ({}) => {});

  test('priority has the correct color', async ({}) => {});
});

// STEP-9.1: Encapsulate the reset API data code here.
// async function resetApiData() {}

// STEP-9.2: Encapsulate the project creation code here.
// async function projectCreate() {}

// STEP-9.3: Encapsulate the project update code here.
// async function updateProject() {}

// STEP-9.4: Encapsulate the project deletion code here.
// async function deleteProject() {}
