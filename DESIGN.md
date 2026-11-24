---
name: folio
description: The Gallery Archive - Refined and restrained minimalist design system for Divinne Amunega's portfolio
colors:
  primary: "#6366f1"
  neutral-bg: "#fafafa"
  neutral-ink: "#0a0a0a"
  neutral-border: "#e5e5e5"
  accent: "#6366f1"
  accent-light: "#818cf8"
  peach: "#ffc965"
  pale-white: "#d8d8f6"
  cool-black: "#1d1e18"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-ink}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  card-default:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System: folio

## 1. Overview

**Creative North Star: "The Gallery Archive"**

The Gallery Archive design system embodies an exhibition space: clean, intentional, and highly structured. It frames technical expertise with editorial discipline, allowing work details to stand out without competing with decorative background elements. The system rejected standard AI SaaS tropes (cyan-on-dark neon grids, generic gradient overlays, and glassmorphism) in favor of high-contrast typography, sharp borders, and generous whitespace.

Key Characteristics:
- **Sharp Corners Only**: Circular styling is reserved exclusively for interactive elements (such as tags/badges or toggle buttons). All primary containers, borders, and main buttons utilize strict `0px` radii.
- **Editorial Contrast**: Deep, deliberate weight and size scales create immediate typographic focus.
- **Organic Deceleration**: Transitions and entry reveals (powered by GSAP and Lenis) employ smooth exponential curves to reinforce the high-end feel.

## 2. Colors

The color palette centers on warm tinted neutrals for light mode and cool slate-charcoals for dark mode, accented by a single high-end indigo.

### Primary
- **Archive Indigo** (#6366f1 / oklch(0.585 0.233 268)): The primary brand action color. Used sparingly (under 10% surface area) for subtle accents, highlight badges, and focus indicators.

### Secondary
- **Peach Alert** (#ffc965): Reserved for secondary actions, interactive toggles, or highlight text flags.

### Neutral
- **Alabaster BG** (#fafafa / oklch(0.985 0.005 60)): The primary background surface in light mode. Soft and readable.
- **Warm Ink** (#0a0a0a / oklch(0.16 0.008 60)): The dominant text and dark element color. 
- **Warm border** (#e5e5e5 / oklch(0.91 0.005 60)): Used for structural separator lines and card borders.
- **Charcoal BG** (#131317 / oklch(0.13 0.008 250)): Dark mode canvas base.
- **Off-white primary** (#ededed / oklch(0.93 0.005 250)): Dark mode main typography.

### Named Rules
**The Accent Restraint Rule.** The primary Archive Indigo accent must occupy no more than 10% of any viewport. Its purpose is to guide focus, not to saturate the interface.

**The Tinted Neutral Rule.** Monochromatic surfaces (pure black #000 or pure white #fff) are prohibited. All neutrals are subtly warm-tinted to avoid looking artificial or clinical.

## 3. Typography

**Display Font:** Plus Jakarta Sans (with system fallback)
**Body Font:** Plus Jakarta Sans (with system fallback)
**Label/Mono Font:** Fira Code, monospace

### Hierarchy
- **Display** (Bold (700), clamp(2rem, 5vw, 4rem), 1.1): Home hero headers and major section titles. Uses a strict letter-spacing floor of -0.02em.
- **Headline** (Semi-Bold (600), 1.75rem, 1.2): Medium section subheadings.
- **Title** (Medium (500), 1.25rem, 1.3): Cards, sidebar titles, and project titles.
- **Body** (Regular (400), 1rem, 1.6): Standard prose and details. Constrained to a max line length of 65-75ch to preserve comfortable readability.
- **Label** (Medium (500), 0.875rem, normal): Badges, inline metadata, and buttons. Uses monospace styling when conveying technical parameters.

### Named Rules
**The Balance & Pretty Rule.** Display sizes (h1 to h3) must apply `text-wrap: balance` to prevent awkward word wraps. Body text blocks must use `text-wrap: pretty` to reduce typographic orphans.

## 4. Elevation

The Gallery Archive is a **Flat & Tactile** system. It rejects drop shadows to retain its structured, paper-like exhibition qualities.

### Named Rules
**The Border-Depth Rule.** Depth is created through layout structure, sharp contrast steps, and 1px borders, never through drop shadows. If an element appears raised, it should be marked by an active border color shift or an OKLCH background tint elevation.

## 5. Components

### Buttons
- **Shape:** Sharp sharp corners (0px radius).
- **Primary:** Warm Ink background with Alabaster text, a 2px Warm Ink border, and comfortable padding (16px top/bottom, 32px left/right). On hover, it has a slight opacity scale shift.
- **Secondary:** Transparent background with a 2px Warm Ink border. On hover, background shifts to a very subtle 5% ink tint.
- **Ghost:** Transparent background with a transparent border, shifting to a 10% border opacity on hover.

### Cards
- **Corner Style:** Sharp sharp corners (0px).
- **Background:** White card surface on Alabaster background (or Charcoal surface on Rich Charcoal BG in dark mode).
- **Border:** 1px Warm border.
- **Hover:** Transitions the border color to active Ink (`#0a0a0a` / `white`) over 300ms.

### Badges / Chips
- **Style:** Monospace typography with rounded border (full pill) or small border.
- **Accent:** 10% Indigo tint background with pure Indigo text.
- **Default:** 50% border opacity tint background with muted text.

## 6. Do's and Don'ts

### Do:
- **Do** align large numbers and headings with asymmetrical margins to create an editorial grid flow.
- **Do** use native dialog elements or relative positioning rather than z-index overrides.
- **Do** enforce a 65ch line length limit on all body text blocks.
- **Do** wrap display titles in `text-wrap: balance`.

### Don't:
- **Don't** add box-shadows to buttons or cards. Keep all elevation flat and tactile.
- **Don't** use cyan-to-purple gradients, floating decorative grids, or neon accents on dark backgrounds.
- **Don't** use side-stripe borders (e.g. `border-left-4` as an accent) on cards, callouts, or layout sections.
- **Don't** use card corners exceeding 0px on main card components (keep cards, sections, and inputs sharp).
