import { test, expect } from '@playwright/test';

test.describe('Foundations Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/foundations');
  });

  test('displays all foundation sections', async ({ page }) => {
    // Check section headings
    await expect(page.getByRole('heading', { name: 'Colors' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Typography' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Spacing Scale' })).toBeVisible();
  });

  test('can add and edit colors', async ({ page }) => {
    // Click add color button
    await page.getByRole('button', { name: 'Add Color' }).click();

    // Check if new color swatch is added
    const colorSwatches = await page.locator('.grid > div').count();
    expect(colorSwatches).toBeGreaterThan(0);

    // Click the first color swatch to edit
    await page.locator('.grid > div').first().click();

    // Edit color name and hex
    await page.getByPlaceholder('Color name').fill('Test Color');
    await page.getByPlaceholder('Hex code').fill('#FF0000');

    // Save changes
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify changes
    const colorName = await page.locator('.grid > div').first().getByText('Test Color');
    await expect(colorName).toBeVisible();
  });

  test('can edit typography styles', async ({ page }) => {
    // Click the first typography style to edit
    await page.locator('text="Heading 1"').click();

    // Change font family
    await page.locator('text="Select font family"').click();
    await page.locator('text="Helvetica"').click();

    // Save changes
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify changes are visible
    const fontInfo = await page.locator('text="helvetica"').first();
    await expect(fontInfo).toBeVisible();
  });

  test('can edit spacing values', async ({ page }) => {
    // Find and edit the first spacing input
    const firstSpacingInput = page.getByPlaceholder('e.g., 1rem, 16px').first();
    await firstSpacingInput.fill('2rem');

    // Verify the value is updated
    await expect(firstSpacingInput).toHaveValue('2rem');
  });
});
