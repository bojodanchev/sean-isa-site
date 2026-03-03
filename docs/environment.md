# Environment

## Prerequisites
- Node.js (v18+)
- npm

## Setup
```bash
npm install
npm run dev
```

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (hot reload) |
| `npm run build` | `tsc && vite build` — typecheck + production build to `dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment
- **Platform**: Vercel
- **Trigger**: Auto-deploys on push to `main` branch
- **Project name**: `sean-isa-site`
- **URL**: `https://sean-isa-site.vercel.app`
- **Note**: No `base` config needed in vite.config.ts (Vercel serves from root)
- **Note**: Vercel was linked via `vercel link --project sean-isa-site` (directory name has a space, so explicit project name was required)

## Environment Variables
None required. Fully static site.

## External Services
- **Google Fonts** — Cormorant Garamond + Outfit loaded via `<link>` in index.html
- **GitHub** — `github.com/bojodanchev/sean-isa-site`
- **Vercel** — Hosting and auto-deployment
