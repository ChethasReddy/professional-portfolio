export const QUEST_COUNT = 4
export const XP_PER_QUEST = 25

export const ACHIEVEMENTS = ['big brain energy', 'founding mode', 'leveled up', 'hackathon goblin']

export const LEVELS = [
  'lvl 0: npc behavior. tap unlock.',
  'lvl 1: getting warmer',
  'lvl 2: halfway, lowkey invested',
  'lvl 3: one more, you got this',
  'lvl 4: max level reached',
]

export type QuestState = { unlocked: boolean[]; lastAchievement: string }

export const initialQuests: QuestState = {
  unlocked: Array(QUEST_COUNT).fill(false),
  lastAchievement: '',
}

export function questReducer(state: QuestState, index: number): QuestState {
  if (index < 0 || index >= QUEST_COUNT || state.unlocked[index]) return state
  const unlocked = state.unlocked.slice()
  unlocked[index] = true
  return { unlocked, lastAchievement: ACHIEVEMENTS[index] }
}

export function progress(state: QuestState) {
  const done = state.unlocked.filter(Boolean).length
  return { done, xp: done * XP_PER_QUEST, level: LEVELS[done], complete: done === QUEST_COUNT }
}
