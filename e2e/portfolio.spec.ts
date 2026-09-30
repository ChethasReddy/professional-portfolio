import { expect, test } from '@playwright/test'

const isDesktop = (name: string) => name === 'desktop'

test('professional mode renders profile, links and no placeholders', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1, name: 'Chethas Reddy' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Email me' })).toHaveAttribute('href', 'mailto:chethasreddy@gmail.com')
  await expect(page.getByRole('link', { name: 'GitHub', exact: true })).toHaveAttribute('href', 'https://github.com/ChethasReddy')
  await expect(page.locator('body')).not.toContainText(/\[[A-Z][A-Z -]+\]/)
  const vibe = page.getByRole('article').filter({ hasText: 'VibeTrace Arena' })
  await expect(vibe.getByRole('link')).toHaveCount(0)
})

test('whiteboard shows on laptop only', async ({ page }, info) => {
  await page.goto('/')
  const sticky = page.getByText('memory recall lift at Inyo')
  if (isDesktop(info.project.name)) await expect(sticky).toBeVisible()
  else await expect(sticky).toBeHidden()
})

test('section nav jumps to projects and stays pinned', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Sections' })
  await nav.getByRole('link', { name: 'Projects' }).click()
  await expect(page.getByRole('heading', { name: 'PROJECTS' })).toBeInViewport()
  await expect(nav).toBeInViewport()
})

test('gen z mode: quests unlock, xp fills, secret ending appears, url is shareable', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Gen Z' }).click()
  await expect(page).toHaveURL(/\?mode=genz/)
  const xp = page.getByRole('progressbar', { name: 'XP' })
  await expect(xp).toHaveAttribute('aria-valuenow', '0')

  await page.getByRole('button', { name: 'Unlock Main Quest: Inyo' }).click()
  await expect(page.getByRole('status')).toContainText('founding mode')
  await expect(xp).toHaveAttribute('aria-valuenow', '25')

  for (const q of ['The Origin Story', 'Previous Levels', 'Side Quests']) {
    await page.getByRole('button', { name: `Unlock ${q}` }).click()
  }
  await expect(xp).toHaveAttribute('aria-valuenow', '100')
  await expect(page.getByText('100% run complete')).toBeVisible()

  await page.reload()
  await expect(page.getByRole('button', { name: 'Gen Z' })).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('button', { name: 'Professional' }).click()
  await expect(page).not.toHaveURL(/mode=/)
})

test('respects reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/?mode=genz')
  const name = await page.locator('.g-blob').evaluate((el) => getComputedStyle(el).animationName)
  expect(name).toBe('none')
})
