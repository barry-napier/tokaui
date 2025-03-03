import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test('displays all five section cards with correct titles', async ({ page }) => {
    await page.goto('/dashboard');

    // Check if all section cards are present
    const sections = [
      'Foundations',
      'Components',
      'Patterns & Layouts',
      'Documentation & Guidelines',
      'Assets',
    ];

    for (const section of sections) {
      const card = page.getByRole('link', { name: section });
      await expect(card).toBeVisible();
    }
  });

  test('section cards navigate to correct routes', async ({ page }) => {
    await page.goto('/dashboard');

    const routes = [
      { title: 'Foundations', path: '/foundations' },
      { title: 'Components', path: '/components' },
      { title: 'Patterns & Layouts', path: '/patterns' },
      { title: 'Documentation & Guidelines', path: '/documentation' },
      { title: 'Assets', path: '/assets' },
    ];

    for (const { title, path } of routes) {
      const card = page.getByRole('link', { name: title });
      await expect(card).toHaveAttribute('href', path);
    }
  });

  test('displays design system name', async ({ page }) => {
    await page.goto('/dashboard');

    const heading = page.getByRole('heading', { name: 'Project Alpha Design System' });
    await expect(heading).toBeVisible();
  });
});
