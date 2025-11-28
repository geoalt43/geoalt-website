import { test, expect } from '@playwright/test'

test.describe('Marketing site smoke suite', () => {
  test('renders the hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /Get Your Brand Recommended by/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Contact Us/i })).toBeVisible()
  })

})


