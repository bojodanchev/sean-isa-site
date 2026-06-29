# Environment

## Prerequisites

- Node.js 18+
- npm
- Vercel CLI access to `bojidars-projects-2603784f/sean-isa-site`

## Setup

```bash
npm install
npm run dev
```

The Vite dev server does not run `middleware.ts`. Use it for visual/client QA only.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Run `tsc && vite build` |
| `npm run preview` | Preview built static app locally |
| `npx vercel pull --yes` | Pull Vercel project settings into `.vercel/` |
| `npx vercel build --prod` | Validate the Vercel production build locally |
| `npx vercel deploy --prod --yes` | Deploy the current checkout to production |
| `npx vercel env ls` | List Vercel environment variables |
| `npx vercel env pull .env.production.local --environment=production` | Pull production env locally for shape checks |

## Deployment

- **Platform**: Vercel
- **Project name**: `sean-isa-site`
- **Production domain**: `https://www.seanisa.com`
- **Apex redirect**: `https://seanisa.com` redirects to `https://www.seanisa.com/`
- **Git remote**: `https://github.com/bojodanchev/sean-isa-site.git`
- **Production deploy command used on 2026-06-29**: `npx vercel deploy --prod --yes`

Production deployment on 2026-06-29:

- Commit: `dc910d6 Implement private executive proposal site`
- Vercel deployment: `https://sean-isa-site-402ql4nlo-bojidars-projects-2603784f.vercel.app`
- Vercel status: Ready
- Aliased to: `https://www.seanisa.com`

## Environment Variables

Required for production:

| Variable | Scope | Purpose |
|----------|-------|---------|
| `PROPOSAL_PASSWORD` | Production | Password checked by `middleware.ts` |

Optional fallback:

| Variable | Scope | Purpose |
|----------|-------|---------|
| `SITE_PASSWORD` | Any | Secondary fallback if `PROPOSAL_PASSWORD` is absent |

If neither variable is present, middleware returns `503 Proposal password is not configured.` This is intentional and safer than exposing the proposal.

## Password Validation

Do not print the secret in logs. To verify the stored env value shape after editing it:

```bash
rm -f .env.production.local
npx vercel env pull .env.production.local --environment=production >/dev/null
set -a && . ./.env.production.local && set +a
node -e "const v=process.env.PROPOSAL_PASSWORD||''; console.log({parsedLength:v.length, equalsExpected:v==='october 1993'});"
rm -f .env.production.local
```

On 2026-06-29, the first env add stored extra characters because of shell input handling. Removing and re-adding with `printf 'october 1993' | npx vercel env add PROPOSAL_PASSWORD production` fixed it.

## Production Validation Commands

Unauthenticated gate:

```bash
curl -sSI https://www.seanisa.com/ | sed -n '1,22p'
```

Expected:

- `HTTP/2 401`
- `x-robots-tag: noindex, nofollow, noarchive, nosnippet`

Login and protected page:

```bash
tmp_cookie=$(mktemp)
curl -sS -D /tmp/seanisa-login-headers.txt -o /tmp/seanisa-login-body.html \
  -c "$tmp_cookie" \
  -X POST --data-urlencode 'password=october 1993' \
  https://www.seanisa.com/proposal-login

curl -sS -D /tmp/seanisa-protected-headers.txt \
  -b "$tmp_cookie" \
  https://www.seanisa.com/ > /tmp/seanisa-prod.html

node -e "const fs=require('fs'); const h=fs.readFileSync('/tmp/seanisa-prod.html','utf8'); console.log({hasProposal:h.includes('Това не е CV'), hasNoindex:h.includes('noindex,nofollow'), hasLoginPlaceholder:h.includes('october 1993'), hasLangSwitch:h.includes('data-lang=\"en\"'), hasRobotsHeader:fs.readFileSync('/tmp/seanisa-protected-headers.txt','utf8').toLowerCase().includes('x-robots-tag: noindex')});"

rm -f "$tmp_cookie" /tmp/seanisa-login-headers.txt /tmp/seanisa-login-body.html /tmp/seanisa-protected-headers.txt /tmp/seanisa-prod.html
```

Expected after successful login:

- Login response `303`
- `set-cookie: sean_exec_access=...; HttpOnly; Secure; SameSite=Lax`
- Protected page `HTTP/2 200`
- `hasProposal: true`
- `hasNoindex: true`
- `hasLoginPlaceholder: false`
- `hasLangSwitch: true`
- `hasRobotsHeader: true`

## External Services

- **Google Fonts** - Inter + Newsreader loaded in `index.html`
- **GitHub** - source control
- **Vercel** - hosting, middleware, production aliasing
