# Anvaya Automation — Studio Marketing Website

<p align="center">
  <strong>Quiet Luxury Frontend Design for AI Automation, Enterprise Web, Cloud & Digital Growth</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11.18-magenta?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Lenis_Scroll-Smooth-C9B99A?style=flat-square" alt="Lenis" />
  <img src="https://img.shields.io/badge/QA_Audit-152%20Checks%20Passed-brightgreen?style=flat-square" alt="QA Status" />
</p>

---

## ✦ Overview

**Anvaya Automation** is a modern technology studio delivering artificial intelligence workflows, high-performance web applications, mobile engineering, cloud infrastructure, SEO, and data-driven digital growth.

This repository hosts the complete frontend web application for Anvaya Automation, designed around a bespoke **"Quiet Luxury"** aesthetic: warm minimal tones, generous whitespace, weighted organic physics, and restrained typography.

---

## ✦ Design System ("Quiet Luxury")

The visual design language is strictly calibrated for calm confidence, precision, and architectural elegance:

### Color Palette
- **Background:** `#F4F2EE` (Warm Ivory Canvas)
- **Surface:** `#FBFAF8` (Soft Card Background)
- **Border:** `#E4E1DA` (Hairline Dividers)
- **Charcoal Ink:** `#161616` (Primary Typography)
- **Muted Gray:** `#6F6B63` (Subtext & Meta)
- **Champagne Accent:** `#C9B99A` (Highlights, Badges & Focal Tones)
- **Dark Inverted Sections:** `#121212` with warm ivory contrast (Footer & Night-mode modules)

### Typography
- **Headings & Body:** `Inter Tight` (weights 400, 500, 600, 700) with tracking `-0.02em` to `-0.03em`.
- **Editorial Accent:** `Instrument Serif Italic` applied to exactly *one* deliberate word per major section heading.
- **Labels & Numbers:** 12px uppercase with wide tracking (`0.14em`), formatted in architectural bracket style: `[ 01 / 05 ]`.

### Signature Components & Motion
- **CSS Pearl Sphere:** Pure CSS radial-gradient light sphere with responsive proportional sizing (`min(68vh, 62vw)`), persistent across the experience.
- **Hairline Orbit Rings:** Delicate, ultra-slow rotating celestial rings rendered via SVG and Framer Motion.
- **Floating Pill Navbar:** Auto-hiding floating navigation pill with zero full-width occlusion, intuitive top 90px mouse hover zone, keyboard `:focus-within` preservation, and mobile slide-in drawer.
- **Weighted Kinetic Physics:** Custom cubic bezier curves `[0.22, 1, 0.36, 1]` with heavy springs (stiffness 80, damping 20) and Lenis inertial smooth scrolling.
- **Responsive Geometry:** 28–40px card corner curvature, custom cursor with magnetic hover attraction, and interactive mouse-tracking pearl card glares.

---

## ✦ Routes & Architecture

The application is built with the **Next.js App Router** and includes 19 fully responsive pages:

### Core Pages
- `/` — **Home:** Pearl sphere hero, pinned services showcase, case study marquee, 4-step architectural methodology, latest insights preview, and conversion CTA.
- `/services` — **Services Directory:** Complete overview of all studio capabilities.
- `/projects` — **Work & Case Studies:** Filterable portfolio showcasing delivered client systems.
- `/blog` — **Insights:** Editorial perspectives on AI systems, software architecture, and growth.
- `/about` — **Studio Vision:** Manifesto, core engineering principles, leadership, and timeline.
- `/contact` — **Consultation Inquiry:** Responsive multi-step inquiry form with client-side Zod validation.

### Dedicated Service Slugs
- `/services/ai-automation` — Autonomous workflows, AI agents, chatbots & lead pipelines.
- `/services/web-applications` — High-speed full-stack web platforms and multi-tenant SaaS.
- `/services/mobile-development` — Cross-platform iOS & Android mobile applications.
- `/services/cloud-infrastructure` — DevOps automation, Kubernetes orchestration, and cloud reliability.
- `/services/seo` — Programmatic SEO, technical audits, and organic dominance.
- `/services/digital-marketing` — Performance marketing, paid acquisition, and growth analytics.

### Detailed Case Study Slugs
- `/projects/aura-health-ai-copilot`
- `/projects/finpulse-multi-tenant-saas`
- `/projects/nexus-logistics-customs-ocr`
- `/projects/omnistore-headless-commerce`
- `/projects/vanguard-cloud-devops`
- `/projects/urban-nest-seo-domination`

---

## ✦ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14** | React framework with App Router, SSR, SSG & Server Components |
| **React 18** | UI component architecture |
| **TypeScript** | Strict static type safety |
| **Tailwind CSS** | Utility-first design tokens and responsive layout system |
| **Framer Motion** | Declarative page transitions, masked text reveals & physics |
| **Lenis Scroll** | Inertial smooth scrolling engine |
| **Lucide React** | Clean, lightweight geometric vector icons |
| **Zod** | Schema validation for user inquiries and forms |

---

## ✦ Project Structure

```
anvaya-automation/
├── app/
│   ├── layout.tsx                # Root layout with fonts, smooth scroll & global providers
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global theme variables, animations & utility classes
│   ├── about/page.tsx            # About studio page
│   ├── contact/page.tsx          # Inquiry & consultation form
│   ├── services/                 # Services directory & dynamic [slug] routes
│   ├── projects/                 # Portfolio showcase & dynamic [slug] case studies
│   ├── blog/                     # Blog index & dynamic [slug] articles
│   └── not-found.tsx             # Custom branded 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Floating auto-hide pill navigation
│   │   └── Footer.tsx            # 12-column dark luxury footer with brand watermark
│   ├── ui/
│   │   ├── PearlSphere.tsx       # CSS radial-gradient signature pearl sphere
│   │   ├── FloatingCallPill.tsx  # Context-aware floating consultation button
│   │   ├── SmoothScroll.tsx      # Lenis smooth scrolling integration
│   │   ├── RevealText.tsx        # Masked line-by-line kinetic text reveals
│   │   └── FadeUp.tsx            # Viewport-triggered fade-and-lift motion component
│   └── home/                     # Home section modules (Services, Case Studies, Process, etc.)
├── data/                         # Typed data sources for services, case studies, blogs & team
├── qa-screenshots/               # Captured Chrome DevTools Protocol visual audit screenshots
├── scripts/                      # Automated headless Chrome CDP QA verification scripts
├── tailwind.config.ts            # Design system tokens, color scale & typography aliases
└── package.json                  # Dependencies and execution scripts
```

---

## ✦ Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yashprajapati1411/anvaya-automation-design.git
   cd anvaya-automation-design
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

---

## ✦ Quality Assurance & Browser Testing

This repository includes an automated Chrome DevTools Protocol (CDP) headless testing pipeline in [`scripts/qa-browser-audit-fast.mjs`](scripts/qa-browser-audit-fast.mjs).

The suite verifies **19 routes** across **8 responsive screen widths** (360px, 390px, 768px, 1024px, 1280px, 1366px, 1440px, and 1920px):

- **Horizontal Overflow Check:** `document.documentElement.scrollWidth <= innerWidth` across 100% of routes and viewports (0px overflow).
- **Typography Conformity:** Zero monospace font leaks; strict enforcement of Inter Tight and Instrument Serif Italic tokens.
- **Bounding-Box Overlap Detection:** Automated collision checks between sibling blocks, navigation, spheres, and headers.
- **Touch Accessibility:** All interactive elements and mobile nav toggles adhere to WCAG 2.1 minimum 44px tap targets.
- **Visual Auditing:** Clean, un-occluded hero composition, seamless dark/light section transitions, and uniform blog grid card heights.

To execute the automated audit locally against a running build:

```bash
node scripts/qa-browser-audit-fast.mjs
```

---

## ✦ License

Private & Proprietary © 2026 **Anvaya Automation**. All rights reserved.
