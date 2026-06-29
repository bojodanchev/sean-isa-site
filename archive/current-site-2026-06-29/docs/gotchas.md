# Gotchas & Lessons Learned

## Deployment
- **Vercel link with spaces in directory name**: The project directory is "SeanIsa Site" (with a space). When running `vercel link`, you must explicitly pass `--project sean-isa-site` or the CLI fails to auto-detect the project name.
- **No `base` in vite.config.ts**: Vercel serves from root, so never add `base: '/sean-isa-site/'` (that's only for GitHub Pages subdirectory hosting).

## Layout
- **Fixed navbar requires content offset**: The nav is `position: fixed; top: 0; h-20`. Hero content needs `pt-28` (or more) to avoid overlap with the nav bar and badge.
- **Hero stats bar overlap**: The stats bar at the bottom of the hero is `position: absolute; bottom: 0`. Hero content needs `pb-40 lg:pb-36` to prevent CTAs from colliding with it.
- **Section padding is mandatory**: Every `<section>` must have `py-24 lg:py-32` (or similar). Sections without padding cause cramped, unprofessional transitions. The CTA section uses `py-28 lg:py-40` for extra breathing room.

## Accordion
- **Accordion CSS uses max-height**: `.accordion-content` uses `max-height: 0; overflow: hidden` and `.accordion-content.open` uses `max-height: 600px`. The JS toggles the `.open` class and rotates the chevron via inline `style.transform`.
- **Accordion chevron rotation**: Done via JS `style.transform = "rotate(180deg)"` on the `.accordion-chevron` SVG, not via CSS selector (the CSS selectors are a fallback).

## Content
- **All content is Bulgarian**: No i18n system. All strings are hardcoded in index.html. The journey accordion data was ported from the Abundance SPA's React component + i18n JSON files at `/Users/bojodanchev/Abundance/Archive/`.
- **Journey section ported from Abundance**: The 15-item founder accordion was converted from `FounderStory.tsx` + `bg.json` (under `founderStory.*` keys) into static HTML.

## Styling
- **Tailwind v4 uses `@theme` not `tailwind.config`**: Design tokens (colors, fonts) are defined inside `src/style.css` using the `@theme { }` directive, not in a config file.
- **Grain overlay on body::after**: A fractal noise SVG is applied as `body::after` with `z-index: 9999; pointer-events: none; opacity: 0.03` for a premium print texture.
