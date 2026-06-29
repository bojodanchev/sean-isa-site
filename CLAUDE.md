# Project: Sean Isa Private Executive Proposal

Private, password-protected executive operations proposal site for Sean Isa. Bulgarian-first single-page Vite app with an in-page BG/EN language toggle and Vercel Routing Middleware for server-side access control.

## Quick Start
```bash
npm install
npm run dev
npm run build
```

## Key Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Typecheck + production Vite build |
| `npm run preview` | Preview the production build locally |
| `npx vercel build --prod` | Validate Vercel output locally after `vercel pull --yes` |
| `npx vercel deploy --prod --yes` | Deploy production |

## Architecture Pointers
> Deep dive: [docs/architecture.md](docs/architecture.md)

- `index.html` contains the private proposal page and all PRD sections.
- `src/main.ts` handles scroll progress, reveal animation, smooth anchors, and BG/EN text swapping.
- `src/style.css` owns the executive minimalism visual system.
- `middleware.ts` protects all routes server-side on Vercel.
- `archive/current-site-2026-06-29/` is the restorable archive of the previous public portfolio.

## Environment & Deployment
> Details: [docs/environment.md](docs/environment.md)

- Production domain: `https://www.seanisa.com`.
- Apex `https://seanisa.com` redirects to `www`.
- Required Vercel production env var: `PROPOSAL_PASSWORD`.
- The password placeholder may say `october 1993`, but the secret must come from Vercel env, not client HTML.
- Keep `public/robots.txt`, meta robots, and middleware `X-Robots-Tag` aligned for private/noindex behavior.

## Gotchas
> Full list: [docs/gotchas.md](docs/gotchas.md)

- `npm run dev` does not exercise Vercel middleware; validate auth through Vercel deployment or Vercel output.
- `vercel env add` can accidentally store extra characters if input includes a newline or shell quoting issue. Verify by pulling env and checking parsed length/equality, without printing the secret.
- `vercel build --prod` requires `.vercel/project.json` from `npx vercel pull --yes`.
- The protected app HTML must not contain the password placeholder; the login page can.

## Recent Decisions
> History: [docs/decisions/](docs/decisions/)

- [2026-06-29] Replaced public portfolio with private executive operations proposal and archived the previous site.
- [2026-06-29] Added Vercel server-side password protection with `PROPOSAL_PASSWORD`.
