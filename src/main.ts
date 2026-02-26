import "./style.css";

// ═══════════════════════════════════════════
// Scroll Progress Bar
// ═══════════════════════════════════════════
function updateProgress() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = `${progress}%`;
}

// ═══════════════════════════════════════════
// Nav — glassmorphism on scroll
// ═══════════════════════════════════════════
function updateNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  nav.classList.toggle("nav-scrolled", window.scrollY > 80);
}

// ═══════════════════════════════════════════
// Mobile Menu
// ═══════════════════════════════════════════
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

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
      menu.classList.add("opacity-0", "pointer-events-none");
      document.body.style.overflow = "";
    });
  });
}

// ═══════════════════════════════════════════
// Smooth Scroll for anchor links
// ═══════════════════════════════════════════
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

// ═══════════════════════════════════════════
// Hero — staggered entrance animation
// ═══════════════════════════════════════════
function initHeroAnimation() {
  const items = document.querySelectorAll(".hero-animate");
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, 300 + i * 180);
  });
}

// ═══════════════════════════════════════════
// Scroll Reveal — IntersectionObserver
// ═══════════════════════════════════════════
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
    { threshold: 0.12 }
  );

  document
    .querySelectorAll(".timeline-item, .reveal")
    .forEach((el) => observer.observe(el));
}

// ═══════════════════════════════════════════
// Timeline — collapsible lessons
// ═══════════════════════════════════════════
function initLessonToggles() {
  document.querySelectorAll(".lesson-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling as HTMLElement;
      if (!content) return;
      const isOpen = content.classList.toggle("open");
      btn.textContent = isOpen ? "Скрий урока \u2191" : "Научен урок \u2193";
    });
  });
}

// ═══════════════════════════════════════════
// Count-Up Animation
// ═══════════════════════════════════════════
function initCountUp() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target || "0", 10);
          const suffix = el.dataset.suffix || "";
          const duration = 2000;
          const start = performance.now();

          function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target).toString() + suffix;
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

// ═══════════════════════════════════════════
// Testimonial Carousel
// ═══════════════════════════════════════════
function initTestimonialCarousel() {
  const track = document.getElementById("testimonial-track");
  const dots = document.querySelectorAll(".testimonial-dot");
  if (!track || dots.length === 0) return;

  let current = 0;
  const total = dots.length;

  function goTo(index: number) {
    current = index;
    track!.style.transform = `translateX(-${current * 100}%)`;
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

  setInterval(() => goTo((current + 1) % total), 5000);
}

// ═══════════════════════════════════════════
// Magnetic Buttons
// ═══════════════════════════════════════════
function initMagneticButtons() {
  document.querySelectorAll(".magnetic-btn").forEach((btn) => {
    const el = btn as HTMLElement;

    el.addEventListener("mousemove", (e: Event) => {
      const event = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = "";
      setTimeout(() => (el.style.transition = ""), 400);
    });
  });
}

// ═══════════════════════════════════════════
// Init
// ═══════════════════════════════════════════
window.addEventListener("scroll", () => {
  updateProgress();
  updateNav();
});

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initSmoothScroll();
  initHeroAnimation();
  initScrollReveal();
  initLessonToggles();
  initCountUp();
  initTestimonialCarousel();
  initMagneticButtons();
});
