import { test, expect } from '@playwright/test';

test.describe('Dashboard Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');
  });

  test('should display the dashboard title', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Dashboard', level: 1 });
    await expect(heading).toBeVisible();
  });

  test('should display all five section cards', async ({ page }) => {
    const sections = ['Design Tokens', 'Components', 'Assets', 'AI Tools', 'Settings'];

    for (const section of sections) {
      const card = page.getByRole('link', { name: section });
      await expect(card).toBeVisible();
    }
  });

  test('should have correct navigation links', async ({ page }) => {
    const links = {
      'Design Tokens': '/dashboard/design-tokens',
      Components: '/dashboard/components',
      Assets: '/dashboard/assets',
      'AI Tools': '/dashboard/ai-tools',
      Settings: '/dashboard/settings',
    };

    for (const [name, href] of Object.entries(links)) {
      const link = page.getByRole('link', { name });
      await expect(link).toHaveAttribute('href', href);
    }
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile layout
    await page.setViewportSize({ width: 375, height: 667 });
    const gridMobile = page.locator('div.grid');
    await expect(gridMobile).toHaveClass(/grid-cols-1/);

    // Test tablet layout
    await page.setViewportSize({ width: 768, height: 1024 });
    const gridTablet = page.locator('div.grid');
    await expect(gridTablet).toHaveClass(/sm:grid-cols-2/);

    // Test desktop layout
    await page.setViewportSize({ width: 1024, height: 768 });
    const gridDesktop = page.locator('div.grid');
    await expect(gridDesktop).toHaveClass(/lg:grid-cols-3/);
  });
});
