# Fit4Steps Wellness — Elite In-Home Fitness & Senior Rehabilitation Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-brightgreen)](https://turbo.build/pack)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#)

Fit4Steps is a premium, clinical-grade in-home personal training and physical wellness platform serving **Noida, Delhi, and Gurugram (Delhi NCR)**. Founded and directed by Master Trainer **Satheesan**, the platform delivers 1-on-1 personalized physical fitness coaching, knee pain rehabilitation, senior strength conditioning, posture correction, and holistic wellness directly to clients' doorsteps.

---

## Table of Contents
1. [Brand Identity & Logo](#brand-identity--logo)
2. [Design System & Color Palette](#design-system--color-palette)
3. [Typography Hierarchy](#typography-hierarchy)
4. [Architecture & Technology Stack](#architecture--technology-stack)
5. [Complete Site Map & Route Architecture](#complete-site-map--route-architecture)
6. [Core Component Architecture](#core-component-architecture)
7. [Data Layer & Content Models](#data-layer--content-models)
8. [SEO & Structured Data (JSON-LD)](#seo--structured-data-json-ld)
9. [Developer Guide & Local Setup](#developer-guide--local-setup)
10. [Maintenance Guidelines for Future Developers](#maintenance-guidelines-for-future-developers)

---

## Brand Identity & Logo

Fit4Steps is designed around **trust, clinical precision, and doorstep convenience**. The aesthetic deliberately avoids generic "neon gym bro" styling and artificial AI decorative elements, focusing instead on high-trust, medical-grade wellness aesthetics.

### Logo & Brand Assets
- **Primary Vector Logo**: `/public/assets/image/logo.svg`
- **Emblem / Mark**: Leaf and stepping icon symbolizing holistic progression, biological vitality, and sustainable joint health.
- **Favicon**: `/public/assets/image/favicon.webp`
- **Head Trainer Portrait**: `/public/assets/image/satheesan-head-trainer.jpg`
- **Senior Care Hero Assets**: `/public/assets/image/hero-senior-trainer.jpg`, `/public/assets/image/senior-joint-therapy.jpg`

### Verified Contact Details (Used Site-Wide)
- **Primary WhatsApp Hotline**: `+91 99994 48206`
- **Secondary Booking Helpline**: `+91 97787 76136`
- **Headquarters Address**: Jaypee Greens Wishtown, Sector 133, Noida, Uttar Pradesh 201304, India
- **Core Coverage**: Noida (Sectors 1–168), South Delhi (GK, Vasant Vihar, Defense Colony), Central/East Delhi, and Gurugram (DLF Phases 1–5, Golf Course Rd, Sohna Rd).

---

## Design System & Color Palette

The platform features a **Light Mode default** engineered for clarity, readability, and medical authority, paired with a grounded **Dark Mode** for evening browsing.

All color tokens are managed via CSS custom properties in [`src/app/globals.css`](file:///Users/admin/Downloads/fit4steps-website/src/app/globals.css).

### 1. Brand Core Palette
| Token | Light Mode Hex | Dark Mode Hex | Usage |
| :--- | :--- | :--- | :--- |
| `--brand-navy` | `#0b2737` | `#133c54` | Primary brand authority, headers, topbar |
| `--brand-navy-deep` | `#071924` | `#071924` | Contrast backdrops, dark banners |
| `--brand-navy-light`| `#16435f` | `#1e5272` | Secondary headers, hover states |
| `--brand-gold` | `#c97508` | `#f6c11d` | Conversion buttons, highlights, badges |
| `--brand-gold-hover`| `#b36605` | `#ffd768` | Button hover states, interactive focus |
| `--brand-gold-soft` | `#fef3c7` | `rgba(246, 193, 29, 0.12)` | Subtle pill backgrounds, callouts |
| `--brand-gold-text` | `#92400e` | `#f6c11d` | High-contrast gold text labels |
| `--brand-cyan` | `#0284c7` | `#38bdf8` | Clinical accents, diagnostic cues |
| `--brand-ice-blue` | `#f0f9ff` | `#0c2434` | Metric cards, specs highlights |

### 2. Surface & Background Tokens
| Token | Light Mode | Dark Mode | Usage |
| :--- | :--- | :--- | :--- |
| `--bg-page` | `#f8fafc` | `#071620` | Main document body background |
| `--bg-surface` | `#ffffff` | `#0c212f` | Content cards, dialogs, modals |
| `--bg-surface-alt` | `#f1f5f9` | `#112a3b` | Alternating sections, spec tables |
| `--border-subtle` | `#e2e8f0` | `rgba(255, 255, 255, 0.08)` | Clean hairline borders |
| `--border-medium` | `#cbd5e1` | `rgba(255, 255, 255, 0.16)` | Inputs, active card borders |

### 3. High-Trust Footer Palette (Clean White/Slate Theme)
| Token | Value | Rationale |
| :--- | :--- | :--- |
| `--footer-bg` | `#ffffff` | Clean, crisp, high-trust white background |
| `--footer-title` | `#0b2737` | Deep navy heading contrast |
| `--footer-text` | `#334155` | High-legibility slate body text |
| `--footer-card-bg` | `#f8fafc` | Light card container background |
| `--footer-border` | `#e2e8f0` | Hairline border separator |

---

## Typography Hierarchy

Loaded via Google Fonts in [`src/app/globals.css`](file:///Users/admin/Downloads/fit4steps-website/src/app/globals.css):
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap');
```

- **Headings & Display (`font-family: 'Outfit', sans-serif`)**:
  - `h1`: `clamp(32px, 4.5vw, 54px)` / Weight `800` / Line-height `1.16`
  - `h2`: `clamp(24px, 3.5vw, 36px)` / Weight `700` or `800` / Line-height `1.22`
  - `h3`: `18px – 22px` / Weight `700`
- **Body & UI Elements (`font-family: 'Plus Jakarta Sans', sans-serif`)**:
  - Body Text: `15px – 16.5px` / Weight `400`–`500` / Line-height `1.65`
  - Badges & Micro-Copy: `11.5px – 13px` / Weight `700` / Letter-spacing `0.5px`

---

## Architecture & Technology Stack

- **Framework**: Next.js 15+ (App Router architecture with React 19).
- **Compilation Engine**: Turbopack (`next build` executes static site generation across 68+ routes in < 1 second).
- **Styling Architecture**: Vanilla CSS design system via [`globals.css`](file:///Users/admin/Downloads/fit4steps-website/src/app/globals.css) utilizing standard tokens and responsive utilities.
- **Iconography**: `lucide-react` (clean, lightweight SVG vector icons).
- **Rendering Strategy**: Static Site Generation (SSG) with `generateStaticParams` for high SEO speed and zero server overhead.

---

## Complete Site Map & Route Architecture

The platform preserves and strengthens all historical #1 Google rankings by maintaining established root URLs as primary canonical destinations and eliminating duplicate folder routes with 301 permanent redirects:

```
src/app/
├── page.tsx                                  # Production Home Landing Page
├── layout.tsx                                # Root Layout (Navbar, Footer, Floating Actions)
├── sitemap.ts                                # Dynamic XML Sitemap generator
├── robots.ts                                 # Search Engine Crawling Directives
├── globals.css                               # Master Design System & Color Tokens
│
├── [Established #1 Ranking Pages & Flagship Pillars]
│   ├── fitness-training-program-for-senior-citizens/page.tsx # #1 "personal trainer for seniors in home"
│   ├── in-home-personal-trainer-near-me/page.tsx             # #1 "fitness trainer at home Noida"
│   ├── strength-training-for-seniors-at-home-delhi/page.tsx  # #1 "strength training for seniors at home Delhi"
│   ├── strength-training-for-seniors-at-home-gurugram/page.tsx # #1 "strength training for seniors at home Gurugram"
│   ├── exercises-for-senior-citizens-gurugram/page.tsx        # #4 "senior citizens exercises Gurugram"
│   ├── female-fitness-trainers-in-delhi/page.tsx             # Top Ranking Female Trainers
│   ├── couples-fitness-training-at-home-delhi/page.tsx       # Partner Fitness Training
│   ├── fitness-training-for-kids-noida/page.tsx              # Kids Functional Agility
│   ├── personal-fitness-training-for-50-plus/page.tsx        # 50+ Sarcopenia Prevention
│   ├── mobility-exercises-for-senior-citizens/page.tsx       # Senior Mobility & Fall Prevention
│   ├── personal-fitness-trainer-delhi/page.tsx               # South Delhi Local Personal Trainer
│   ├── personal-trainer-greater-kailash-delhi/page.tsx       # Greater Kailash GK 1 & 2
│   ├── senior-citizen-fitness-trainer-at-home-delhi/page.tsx # Delhi Senior In-Home Fitness
│   └── senior-citizen-fitness-trainer-at-home-gurugram/page.tsx # Gurugram Senior In-Home Fitness
│
├── services/                                 # In-Home Services Hub & Specialized Modalities
│   ├── page.tsx                              # Services Hub with Category Filters
│   ├── prenatal-postnatal-yoga/              # Trimester-Specific Pregnancy Yoga
│   ├── corrective-exercise-lifestyle-diseases/ # Diabetes, Hypertension & Spondylosis
│   ├── stress-management-training/           # Executive Burnout & Cortisol Reset
│   ├── personalized-online-training/         # Global NRI 1-on-1 Virtual Coaching
│   └── corporate-wellness-yoga/              # Corporate Wellness & Ergonomics
│
├── senior-fitness/
│   └── knee-therapy/page.tsx                 # Non-Surgical Knee Osteoarthritis Therapy
│
├── programs/                                 # 12 Specialized Training Disciplines
│   ├── page.tsx                              # Programs Catalog with Filter Tabs
│   └── [slug]/page.tsx                       # Dynamic Program Detail Architecture:
│       ├── /programs/weight-training         # Progressive Resistance & Hypertrophy
│       ├── /programs/yoga                    # Traditional Hatha & Vinyasa Yoga
│       ├── /programs/power-yoga              # Dynamic Athletic Power Yoga
│       ├── /programs/pilates                 # Mat & Core Pilates for Posture
│       ├── /programs/aerobics                # Rhythmic Aerobics & Cardio Dance
│       ├── /programs/kick-boxing             # In-Home Kick Boxing & Agility
│       ├── /programs/stretching-mobility     # Assisted Stretching & Fascial Mobility
│       ├── /programs/ball-exercise           # Swiss Ball Core & Balance Stability
│       ├── /programs/circuit-training        # Functional Circuit Conditioning
│       ├── /programs/hiit                    # High-Intensity Interval Training
│       ├── /programs/trx-exercise            # TRX Suspension Training
│       └── /programs/sports-games            # Tennis, Golf & Badminton Prehab
│
├── locations/                                # Geographic Hubs & Localized Landing Pages
│   ├── page.tsx                              # Locations Overview
│   ├── noida/page.tsx                        # Noida (Sectors 1 to 168)
│   └── gurugram/page.tsx                     # DLF, Golf Course Road & Sohna Road
│
├── blog/                                     # Clinical Wellness Articles
│   ├── page.tsx                              # Blog Article Hub
│   └── [slug]/page.tsx                       # Individual Blog Posts
│       ├── /blog/exercises-for-knee-pain     # (301 from /exercises-for-knee-pain)
│       ├── /blog/safe-exercises-for-elderly  # (301 from /safe-exercises-for-elderly)
│       └── [+6 clinical guides]
│
├── about/                                    # Company, Philosophy & Trainer Team
│   ├── page.tsx                              # Fit4Steps Story & Standards
│   └── trainers/page.tsx                     # Certified Trainer Profiles
│
├── success-stories/page.tsx                  # Client Transformations & Reviews
├── contact/page.tsx                          # Direct Inquiry & Consultation Form
├── faq/page.tsx                              # Comprehensive General FAQ
├── privacy-policy/page.tsx                   # Legal & Privacy Disclosures
├── terms/page.tsx                            # Terms & Conditions
│
└── [UX/UI Concept Variants]                  # Design Prototypes for Client Review
    ├── v1/page.tsx                           # Variant 1: Minimalist High-End
    ├── v2/page.tsx                           # Variant 2: Clinical Joint-Care Focus
    ├── v3/page.tsx                           # Variant 3: Athletic Performance
    ├── v4/page.tsx                           # Variant 4: Editorial / Magazine Layout
    ├── v5/page.tsx                           # Variant 5: Modern App-Style Cards
    └── v6/page.tsx                           # Variant 6: Research-Driven Benchmark
```

---

## Core Component Architecture

All reusable components are located in [`src/components/`](file:///Users/admin/Downloads/fit4steps-website/src/components/):

### 1. `Navbar.tsx`
- Sticky header with quick topbar for phone and WhatsApp.
- Dropdown menus for Services, Senior Fitness, and Programs.
- Mobile drawer menu with full tap-target accessibility (handles hamburger opening/closing cleanly across all mobile viewports).
- Integrates `ThemeToggle`.

### 2. `Footer.tsx`
- High-trust Light Mode white/slate layout.
- Eliminates generic AI sparkle icons.
- Quick navigation columns: Core Services, Senior Care, Training Disciplines, Locations, Legal.
- Direct contact cards with operational timings and address.

### 3. `AssessmentWidget.tsx` (Doorstep Fitness & Joint Screen)
- Interactive multi-step clinical diagnostic tool.
- Collects: Age bracket, primary health goal, existing joint aches/pains (knees, lumbar, cervical), preferred workout intensity, location sector.
- **Key Feature**: Auto-formats a customized WhatsApp message compiling all user inputs and immediately directs the user to WhatsApp for consultation.

### 4. `ProgramFAQ.tsx`
- Client-side accordion component using `lucide-react` icons.
- Provides smooth expand/collapse interaction for program and service FAQ sections while allowing parent pages to remain Server Components.

### 5. `ThemeToggle.tsx`
- Seamless Light/Dark mode switcher saving user preferences to `localStorage` and toggling `data-theme` on the `<html>` element.

### 6. `FloatingActions.tsx`
- Sticky bottom-right WhatsApp quick-trigger button with pre-configured greeting.

### 7. `VariantSwitcher.tsx`
- Developer/client floating tool allowing one-click switching between the active homepage and test variants `/v1` through `/v6`.

---

## Data Layer & Content Models

Structured data is maintained in dedicated TypeScript files to avoid page bloat:

- **Programs Dataset**: [`src/data/programsData.ts`](file:///Users/admin/Downloads/fit4steps-website/src/data/programsData.ts)
  Each program contains:
  ```typescript
  export interface ProgramDetail {
    slug: string;
    title: string;
    category: 'strength' | 'mind-body' | 'cardio' | 'rehab';
    badge: string;
    heroTagline: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    heroImage: string;
    overview: string[];
    specs: ProgramSpec;                       // Duration, Burn, Intensity, Equipment
    scientificPillars: ProgramPillar[];       // 4 clinical physiology concepts
    sessionBreakdown: SessionPhase[];         // 5-part 60-min session architecture
    periodizationRoadmap: PeriodizationPhase[]; // 12-week progression milestones
    whoItIsFor: TargetAudience[];             // 4 user demographic profiles
    caseStudy: ProgramCaseStudy;              // Real Delhi NCR client outcome
    faqs: ProgramFAQItem[];                   // 5 detailed Q&As
    synergisticPrograms: SynergisticProgram[];// Cross-linking companion programs
  }
  ```

---

## SEO & Structured Data (JSON-LD)

Every service, senior fitness, and program page includes embedded **Schema.org JSON-LD** scripts:

- **`Service` Schema**: Identifies Fit4Steps as a local health & fitness provider with verified address, phone, pricing, and service areas (Noida, Delhi, Gurugram).
- **`BreadcrumbList` Schema**: Provides clean navigation hierarchy in Google search results.
- **`FAQPage` Schema**: Marks up all frequently asked questions for rich snippet eligibility.
- **`ItemList` Schema**: Injected into `/services` and `/programs` listing pages to allow search engine indexing of all catalog items.
- **XML Sitemap**: Auto-generated via [`src/app/sitemap.ts`](file:///Users/admin/Downloads/fit4steps-website/src/app/sitemap.ts) mapping all 68 canonical URLs.
- **Robots Directives**: Configured in [`src/app/robots.ts`](file:///Users/admin/Downloads/fit4steps-website/src/app/robots.ts).

---

## Developer Guide & Local Setup

### Prerequisites
- Node.js `v18.18+` or `v20+`
- npm `v9+` or `v10+`

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone <repo-url>
cd fit4steps-website
npm install
```

### 2. Running Locally
Start the development server with Turbopack:
```bash
npm run dev
```
The website will start at:
```
http://localhost:3000   (or http://localhost:3001 if port 3000 is occupied)
```

### 3. Production Build & Static Generation
Verify TypeScript types, linting, and static generation of all 68 routes:
```bash
npm run build
```
You should see:
```
✓ Generating static pages using 7 workers (68/68) in < 1s
○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML
```

---

## Maintenance Guidelines for Future Developers

1. **Adding a New Program**:
   - Add the program object to [`src/data/programsData.ts`](file:///Users/admin/Downloads/fit4steps-website/src/data/programsData.ts).
   - Because `[slug]/page.tsx` uses `generateStaticParams()`, Next.js will automatically generate the new static page at `/programs/[new-slug]`.
   - Add the new route to [`src/app/sitemap.ts`](file:///Users/admin/Downloads/fit4steps-website/src/app/sitemap.ts).

2. **Editing Phone Numbers or WhatsApp Triggers**:
   - Update `Navbar.tsx`, `Footer.tsx`, and `AssessmentWidget.tsx`.
   - The master WhatsApp number is `+91 99994 48206`.

3. **Styling Rules**:
   - Always use theme tokens from `globals.css` (e.g., `var(--brand-gold)`, `var(--brand-navy)`, `var(--text-main)`).
   - Avoid hardcoding arbitrary hex codes in inline styles to maintain dark/light mode compatibility.
   - Avoid adding unnecessary AI sparkle or futuristic neon icons; preserve the human, clinical wellness tone.
