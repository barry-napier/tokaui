import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display the correct title and logo', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle('Toka - Design Systems Made Simple');

    // Check logo presence
    const logo = page.locator('svg');
    await expect(logo).toBeVisible();

    // Check TOKA text
    const tokaText = page.getByText('TOKA').first();
    await expect(tokaText).toBeVisible();
    await expect(tokaText).toHaveCSS('font-weight', '900');
  });

  test('should have working navigation links', async ({ page }) => {
    // Check navigation links
    const links = ['Features', 'How It Works', 'Pricing'];
    for (const link of links) {
      const navLink = page.getByRole('link', { name: link });
      await expect(navLink).toBeVisible();
    }
  });

  test('should have working auth buttons', async ({ page }) => {
    // Check auth buttons
    const loginButton = page.getByRole('link', { name: 'Log In' });
    const signUpButton = page.getByRole('link', { name: 'Sign Up' });

    await expect(loginButton).toBeVisible();
    await expect(signUpButton).toBeVisible();

    // Verify login button href
    await expect(loginButton).toHaveAttribute('href', '/auth/login');
    // Verify sign up button href
    await expect(signUpButton).toHaveAttribute('href', '/auth/signup');
  });

  test('should display hero section content correctly', async ({ page }) => {
    // Check main heading
    const mainHeading = page.getByRole('heading', { name: 'TOKA' });
    await expect(mainHeading).toBeVisible();

    // Check subheading
    const subHeading = page.getByRole('heading', { name: 'Design Systems Made Simple' });
    await expect(subHeading).toBeVisible();

    // Check description text
    const description = page.getByText('Bridge the designer-developer gap with one unified tool');
    await expect(description).toBeVisible();

    // Check CTA buttons
    const getStartedButton = page.getByRole('link', { name: 'Get Started' });
    const demoButton = page.getByRole('link', { name: 'See Demo' });

    await expect(getStartedButton).toBeVisible();
    await expect(demoButton).toBeVisible();
  });

  test('should have a responsive mobile menu', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    // Check that desktop nav is hidden
    const desktopNav = page.locator('nav').filter({ hasText: 'Features' });
    await expect(desktopNav).toHaveClass(/hidden/);

    // Check that mobile menu button is visible
    const menuButton = page.getByRole('button', { name: /menu/i });
    await expect(menuButton).toBeVisible();

    // Click menu button and verify menu opens
    await menuButton.click();
    const mobileMenu = page.locator('nav').filter({ hasText: 'Features' });
    await expect(mobileMenu).toBeVisible();

    // Verify mobile menu links
    const links = ['Features', 'How It Works', 'Pricing', 'Log In', 'Sign Up'];
    for (const link of links) {
      const menuLink = page.getByRole('link', { name: link });
      await expect(menuLink).toBeVisible();
    }
  });

  test('should have smooth scroll behavior', async ({ page }) => {
    // Check if html element has smooth scroll
    const html = page.locator('html');
    await expect(html).toHaveClass('scroll-smooth');
  });
});
