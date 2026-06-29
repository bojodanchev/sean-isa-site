# Sean Isa — Premium Personal Portfolio Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a premium dark-mode personal portfolio site for Sean Isa — Bulgarian-language authority site with 8 sections, gold/amber accents, editorial typography, scroll-triggered animations, and conversion-optimized CTAs routing to 3 funnels.

**Architecture:** Single-page static site built with Vite + Tailwind CSS v4 + vanilla TypeScript. No framework needed — this is a one-page authority/portfolio site. All content is hardcoded (Bulgarian). Intersection Observer drives scroll animations. CSS-only where possible, JS for count-up numbers, magnetic buttons, timeline interactivity, and testimonial carousel.

**Tech Stack:** Vite 6, Tailwind CSS v4, TypeScript, Google Fonts (Playfair Display + Manrope), deployed as static HTML.

**Design reference:** `launch abundance (1).md` in project root — contains all copy, section specs, and technical requirements.

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `src/style.css`
- Create: `src/main.ts`
- Create: `index.html`
- Create: `.gitignore`
- Create: `public/` (empty dir for static assets)

**Step 1: Initialize project with Vite**

```bash
cd "/Users/bojodanchev/SeanIsa Site"
npm create vite@latest . -- --template vanilla-ts
```

If prompted about existing files, choose to proceed (the only file is the brief `.md`).

**Step 2: Install dependencies**

```bash
npm install
npm install -D tailwindcss @tailwindcss/vite
```

**Step 3: Configure Vite with Tailwind**

Replace `vite.config.ts` with:

```ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

**Step 4: Set up Tailwind in CSS**

Replace `src/style.css` with:

```css
@import "tailwindcss";

@theme {
  --color-dark-900: #0a0a0a;
  --color-dark-800: #111111;
  --color-dark-700: #1a1a1a;
  --color-dark-600: #222222;
  --color-dark-500: #333333;
  --color-gold-400: #d4af37;
  --color-gold-500: #b8972e;
  --color-gold-300: #e8c84a;
  --color-gold-200: #f0da6e;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
}
```

**Step 5: Set up base HTML shell**

Replace `index.html` with:

```html
<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sean Isa | Основател на Code: Abundance™</title>
  <meta name="description" content="Не съм теоретик. Съм предприемач, който е платил цената — за да не се налага да я плащаш ти. 9+ години. 7 бизнеса. Една система за трансформация." />
  <meta name="keywords" content="Sean Isa, Code Abundance, личностно развитие, предприемачество, бизнес системи, Human Design" />

  <!-- Open Graph -->
  <meta property="og:title" content="Sean Isa | Основател на Code: Abundance™" />
  <meta property="og:description" content="Не съм теоретик. Съм предприемач, който е платил цената." />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sean Isa | Основател на Code: Abundance™" />
  <meta name="twitter:description" content="Не съм теоретик. Съм предприемач, който е платил цената." />
  <meta name="twitter:image" content="/og-image.jpg" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />

  <!-- JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sean Isa",
    "jobTitle": "Основател на Code: Abundance™",
    "description": "Предприемач и ментор с 9+ години опит в бизнеса и личностното развитие",
    "url": "https://seanisa.com",
    "sameAs": [],
    "worksFor": {
      "@type": "Organization",
      "name": "Code: Abundance™"
    }
  }
  </script>
</head>
<body class="bg-dark-900 text-white font-body antialiased">
  <!-- Progress bar -->
  <div id="progress-bar" class="fixed top-0 left-0 h-[2px] bg-gold-400 z-[100] transition-none" style="width: 0%"></div>

  <!-- Nav placeholder -->
  <nav id="nav"></nav>

  <main>
    <section id="hero"></section>
    <section id="journey"></section>
    <section id="projects"></section>
    <section id="philosophy"></section>
    <section id="proof"></section>
    <section id="cta"></section>
  </main>

  <footer id="footer"></footer>

  <script type="module" src="/src/main.ts"></script>
</body>
</html>
```

**Step 6: Clean up Vite defaults**

Delete any default Vite files that were generated: `src/counter.ts`, `src/typescript.svg`, `public/vite.svg`, default `src/style.css` content (already replaced above), default `src/main.ts` content.

Replace `src/main.ts` with:

```ts
import "./style.css";

console.log("Sean Isa site loaded");
```

**Step 7: Update .gitignore**

Ensure `.gitignore` contains:

```
node_modules
dist
.DS_Store
```

**Step 8: Verify dev server starts**

```bash
npm run dev
```

Expected: Dev server starts on localhost, page loads with dark background, no errors in console.

**Step 9: Commit**

```bash
git init
git add package.json package-lock.json vite.config.ts tsconfig.json src/style.css src/main.ts index.html .gitignore
git commit -m "chore: scaffold Vite + Tailwind project"
```

---

## Task 2: Navigation

**Files:**
- Modify: `index.html` (replace nav placeholder)
- Modify: `src/main.ts` (add scroll listener for glassmorphism + mobile menu toggle)
- Modify: `src/style.css` (add nav-specific styles)

**Step 1: Build nav HTML**

In `index.html`, replace `<nav id="nav"></nav>` with:

```html
<nav id="nav" class="fixed top-0 left-0 w-full z-50 transition-all duration-500">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
    <!-- Logo -->
    <a href="#" class="font-display text-2xl font-bold tracking-wider text-white">
      SEAN ISA
    </a>

    <!-- Desktop links -->
    <div class="hidden lg:flex items-center gap-10">
      <a href="#journey" class="text-sm tracking-widest uppercase text-white/70 hover:text-gold-400 transition-colors">За мен</a>
      <a href="#journey" class="text-sm tracking-widest uppercase text-white/70 hover:text-gold-400 transition-colors">Пътят</a>
      <a href="#projects" class="text-sm tracking-widest uppercase text-white/70 hover:text-gold-400 transition-colors">Проекти</a>
      <a href="#philosophy" class="text-sm tracking-widest uppercase text-white/70 hover:text-gold-400 transition-colors">Философия</a>
      <a href="#footer" class="text-sm tracking-widest uppercase text-white/70 hover:text-gold-400 transition-colors">Контакт</a>
    </div>

    <!-- CTA + Hamburger -->
    <div class="flex items-center gap-4">
      <a href="#" class="hidden sm:inline-flex px-5 py-2.5 bg-gold-400 text-dark-900 text-sm font-bold tracking-wider rounded-sm hover:bg-gold-300 transition-colors animate-pulse-subtle">
        БЕЗПЛАТНА ДИАГНОСТИКА
      </a>
      <button id="menu-toggle" class="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Меню">
        <span class="block w-6 h-0.5 bg-white transition-transform origin-center"></span>
        <span class="block w-6 h-0.5 bg-white transition-opacity"></span>
        <span class="block w-6 h-0.5 bg-white transition-transform origin-center"></span>
      </button>
    </div>
  </div>

  <!-- Mobile overlay -->
  <div id="mobile-menu" class="fixed inset-0 bg-dark-900/98 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300 lg:hidden">
    <a href="#journey" class="text-2xl tracking-widest uppercase text-white/80 hover:text-gold-400 transition-colors mobile-nav-link">За мен</a>
    <a href="#journey" class="text-2xl tracking-widest uppercase text-white/80 hover:text-gold-400 transition-colors mobile-nav-link">Пътят</a>
    <a href="#projects" class="text-2xl tracking-widest uppercase text-white/80 hover:text-gold-400 transition-colors mobile-nav-link">Проекти</a>
    <a href="#philosophy" class="text-2xl tracking-widest uppercase text-white/80 hover:text-gold-400 transition-colors mobile-nav-link">Философия</a>
    <a href="#footer" class="text-2xl tracking-widest uppercase text-white/80 hover:text-gold-400 transition-colors mobile-nav-link">Контакт</a>
    <a href="#" class="mt-8 px-8 py-3 bg-gold-400 text-dark-900 font-bold tracking-wider rounded-sm text-lg">
      БЕЗПЛАТНА ДИАГНОСТИКА
    </a>
  </div>
</nav>
```

**Step 2: Add nav styles to CSS**

Append to `src/style.css`:

```css
/* Subtle pulse for CTA */
@keyframes pulse-subtle {
  0%, 100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
  50% { box-shadow: 0 0 20px 4px rgba(212, 175, 55, 0.15); }
}
.animate-pulse-subtle {
  animation: pulse-subtle 3s ease-in-out infinite;
}

/* Glassmorphism state */
.nav-scrolled {
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* Hamburger → X transform */
.menu-open #menu-toggle span:nth-child(1) {
  transform: rotate(45deg) translate(3px, 3px);
}
.menu-open #menu-toggle span:nth-child(2) {
  opacity: 0;
}
.menu-open #menu-toggle span:nth-child(3) {
  transform: rotate(-45deg) translate(3px, -3px);
}
```

**Step 3: Add nav JS to main.ts**

Replace `src/main.ts` with:

```ts
import "./style.css";

// --- Scroll progress bar ---
function updateProgress() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = `${progress}%`;
}

// --- Nav glassmorphism on scroll ---
function updateNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  if (window.scrollY > 100) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
}

// --- Mobile menu ---
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const nav = document.getElementById("nav");
  if (!toggle || !menu || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("menu-open");
    menu.classList.toggle("opacity-0", !isOpen);
    menu.classList.toggle("pointer-events-none", !isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close on link click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
      menu.classList.add("opacity-0", "pointer-events-none");
      document.body.style.overflow = "";
    });
  });
}

// --- Smooth scroll for anchor links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = (anchor as HTMLAnchorElement).getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// --- Init ---
window.addEventListener("scroll", () => {
  updateProgress();
  updateNav();
});

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initSmoothScroll();
});
```

**Step 4: Verify in browser**

```bash
npm run dev
```

Expected: Fixed nav visible, logo left, links center (desktop), CTA button right with gold pulse. Scrolling past 100px triggers glassmorphism background. Mobile hamburger opens full-screen overlay, icon transforms to X.

**Step 5: Commit**

```bash
git add index.html src/main.ts src/style.css
git commit -m "feat: add fixed navigation with glassmorphism + mobile menu"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `index.html` (replace hero placeholder)
- Modify: `src/main.ts` (add hero staggered animation on load)
- Modify: `src/style.css` (add hero-specific styles)

**Step 1: Build hero HTML**

In `index.html`, replace `<section id="hero"></section>` with:

```html
<section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
  <!-- Background image placeholder (dark gradient until real photo is provided) -->
  <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
    <!-- When hero photo is available, uncomment:
    <img src="/hero.webp" alt="" class="w-full h-full object-cover object-center" loading="eager" />
    -->
  </div>
  <!-- Gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/70 to-transparent"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
    <div class="max-w-3xl">
      <!-- Badge -->
      <div class="hero-animate opacity-0 translate-y-6 mb-6">
        <span class="inline-block px-4 py-1.5 border border-gold-400/30 text-gold-400 text-xs tracking-[0.25em] uppercase font-body">
          Основател на Code: Abundance™
        </span>
      </div>

      <!-- Main headline -->
      <h1 class="hero-animate opacity-0 translate-y-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6">
        ПЛАТИЛ СЪМ ЦЕНАТА.<br />
        <span class="text-gold-400">ЗА ДА НЕ СЕ НАЛАГА</span><br />
        ДА Я ПЛАЩАШ ТИ.
      </h1>

      <!-- Subheadline -->
      <p class="hero-animate opacity-0 translate-y-6 font-body text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
        9+ години. 7 бизнеса. Стотици провали. Хиляди уроци.<br />
        Една система за трансформация — изкована в огъня на реалния свят.
      </p>

      <!-- Supporting text -->
      <div class="hero-animate opacity-0 translate-y-6 text-white/40 text-base leading-relaxed mb-10 max-w-xl space-y-1">
        <p>Не съм теоретик. Не съм гуру, който е прочел книги и решил да учи другите.</p>
        <p class="mt-3">Съм предприемач, който е:</p>
        <ul class="mt-2 space-y-1 text-white/50">
          <li>→ Продавал книги на 10 000 непознати на улицата</li>
          <li>→ Изграждал екипи от 120+ души</li>
          <li>→ Губил шестцифрени суми и пак ставал</li>
          <li>→ Играл за националния отбор по хокей</li>
          <li>→ Изграждал международни бизнеси</li>
        </ul>
      </div>

      <!-- CTAs -->
      <div class="hero-animate opacity-0 translate-y-6 flex flex-col sm:flex-row items-start gap-4">
        <a href="#" class="magnetic-btn group inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-dark-900 font-bold tracking-wider text-sm uppercase hover:bg-gold-300 transition-all">
          ВИЖ ДАЛИ ТАЗИ СИСТЕМА Е ЗА ТЕБ
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a href="#journey" class="text-white/50 hover:text-gold-400 transition-colors text-sm tracking-wider uppercase underline underline-offset-4 decoration-white/20 hover:decoration-gold-400/50 py-4">
          Или прочети първо историята →
        </a>
      </div>
    </div>
  </div>

  <!-- Social proof bar -->
  <div class="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-dark-900/60 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="text-center">
        <div class="font-display text-2xl lg:text-3xl font-bold text-gold-400 stat-number" data-target="9">0</div>
        <div class="text-xs tracking-widest uppercase text-white/40 mt-1">Години опит</div>
      </div>
      <div class="text-center">
        <div class="font-display text-2xl lg:text-3xl font-bold text-gold-400 stat-number" data-target="120">0</div>
        <div class="text-xs tracking-widest uppercase text-white/40 mt-1">Члена екип</div>
      </div>
      <div class="text-center">
        <div class="font-display text-2xl lg:text-3xl font-bold text-gold-400 stat-number" data-target="7">0</div>
        <div class="text-xs tracking-widest uppercase text-white/40 mt-1">Бизнеса</div>
      </div>
      <div class="text-center">
        <div class="font-display text-2xl lg:text-3xl font-bold text-white/60">—</div>
        <div class="text-xs tracking-widest uppercase text-white/40 mt-1">Млн. оборот</div>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add hero animation CSS**

Append to `src/style.css`:

```css
/* Hero staggered entrance */
.hero-animate {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero-animate.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
```

**Step 3: Add hero animation JS**

Add to `src/main.ts` (inside `DOMContentLoaded`):

```ts
// --- Hero staggered animation ---
function initHeroAnimation() {
  const items = document.querySelectorAll(".hero-animate");
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, 200 + i * 200);
  });
}
```

Call `initHeroAnimation()` inside the `DOMContentLoaded` listener.

**Step 4: Verify in browser**

Expected: Full-height hero, dark gradient background. Badge fades in first, then headline, subheadline, supporting text, and CTAs cascade in with 200ms stagger. Gold accent on "ЗА ДА НЕ СЕ НАЛАГА". Social proof bar pinned to bottom of hero section.

**Step 5: Commit**

```bash
git add index.html src/main.ts src/style.css
git commit -m "feat: add hero section with staggered entrance animation"
```

---

## Task 4: Journey/Timeline Section

**Files:**
- Modify: `index.html` (replace journey placeholder)
- Modify: `src/main.ts` (add Intersection Observer for timeline items + collapsible lessons)
- Modify: `src/style.css` (timeline styles)

**Step 1: Build timeline HTML**

In `index.html`, replace `<section id="journey"></section>` with the full timeline. This is the longest section. Structure:

```html
<section id="journey" class="py-24 lg:py-32 relative">
  <div class="max-w-5xl mx-auto px-6 lg:px-8">
    <!-- Section header -->
    <div class="text-center mb-20">
      <span class="text-gold-400 text-xs tracking-[0.3em] uppercase font-body">От хаоса към системата</span>
      <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
        ВСЯКА ГОЛЯМА ТРАНСФОРМАЦИЯ<br />ЗАПОЧВА С РАЗПАД
      </h2>
      <p class="mt-6 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
        Не съм роден с предимства. Роден съм в раздвоено семейство — българка и нигериец.
        Още на 5 години разбрах, че светът не ти дава нищо наготово.
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:-translate-x-px"></div>

      <!-- Item template repeats for all 12 items. Each item alternates left/right on desktop. -->
      <!-- ITEM 1 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-0 lg:w-1/2 lg:pr-12 mb-12 lg:ml-0" data-side="left">
        <div class="absolute left-4 lg:left-auto lg:right-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">5-15 години</span>
        <h3 class="font-display text-xl font-bold mt-1">Спортът като фундамент</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Лека атлетика под менторството на треньорка в кръга на Христо Марков. Пет години състезания, медали, дисциплина.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">
          Научен урок ↓
        </button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Дисциплината е свобода. Концентрацията е суперсила.</p>
        </div>
      </div>

      <!-- ITEM 2 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-12 lg:w-1/2 lg:ml-auto mb-12" data-side="right">
        <div class="absolute left-4 lg:left-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">10 години</span>
        <h3 class="font-display text-xl font-bold mt-1">Пробуждането</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">YouTube. "The Secret". Наполеон Хил. Кийосаки. Карнеги. На 10 години откривам личностното развитие и финансовата свобода.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Ако не контролираш ума си, някой друг ще го направи.</p>
        </div>
      </div>

      <!-- ITEM 3 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-0 lg:w-1/2 lg:pr-12 mb-12" data-side="left">
        <div class="absolute left-4 lg:left-auto lg:right-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">Тийн години</span>
        <h3 class="font-display text-xl font-bold mt-1">Първият Hustle</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Продавам собственото си колело, за да стартирам първия бизнес. Купувам и препродавам стоки онлайн.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Амбиция + Действие = Резултат. Теорията без действие е хоби.</p>
        </div>
      </div>

      <!-- ITEM 4 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-12 lg:w-1/2 lg:ml-auto mb-12" data-side="right">
        <div class="absolute left-4 lg:left-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">Следващите години</span>
        <h3 class="font-display text-xl font-bold mt-1">Улицата като университет</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Предизвикателство: 10 000 продажби на непознати. Моловете и улиците на София — школа по психология и въздействие.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Страхът от отхвърляне е най-скъпият данък, който плащаш.</p>
        </div>
      </div>

      <!-- ITEM 5 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-0 lg:w-1/2 lg:pr-12 mb-12" data-side="left">
        <div class="absolute left-4 lg:left-auto lg:right-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">Младост</span>
        <h3 class="font-display text-xl font-bold mt-1">Мащаб и лидерство</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Над 100-членен екип в компании за директни продажби. Козметика, добавки, търговски мрежи.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Системите мащабират. Хората изпълняват. Лидерството насочва.</p>
        </div>
      </div>

      <!-- ITEM 6 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-12 lg:w-1/2 lg:ml-auto mb-12" data-side="right">
        <div class="absolute left-4 lg:left-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">2019</span>
        <h3 class="font-display text-xl font-bold mt-1">Национален отбор — исторически обрат</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">От новак на пързалката до професионален хокеист за България. Златен медал срещу Израел. "Best Player of the Game". Първо злато за националния отбор в дивизията.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Войнският манталитет побеждава таланта, когато талантът не работи.</p>
        </div>
      </div>

      <!-- ITEM 7 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-0 lg:w-1/2 lg:pr-12 mb-12" data-side="left">
        <div class="absolute left-4 lg:left-auto lg:right-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">Крипто ерата</span>
        <h3 class="font-display text-xl font-bold mt-1">Бързи пари, бързи загуби</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Печалби: Спортни коли, луксозен живот в Дубай. Загуби: Некачествени инвестиции, PR атаки, негативна кампания.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Парите без система са временни. Репутацията без ценности е крехка.</p>
        </div>
      </div>

      <!-- ITEM 8 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-12 lg:w-1/2 lg:ml-auto mb-12" data-side="right">
        <div class="absolute left-4 lg:left-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">CBD бизнес</span>
        <h3 class="font-display text-xl font-bold mt-1">Международен обхват, пазарен урок</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Бизнес в 8 държави. Инфлуенсъри, яхти, луксозни събития. Продуктът беше добър. Пазарът — недооценен. Минус шестцифрени суми. Задължения.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Не всичко, което блести, е бизнес. Продуктът ≠ пазар.</p>
        </div>
      </div>

      <!-- ITEM 9 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-0 lg:w-1/2 lg:pr-12 mb-12" data-side="left">
        <div class="absolute left-4 lg:left-auto lg:right-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">Тъмният период</span>
        <h3 class="font-display text-xl font-bold mt-1">От дъното</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Работа във фабрики. Такси шофьор. Брокер на имоти. Тежки години. Самота. Преосмисляне.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Дъното не те убива. Те кове. Там се ражда истинският характер.</p>
        </div>
      </div>

      <!-- ITEM 10 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-12 lg:w-1/2 lg:ml-auto mb-12" data-side="right">
        <div class="absolute left-4 lg:left-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">Норвегия</span>
        <h3 class="font-display text-xl font-bold mt-1">Изгнанието като школа</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Доброволна изолация. Месеци без приятелства, романтика, семейство. Четене. Медитация. Нов вътрешен фундамент.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Понякога трябва да изчезнеш, за да се появиш отново.</p>
        </div>
      </div>

      <!-- ITEM 11 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-0 lg:w-1/2 lg:pr-12 mb-12" data-side="left">
        <div class="absolute left-4 lg:left-auto lg:right-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400 bg-dark-900 z-10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">Завръщането</span>
        <h3 class="font-display text-xl font-bold mt-1">Дигитално възраждане</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Маркетинг умения. Клиенти по целия свят. Нови структури. Възстановена репутация. Нова финансова основа.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Уменията остават. Можеш да започнеш отново — по-мъдър.</p>
        </div>
      </div>

      <!-- ITEM 12 -->
      <div class="timeline-item opacity-0 translate-y-8 relative pl-16 lg:pl-12 lg:w-1/2 lg:ml-auto mb-12" data-side="right">
        <div class="absolute left-4 lg:left-[-8px] top-2 w-4 h-4 rounded-full border-2 border-gold-400/80 bg-gold-400/20 z-10 ring-4 ring-gold-400/10"></div>
        <span class="text-gold-400 text-xs tracking-[0.2em] uppercase font-bold">Днес</span>
        <h3 class="font-display text-xl font-bold mt-1 text-gold-400">CODE: ABUNDANCE™ — Системата</h3>
        <p class="text-white/50 text-sm mt-2 leading-relaxed">Собствена философия за успех, лидерство и растеж. Общност. Обучения в бизнес, финанси, личен бранд. Най-силният период. Мисия за глобално наследство.</p>
        <button class="lesson-toggle text-gold-400/70 hover:text-gold-400 text-xs tracking-wider uppercase mt-3 transition-colors">Научен урок ↓</button>
        <div class="lesson-content max-h-0 overflow-hidden transition-all duration-300">
          <p class="text-white/30 text-sm mt-2 italic border-l-2 border-gold-400/20 pl-3">Цялото ти минало е подготовка за момента, който идва.</p>
        </div>
      </div>
    </div>

    <!-- Closing statement -->
    <div class="text-center mt-16">
      <p class="text-white/40 text-lg leading-relaxed max-w-lg mx-auto italic font-display">
        Това не е разказ за успеха.<br />
        Това е разказ за това как успехът се гради — един провал след друг,<br />
        докато провалите станат стъпала.
      </p>
      <a href="#projects" class="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gold-400 text-dark-900 font-bold tracking-wider text-sm uppercase hover:bg-gold-300 transition-all">
        ВИЖ КАКВА СИСТЕМА ИЗГРАДИХ ОТ ВСИЧКО ТОВА
        <span>→</span>
      </a>
    </div>
  </div>
</section>
```

**Step 2: Add timeline animation CSS**

Append to `src/style.css`:

```css
/* Timeline scroll reveal */
.timeline-item {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.timeline-item.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Lesson expand */
.lesson-content.open {
  max-height: 200px;
}
```

**Step 3: Add timeline JS to main.ts**

Add these functions and call them inside `DOMContentLoaded`:

```ts
// --- Intersection Observer for scroll reveals ---
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".timeline-item, .reveal").forEach((el) => {
    observer.observe(el);
  });
}

// --- Collapsible lesson toggles ---
function initLessonToggles() {
  document.querySelectorAll(".lesson-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling as HTMLElement;
      if (!content) return;
      const isOpen = content.classList.toggle("open");
      btn.textContent = isOpen ? "Скрий урока ↑" : "Научен урок ↓";
    });
  });
}
```

**Step 4: Verify in browser**

Expected: Timeline alternates left/right on desktop, single-column with left line on mobile. Items fade in on scroll. Clicking "Научен урок ↓" smoothly expands lesson text. Last item (ДНЕС) has gold accent dot.

**Step 5: Commit**

```bash
git add index.html src/main.ts src/style.css
git commit -m "feat: add interactive timeline journey section with 12 milestones"
```

---

## Task 5: Projects Section

**Files:**
- Modify: `index.html` (replace projects placeholder)
- Modify: `src/style.css` (card hover effects)

**Step 1: Build projects HTML**

In `index.html`, replace `<section id="projects"></section>` with:

```html
<section id="projects" class="py-24 lg:py-32 bg-dark-800/50">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <!-- Section header -->
    <div class="text-center mb-16">
      <span class="text-gold-400 text-xs tracking-[0.3em] uppercase">Това, което градя</span>
      <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
        ТРИ ПИЛОНА. ЕДНА МИСИЯ.
      </h2>
      <p class="mt-4 text-white/50 text-lg max-w-xl mx-auto">
        Всяка инициатива служи на една цел: да помогна на хората да трансформират потенциала си в реализация.
      </p>
    </div>

    <!-- Cards grid -->
    <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
      <!-- Card 1: Code: Abundance -->
      <div class="reveal opacity-0 translate-y-8 project-card group bg-dark-700/50 border border-white/5 p-8 lg:p-10 hover:border-gold-400/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-12px_rgba(212,175,55,0.15)]">
        <span class="text-xs tracking-[0.2em] uppercase text-blue-400/80">Образователна екосистема</span>
        <h3 class="font-display text-2xl font-bold mt-3">CODE: ABUNDANCE™</h3>
        <p class="text-gold-400/80 text-sm mt-1">3 Labs → 90 Дни → Нова Реалност</p>
        <p class="text-white/40 text-sm mt-4 leading-relaxed">
          Най-иновативната обучителна система в България за личностно развитие, предприемачество и стратегически успех.
        </p>
        <ul class="text-white/30 text-sm mt-4 space-y-1">
          <li>• Wealth Lab — Финанси, бизнес, инвестиции</li>
          <li>• Health Lab — Енергия, дълголетие</li>
          <li>• Prosperity Lab — Манталитет, лидерство</li>
          <li>• Relationship Lab — Взаимоотношения</li>
        </ul>
        <div class="text-white/20 text-xs mt-6 flex gap-4">
          <span>12 Нива</span><span>•</span><span>Общност</span><span>•</span><span>Лични планове</span>
        </div>
        <a href="#" class="inline-flex items-center gap-2 mt-6 text-gold-400 text-sm font-bold tracking-wider uppercase group-hover:gap-3 transition-all">
          ВЛЕЗ В CODE: ABUNDANCE™ <span>→</span>
        </a>
      </div>

      <!-- Card 2: Creator Partnership -->
      <div class="reveal opacity-0 translate-y-8 project-card group bg-dark-700/50 border border-white/5 p-8 lg:p-10 hover:border-gold-400/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-12px_rgba(212,175,55,0.15)]">
        <span class="text-xs tracking-[0.2em] uppercase text-purple-400/80">Партньорски модел</span>
        <h3 class="font-display text-2xl font-bold mt-3">CREATOR PARTNERSHIP</h3>
        <p class="text-gold-400/80 text-sm mt-1">От 0 до 7 цифри</p>
        <p class="text-white/40 text-sm mt-4 leading-relaxed">
          Пълен правен и стратегически фреймуорк за партньорства между Growth Operators и Content Creators.
        </p>
        <ul class="text-white/30 text-sm mt-4 space-y-1">
          <li>• Професионална инфраструктура</li>
          <li>• Справедливо разпределение</li>
          <li>• Ясни рамки за партньорство</li>
          <li>• Защита за двете страни</li>
        </ul>
        <div class="text-white/20 text-xs mt-6 flex gap-4">
          <span>3 Модела</span><span>•</span><span>15 Раздела</span><span>•</span><span>Инвест. стандарт</span>
        </div>
        <a href="#" class="inline-flex items-center gap-2 mt-6 text-gold-400 text-sm font-bold tracking-wider uppercase group-hover:gap-3 transition-all">
          ИЗТЕГЛИ ФРЕЙМУОРКА <span>→</span>
        </a>
      </div>

      <!-- Card 3: Strategic Mentoring -->
      <div class="reveal opacity-0 translate-y-8 project-card group bg-dark-700/50 border border-white/5 p-8 lg:p-10 hover:border-gold-400/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-12px_rgba(212,175,55,0.15)]">
        <span class="text-xs tracking-[0.2em] uppercase text-amber-400/80">Ексклузивна достъпност</span>
        <h3 class="font-display text-2xl font-bold mt-3">STRATEGIC MENTORING</h3>
        <p class="text-gold-400/80 text-sm mt-1">Рамо до рамо за следващото ниво</p>
        <p class="text-white/40 text-sm mt-4 leading-relaxed">
          Не е за всеки. Работя с ограничен брой хора годишно — предприемачи, лидери и криейтъри.
        </p>
        <ul class="text-white/30 text-sm mt-4 space-y-1">
          <li>• Имат резултати, но усещат тавана</li>
          <li>• Търсят системи, не мотивация</li>
          <li>• Готови за трансформация</li>
          <li>• 1:1 | Done-With-You | Done-For-You</li>
        </ul>
        <div class="text-white/20 text-xs mt-6 flex gap-4">
          <span>Лимитирани</span><span>•</span><span>С одобрение</span><span>•</span><span>ROI гаранция</span>
        </div>
        <a href="#" class="inline-flex items-center gap-2 mt-6 text-gold-400 text-sm font-bold tracking-wider uppercase group-hover:gap-3 transition-all">
          КАНДИДАТСТВАЙ ЗА РАЗГОВОР <span>→</span>
        </a>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Verify**

Expected: 3 cards in a row on desktop, stacked on mobile. Hovering lifts card, adds gold shadow, arrow nudges right. Cards fade in on scroll.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add projects section with 3 premium hover cards"
```

---

## Task 6: Philosophy Section

**Files:**
- Modify: `index.html` (replace philosophy placeholder)
- Modify: `src/style.css` (glow hover effect)

**Step 1: Build philosophy HTML**

In `index.html`, replace `<section id="philosophy"></section>` with:

```html
<section id="philosophy" class="py-24 lg:py-32">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <!-- Section header -->
    <div class="text-center mb-16">
      <span class="text-gold-400 text-xs tracking-[0.3em] uppercase">Принципи, не теории</span>
      <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">ГОТОВ ЛИ СИ ЗА ИСТИНАТА?</h2>
    </div>

    <!-- 4 Pillars -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="reveal opacity-0 translate-y-8 pillar-card bg-dark-800/50 border border-white/5 p-8 text-center hover:border-gold-400/20 transition-all duration-500 hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.1)]">
        <div class="text-4xl mb-4">⚔️</div>
        <h3 class="font-display text-lg font-bold">ДИСЦИПЛИНАТА Е СВОБОДА</h3>
        <p class="text-white/40 text-sm mt-3 leading-relaxed">Мотивацията е измамница. Идва и си отива. Дисциплината остава. Системите работят, когато ти не искаш. Свободата не е липса на структура — свободата е структура, която те носи.</p>
      </div>

      <div class="reveal opacity-0 translate-y-8 pillar-card bg-dark-800/50 border border-white/5 p-8 text-center hover:border-gold-400/20 transition-all duration-500 hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.1)]">
        <div class="text-4xl mb-4">🔥</div>
        <h3 class="font-display text-lg font-bold">ХАОСЪТ Е ВРАГ</h3>
        <p class="text-white/40 text-sm mt-3 leading-relaxed">Къде изтичат твоите фокус, енергия, време и пари? Ако нямаш точен план, хаосът ще превземе навиците ти. А без навици — няма резултати. Без резултати — няма увереност.</p>
      </div>

      <div class="reveal opacity-0 translate-y-8 pillar-card bg-dark-800/50 border border-white/5 p-8 text-center hover:border-gold-400/20 transition-all duration-500 hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.1)]">
        <div class="text-4xl mb-4">🧬</div>
        <h3 class="font-display text-lg font-bold">ПОЗНАЙ СЕБЕ СИ — ИЛИ ЗАГУБИ</h3>
        <p class="text-white/40 text-sm mt-3 leading-relaxed">Human Design не е езотерика. Е инструмент за себепознание, съчетан с модерен бизнес. Когато работиш ПРОТИВ природата си, енергията ти изтича. Когато работиш СЪС себе си, ставаш неудържим.</p>
      </div>

      <div class="reveal opacity-0 translate-y-8 pillar-card bg-dark-800/50 border border-white/5 p-8 text-center hover:border-gold-400/20 transition-all duration-500 hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.1)]">
        <div class="text-4xl mb-4">🏗️</div>
        <h3 class="font-display text-lg font-bold">СИСТЕМИТЕ МАЩАБИРАТ</h3>
        <p class="text-white/40 text-sm mt-3 leading-relaxed">Ти не си мързелив. Просто си объркан. Между настоящето и бъдещето ти стои невидим мост. Повечето хора не го намират, защото търсят на грешното място. Намери системата.</p>
      </div>
    </div>

    <!-- Quote block -->
    <div class="mt-20 text-center">
      <blockquote class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
        "Не ти липсва талант.<br />
        Не ти липсва амбиция.<br />
        Липсва ти <span class="text-gold-400">СТРУКТУРА</span>."
      </blockquote>
    </div>

    <!-- Closing -->
    <div class="mt-16 text-center">
      <p class="text-white/40 text-base max-w-lg mx-auto leading-relaxed">
        Това не са философии, прочетени в книги. Това са уроците, платени с:
      </p>
      <ul class="text-white/50 text-base mt-4 space-y-1">
        <li>→ Милиони загубени и изкарани</li>
        <li>→ Години проби и грешки</li>
        <li>→ Лични провали и триумфи</li>
      </ul>
      <p class="text-white/40 text-base mt-4">Сега ги предавам на теб — организирани, тествани, готови.</p>
    </div>
  </div>
</section>
```

**Step 2: Verify**

Expected: 4-column grid on desktop, 2x2 on tablet, single on mobile. Hover adds gold glow. Large dramatic quote with "СТРУКТУРА" in gold.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add philosophy section with 4 pillars + dramatic quote"
```

---

## Task 7: Social Proof Section

**Files:**
- Modify: `index.html` (replace proof placeholder)
- Modify: `src/main.ts` (count-up animation + testimonial carousel)

**Step 1: Build social proof HTML**

In `index.html`, replace `<section id="proof"></section>` with:

```html
<section id="proof" class="py-24 lg:py-32 bg-dark-800/50">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <!-- Section header -->
    <div class="text-center mb-16">
      <span class="text-gold-400 text-xs tracking-[0.3em] uppercase">Резултатите говорят</span>
      <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">РЕАЛНИ ХОРА. РЕАЛНИ ТРАНСФОРМАЦИИ.</h2>
    </div>

    <!-- Stats grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      <div class="reveal opacity-0 translate-y-8 text-center">
        <div class="font-display text-5xl lg:text-6xl font-bold text-gold-400">
          <span class="count-up" data-target="9">0</span>+
        </div>
        <div class="text-sm tracking-widest uppercase text-white/40 mt-2">Години опит</div>
      </div>
      <div class="reveal opacity-0 translate-y-8 text-center">
        <div class="font-display text-5xl lg:text-6xl font-bold text-gold-400">
          <span class="count-up" data-target="120">0</span>+
        </div>
        <div class="text-sm tracking-widest uppercase text-white/40 mt-2">Члена екип изграждани</div>
      </div>
      <div class="reveal opacity-0 translate-y-8 text-center">
        <div class="font-display text-5xl lg:text-6xl font-bold text-gold-400">
          <span class="count-up" data-target="7">0</span>+
        </div>
        <div class="text-sm tracking-widest uppercase text-white/40 mt-2">Бизнеса създадени</div>
      </div>
      <div class="reveal opacity-0 translate-y-8 text-center">
        <div class="font-display text-5xl lg:text-6xl font-bold text-white/60">—</div>
        <div class="text-sm tracking-widest uppercase text-white/40 mt-2">Млн. оборот генериран</div>
      </div>
    </div>

    <!-- Testimonials carousel -->
    <div class="relative max-w-3xl mx-auto">
      <div id="testimonial-carousel" class="overflow-hidden">
        <div id="testimonial-track" class="flex transition-transform duration-500">
          <!-- Placeholder testimonials — replace with real ones -->
          <div class="w-full flex-shrink-0 text-center px-8">
            <p class="font-display text-xl lg:text-2xl italic text-white/70 leading-relaxed">"Placeholder — тук ще бъде реален отзив от студент/клиент на Code: Abundance с конкретен резултат."</p>
            <p class="mt-4 text-gold-400 text-sm tracking-wider uppercase">Име — Град</p>
          </div>
          <div class="w-full flex-shrink-0 text-center px-8">
            <p class="font-display text-xl lg:text-2xl italic text-white/70 leading-relaxed">"Placeholder — тук ще бъде реален отзив от бизнес клиент с конкретен растеж."</p>
            <p class="mt-4 text-gold-400 text-sm tracking-wider uppercase">Име — Позиция</p>
          </div>
          <div class="w-full flex-shrink-0 text-center px-8">
            <p class="font-display text-xl lg:text-2xl italic text-white/70 leading-relaxed">"Placeholder — тук ще бъде реален отзив от партньор/криейтър за партньорството."</p>
            <p class="mt-4 text-gold-400 text-sm tracking-wider uppercase">Име — Позиция</p>
          </div>
        </div>
      </div>
      <!-- Dots -->
      <div id="testimonial-dots" class="flex justify-center gap-2 mt-8">
        <button class="w-2 h-2 rounded-full bg-gold-400 testimonial-dot" data-index="0"></button>
        <button class="w-2 h-2 rounded-full bg-white/20 testimonial-dot" data-index="1"></button>
        <button class="w-2 h-2 rounded-full bg-white/20 testimonial-dot" data-index="2"></button>
      </div>
    </div>

    <!-- Media bar placeholder -->
    <div class="mt-16 text-center">
      <p class="text-white/20 text-xs tracking-[0.3em] uppercase">Както се говори в:</p>
      <div class="flex justify-center gap-10 mt-4 opacity-20">
        <span class="text-white/40 text-sm">[Лого 1]</span>
        <span class="text-white/40 text-sm">[Лого 2]</span>
        <span class="text-white/40 text-sm">[Лого 3]</span>
        <span class="text-white/40 text-sm">[Лого 4]</span>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add count-up + carousel JS**

Add to `src/main.ts`:

```ts
// --- Count-up animation ---
function initCountUp() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || "0", 10);
          const duration = 2000;
          const start = performance.now();

          function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            el.textContent = Math.floor(eased * target).toString();
            if (progress < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".count-up").forEach((el) => observer.observe(el));
}

// --- Testimonial carousel ---
function initTestimonialCarousel() {
  const track = document.getElementById("testimonial-track");
  const dots = document.querySelectorAll(".testimonial-dot");
  if (!track || dots.length === 0) return;

  let current = 0;
  const total = dots.length;

  function goTo(index: number) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-gold-400", i === current);
      dot.classList.toggle("bg-white/20", i !== current);
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(parseInt((dot as HTMLElement).dataset.index || "0", 10));
    });
  });

  // Auto-advance every 5 seconds
  setInterval(() => goTo((current + 1) % total), 5000);
}
```

Call both `initCountUp()` and `initTestimonialCarousel()` inside `DOMContentLoaded`.

**Step 3: Verify**

Expected: 4 stats with count-up animation on scroll. Testimonial carousel auto-advances with dot navigation. Media bar shows placeholders.

**Step 4: Commit**

```bash
git add index.html src/main.ts
git commit -m "feat: add social proof section with count-up stats + testimonial carousel"
```

---

## Task 8: Final CTA Section

**Files:**
- Modify: `index.html` (replace cta placeholder)
- Modify: `src/style.css` (gradient animation)

**Step 1: Build final CTA HTML**

In `index.html`, replace `<section id="cta"></section>` with:

```html
<section id="cta" class="py-24 lg:py-32 relative overflow-hidden">
  <!-- Animated gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 cta-gradient"></div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)]"></div>

  <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
    <h2 class="reveal opacity-0 translate-y-8 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
      ЛИПСАТА Е ИЗБОР.<br />
      <span class="text-gold-400">ИЗОБИЛИЕТО — СЪЩО.</span>
    </h2>

    <div class="reveal opacity-0 translate-y-8 mt-8 text-white/50 text-lg max-w-xl mx-auto leading-relaxed space-y-4">
      <p>Вече видя пътя. Видя системата. Видя философията.</p>
      <p>Сега има два пътя:</p>
      <ol class="text-left max-w-md mx-auto space-y-2">
        <li class="text-white/40">1. Да затвориш тази страница и да продължиш както преди</li>
        <li class="text-white/70">2. Да откриеш дали CODE: ABUNDANCE™ е за теб</li>
      </ol>
      <p class="text-white/30 italic">Първият е безопасен. Вторият води някъде.</p>
    </div>

    <!-- Primary CTA -->
    <div class="reveal opacity-0 translate-y-8 mt-10">
      <a href="#" class="magnetic-btn inline-flex items-center gap-3 px-10 py-5 bg-gold-400 text-dark-900 font-bold tracking-wider text-base uppercase hover:bg-gold-300 transition-all hover:scale-105 animate-pulse-subtle">
        НАПРАВИ БЕЗПЛАТНАТА СИ ДИАГНОСТИКА СЕГА
      </a>
    </div>

    <!-- Secondary CTA -->
    <div class="reveal opacity-0 translate-y-8 mt-6">
      <a href="#" class="text-white/40 hover:text-gold-400 transition-colors text-sm tracking-wider underline underline-offset-4 decoration-white/10">
        Или запази час за стратегическа сесия →
      </a>
    </div>

    <!-- Urgency -->
    <div class="reveal opacity-0 translate-y-8 mt-8">
      <span class="text-gold-400/60 text-sm tracking-wider">⚡ Лимитирани места за този месец</span>
    </div>
  </div>
</section>
```

**Step 2: Verify**

Expected: Dark dramatic section with large bold headline. Gold accent on second line. Two CTA options. Urgency line at bottom.

**Step 3: Commit**

```bash
git add index.html src/style.css
git commit -m "feat: add final CTA conversion section"
```

---

## Task 9: Footer

**Files:**
- Modify: `index.html` (replace footer placeholder)

**Step 1: Build footer HTML**

In `index.html`, replace `<footer id="footer"></footer>` with:

```html
<footer id="footer" class="border-t border-white/5">
  <!-- Newsletter bar -->
  <div class="bg-dark-800/50 py-12">
    <div class="max-w-2xl mx-auto px-6 lg:px-8 text-center">
      <h3 class="font-display text-2xl font-bold">Получавай инсайти директно</h3>
      <p class="text-white/40 text-sm mt-2">Без спам. Само стойност. Когато имам нещо важно да кажа.</p>
      <form class="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="return false;">
        <input
          type="email"
          placeholder="Твоят имейл"
          class="flex-1 px-4 py-3 bg-dark-700 border border-white/10 text-white placeholder-white/30 text-sm focus:border-gold-400/50 focus:outline-none transition-colors"
        />
        <button type="submit" class="px-6 py-3 bg-gold-400 text-dark-900 font-bold text-sm tracking-wider uppercase hover:bg-gold-300 transition-colors">
          ЗАПИСВАМ СЕ
        </button>
      </form>
    </div>
  </div>

  <!-- Main footer grid -->
  <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <!-- Col 1 -->
      <div>
        <h4 class="font-display text-lg font-bold mb-4">За мен</h4>
        <ul class="space-y-2 text-white/40 text-sm">
          <li>Sean Isa</li>
          <li>Основател</li>
          <li>Предприемач</li>
          <li>Ментор</li>
        </ul>
      </div>
      <!-- Col 2 -->
      <div>
        <h4 class="font-display text-lg font-bold mb-4">Проекти</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="text-white/40 hover:text-gold-400 transition-colors">Code: Abundance™</a></li>
          <li><a href="#" class="text-white/40 hover:text-gold-400 transition-colors">Creator Partnership</a></li>
          <li><a href="#" class="text-white/40 hover:text-gold-400 transition-colors">1:1 Mentoring</a></li>
        </ul>
      </div>
      <!-- Col 3 -->
      <div>
        <h4 class="font-display text-lg font-bold mb-4">Ресурси</h4>
        <ul class="space-y-2 text-sm">
          <li><span class="text-white/20">Блог (очаквай)</span></li>
          <li><span class="text-white/20">Подкаст</span></li>
          <li><span class="text-white/20">FAQ</span></li>
        </ul>
      </div>
      <!-- Col 4 -->
      <div>
        <h4 class="font-display text-lg font-bold mb-4">Контакт</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="text-white/40 hover:text-gold-400 transition-colors">Instagram</a></li>
          <li><a href="#" class="text-white/40 hover:text-gold-400 transition-colors">TikTok</a></li>
          <li><a href="#" class="text-white/40 hover:text-gold-400 transition-colors">YouTube</a></li>
          <li><a href="#" class="text-white/40 hover:text-gold-400 transition-colors">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Bottom bar -->
  <div class="border-t border-white/5 py-6">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/20 text-xs">
      <span>&copy; 2024 Sean Isa. Всички права запазени.</span>
      <div class="flex gap-6">
        <a href="#" class="hover:text-white/40 transition-colors">Политика за поверителност</a>
        <a href="#" class="hover:text-white/40 transition-colors">Условия за ползване</a>
      </div>
    </div>
  </div>
</footer>
```

**Step 2: Verify**

Expected: Newsletter signup bar, 4-column footer grid, bottom bar with copyright and links. All text in Bulgarian.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add footer with newsletter signup + 4-column grid"
```

---

## Task 10: Magnetic Button Effect + Final Animation Polish

**Files:**
- Modify: `src/main.ts` (magnetic button, ensure all `.reveal` elements are observed)
- Modify: `src/style.css` (final polish)

**Step 1: Add magnetic button effect**

Add to `src/main.ts`:

```ts
// --- Magnetic button effect ---
function initMagneticButtons() {
  document.querySelectorAll(".magnetic-btn").forEach((btn) => {
    const el = btn as HTMLElement;

    el.addEventListener("mousemove", (e: Event) => {
      const event = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}
```

Call `initMagneticButtons()` in `DOMContentLoaded`.

**Step 2: Ensure scroll reveal covers all `.reveal` elements**

In `initScrollReveal()`, the selector `.timeline-item, .reveal` already covers both. Verify that all `reveal` classes in sections 5-9 are picked up.

**Step 3: Add reveal transition CSS**

Append to `src/style.css`:

```css
/* Generic reveal animation */
.reveal {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Smooth scroll globally */
html {
  scroll-behavior: smooth;
}
```

**Step 4: Verify in browser**

Expected: All sections animate in on scroll. Magnetic buttons follow cursor slightly. Smooth scrolling on all anchor links. Progress bar at top fills as you scroll.

**Step 5: Commit**

```bash
git add src/main.ts src/style.css
git commit -m "feat: add magnetic buttons + global scroll reveal polish"
```

---

## Task 11: Responsive Testing + Mobile Polish

**Files:**
- Modify: `src/style.css` (any mobile fixes needed)
- Possibly: `index.html` (minor responsive tweaks)

**Step 1: Test all breakpoints**

Open browser dev tools and test at:
- `375px` (mobile)
- `640px` (tablet)
- `1024px` (desktop)
- `1440px+` (large)

**Step 2: Fix any layout issues**

Common things to check:
- Hero headline font size on mobile (should be ~text-3xl minimum)
- Timeline single-column on mobile
- Project cards stacked on mobile
- Philosophy grid: 1-column on mobile, 2-col on tablet
- Footer grid: 2-column on mobile
- Mobile menu works correctly
- Social proof bar 2x2 on mobile

**Step 3: Verify scroll interactions on mobile**

- Touch scroll triggers animations
- Mobile menu closes on link tap
- No horizontal overflow anywhere

**Step 4: Commit**

```bash
git add -A
git commit -m "fix: responsive layout polish for all breakpoints"
```

---

## Task 12: Production Build + Performance Check

**Files:**
- No new files

**Step 1: Build for production**

```bash
npm run build
```

Expected: `dist/` folder generated with minified HTML, CSS, JS. No errors.

**Step 2: Preview production build**

```bash
npm run preview
```

Open in browser. Verify all sections render, animations work, no console errors.

**Step 3: Check bundle size**

After build, check the output sizes. Target:
- HTML: < 30KB
- CSS: < 15KB
- JS: < 10KB
- Total: < 55KB (before images)

**Step 4: Lighthouse audit**

Run Lighthouse in Chrome DevTools on the preview URL. Target:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

**Step 5: Fix any Lighthouse issues**

Common fixes:
- Add `alt` text to any images
- Ensure sufficient color contrast (gold on dark)
- Add `aria-label` to buttons without text
- Ensure `<html lang="bg">` is set (already done)

**Step 6: Commit**

```bash
git add -A
git commit -m "chore: verify production build passes Lighthouse > 90"
```

---

## Summary

| Task | What | Estimated Effort |
|------|------|-----------------|
| 1 | Project scaffolding (Vite + Tailwind) | Foundation |
| 2 | Navigation (fixed, glassmorphism, mobile) | Section |
| 3 | Hero (full viewport, staggered animation, stats bar) | Section |
| 4 | Timeline (12 items, scroll reveal, collapsible lessons) | Section (largest) |
| 5 | Projects (3 hover cards) | Section |
| 6 | Philosophy (4 pillars + quote) | Section |
| 7 | Social Proof (count-up, carousel, media bar) | Section |
| 8 | Final CTA (dramatic, urgency) | Section |
| 9 | Footer (newsletter, 4-col grid) | Section |
| 10 | Magnetic buttons + scroll reveal polish | Interaction |
| 11 | Responsive testing + mobile fixes | QA |
| 12 | Production build + Lighthouse audit | QA |

**Total: 12 tasks. All Bulgarian copy included inline. All placeholder links use `#` until real URLs are provided.**
