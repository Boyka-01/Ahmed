const { test, expect } = require('@playwright/test');

test('check text on page', async ({ page }) => {
  // Go to the website
  await page.goto('https://staging.optikeralma.optiserver.co.uk/');

  // Check if the text "Example Domain" is present on the page
  const textContent = await page.textContent('h2');
  expect(textContent).toBe('Välkommen till Optiker Almå');
});
