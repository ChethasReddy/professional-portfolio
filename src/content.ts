export type Job = {
  company: string
  role?: string
  dates?: string
  bullets: string[]
}

export type Project = {
  name: string
  description: string
  repo?: string
  video?: string
}

export type School = {
  school: string
  degree: string
  year?: string
}

export const profile = {
  name: 'Chethas Reddy',
  initials: 'CR',
  title: 'Founding Software Engineer at Inyo',
  summary:
    'I own the memory system, data layer and per-turn measurement for an SMS-first AI matchmaking platform.',
  email: 'chethasreddy@gmail.com',
  github: 'https://github.com/ChethasReddy',
  linkedin: undefined as string | undefined,
}

export const stats = [
  { value: '87%', label: 'memory recall, up from 15%' },
  { value: '88.9%', label: 'cache hit rate' },
  { value: '62.5%', label: 'onboarding completion' },
]

export const jobs: Job[] = [
  {
    company: 'Inyo',
    role: 'Founding Software Engineer',
    bullets: [
      'Redesigned agent memory into short, medium and long-term tiers; recall rose from 15% to 87%.',
      'Built the Redis turn audit layer for per-turn observability; 88.9% cache hit rate.',
      'Shipped SMS onboarding and passwordless auth; 62.5% onboarding completion.',
      'Authored 76 of 97 database migrations on Supabase.',
    ],
  },
  {
    company: 'Cortif AI',
    bullets: ['Built an LLM proxy in TypeScript, deployed on Vercel.'],
  },
  {
    company: 'Thomas Jefferson University Hospital',
    bullets: ['Engineered a healthcare platform.'],
  },
]

export const projects: Project[] = [
  {
    name: 'Ads',
    description: 'Built solo at the AI Tinkerers NYC hackathon.',
    repo: 'https://github.com/ChethasReddy/Ads',
  },
  {
    name: 'SWOT Prompt Explorer',
    description:
      'Live population segmentation app. React 18, Vite, Tailwind, Claude API via edge functions, two-layer session cache.',
    repo: 'https://github.com/ChethasReddy/population-segmentation-UX',
  },
  {
    name: 'PitchForge',
    description:
      'AI investor pitch coach as a CLI skill. 53 files, 9,000+ lines, built as a six-layer AI engineering learning arc.',
    repo: 'https://github.com/ChethasReddy/pitchforge-skill',
  },
  {
    name: 'VibeTrace Arena',
    description: '11-screen React prototype of an emotional QA and crash-test tool for voice agents.',
  },
]

export const education: School[] = [{ school: 'Drexel University', degree: 'MS, Computer Science' }]

export const tools = ['Supabase', 'Redis', 'React', 'TypeScript', 'Claude API']
