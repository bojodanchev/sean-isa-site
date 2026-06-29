# Discovery Log

Reverse-chronological. Most recent first.

## [2026-06-29] Private executive proposal shipped to production
**Context**: User asked to preserve the current `seanisa.com` site, fully implement `New version prd.md`, push to production, and validate.
**Learnings**:
- The previous public portfolio was archived at `archive/current-site-2026-06-29/` before replacing active source.
- Active source is now a private executive operations proposal, not a portfolio. Old `src/partials/*` are archive-only.
- `middleware.ts` uses Vercel Routing Middleware and `@vercel/functions` `next()` to protect the static Vite output server-side.
- Required production env var is `PROPOSAL_PASSWORD`; if absent, middleware returns `503` rather than exposing the page.
- Production env input initially contained extra characters and rejected the intended password. Re-adding with `printf 'october 1993' | npx vercel env add PROPOSAL_PASSWORD production` fixed it.
- Live validation confirmed unauthenticated `401`, login `303`, `HttpOnly; Secure; SameSite=Lax` cookie, authenticated `200`, no login placeholder in protected app HTML, and `X-Robots-Tag` noindex headers.
**Files touched**: `index.html`, `src/main.ts`, `src/style.css`, `middleware.ts`, `public/robots.txt`, `public/favicon.svg`, `archive/current-site-2026-06-29/`, `package.json`, `package-lock.json`

## [2026-06-29] PRD implementation validation details
**Context**: Browser and build validation after replacing the public portfolio with the proposal page.
**Learnings**:
- `npm run build` and direct middleware type-check both passed. Direct middleware type-check command: `npx tsc --noEmit --target ES2022 --module ESNext --moduleResolution bundler --lib ES2022,DOM --strict --skipLibCheck middleware.ts`.
- `npx vercel build --prod` only worked after `npx vercel pull --yes` downloaded project settings.
- Vite local dev confirmed visual/client behavior but could not validate middleware auth.
- Playwright runtime checks verified BG/EN toggle, no horizontal overflow, no outbound links, noindex meta, and absence of the password placeholder from protected app HTML.
- Mobile QA caught that image-first ordering hid the proposal headline below the first viewport; copy-first mobile ordering fixed it.
- Desktop QA caught that the first hero headline size clipped in the split layout; reducing the clamp max fixed first-viewport readability.
**Files touched**: `index.html`, `src/main.ts`, `src/style.css`, `middleware.ts`

## [2026-03-01] Enterprise spacing pass
**Context**: User reported cramped sections — CTA, footer, and inter-section gaps
**Learnings**:
- Sections `#projects`, `#philosophy`, `#proof` had zero section-level padding — only internal margins
- Added `py-24 lg:py-32` to all content sections, `py-28 lg:py-40` to CTA
- Added subtle `border-top: 1px solid rgba(255,255,255,0.03)` between major sections
- Footer newsletter: `py-12` → `py-16 lg:py-20`; footer grid: same increase
**Files touched**: `index.html`, `src/style.css`

## [2026-03-01] Founder Story accordion ported from Abundance
**Context**: User asked to port the 15-item biographical accordion from the Abundance SPA
**Learnings**:
- Source: `/Users/bojodanchev/Abundance/Archive/src/components/FounderStory.tsx` + `i18n/bg.json`
- Converted React + i18n into static HTML with all 15 items inlined in Bulgarian
- Portrait image copied from Abundance assets to `public/sean-portrait.jpg`
- Replaced old 12-item alternating left/right timeline (lines 278-566) with new accordion
- Item 15 has gold-highlighted styling (border-gold-400/20, gold title)
- Old JS (`initLessonToggles`) replaced with `initFounderAccordion`
- Old CSS (`.timeline-item`, `.lesson-content`) replaced with `.accordion-content`/`.accordion-chevron`
**Files touched**: `index.html`, `src/main.ts`, `src/style.css`, `public/sean-portrait.jpg`

## [2026-03-01] Hero spacing fixes
**Context**: Navbar overlapping badge, CTA overlapping stats bar
**Learnings**:
- Hero content padding changed to `pt-28 pb-40 lg:pt-32 lg:pb-36`
- The stats bar at hero bottom is ~100px tall and absolutely positioned
- `lg:py-0` on hero content causes overlap on both top and bottom
**Files touched**: `index.html`

## [2026-03-01] QA fixes from browser testing
**Context**: Opened site in Playwright, found multiple visual bugs
**Learnings**:
- Nav had duplicate `#journey` anchors — "За мен" should point to `#hero`
- Copyright year was 2024, changed to 2025
- Placeholder `[Лого 1]-[Лого 4]` in proof section removed
- Added inline SVG favicon (S on dark background)
- Hero stat "— млн." was broken, replaced with "Млн.+"
- Mobile footer clipping fixed with `pb-8 sm:pb-6`
**Files touched**: `index.html`

## [2026-02-26] Initial build and deployment
**Context**: Built the entire site from plan, deployed to Vercel
**Learnings**:
- Site built with parallel subagents (nav+hero, journey, projects+philosophy, proof+cta+footer)
- Partials merged into single index.html via Python script
- GitHub Actions CI/CD removed — Vercel handles auto-deploy
- Vercel linked via CLI with explicit `--project` flag due to directory name space
**Files touched**: All project files created from scratch
