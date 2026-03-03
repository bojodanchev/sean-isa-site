# Architecture

## Tech Stack
- **Vite 7.3.1** — build tool and dev server
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin (uses `@theme` directive, not tailwind.config)
- **TypeScript** — vanilla TS, no framework
- **Google Fonts** — Cormorant Garamond (display) + Outfit (body)
- **Deployment** — Vercel (auto-deploys on push to `main`)
- **Repo** — `github.com/bojodanchev/sean-isa-site`

## Directory Structure
```
/
├── index.html              # Single-page site (all 8 sections inline)
├── src/
│   ├── main.ts             # All JS: scroll, nav, accordion, carousel, count-up, magnetic btns
│   ├── style.css           # Tailwind v4 @theme tokens + custom CSS (nav, hero, accordion, cards)
│   └── partials/           # Original HTML partials (nav, hero, journey, etc.) — merged into index.html
├── public/
│   └── sean-portrait.jpg   # Founder portrait (copied from Abundance project)
├── docs/
│   └── plans/              # Implementation plans
├── vite.config.ts          # Vite + @tailwindcss/vite plugin
├── tsconfig.json
└── package.json
```

## Key Patterns & Conventions

### Design System (Tailwind v4 @theme)
- **Dark palette**: `dark-950` (#050505) through `dark-400` (#444444) — layered depth, not flat black
- **Gold accents**: `gold-200` through `gold-600`, primary is `gold-400` (#d4af37)
- **Project card accents**: `accent-blue`, `accent-purple`, `accent-amber`
- **Fonts**: `font-display` (Cormorant Garamond), `font-body` (Outfit)

### Animation System
- `.reveal` + `.visible` — IntersectionObserver-driven scroll entrance (opacity + translateY)
- `.hero-animate` + `.visible` — staggered hero entrance with delays
- `.accordion-content` + `.open` — max-height transition for accordion expand/collapse
- `.animate-pulse-gold` — CTA button glow keyframe
- `.magnetic-btn` — mouse-follow magnetic effect on hover

### Section Structure
Each section follows the pattern:
```html
<section id="name" class="py-24 lg:py-32">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <!-- Section header with .reveal -->
    <!-- Content -->
  </div>
</section>
```

### Content Language
All content is hardcoded in **Bulgarian**. No i18n system — static strings in HTML.

## Important Files
| File | Purpose |
|------|---------|
| `index.html` | The entire site — all 8 sections, ~1200 lines |
| `src/style.css` | Design tokens (@theme), nav glassmorphism, accordion, card glow, pillar glow |
| `src/main.ts` | All interactivity: scroll progress, nav, mobile menu, accordion, count-up, carousel, magnetic buttons |
| `public/sean-portrait.jpg` | Founder portrait used in journey bio card |

## Sections (in order)
1. **Navigation** (`#nav`) — Fixed, glassmorphism on scroll, mobile hamburger overlay
2. **Hero** (`#hero`) — Full-viewport, staggered entrance, stats bar at bottom
3. **Journey** (`#journey`) — Bio card + 15-item accordion (ported from Abundance SPA)
4. **Projects** (`#projects`) — 3-column cards: CODE: ABUNDANCE™, Creator Partnership, Strategic Mentoring
5. **Philosophy** (`#philosophy`) — 4 pillar cards + signature blockquote + closing statement
6. **Social Proof** (`#proof`) — Stats grid (count-up) + testimonial carousel (3 slides)
7. **Final CTA** (`#cta`) — Binary choice framing + gold pulse CTA button
8. **Footer** (`#footer`) — Newsletter bar + 4-column link grid + copyright
