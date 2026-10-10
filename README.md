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
  <img src="https://img.shields.io/badge/QA_Audit-100%25%20Passed-brightgreen?style=flat-square" alt="QA Status" />
</p>

---

## ✦ Overview

**Anvaya Automation** is a modern technology studio delivering artificial intelligence workflows, enterprise web applications, telephony IVR scheduling, cloud infrastructure, and data-driven digital growth.

This repository hosts the complete frontend web application for Anvaya Automation, designed around a bespoke **"Quiet Luxury"** aesthetic: warm ivory tones, generous breathing room, weighted organic physics, clean consistent typography, and rich thematic imagery.

---

## ✦ Key Updates & Redesign Highlights

- **Scroll-Driven Hero Zoom Animation:** As users scroll through the home hero section, the signature Pearl Sphere smoothly scales up to fill the viewport while the headline fades gracefully, revealing the subsequent services section from within the expanding light sphere.
- **Brand Uniformity:** Brand wordmark prominently updated to **Anvaya Automation** across the floating pill navbar, footer watermark, and metadata.
- **Consistent Modern Typography:** Purged cursive and italic serif script fonts across all headers and components; standardized on clean, geometric `Inter Tight` for a unified, elite software agency aesthetic.
- **Vertical "What We Do" Cards with Rich Imagery:** Replaced horizontal overflow scrolling with a vertical responsive grid where each service card features a high-resolution thematic header image, discipline tags, and smooth viewport entrance animations.
- **Interactive Delivery Process:** Rebuilt the "Our Process" section into an interactive 4-phase architecture where users can click through Discovery, Architecture, Agile Sprints, and Telemetry to inspect active deliverables.
- **Client Verification & Reviews Template:** Replaced basic testimonial box with a unique 3-column verification showcase featuring verified ratings, executive client quotes, and measurable outcomes.
- **Curated 3 Production Case Studies:**
  1. **PulseFit:** Omnichannel Gym Management & Member Experience Web App
  2. **CareDial:** Multi-Language IVR & Automated Telephony Scheduling System
  3. **FrontDesk AI:** 24/7 Autonomous Voice & In-Clinic AI Receptionist
- **Architectural Standards Section:** Integrated the 3 dark luxury principles from the design blueprint: *Deterministic Workflows*, *Full IP Ownership*, and *Zero-Data Retention*.
- **Streamlined Contact Flow:** Removed the budget field from the consultation form, updated direct phone touchpoints (`+91 9313220796` & `+91 9624865617`), direct WhatsApp integration (`+91 9313220796`), and verified mailto (`contact@anvayaautomation.com`).
- **Expansive Layout Margins:** Expanded main container limits to `1440px` with responsive padding, eliminating empty border voids on wide desktop displays.

---

## ✦ Design System ("Quiet Luxury")

### Color Palette
- **Background:** `#F4F2EE` (Warm Ivory Canvas)
- **Surface / Card:** `#FBFAF8` (Soft Card Background)
- **Border:** `#E4E1DA` (Hairline Dividers)
- **Charcoal Ink:** `#161616` (Primary Typography)
- **Muted Gray:** `#6F6B63` (Subtext & Meta)
- **Champagne Accent:** `#C9B99A` (Highlights, Badges & Focal Tones)
- **Dark Inverted Sections:** `#121212` with ivory contrast (Philosophy & Footer)

### Typography
- **Headings & Body:** `Inter Tight` (weights 400, 500, 600, 700) with letter tracking `-0.02em` to `-0.03em`.
- **Labels & Numbers:** 12px uppercase with wide tracking (`0.14em`), formatted cleanly without bracket clutter.

### Motion System
- **Framer Motion:** Custom cubic bezier curves `[0.22, 1, 0.36, 1]` with heavy springs (stiffness 80, damping 20).
- **Lenis Smooth Scroll:** Inertial smooth scrolling integrated globally.
- **Floating Pill Navbar:** Auto-hides on downward scroll, re-enters instantly when the cursor enters the top 90px hotzone.

---

## ✦ Routes & Architecture

### Core Pages
- `/` — **Home:** Zooming pearl sphere hero, vertical services showcase with imagery, 3 architectural principles, interactive process selector, client verification reviews, editorial blog teaser, and project initiation CTA.
- `/services` — **Services Directory:** Overview of all 6 studio capabilities with thematic image headers.
- `/projects` — **Work & Case Studies:** Showcasing PulseFit, CareDial, and FrontDesk AI with detailed challenges, architectures, and metrics.
- `/blog` — **Insights:** Editorial perspectives on AI systems, software architecture, and growth with real thematic photography.
- `/about` — **Studio Vision:** Concise origin story, guiding principles, and a 4-phase project engagement blueprint.
- `/contact` — **Consultation Inquiry:** Streamlined inquiry form with direct phone, email, and WhatsApp touchpoints.

### Dedicated Service Slugs
- `/services/ai-automation`
- `/services/web-applications`
- `/services/mobile-development`
- `/services/cloud-infrastructure`
- `/services/seo`
- `/services/digital-marketing`

### Dedicated Case Studies
- `/projects/pulsefit-gym-platform`
- `/projects/caredial-ivr-appointment-system`
- `/projects/frontdesk-ai-receptionist`

---

## ✦ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14** | React framework with App Router, SSR, SSG & Server Components |
| **React 18** | UI component architecture |
| **TypeScript** | Strict static type safety |
| **Tailwind CSS** | Design tokens and responsive utility layout system |
| **Framer Motion** | Declarative page transitions, scroll zoom physics & micro-interactions |
| **Lenis Scroll** | Inertial smooth scrolling engine |
| **Lucide React** | Clean, lightweight geometric vector icons |
| **Zod** | Schema validation for user inquiries |

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

```bash
npm run build
npm run start
```

---

## ✦ Quality Assurance & Browser Testing

Automated Chrome DevTools Protocol (CDP) headless testing pipeline in [`scripts/qa-browser-audit-fast.mjs`](scripts/qa-browser-audit-fast.mjs) validates all routes across 8 responsive screen widths (360px, 390px, 768px, 1024px, 1280px, 1366px, 1440px, and 1920px):

- **Horizontal Overflow Check:** 0px horizontal overflow across all viewports (`scrollWidth <= innerWidth`).
- **Typography Conformity:** Zero cursive/script font leaks; strict enforcement of clean modern type tokens.
- **Image Integrity:** Verified loading and natural dimensions across all images.
- **Bounding-Box Collision Detection:** Automated collision checks between sibling blocks, navigation, and headers.
- **Touch Accessibility:** All interactive elements and mobile nav toggles adhere to WCAG 2.1 minimum 44px tap targets.

---

## ✦ License

Private & Proprietary © 2026 **Anvaya Automation**. All rights reserved.
