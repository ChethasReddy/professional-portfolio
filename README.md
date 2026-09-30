# Chethas Reddy

> A portfolio that couldn't decide whether it was a resume or a video game, so it's both.

Most portfolios ask you to scroll. This one asks you to pick a mode.

**Professional mode** is the version you'd expect. Experience, projects, education, contact.
Clean, quick to scan, easy to forward to a hiring manager.

**Gen Z mode** is the same facts, reorganised into a game. Four quests to unlock, an XP bar
that fills as you dig, achievements for the curious, and a secret ending for anyone who
actually finishes. Nothing is hidden from you in professional mode. It's the same story,
told at a different volume.

One toggle flips the whole page. The mode lives in the URL (`?mode=genz`), so if you find
the fun version you can send someone straight to it.

## The layout

On a laptop you land on a dotted whiteboard. Stickies, hand-drawn arrows, a few stats,
and in the middle of it all a phone frame holding the actual portfolio. The whiteboard is
the thinking; the phone is the thing.

On a phone the frame disappears, because putting a picture of a phone inside a phone is a
joke that only works once. The portfolio just becomes the page.

Everything here is static. No accounts, no analytics wall, nothing about your visit gets
stored anywhere.

## Built with

- React 19 and TypeScript
- Vite
- Plain CSS with CSS variables
- Vitest and Playwright
- Caveat, Fraunces, Geist and Geist Mono, self-hosted via Fontsource
- Deployed on Vercel

## Running it locally

```bash
npm install
npm run dev
```

## Structure

```
src/
  content.ts        every job, project and school lives here
  App.tsx           owns the mode and scales the board to fit
  Board.tsx         the laptop whiteboard and the mode toggle
  Phone.tsx         the professional and Gen Z views
  quests.ts         quests, XP, achievements
e2e/                Playwright tests for desktop and phone
```

There's no CMS. Editing `content.ts` is the CMS. Updating a job title is a one-line change,
which is exactly as much ceremony as updating a job title deserves.

## Say hi

If you found the secret ending, I'd genuinely like to hear about it.

- Email: [chethasreddy@gmail.com](mailto:chethasreddy@gmail.com)
- GitHub: [@ChethasReddy](https://github.com/ChethasReddy)
<!-- TODO: add LinkedIn and any other links here -->

## License

The code is MIT licensed, see [LICENSE](LICENSE).

The writing, the visual design and the photographs aren't. They're my professional identity,
so please don't reuse them. Copyright (c) 2026 Chethas Reddy, all rights reserved.

## Note

If you made it this far, thank you. That's more attention than most portfolios earn.

I put this off for years. Every template I opened felt like someone else's page with my
name pasted into it, and I'd rather have no portfolio than one that said nothing about me.
So I didn't build one.

Then I started at Inyo, working on SMS agents. I text ours every day to test it. Before
that I barely used iMessage, and now I'm in it constantly, watching how the agent answers,
where it's sharp, where it falls apart. It got addicting in a way I didn't expect. At some
point it stopped being the thing I worked on and became the thing I talk about.

So that's what this is. The phone frame isn't decoration. It's where I actually spend my day.
