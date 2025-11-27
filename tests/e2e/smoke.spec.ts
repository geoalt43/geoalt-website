import { test, expect } from '@playwright/test'

test.describe('Marketing site smoke suite', () => {
  test('renders the hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /Get Your Brand Recommended by/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Get Demo/i })).toBeVisible()
  })

  test('navigates to the demo request form', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /Get Demo/i }).first().click()
    await expect(page).toHaveURL(/\/demo$/)
    await expect(page.getByRole('heading', { name: /See GEOAlt in Action/i })).toBeVisible()
    await expect(page.getByLabel('Email Address *')).toBeVisible()
  })
})


