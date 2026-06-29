import "./style.css";

const english: Record<string, string> = {
  "nav.understanding": "Understanding",
  "nav.proof": "Proof",
  "nav.dashboard": "Operating System",
  "nav.plan": "Plan",
  "hero.kicker": "Private Executive Operations Proposal",
  "hero.title": "This is not a CV. This is a proposal for how I would take over the daily operations around you - business and personal.",
  "hero.subtitle": "After studying the way you work, I built a structure for reducing your daily load by organizing the processes around your business and personal commitments.",
  "hero.cta": "View the proposal ->",
  "understanding.kicker": "How I understand the way you work",
  "understanding.title": "You do not need another person waiting for instructions.",
  "understanding.body": "You need someone who holds context, moves the details, and brings back only the decisions that truly require your judgment.",
  "understanding.speed.title": "Speed",
  "understanding.speed.body": "Fast response without rushed decisions. Clarity first, then movement.",
  "understanding.brain.title": "Second brain",
  "understanding.brain.body": "Context, documents, contacts, and next steps live in a system, not scattered chats.",
  "understanding.initiative.title": "Initiative",
  "understanding.initiative.body": "If a problem can be solved within my authority, I move it forward.",
  "understanding.discretion.title": "Discretion",
  "understanding.discretion.body": "Access, communication, and personal details are treated as operational risk.",
  "understanding.international.title": "International coordination",
  "understanding.international.body": "Travel, vendors, banks, agents, and local rules are synchronized in advance.",
  "understanding.communication.title": "Clear communication",
  "understanding.communication.body": "Short status, recommendation, cost, deadline, and next step.",
  "before.kicker": "Before / After",
  "before.title": "The difference is when the problem reaches you.",
  "before.today": "Today",
  "before.with": "With me",
  "before.property.today.title": "Properties react to randomness.",
  "before.property.today.body": "A property issue appears by chance and reaches you only when it has already become urgent.",
  "before.property.with.title": "You receive one message after everything is already moving.",
  "before.property.with.body": "The tenant is updated, the technician is confirmed, the risk is checked, and the next decision is clear.",
  "before.cars": "<strong>Cars:</strong> service, insurance, tires, and documents are tracked before they interrupt the day.",
  "before.travel": "<strong>Travel:</strong> flights, transport, hotel, and practically critical details are ready before the question arrives.",
  "before.vendors": "<strong>Vendors:</strong> options arrive comparable, with a recommendation, deadline, and real reason.",
  "process.kicker": "How I make decisions",
  "process.title": "Every task moves through the same disciplined path.",
  "process.step1": "Receive the task",
  "process.step2": "Break down the problem",
  "process.step3": "Research",
  "process.step4": "Compare options",
  "process.step5": "Choose the recommended solution",
  "process.step6": "Execute",
  "process.step7": "Track",
  "process.step8": "Report",
  "process.step9": "Close the task",
  "proof.kicker": "Proof of Work",
  "proof.title": "The work should look like this by the time it reaches you.",
  "proof.case1.label": "Scenario 1",
  "proof.case1.title": "Property management",
  "proof.case1.situation": "A tenant in a Sofia property reports an interruption in the heating system. The owner has no visibility into the insurance status.",
  "proof.case1.action": "Tenant contacted within hours. A vetted technical team organizes an inspection for the next day. A parallel check reveals that insurance expires in 18 days. Three renewal offers are requested.",
  "proof.case1.update": "Technician confirmed for tomorrow, 10-12, access organized. Additional note: insurance expires in 18 days - 3 offers already requested. Expected diagnostic cost EUR 80-120. I will confirm the insurance offer by Friday unless you prefer another approach.",
  "proof.case1.result": "The problem is solved before the tenant becomes frustrated, and a second, larger risk is caught before it becomes urgent.",
  "proof.case2.label": "Scenario 2",
  "proof.case2.title": "International travel",
  "proof.case2.situation": "An upcoming trip with business meetings and limited personal time, with a short planning window.",
  "proof.case2.action": "Three airlines compared by convenience, timing, and real cost. Transport selected based on the schedule. Three hotels shortlisted, each with a specific reason. Visa, currency, connectivity, and local transport checked.",
  "proof.case2.update": "I recommend flight X because it has the better arrival time, and hotel Y because it is closest to the meetings. A chauffeur is organized for the full stay. Practical details are covered. I will confirm the booking by tomorrow unless you want a change.",
  "proof.case2.result": "Zero mental energy invested by the owner. Only one decision to approve.",
  "proof.vendor.title": "Vendor sourcing",
  "proof.vendor.body": "Need for a private medical appointment abroad. Four clinics are gathered and checked for language, availability, discretion, and follow-up. The recommendation includes one strongest option and one backup.",
  "proof.cars.title": "Car coordination",
  "proof.cars.body": "Vehicle preparation before a trip: service slot, insurance document, detailing, and backup transport without disturbing the schedule.",
  "proof.finance.title": "Bookkeeping workflow",
  "proof.finance.body": "A weekly folder for invoices, missing documents, and payments for approval. The accountant receives an organized package, and you see only the exceptions.",
  "comms.kicker": "Executive Communication",
  "comms.title": "I do not send a problem without a next action.",
  "comms.reactive.label": "Reactive assistant",
  "comms.reactive.text": "\"Heating problem.\"",
  "comms.mine.label": "Me",
  "comms.mine.text": "\"Technician confirmed for tomorrow 10-12, tenant and building owner notified. Confirmation by end of day?\"",
  "framework.kicker": "Decision Framework",
  "framework.title": "The rules I would use to protect your focus.",
  "framework.rule1": "I do not send a problem without a proposal.",
  "framework.rule2": "I do not leave open tasks without an owner.",
  "framework.rule3": "Every task has a deadline and a next step.",
  "framework.rule4": "If I can solve the problem within my authority, I do it.",
  "dashboard.kicker": "Executive Dashboard",
  "dashboard.title": "One working surface for the day.",
  "dashboard.body": "The goal is not to see more information. The goal is to see the right information in time.",
  "dashboard.today": "Today",
  "dashboard.priorities": "Priorities",
  "dashboard.priority1": "Property: technician confirmed",
  "dashboard.priority2": "Flight: awaiting final approval",
  "dashboard.priority3": "Finance: 2 documents missing",
  "dashboard.meetings": "Meetings",
  "dashboard.meeting1": "12:00 - investor call",
  "dashboard.meeting2": "16:30 - legal review",
  "dashboard.assets": "Properties / Cars",
  "dashboard.asset1": "Sofia: heating inspection",
  "dashboard.asset2": "Car A: insurance renewal",
  "dashboard.flow": "Waiting / Blocked / Completed",
  "dashboard.flow1": "Waiting: 4",
  "dashboard.flow2": "Blocked: 1",
  "dashboard.flow3": "Completed today: 7",
  "report.kicker": "Weekly Executive Report",
  "report.title": "At the end of the week there is a clear record, not chat chaos.",
  "report.completed": "Completed",
  "report.completed.body": "Travel confirmed, property serviced, bookkeeping package sent.",
  "report.progress": "In Progress",
  "report.progress.body": "Insurance offers, vendor choice, CRM cleanup.",
  "report.waiting": "Waiting",
  "report.waiting.body": "One signature, two replies from external partners.",
  "report.risks": "Risks",
  "report.risks.body": "Insurance expires soon. One vendor is slowing the timeline.",
  "report.recommendations": "Recommendations",
  "report.recommendations.body": "Move recurring admin into a weekly package with one approval window.",
  "infra.kicker": "Digital Infrastructure",
  "infra.title": "When technology is needed, I can organize it as part of the operating system.",
  "infra.body": "This is not about doing everything. It is about connecting the right tools, people, and processes so the system works without constant pushing.",
  "infra.item1": "new website",
  "infra.item2": "AI chat / voice agent",
  "infra.item3": "living knowledge base",
  "infra.item4": "CRM / lead gen",
  "infra.item5": "email marketing",
  "infra.item6": "social presence",
  "infra.item7": "marketplace optimization",
  "infra.item8": "automations",
  "infra.close": "You do not hire a team of five. You receive added value equal to a software team.",
  "network.kicker": "My network",
  "network.title": "Not just contacts. Social capital.",
  "network.body": "Personal relationships across 20 countries: travel optimization, private deals, access to closed circles, legitimate banking relationships, and local agents in different jurisdictions.",
  "setup.kicker": "Dedicated Work Setup",
  "setup.title": "A separate line for this work.",
  "setup.body": "A dedicated mobile device used only for this role: structured availability, clear separation between personal and work life, and no sensitive messages through a personal line.",
  "principles.kicker": "Principles",
  "week.kicker": "First week",
  "week.title": "The first days are for visibility, order, and fast wins.",
  "week.day1.title": "Audit",
  "week.day1.body": "Which tasks, people, documents, and risks already exist.",
  "week.day2.title": "Organization",
  "week.day2.body": "Create a working system for tasks, access, and statuses.",
  "week.day3.title": "Priorities",
  "week.day3.body": "What is critical, what is waiting, and what can be delegated.",
  "week.day4.title": "Automation",
  "week.day4.body": "First processes that should not be repeated manually.",
  "week.day5.title": "Executive Report",
  "week.day5.body": "First weekly report with completed, waiting, risks, and recommendations.",
  "ninety.kicker": "First 90 days",
  "ninety.day30.label": "30 days",
  "ninety.day30.title": "Understanding",
  "ninety.day30.body": "Map people, assets, processes, rhythm, and preferences.",
  "ninety.day60.label": "60 days",
  "ninety.day60.title": "Build",
  "ninety.day60.body": "Operating system, recurring workflows, and cleaner communication.",
  "ninety.day90.label": "90 days",
  "ninety.day90.title": "Full operational autonomy",
  "ninety.day90.body": "Decisions move without pulling your attention into every detail.",
  "stories.kicker": "Personal stories",
  "stories.title": "The context that matters for this role.",
  "stories.business.title": "Systems and people",
  "stories.business.body": "Building communities and programs taught me that results come from clear structure, regular feedback, and personal responsibility.",
  "stories.sport.title": "Sports discipline",
  "stories.sport.body": "Hockey taught me to make decisions under pressure, communicate briefly, and act before the situation breaks down.",
  "stories.service.title": "Responsibility to the environment",
  "stories.service.body": "Working with people in different environments gave me respect for detail, discretion, and how one decision affects everyone around it.",
  "final.line": "I created this in summarized form and would be glad to talk."
};

const originalText = new Map<Element, string>();

function setLanguage(lang: "bg" | "en") {
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;

    if (!originalText.has(el)) {
      originalText.set(el, el.innerHTML);
    }

    el.innerHTML = lang === "en" && english[key] ? english[key] : originalText.get(el) || "";
  });

  document.querySelectorAll<HTMLButtonElement>("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  window.localStorage.setItem("proposalLanguage", lang);
}

function updateProgress() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  bar.style.width = `${progress}%`;
}

function initSmoothScroll() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initReveal() {
  const candidates = document.querySelectorAll(
    ".section-heading, .signal-grid, .comparison, .scenario-list, .timeline, .proof-case, .mini-cases, .message-pair, .rule-list, .dashboard-mockup, .report-mockup, .capability-line, .closing-line, .network-setup > div, .principle-strip, .week-plan, .ninety-grid, .story-grid"
  );

  candidates.forEach((element) => element.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  candidates.forEach((element) => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initReveal();
  updateProgress();

  const saved = window.localStorage.getItem("proposalLanguage");
  setLanguage(saved === "en" ? "en" : "bg");

  document.querySelectorAll<HTMLButtonElement>("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang === "en" ? "en" : "bg");
    });
  });
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
