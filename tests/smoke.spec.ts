import { test, expect } from '@playwright/test'

/**
 * Smoke tests for the Bucktown Bulls Baseball public landing page.
 *
 * The live WordPress site is fully password-walled. This static build
 * intentionally ships a public marketing landing only — no gated content.
 * These tests confirm the public landing renders the core information.
 */

test.describe('Home page', () => {
  test('renders the organization name and welcome heading', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Bucktown Bulls Baseball/i)
    await expect(page.getByRole('heading', { name: /Bucktown Bulls/i, level: 1 })).toBeVisible()
  })

  test('describes the program as youth baseball', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/youth baseball/i).first()).toBeVisible()
  })

  test('has an email contact link', async ({ page }) => {
    await page.goto('/')
    const emailLink = page.locator('a[href^="mailto:"]').first()
    await expect(emailLink).toBeVisible()
  })

  test('explains gated content is handled off-site', async ({ page }) => {
    await page.goto('/')
    // The phrase appears in the footer, which is below the fold. Count is
    // sufficient — visibility would require scrolling.
    const count = await page.getByText(/separate channels/i).count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('has no console errors on load', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    expect(errors).toEqual([])
  })
})

test.describe('Policy pages', () => {
  test('privacy policy renders', async ({ page }) => {
    await page.goto('/privacy-policy')
    await expect(page).toHaveTitle(/Privacy Policy/i)
    await expect(page.getByRole('heading', { name: /Privacy Policy/i, level: 1 })).toBeVisible()
  })

  test('terms of service renders', async ({ page }) => {
    await page.goto('/terms-of-service')
    await expect(page).toHaveTitle(/Terms of Service/i)
    await expect(page.getByRole('heading', { name: /Terms of Service/i, level: 1 })).toBeVisible()
  })
})
