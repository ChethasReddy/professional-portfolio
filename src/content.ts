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
  live?: string
  video?: string
  quip: string
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
    description:
      'Interactive AI video ad that adapts to viewer feedback and keeps a transparent preference memory. Team build at the AI Tinkerers NYC hackathon; I built the backend API and the Tavus video agent with dynamic personas.',
    repo: 'https://github.com/ChethasReddy/Ads',
    quip: 'hackathon build at AI Tinkerers NYC. an ad that shuts up when you say so. his favorite child.',
  },
  {
    name: 'SWOT Prompt Explorer',
    description:
      'Live population segmentation app. React 18, Vite, Tailwind, Claude API via edge functions, two-layer session cache.',
    repo: 'https://github.com/ChethasReddy/population-segmentation-UX',
    live: 'https://population-segmentation-ux.vercel.app',
    quip: 'population segmentation, live on Vercel.',
  },
  {
    name: 'VibeTrace Arena',
    description: '11-screen React prototype of an emotional QA and crash-test tool for voice agents.',
    repo: 'https://github.com/ChethasReddy/T.E.L.',
    quip: 'crash-tests the feelings of voice agents. 11 screens.',
  },
  {
    name: 'CartPole RL',
    description:
      'Hybrid evolutionary reinforcement learning on CartPole: Evolutionary PPO and ERL-DQN benchmarked against plain DQN. Three-person team, I wrote most of the code.',
    repo: 'https://github.com/ChethasReddy/Cartpole-RL',
    quip: 'taught a stick to stand up using evolution. three-person team.',
  },
  {
    name: 'Yu-Gi-Oh! TCG Database',
    description:
      'Card and deck explorer with search, filters, market prices and community upvotes. Next.js frontend on a Flask API; three-person team, I led the frontend.',
    repo: 'https://github.com/ChethasReddy/TCG-Frontend',
    quip: 'card prices, deck search, upvotes. it is time to duel.',
  },
  {
    name: 'Drug Recommendation',
    description:
      'Recommends drugs by disease or active ingredient with cosine similarity, plus a public Tableau dashboard of usage and ingredient trends.',
    repo: 'https://github.com/ChethasReddy/Drug_recommendation',
    live: 'https://public.tableau.com/app/profile/chethas.anil.reddy/viz/BIDashboardDrugRecommendationsIngredientInsights/DrugRecommendationDashboard',
    quip: 'cosine similarity, but make it pharmacy. tableau dashboard included.',
  },
]

export const education: School[] = [{ school: 'Drexel University', degree: 'MS, Computer Science' }]

export const tools = ['Supabase', 'Redis', 'React', 'TypeScript', 'Claude API']
