# Decision: Replace Public Portfolio With Private Executive Proposal

Date: 2026-06-29

## Status

Accepted and shipped to production.

## Context

The site needed to stop functioning as a public personal portfolio and become a private Executive Operations Proposal for one specific HNWI/founder opportunity. The PRD required:

- Preserve the existing `seanisa.com` site without deleting it.
- Build a new Bulgarian-first proposal page tailored to the opportunity.
- Add BG/EN switching without page refresh.
- Keep the site private: unlisted, noindex/nofollow, no sitemap, no public links.
- Protect the page with server-side password handling; the password must not be present in client-side app HTML.
- Avoid CV layout, portfolio grid, testimonials, blog, pricing, salary, contact forms, cookie banner, and SEO sections.

## Decision

The active site is now a single-page Vite proposal app protected by Vercel Routing Middleware.

Implementation choices:

- Archive previous public site under `archive/current-site-2026-06-29/`.
- Keep current proposal sections inline in `index.html` for direct editorial control.
- Remove active `src/partials/*` because they belonged to the old portfolio.
- Use `src/main.ts` for scroll progress, reveal animations, anchor scrolling, and BG/EN language swapping.
- Use `src/style.css` for an executive minimalism system: white/black surfaces, soft blue accent, Inter + Newsreader, restrained motion.
- Use `middleware.ts` for Vercel edge password protection.
- Require `PROPOSAL_PASSWORD` or `SITE_PASSWORD`; fail closed with `503` when no password env exists.
- Set the access cookie as `HttpOnly; Secure; SameSite=Lax`.
- Keep crawler blocking in `public/robots.txt`, HTML robots meta tags, and `X-Robots-Tag` middleware headers.

## Consequences

- Local `npm run dev` is no longer sufficient to validate all behavior because Vite does not run Vercel middleware.
- Production validation must include unauthenticated and authenticated HTTP checks.
- Any future public portfolio restoration should start from `archive/current-site-2026-06-29/`.
- Any future content addition must preserve the private proposal framing and forbidden-content constraints from the PRD.

## Validation Evidence

Production deployment on 2026-06-29:

- Commit: `dc910d6 Implement private executive proposal site`
- Production URL: `https://www.seanisa.com`
- Vercel deployment: `https://sean-isa-site-402ql4nlo-bojidars-projects-2603784f.vercel.app`
- Deployment status: Ready

Live checks performed:

- Unauthenticated `GET /` returned `HTTP/2 401`.
- Login `POST /proposal-login` returned `HTTP/2 303`.
- Login set `sean_exec_access=...; HttpOnly; Secure; SameSite=Lax`.
- Authenticated `GET /` returned `HTTP/2 200`.
- Protected HTML contained `Това не е CV`.
- Protected HTML contained `noindex,nofollow`.
- Protected HTML did not contain the login placeholder `october 1993`.
- Protected HTML contained the language switch data.
- Response headers included `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`.
