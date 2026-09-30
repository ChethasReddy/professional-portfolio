import { describe, expect, it } from 'vitest'
import { initialQuests, progress, questReducer } from './quests.ts'

describe('questReducer', () => {
  it('unlocks a quest and records its achievement', () => {
    const s = questReducer(initialQuests, 1)
    expect(s.unlocked).toEqual([false, true, false, false])
    expect(s.lastAchievement).toBe('founding mode')
    expect(progress(s)).toMatchObject({ done: 1, xp: 25, complete: false })
  })

  it('ignores a repeat unlock and out-of-range indexes', () => {
    const s = questReducer(initialQuests, 0)
    expect(questReducer(s, 0)).toBe(s)
    expect(questReducer(s, 4)).toBe(s)
    expect(questReducer(s, -1)).toBe(s)
  })

  it('completes at 100 xp in any order', () => {
    const s = [3, 1, 0, 2].reduce(questReducer, initialQuests)
    expect(progress(s)).toEqual({ done: 4, xp: 100, level: 'lvl 4: max level reached', complete: true })
  })
})
