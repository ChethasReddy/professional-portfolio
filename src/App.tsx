import { useEffect, useState, type CSSProperties } from 'react'
import { Brand, GenzBoard, ModeToggle, ProBoard, type Mode } from './Board.tsx'
import { GenzView, ProfessionalView } from './Phone.tsx'

const BOARD_W = 1440
const BOARD_H = 960
const fit = () => Math.min(innerWidth / BOARD_W, innerHeight / BOARD_H, 1.5)

const readMode = (): Mode =>
  new URLSearchParams(location.search).get('mode') === 'genz' ? 'genz' : 'professional'

export default function App() {
  const [mode, setMode] = useState<Mode>(readMode)
  const [scale, setScale] = useState(fit)

  useEffect(() => {
    const onResize = () => setScale(fit())
    addEventListener('resize', onResize)
    return () => removeEventListener('resize', onResize)
  }, [])

  const choose = (next: Mode) => {
    setMode(next)
    const url = new URL(location.href)
    if (next === 'genz') url.searchParams.set('mode', 'genz')
    else url.searchParams.delete('mode')
    history.replaceState(null, '', url)
  }

  const isPro = mode === 'professional'
  return (
    <div className="stage" data-mode={mode}>
      <div className="board dots" style={{ '--scale': scale } as CSSProperties}>
        <header className="topbar">
          <Brand />
          <ModeToggle mode={mode} onChange={choose} />
        </header>
        {isPro ? <ProBoard /> : <GenzBoard />}
        <div className="phone">
          <main className="screen scroll">{isPro ? <ProfessionalView /> : <GenzView />}</main>
        </div>
      </div>
    </div>
  )
}
