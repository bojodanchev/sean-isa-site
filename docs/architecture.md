# Architecture

## Current Product

The active site is a private Executive Operations Proposal, not a public portfolio or SEO site. It is a Bulgarian-first single-page Vite app with a no-refresh BG/EN language toggle and Vercel Routing Middleware for server-side password protection.

The previous public portfolio is preserved at `archive/current-site-2026-06-29/` and should be treated as the restore point if the old site is needed again.

## Tech Stack

- **Vite 7.3.1** - build tool and dev server
- **Tailwind CSS v4** - imported through `src/style.css`
- **TypeScript** - vanilla browser code in `src/main.ts`
- **Vercel Routing Middleware** - root `middleware.ts` protects the built static app
- **Google Fonts** - Inter for body copy, Newsreader for display headings
- **Deployment** - Vercel production alias on `https://www.seanisa.com`
- **Repo** - `github.com/bojodanchev/sean-isa-site`

## Directory Structure

```text
/
├── index.html                         # Full proposal page and PRD sections
├── middleware.ts                      # Vercel server-side password gate
├── src/
│   ├── main.ts                        # Scroll progress, reveals, anchors, BG/EN toggle
│   └── style.css                      # Executive minimalism visual system
├── public/
│   ├── favicon.svg
│   ├── robots.txt                     # Disallow all crawlers
│   └── images/                        # Active visual assets
├── archive/current-site-2026-06-29/   # Restorable snapshot of previous public site
├── docs/
│   ├── architecture.md
│   ├── environment.md
│   ├── gotchas.md
│   ├── discovery-log.md
│   └── decisions/
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Page Structure

The active `index.html` is intentionally inline rather than partial-driven. The old `src/partials/*` files were moved into the archive because they belonged to the previous portfolio and included now-forbidden portfolio/testimonial/contact concepts.

Active sections:

1. `#hero` - private proposal headline and portrait anchor
2. `#understanding` - how Sean understands the principal's working style
3. `#before-after` - operational before/after scenarios
4. `#decisions` - decision-making timeline
5. `#proof` - Situation / Action / Executive Update / Result proof cases
6. `#communication` - reactive assistant vs executive communication example
7. `#framework` - decision rules
8. `#dashboard` - executive dashboard mockup
9. `#report` - weekly executive report mockup
10. `#infrastructure` - technology and operational systems
11. `#network` - network and dedicated work setup
12. `#principles` - operating principles
13. `#first-week` - first week plan
14. `#ninety` - first 90 days
15. `#stories` - adapted personal stories
16. `#final` - one-line closing section

## Client Interactivity

`src/main.ts` owns all runtime behavior:

- Scroll progress updates `#progress-bar`.
- Smooth anchor navigation intercepts in-page `#` links.
- IntersectionObserver adds `.visible` to `.reveal` elements.
- The BG/EN toggle uses `data-i18n` keys and an in-memory English dictionary.
- Bulgarian source text stays in `index.html`; English text stays in `src/main.ts`.
- The selected language is stored in `localStorage` under `proposalLanguage`.

There is no framework, router, form handler, analytics, cookie banner, public sitemap, or external outbound linking in the active app.

## Access Control

`middleware.ts` protects the static site at the Vercel edge:

- Unauthenticated requests return a server-rendered password page with status `401`.
- `POST /proposal-login` compares the submitted password to `process.env.PROPOSAL_PASSWORD` or `process.env.SITE_PASSWORD`.
- Successful login returns `303` and sets `sean_exec_access` as an `HttpOnly; Secure; SameSite=Lax` cookie.
- The cookie value is a SHA-256 hash of the password, not the raw password.
- If no password env var is configured, middleware returns `503` instead of exposing the proposal.
- Both the login response and protected static response include `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`.

The visible login placeholder can say `october 1993`, but the actual secret must be supplied by Vercel environment variables. The protected app HTML should not contain that placeholder or password text.

## Privacy / Indexing Invariants

- `public/robots.txt` must remain `Disallow: /`.
- `index.html` must keep `meta name="robots"` and `meta name="googlebot"` as `noindex,nofollow,noarchive,nosnippet`.
- `middleware.ts` must keep `X-Robots-Tag` headers for login, redirect, error, and protected responses.
- Do not add public social links, forms, sitemaps, structured data, testimonials, pricing, salary, or CV-download flows to the active proposal.
