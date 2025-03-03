import puppeteer, { Browser, Page } from 'puppeteer';

describe('Sign-up Flow', () => {
  let browser: Browser;
  let page: Page;
  const baseUrl = 'http://localhost:3001';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false, // Set to true for CI environments
      slowMo: 50, // Slow down operations to see what's happening
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should navigate to sign-up page and display benefits panel and form', async () => {
    await page.goto(`${baseUrl}/auth/signup`);

    // Check if benefits panel exists
    const benefitsPanel = await page.$('.bg-black.text-white');
    expect(benefitsPanel).not.toBeNull();

    // Check if benefits are displayed
    const benefitItems = await page.$$('.bg-black.text-white li');
    expect(benefitItems.length).toBe(5);

    // Check if form exists
    const form = await page.$('form');
    expect(form).not.toBeNull();

    // Check if form fields exist
    const nameInput = await page.$('#name');
    const emailInput = await page.$('#email');
    const passwordInput = await page.$('#password');
    const submitButton = await page.$('button[type="submit"]');

    expect(nameInput).not.toBeNull();
    expect(emailInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();
    expect(submitButton).not.toBeNull();
  }, 30000);

  test('should show validation errors for empty fields', async () => {
    await page.goto(`${baseUrl}/auth/signup`);

    // Submit the form without filling any fields
    await page.click('button[type="submit"]');

    // Check if validation errors are displayed
    const nameError = await page.$('#name-error');
    const emailError = await page.$('#email-error');
    const passwordError = await page.$('#password-error');

    expect(nameError).not.toBeNull();
    expect(emailError).not.toBeNull();
    expect(passwordError).not.toBeNull();
  }, 30000);

  test('should fill out the form and navigate to confirmation page', async () => {
    await page.goto(`${baseUrl}/auth/signup`);

    // Fill out the form
    await page.type('#name', 'Test User');
    await page.type('#email', 'test@example.com');
    await page.type('#password', 'password123');

    // Mock the Supabase signUp function to avoid actual API calls
    await page.evaluate(() => {
      // @ts-expect-error Adding mock property to window
      window.mockSignUpSuccess = true;
    });

    // Submit the form
    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    // Check if we're on the confirmation page
    const currentUrl = page.url();
    expect(currentUrl).toContain('/auth/confirmation');

    // Check if confirmation message is displayed
    const confirmationMessage = await page.evaluate(() => {
      const element = document.querySelector('h1, h2');
      return element ? element.textContent : null;
    });

    expect(confirmationMessage).toContain('successfully created');
  }, 30000);

  test('should navigate from confirmation to onboarding page', async () => {
    await page.goto(`${baseUrl}/auth/confirmation`);

    // Click the "Continue to Onboarding" button
    await Promise.all([
      page.click('a[href="/auth/onboarding"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    // Check if we're on the onboarding page
    const currentUrl = page.url();
    expect(currentUrl).toContain('/auth/onboarding');

    // Check if the first step of onboarding is displayed
    const designSystemNameInput = await page.$('#designSystemName');
    expect(designSystemNameInput).not.toBeNull();
  }, 30000);

  test('should complete the onboarding process', async () => {
    await page.goto(`${baseUrl}/auth/onboarding`);

    // Step 1: Fill out design system basics
    await page.type('#designSystemName', 'My Test Design System');
    await page.click('button[contains(text(), "Next")]');

    // Step 2: Choose styles
    await page.waitForSelector('#primaryColor');
    await page.click('#primaryColor');
    await page.type('#primaryColor', '#3366FF');

    await page.click('#primaryFont');
    await page.waitForSelector('div[role="option"]');
    await page.click('div[role="option"]:first-child');

    await page.click('button[contains(text(), "Next")]');

    // Step 3: Confirmation
    await page.waitForSelector('button[contains(text(), "Create Design System")]');

    // Click create and wait for navigation to dashboard
    await Promise.all([
      page.click('button[contains(text(), "Create Design System")]'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    // Check if we're on the dashboard page
    const currentUrl = page.url();
    expect(currentUrl).toContain('/dashboard');

    // Check if dashboard elements are displayed
    const dashboardTitle = await page.evaluate(() => {
      const element = document.querySelector('h1');
      return element ? element.textContent : null;
    });

    expect(dashboardTitle).toContain('Design System');
  }, 30000);
});
