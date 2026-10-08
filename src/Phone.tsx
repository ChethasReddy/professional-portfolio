import { useReducer, type ReactNode } from 'react'
import { education, jobs, profile, projects, stats } from './content.ts'
import { initialQuests, progress, questReducer } from './quests.ts'

const mailto = `mailto:${profile.email}`

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="p-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="mono-label">{title}</h2>
      {children}
    </section>
  )
}

export function ProfessionalView() {
  return (
    <div className="pro">
      <div className="p-intro">
        <div className="p-avatar" aria-hidden="true">{profile.initials}</div>
        <h1>{profile.name}</h1>
        <div className="p-title">{profile.title}</div>
        <p className="p-summary">{profile.summary}</p>
        <div className="p-cta">
          <a href={mailto} className="btn-dark">Email me</a>
          <a href={profile.github} className="btn-outline">GitHub</a>
          {profile.linkedin && <a href={profile.linkedin} className="btn-outline">LinkedIn</a>}
        </div>
      </div>

      <nav aria-label="Sections" className="p-nav scroll">
        <a href="#p-exp">Experience</a>
        <a href="#p-proj">Projects</a>
        <a href="#p-edu">Education</a>
        <a href="#p-contact">Contact</a>
      </nav>

      <div className="p-stats">
        {stats.map((s) => (
          <div key={s.value} className="card">
            <div className="p-stat-value">{s.value}</div>
            <div className="p-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <Section id="p-exp" title="EXPERIENCE">
        <div className="stack-18">
          {jobs.map((j) => (
            <div key={j.company}>
              <div className="row-between">
                <h3>{j.company}</h3>
                {j.dates && <div className="muted-sm">{j.dates}</div>}
              </div>
              {j.role && <div className="p-role">{j.role}</div>}
              <ul className="p-bullets">
                {j.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="p-proj" title="PROJECTS">
        <div className="stack-12">
          {projects.map((p) => (
            <article key={p.name} className="card project">
              {p.video && (
                <video className="project-video" src={p.video} controls preload="metadata" />
              )}
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="project-links">
                {p.live && <a href={p.live}>Live demo</a>}
                {p.repo && <a href={p.repo}>View code</a>}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="p-edu" title="EDUCATION">
        <div className="stack-12">
          {education.map((e) => (
            <div key={e.school}>
              <div className="row-between">
                <h3>{e.school}</h3>
                {e.year && <div className="muted-sm">{e.year}</div>}
              </div>
              <div className="p-role">{e.degree}</div>
            </div>
          ))}
        </div>
      </Section>

      <section id="p-contact" className="p-section p-contact" aria-labelledby="p-contact-h">
        <h2 id="p-contact-h" className="mono-label">CONTACT</h2>
        <p className="p-contact-line">Building something with agents or memory? Let's talk.</p>
        <a href={mailto} className="btn-dark btn-block">{profile.email}</a>
      </section>
    </div>
  )
}

type Quest = { title: string; body: ReactNode }

const QUESTS: Quest[] = [
  {
    title: 'The Origin Story',
    body: <p>MS in Computer Science at Drexel University. learned the theory, then went straight to shipping.</p>,
  },
  {
    title: 'Main Quest: Inyo',
    body: (
      <>
        <p>founding engineer on an SMS-first AI matchmaker. owns the memory, the data layer and the per-turn receipts.</p>
        <div className="g-stats">
          <div style={{ background: '#FFF4E4' }}><b>15→87%</b><span>recall glow up</span></div>
          <div style={{ background: '#E6EEF7' }}><b>88.9%</b><span>cache hits</span></div>
          <div style={{ background: '#E5F0E7' }}><b>62.5%</b><span>finish onboarding</span></div>
        </div>
      </>
    ),
  },
  {
    title: 'Previous Levels',
    body: (
      <>
        <p><b>Cortif AI</b>: built an LLM proxy in TypeScript on Vercel.</p>
        <p><b>Thomas Jefferson University Hospital</b>: engineered a healthcare platform. real stakes, real users.</p>
      </>
    ),
  },
  {
    title: 'Side Quests',
    body: (
      <>
        {projects.map((p) => (
          <p key={p.name}>
            <b>{p.name}</b>: {p.quip} {p.repo && <a href={p.repo}>code</a>}
          </p>
        ))}
      </>
    ),
  },
]

export function GenzView() {
  const [state, unlock] = useReducer(questReducer, initialQuests)
  const { xp, level, complete } = progress(state)

  return (
    <div className="genz">
      <div className="g-header">
        <svg className="bob g-blob" width="84" height="84" viewBox="0 0 140 150" aria-hidden="true">
          <path d="M70 6 C 116 6, 136 44, 134 86 C 132 128, 104 146, 68 146 C 30 146, 6 124, 6 84 C 6 40, 26 6, 70 6 Z" fill="#F5F23A" />
          <circle cx="46" cy="66" r="16" fill="#FFFFFF" />
          <circle cx="92" cy="66" r="16" fill="#FFFFFF" />
          <circle cx="50" cy="70" r="7" fill="#141413" />
          <circle cx="96" cy="70" r="7" fill="#141413" />
          <path d="M50 104 C 60 114, 80 114, 90 104" stroke="#141413" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
        <div className="g-player">PLAYER 0001</div>
        <h1 className="g-name">chethas<br />.exe</h1>
        <p className="g-bio">founding engineer. builds the brain for an AI that texts you back. no cap.</p>
        <div className="g-xp">
          <div className="row-between mono"><span>XP</span><span>{xp} / 100</span></div>
          <div className="g-xp-track" role="progressbar" aria-label="XP" aria-valuemin={0} aria-valuemax={100} aria-valuenow={xp}>
            <div className="g-xp-bar" style={{ width: `${xp}%` }} />
          </div>
          <div className="g-level">{level}</div>
        </div>
        {state.lastAchievement && (
          <div role="status" className="g-ach">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#141413" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
              <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
            </svg>
            <span>achievement unlocked: <b>{state.lastAchievement}</b></span>
          </div>
        )}
      </div>

      <div className="g-quests">
        {QUESTS.map((q, i) => (
          <div key={q.title} className="g-quest">
            <div className="g-quest-head">
              <div>
                <div className="g-quest-num">QUEST 0{i + 1} · +25 XP</div>
                <h2>{q.title}</h2>
              </div>
              {state.unlocked[i] ? (
                <span className="g-cleared">cleared</span>
              ) : (
                <button type="button" className="sticker small-sticker" aria-label={`Unlock ${q.title}`} onClick={() => unlock(i)}>
                  TAP ME
                </button>
              )}
            </div>
            {state.unlocked[i] && <div className="g-quest-body">{q.body}</div>}
          </div>
        ))}
      </div>

      <div className="g-end">
        {complete ? (
          <div className="g-win">
            <div className="g-win-title">100% run complete</div>
            <div className="g-win-sub">certified W hire. the final boss is your inbox.</div>
            <a href={mailto} className="btn-yellow">slide into the inbox</a>
          </div>
        ) : (
          <div className="g-locked">secret ending locked. clear every quest to see it.</div>
        )}
      </div>
    </div>
  )
}
