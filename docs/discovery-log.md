# Discovery Log

Reverse-chronological. Most recent first.

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
