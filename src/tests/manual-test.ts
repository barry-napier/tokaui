import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100, // Slow down operations to see what's happening
  });

  const page = await browser.newPage();

  try {
    // Navigate to the sign-up page
    console.log('Navigating to sign-up page...');
    await page.goto('http://localhost:3001/auth/signup');

    // Take a screenshot
    await page.screenshot({ path: 'signup-page.png' });

    // Fill out the form
    console.log('Filling out the form...');
    await page.type('#name', 'Test User');
    await page.type('#email', 'test@example.com');
    await page.type('#password', 'password123');

    // Add mock for testing
    await page.evaluate(() => {
      // @ts-expect-error Adding mock property to window
      window.mockSignUpSuccess = true;
    });

    // Submit the form
    console.log('Submitting the form...');
    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    // Take a screenshot of the confirmation page
    await page.screenshot({ path: 'confirmation-page.png' });

    // Click the "Continue to Onboarding" button
    console.log('Navigating to onboarding...');
    await Promise.all([
      page.click('a[href="/auth/onboarding"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    // Take a screenshot of the onboarding page
    await page.screenshot({ path: 'onboarding-page.png' });

    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
})();
