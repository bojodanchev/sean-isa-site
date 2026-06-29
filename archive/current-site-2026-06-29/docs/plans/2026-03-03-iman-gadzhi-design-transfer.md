# Iman Gadzhi Design Transfer Plan

> **Goal:** Adopt the "feel" and "taste" of iman-gadzhi.com — editorial luxury, massive typography, cinematic photo integration, generous card system — while keeping Sean's content, gold accent, and Bulgarian language.

## Design Analysis: Iman Gadzhi's Site

### Typography System
| Element | Font | Size | Weight | Spacing | Transform |
|---------|------|------|--------|---------|-----------|
| Hero H1 | Playfair Display | 114px | 500 | `letter-spacing: 18px` | UPPERCASE |
| Section H2 | Playfair Display | 72px | 600 | `letter-spacing: -2px` (tight) | none |
| Card H3 | Inter | 44.8px | 500 | normal | none, **bold italic** |
| Nav links | Inter | 14.4px | 500 | `letter-spacing: 1px` | UPPERCASE |
| Body text | Inter | 15.36px | 500 | normal | none |
| Companies marquee H2 | Playfair Display | 31px | 500 | `letter-spacing: 3px` | UPPERCASE |

**Key takeaway:** Two-font system with **extreme size contrast** — hero name is 114px, body is 15px. Section headings use the serif display font at 72px with TIGHT letter-spacing (-2px). Card titles use the sans-serif at 44px bold-italic.

### Color Palette
- **Background:** Pure black `rgb(0,0,0)` — not dark gray
- **Text:** White `rgb(255,255,255)` + slight off-white `rgb(235,235,235)` on hero
- **Cards:** Black cards on black page — differentiated by subtle bg/elevation
- **No accent color** — fully monochrome. Iman has zero color accents.

### Card System (Signature Element)
- **Border-radius:** `24px` on all content cards
- **Padding:** Extremely generous — `96px-137px` horizontal/vertical
- **Layout:** Text on left (~55%), image on right (~45%) — always
- **Images:** Rotated/tilted, break out of card boundaries (overflow visible)
- **Background:** `rgb(0,0,0)` — same black but perceived as elevated
- **No borders, no shadows** — pure bg color separation

### Section Dividers
- **Vertical centered line** between major sections (not horizontal borders)
- Height approximately 80-100px, 1px width, white, centered

### Hero
- Full viewport height photo as background
- Name overlaid in MASSIVE serif uppercase with wide letter-spacing
- Person shown from behind, looking outward (aspirational)
- Scroll indicator (chevron) at bottom center
- Nav overlaid transparently on hero image

### Navigation
- Clean, transparent background (no glass effect in default state)
- Name centered as logo/wordmark
- Links split: 2 left, 2 right of center name
- All uppercase, small size (14px), wide letter-spacing

### Footer
- Extremely minimal: company name + legal text on left, social links on right
- Single horizontal line separator above
- Social links as text labels (YOUTUBE, INSTAGRAM, TWITTER) — not icons

### Spacing Philosophy
- **Massive** whitespace between sections
- Cards carry the spacing internally via huge padding
- Page feels like a curated editorial spread, not a "website"

---

## Transfer Plan: What Changes for Sean's Site

### KEEP (Sean's Brand DNA)
- Gold accent color (#d4af37) — this IS Sean's brand, Iman has none
- Cormorant Garamond as display font (same serif energy as Playfair Display)
- Outfit as body font (cleaner than Inter, keeps differentiation)
- Bulgarian language and all content
- 15-item founder accordion (Sean's journey)
- Dark theme foundation
- Grain texture overlay (luxury print feel)

### CHANGE (Adopt Iman's Design Language)

#### 1. Hero Section — Full-Viewport Cinematic Treatment
**Current:** Text-only hero with stats bar at bottom
**Target:** Full-viewport photo background with name overlaid

- Add Sean's portrait/photo as full-bleed hero background
- Name "SEAN ISA" in Cormorant Garamond, ~100-114px, UPPERCASE, wide letter-spacing (0.3em+)
- Semi-transparent text color (rgb(235,235,235)) for photographic integration
- Move tagline badge + stats bar below hero into their own section
- Add scroll-down chevron indicator at bottom center
- Reduce hero content to: name + one-line descriptor + scroll indicator

#### 2. Card System — Large Rounded Editorial Cards
**Current:** Small cards with glow pseudo-elements
**Target:** Massive rounded cards (24px radius) with generous padding

- Projects section: Convert 3-column grid → stacked full-width cards
- Each card: text left + visual element right
- Card padding: `px-12 py-16 lg:px-24 lg:py-20` (64-96px equivalent)
- Border-radius: `rounded-3xl` (24px)
- Card bg: `bg-dark-800` on `bg-dark-950` page (subtle elevation)
- Remove gold glow pseudo-elements on project cards
- Philosophy pillar cards → same treatment

#### 3. Section Dividers — Vertical Lines
**Current:** Horizontal `border-top: 1px solid rgba(255,255,255,0.03)`
**Target:** Centered vertical lines between sections

- Remove horizontal border-top from CSS
- Add vertical divider elements: `w-px h-20 lg:h-28 bg-white/10 mx-auto`
- Place between major sections (journey→projects, projects→philosophy, etc.)

#### 4. Typography Scale-Up
**Current:** Heading sizes are moderate
**Target:** Dramatic size contrast like Iman's

- Hero name: bump to `text-7xl lg:text-[7rem]` with `tracking-[0.2em]` UPPERCASE
- Section headings (H2): bump to `text-5xl lg:text-7xl` in Cormorant Garamond, tight tracking
- Section sub-labels: keep small `text-xs tracking-[0.25em] uppercase text-gold-400`
- Card titles (H3): `text-3xl lg:text-4xl font-bold italic` mix
- Body stays at current 15-16px

#### 5. Navigation — Cleaner, Centered Layout
**Current:** Logo left, links center, gold CTA right
**Target:** Cleaner split nav with name centered

- Option A: Keep current layout but remove gold CTA button from nav (move CTA to hero)
- Option B: Split nav — "За мен | Пътят" left, "SEAN ISA" center, "Проекти | Контакт" right
- Reduce glassmorphism intensity
- Remove gold border from nav CTA

#### 6. Spacing — Massive Breathing Room
**Current:** `py-24 lg:py-32` on sections
**Target:** Much more generous spacing

- Sections: `py-32 lg:py-44` minimum
- CTA section: `py-40 lg:py-52`
- Between sections: vertical divider + `my-8` gap
- Card internal padding: `p-12 lg:p-20`

#### 7. Journey Section — Card-Based Layout
**Current:** Bio card + heading + accordion list
**Target:** Bio card in Iman-style card treatment

- Bio card: full-width, rounded-3xl, generous padding, photo breaking boundary
- Accordion items: could keep or convert to Iman-style stacked cards
- Photo should slightly overflow/rotate like Iman's childhood photos

#### 8. Social Proof Section — Simplify
**Current:** Stats grid + testimonial carousel
**Target:** Cleaner stats presentation

- Stats: larger numbers, Cormorant Garamond display font for numbers
- Testimonials: full-width cards instead of carousel
- Remove carousel dots, show all testimonials stacked

#### 9. Footer — Dramatic Simplification
**Current:** Newsletter bar + 4-column grid + copyright
**Target:** Minimal footer like Iman's

- Keep newsletter (Sean's differentiation) but simplify
- Reduce to 2 rows: newsletter on top, minimal copyright + social links below
- Social links as text labels, not icons
- Single horizontal divider line above footer

#### 10. Background — True Black Foundation
**Current:** `bg-dark-900` (#0a0a0a)
**Target:** Closer to true black for contrast with cards

- Body: keep `bg-dark-950` (#050505) or go to `bg-black` (#000)
- Cards: `bg-dark-800` (#111) for subtle elevation
- This creates the same perceived depth Iman achieves

---

## Section-by-Section Migration Map

| Section | Current State | Target State | Priority |
|---------|--------------|--------------|----------|
| **Nav** | Logo-left + gold CTA | Cleaner, no gold CTA button | Medium |
| **Hero** | Text-only, stats bar | Full photo bg + massive name overlay | **HIGH** |
| **Journey** | Bio card + accordion | Iman-style card + keep accordion | Medium |
| **Projects** | 3-col small cards | Stacked full-width editorial cards | **HIGH** |
| **Philosophy** | 4 pillar cards + blockquote | Large single-width pillar cards | Medium |
| **Proof** | Stats + carousel | Clean stats + stacked testimonials | Low |
| **CTA** | Binary choice + gold button | Simplified with more space | Low |
| **Footer** | Newsletter + 4-col grid | Minimal 2-row | Low |

## Implementation Order (Recommended)
1. Typography scale + spacing overhaul (affects everything)
2. Hero redesign (biggest visual impact)
3. Card system overhaul (projects + philosophy)
4. Section dividers (vertical lines)
5. Journey section refinement
6. Nav cleanup
7. Proof + CTA + Footer simplification
