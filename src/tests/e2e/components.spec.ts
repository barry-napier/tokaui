import { test, expect } from '@playwright/test';

test.describe('Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components');
  });

  test('displays components list and allows adding new components', async ({ page }) => {
    // Check if page title is visible
    await expect(page.getByRole('heading', { name: 'Components' })).toBeVisible();

    // Check if initial components are displayed
    await expect(page.getByRole('heading', { name: 'Primary Button' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Product Card' })).toBeVisible();

    // Open add component dialog
    await page.getByRole('button', { name: 'Add Component' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();

    // Fill in new component details
    await page.getByLabel('Component Name').fill('Test Button');
    await page.getByRole('combobox', { name: 'Component Type' }).click();
    await page.getByRole('option', { name: 'Button' }).click();

    // Create component
    await page.getByRole('button', { name: 'Create Component' }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();

    // Verify new component is added
    await expect(page.getByRole('heading', { name: 'Test Button' })).toBeVisible();
  });

  test('allows editing component properties', async ({ page }) => {
    // Navigate to component editor
    await page.getByRole('heading', { name: 'Primary Button' }).click();
    await expect(page.getByRole('heading', { name: 'Primary Button' })).toBeVisible();

    // Check if preview and properties sections are visible
    await expect(page.getByRole('heading', { name: 'Live Preview' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Properties' })).toBeVisible();

    // Edit component properties
    await page.getByLabel('Label').fill('Updated Button');
    await page.getByLabel('Color').first().fill('#FF0000');

    // Verify preview updates
    const button = page.locator('button', { hasText: 'Updated Button' });
    await expect(button).toBeVisible();
    await expect(button).toHaveCSS('background-color', 'rgb(255, 0, 0)');

    // Save changes
    await page.getByRole('button', { name: 'Save Changes' }).click();
  });

  test('navigates back to components list', async ({ page }) => {
    // Navigate to component editor
    await page.getByRole('heading', { name: 'Primary Button' }).click();

    // Click back button
    await page.getByRole('button', { name: 'Back to Components' }).click();

    // Verify we're back on the components list
    await expect(page.url()).toMatch(/\/components$/);
    await expect(page.getByRole('heading', { name: 'Components' })).toBeVisible();
  });
});
