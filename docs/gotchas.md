# Gotchas & Lessons Learned

## Privacy and Password Protection

- **Vite dev does not run middleware**: `npm run dev` serves the client app directly. It is useful for visual QA, but it does not prove server-side password protection. Validate auth behavior on Vercel production or a Vercel build/deploy path.
- **Password must be env-only**: `middleware.ts` should read `PROPOSAL_PASSWORD` or `SITE_PASSWORD`. Do not add a hardcoded fallback secret. The login input may show placeholder `october 1993`; the protected app HTML must not include that placeholder.
- **Missing env should fail closed**: If the password env var is absent, middleware returns `503`. This prevents accidental public exposure.
- **Vercel env input can include extra characters**: A first attempt to add `PROPOSAL_PASSWORD` with `printf '%s\n'` produced a parsed value that did not equal the expected password. Use `printf 'october 1993' | npx vercel env add PROPOSAL_PASSWORD production`, then pull and verify parsed length/equality without printing the secret.
- **Login validation needs POST body, not HEAD**: `curl -I -X POST` does not validate the login flow correctly. Use `curl -D - -o file -c cookiejar -X POST --data-urlencode ...`.

## Noindex and Private Surface

- **Use both HTML and headers**: Keep `meta name="robots"`, `meta name="googlebot"`, `public/robots.txt`, and middleware `X-Robots-Tag` in sync. Static HTML alone is not enough because unauthenticated users only see the middleware login page.
- **No public discovery affordances**: Do not add sitemap, public nav links, social links, contact forms, structured data, testimonials, blog sections, CV downloads, pricing, salary, or public SEO content to the active proposal.
- **Protected page should have no outbound links**: Production validation checked that active anchors are in-page only.

## Deployment

- **Vercel link with spaces in directory name**: The project directory is `SeanIsa Site`. If relinking, use the existing `.vercel/project.json` or pass the explicit Vercel project name `sean-isa-site`.
- **`vercel build --prod` needs project settings**: If it says `No Project Settings found locally`, run `npx vercel pull --yes` first. `.vercel/` is ignored and should not be committed.
- **Production aliases after deploy**: The 2026-06-29 production deployment was aliased to `https://www.seanisa.com`, `https://seanisa.com`, and Vercel project aliases. Validate the canonical `www` URL.
- **No `base` in Vite config**: Vercel serves from root. Do not add GitHub Pages-style `base` config.

## Active Source vs Archive

- **Old partials are archive-only**: The previous `src/partials/*` files contained the old portfolio structure and were moved to `archive/current-site-2026-06-29/src/partials/`. Do not reintroduce them into active source unless restoring the old site intentionally.
- **Force-add archive images if committing a fresh archive**: The repo ignores `*.png` but allows `public/**/*.jpg` and `public/**/*.png`. The archive contains image assets under `archive/...`, so `git add -f archive/current-site-2026-06-29` was needed to preserve a full restore point.
- **Root docs can drift quickly**: `CLAUDE.md` previously described the old public portfolio and static-only environment. Treat `docs/` as the system of record and keep root guidance navigational.

## Layout and UX

- **Mobile hero order matters**: Putting the portrait above the copy pushed the proposal headline below the first mobile viewport. The active design keeps proposal text first on mobile, image after.
- **Desktop hero scale matters**: The first implementation used poster-scale type that clipped in the split hero. The active headline uses tighter `clamp(37px, 4.4vw, 64px)` sizing so the proposal reads in the first viewport.
- **Use restrained motion**: Current motion is limited to hero entrance, scroll progress, smooth anchors, reveals, and subtle hover states. Avoid flashy animation or parallax; the PRD explicitly calls for calm executive minimalism.

## Language Toggle

- **Bulgarian is source of truth**: Bulgarian text lives in `index.html`; English text lives in the `english` dictionary in `src/main.ts`.
- **Every swappable text block needs `data-i18n`**: If a new visible text block should switch language, give it a stable key and add the English string.
- **Do not replace structural labels accidentally**: The toggle uses `innerHTML` so inline `<strong>` tags can be translated. Keep translation strings trusted and local.
