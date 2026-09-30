import { useState } from 'react'
import { profile, tools } from './content.ts'

export type Mode = 'professional' | 'genz'

export function Brand() {
  return (
    <div className="brand">
      <div className="brand-badge" aria-hidden="true">
        {profile.initials}
      </div>
      <div className="brand-text">CHETHAS.REDDY / PORTFOLIO</div>
    </div>
  )
}

export function ModeToggle({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  return (
    <div className="toggle-wrap">
      <span className="hand wb toggle-hint">pick your vibe</span>
      <div role="group" aria-label="Portfolio mode" className="toggle">
        <button type="button" aria-pressed={mode === 'professional'} onClick={() => onChange('professional')}>
          Professional
        </button>
        <button type="button" aria-pressed={mode === 'genz'} onClick={() => onChange('genz')}>
          Gen Z
        </button>
      </div>
    </div>
  )
}

const TOOL_COLORS = ['#2F5DA8', '#C4501E', '#3E7C4F', '#1F1B16', '#2F5DA8']

export function ProBoard() {
  return (
    <div className="wb" aria-hidden="true">
      <div className="pro-hero">
        <div className="hand pro-hi">Hi, I'm Chethas.</div>
        <div className="hand pro-tagline">I build the memory and data layer behind AI that texts you back.</div>
        <svg width="240" height="16" viewBox="0 0 240 16" fill="none" className="block">
          <path d="M3 10 C 50 3, 90 14, 140 7 S 210 4, 237 9" stroke="#D9622B" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      <svg width="170" height="120" viewBox="0 0 170 120" fill="none" className="abs" style={{ top: 330, left: 340 }}>
        <path d="M8 20 C 60 10, 120 30, 150 92" stroke="#1F1B16" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M134 84 L 151 96 L 158 76" stroke="#1F1B16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="hand scroll-me">scroll me</div>

      <div className="sticky sticky-yellow">
        <div className="sticky-label">NOW</div>
        Founding Software Engineer at Inyo. SMS-first AI matchmaking.
      </div>

      <div className="tools">
        <div className="hand tools-label">tools on the board</div>
        <div className="tools-list">
          {tools.map((t, i) => (
            <span key={t} className="hand chip" style={{ color: TOOL_COLORS[i], borderColor: TOOL_COLORS[i] }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="tray" />
      <div className="markers">
        {['#1F1B16', '#2F5DA8', '#D9622B'].map((c) => (
          <svg key={c} width="92" height="18" viewBox="0 0 92 18">
            <rect x="0" y="3" width="70" height="12" rx="3" fill={c} />
            <rect x="70" y="4" width="16" height="10" rx="2" fill={c} />
            <rect x="86" y="6" width="5" height="6" rx="1.5" fill={c} />
          </svg>
        ))}
      </div>

      <div className="sticky sticky-blue">
        <div className="sticky-label">ASK ME ABOUT</div>
        tiered memory for agents, data layers, per-turn measurement
      </div>

      <div className="recall">
        <div className="recall-circle">
          <svg width="260" height="110" viewBox="0 0 260 110" fill="none" className="abs" style={{ top: -6, left: -14 }}>
            <path
              d="M130 6 C 220 4, 256 30, 250 58 C 244 92, 170 106, 110 102 C 40 98, 6 80, 10 50 C 14 22, 70 8, 150 10"
              stroke="#D9622B"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <div className="hand recall-num">15% → 87%</div>
        </div>
        <div className="hand recall-label">memory recall lift at Inyo</div>
      </div>

      <div className="say-hi hand">
        <div className="say-hi-title">say hi</div>
        <a href={`mailto:${profile.email}`} tabIndex={-1}>
          {profile.email}
        </a>
        <a href={profile.github} tabIndex={-1}>
          {profile.github.replace('https://', '')}
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} tabIndex={-1}>
            LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}

const STICKERS = ['CLICK ME', 'AGAIN?', 'OK HIRE HIM', 'STOP IT', 'NEVER DEBUG ALONE AGAIN']

export function GenzBoard() {
  const [sticker, setSticker] = useState(0)
  return (
    <div className="wb">
      <div className="genz-hero">
        <div className="genz-headline">
          less yapping,
          <br />
          more shipping.<span className="caret" />
        </div>
        <div className="genz-pill">THIS PORTFOLIO IS A GAME. PLAY IT →</div>
      </div>

      <div className="bob abs" style={{ top: 470, left: 432 }} aria-hidden="true">
        <svg width="140" height="150" viewBox="0 0 140 150">
          <path d="M70 6 C 116 6, 136 44, 134 86 C 132 128, 104 146, 68 146 C 30 146, 6 124, 6 84 C 6 40, 26 6, 70 6 Z" fill="#E4472B" />
          <ellipse cx="46" cy="40" rx="18" ry="10" fill="#F07A5E" opacity="0.7" />
          <circle cx="38" cy="70" r="17" fill="#FFFFFF" />
          <circle cx="80" cy="70" r="17" fill="#FFFFFF" />
          <circle cx="34" cy="74" r="8" fill="#141413" />
          <circle cx="76" cy="74" r="8" fill="#141413" />
          <circle cx="31" cy="71" r="2.5" fill="#FFFFFF" />
          <circle cx="73" cy="71" r="2.5" fill="#FFFFFF" />
          <path d="M40 106 C 50 116, 66 116, 76 106" stroke="#7A1E0E" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="bob abs" style={{ top: 34, left: 858, animationDelay: '-1.2s' }} aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <path d="M60 4 C 98 4, 116 30, 116 62 C 116 100, 92 116, 60 116 C 26 116, 4 98, 4 62 C 4 28, 24 4, 60 4 Z" fill="#3E6FD8" />
          <circle cx="70" cy="38" r="13" fill="#FFFFFF" />
          <circle cx="98" cy="40" r="11" fill="#FFFFFF" />
          <circle cx="73" cy="36" r="6" fill="#141413" />
          <circle cx="100" cy="38" r="5" fill="#141413" />
        </svg>
      </div>

      <div className="wobble abs" style={{ top: 380, left: 120 }}>
        <button type="button" className="sticker big-sticker" onClick={() => setSticker(sticker + 1)}>
          {STICKERS[sticker % STICKERS.length]}
        </button>
      </div>

      <div className="side-quests">
        <div className="mono-label">TODAY'S SIDE QUESTS</div>
        <div className="side-quests-list">
          <label><input type="checkbox" defaultChecked />ship memory v4</label>
          <label><input type="checkbox" defaultChecked />run 97 migrations, cry once</label>
          <label><input type="checkbox" />touch grass</label>
          <label><input type="checkbox" />read your email</label>
        </div>
      </div>

      <div className="genz-contact">
        <a href={`mailto:${profile.email}`} className="btn-dark">SLIDE INTO THE INBOX</a>
        <a href={profile.github} className="genz-gh">github</a>
      </div>

      <div className="player-card">
        <div className="mono-row"><span>PLAYER CARD</span><span>0001</span></div>
        <div className="player-name">Chethas</div>
        <p>The founding engineer you text at 2am. Hand him a messy data layer and walk away.</p>
        <div className="player-traits">
          <div><b>Good for:</b><br />making AI actually remember stuff</div>
          <div><b>Vibes:</b><br />calm in prod, feral at hackathons</div>
        </div>
      </div>

      <svg className="spin abs" width="70" height="70" viewBox="0 0 70 70" style={{ top: 420, left: 1010 }} aria-hidden="true">
        <path d="M35 2 L 42 26 L 67 28 L 47 43 L 54 67 L 35 53 L 16 67 L 23 43 L 3 28 L 28 26 Z" fill="#141413" />
      </svg>

      <div className="quote-card">
        <div className="quote">“recall went 15% → 87%. I finally remember things.”</div>
        <div className="quote-by">THE MEMORY SYSTEM, PROBABLY</div>
      </div>
    </div>
  )
}
