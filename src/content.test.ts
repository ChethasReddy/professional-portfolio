import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import * as content from './content.ts'

const strings = (v: unknown): string[] =>
  typeof v === 'string' ? [v] : v && typeof v === 'object' ? Object.values(v).flatMap(strings) : []

describe('content', () => {
  const all = strings(content)

  it('has no unfilled [PLACEHOLDER] text', () => {
    expect(all.filter((s) => /\[[A-Z][A-Z -]+\]/.test(s))).toEqual([])
  })

  it('links are https', () => {
    const links = all.filter((s) => /^(https?:|mailto:)/.test(s))
    expect(links.length).toBeGreaterThan(0)
    expect(links.filter((s) => !s.startsWith('https://'))).toEqual([])
  })
})

describe('playwright version pin', () => {
  it('Dockerfile, CI and package.json agree', () => {
    const read = (p: string) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8')
    const pkg = JSON.parse(read('package.json')).devDependencies['@playwright/test'].replace(/^\D+/, '')
    const tag = /playwright:v([\d.]+)-/
    expect(read('Dockerfile').match(tag)?.[1]).toBe(pkg)
    expect(read('.github/workflows/ci.yml').match(tag)?.[1]).toBe(pkg)
  })
})
