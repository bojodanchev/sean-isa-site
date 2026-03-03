# Project: Sean Isa Portfolio

Premium dark-mode personal portfolio site for Sean Isa. Bulgarian language. Single-page static site. (Vite 7 + Tailwind CSS v4 + vanilla TypeScript)

## Quick Start
```bash
npm install
npm run dev        # Dev server with hot reload
npm run build      # tsc + vite build → dist/
```

## Key Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build |
| `git push origin main` | Auto-deploys to Vercel |

## Project Structure
```
index.html              # Entire site — all 8 sections (~1200 lines)
src/main.ts             # All JS interactivity (accordion, carousel, scroll, nav)
src/style.css           # @theme design tokens + custom CSS
src/partials/           # Original section partials (now merged into index.html)
public/sean-portrait.jpg # Founder portrait
docs/                   # Architecture, environment, gotchas, decisions
```

## Architecture Pointers
> Deep dive: [docs/architecture.md](docs/architecture.md)

- **Tailwind v4**: Design tokens in `src/style.css` via `@theme { }` — NOT in a config file
- **Dark + Gold palette**: `dark-950`→`dark-400` layered depth, `gold-400` (#d4af37) primary accent
- **Fonts**: `font-display` = Cormorant Garamond (serif), `font-body` = Outfit (sans)
- **Scroll animations**: `.reveal` + `.visible` via IntersectionObserver in main.ts
- **All content is Bulgarian**: Hardcoded strings, no i18n system

## Environment & Deployment
> Details: [docs/environment.md](docs/environment.md)

- **Vercel**: `sean-isa-site.vercel.app` — auto-deploys on push to `main`
- **No env vars needed** — fully static site
- **No `base` in vite.config.ts** — Vercel serves from root

## Rules & Style
- Every `<section>` needs `py-24 lg:py-32` minimum (enterprise spacing)
- Hero needs `pt-28 pb-40 lg:pt-32 lg:pb-36` to clear fixed nav + absolute stats bar
- Use `.reveal` class on any element that should animate on scroll
- Accordion items use `.accordion-trigger` / `.accordion-content` / `.accordion-chevron`
- CTA buttons use `.magnetic-btn` + `.animate-pulse-gold`

## Gotchas (Top 5)
> Full list: [docs/gotchas.md](docs/gotchas.md)

- Fixed nav is h-20 — all hero content needs pt-28+ to avoid overlap
- Hero bottom stats bar is absolute — content needs pb-40+ to clear it
- Vercel link needs `--project sean-isa-site` (directory name has a space)
- Tailwind v4 uses `@theme` in CSS, not `tailwind.config.ts`
- Journey accordion ported from Abundance project at `/Users/bojodanchev/Abundance/Archive/`

## Recent Decisions
> History: [docs/decisions/](docs/decisions/)

- [2026-03-01] Removed GitHub Actions CI/CD — Vercel handles deployment natively
- [2026-03-01] Ported 15-item Founder Story accordion from Abundance SPA (replacing old 12-item timeline)

## Active Context
Enterprise spacing pass complete. All sections have proper padding. Accordion and all 8 sections are live at `sean-isa-site.vercel.app`.

## Discovery Log (Recent)
> Full log: [docs/discovery-log.md](docs/discovery-log.md)

- [2026-03-01] Enterprise spacing: added py-24+ to all sections, section dividers, footer padding increase
- [2026-03-01] Ported 15-item founder accordion from Abundance SPA with bio card + portrait
- [2026-03-01] Fixed hero overlap (nav badge + CTA/stats bar collision)
