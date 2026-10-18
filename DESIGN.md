---
name: Nixie Counter
description: Skills and proof as labeled tube banks on blackened steel; specialty on the chassis cap.
colors:
  chassis: "#0c0c0e"
  chassis-face: "#14161a"
  chassis-steel: "#1a1c20"
  chassis-edge: "#2a2c30"
  glow: "#ff6a1a"
  steel: "#8a9098"
  steel-dim: "#6a7078"
  plate: "#f0f2f4"
  plate-soft: "#e8eaee"
  tube-well: "#080808"
  selection: "rgba(255, 106, 26, 0.28)"
  focus-ring: "#ff6a1a"
typography:
  display:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "normal"
  headline:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.02em"
  title:
    fontFamily: "Chakra Petch, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0"
spacing:
  xs: "0.35rem"
  sm: "0.5rem"
  md: "0.875rem"
  lg: "1.25rem"
  xl: "1.75rem"
  2xl: "2.5rem"
  panel-x: "1.25rem"
  panel-x-md: "3rem"
  panel-y: "1.5rem"
  panel-y-md: "2.25rem"
  chassis-border: "10px"
  chassis-border-md: "12px"
components:
  link-glow:
    backgroundColor: "transparent"
    textColor: "{colors.steel-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.15rem 0"
  link-glow-hover:
    backgroundColor: "transparent"
    textColor: "{colors.glow}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.15rem 0"
  project-link:
    backgroundColor: "transparent"
    textColor: "{colors.plate}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "1rem 0 0.25rem"
  project-link-hover:
    backgroundColor: "transparent"
    textColor: "{colors.plate}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "1rem 0 0.25rem"
  hero-lead:
    backgroundColor: "transparent"
    textColor: "{colors.plate}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.5rem 0.35rem 0"
  hero-lead-hover:
    backgroundColor: "rgba(255, 106, 26, 0.04)"
    textColor: "{colors.plate}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.5rem 0.35rem 0"
  lab-label:
    backgroundColor: "transparent"
    textColor: "{colors.glow}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
  chassis-panel:
    backgroundColor: "{colors.chassis}"
    textColor: "{colors.plate-soft}"
    rounded: "{rounded.none}"
    padding: "1.5rem 1.25rem 1.25rem"
  tube-bank:
    backgroundColor: "{colors.tube-well}"
    textColor: "{colors.plate}"
    rounded: "{rounded.none}"
    padding: "0"
---

# Design System: Nixie Counter

## Overview

**Creative North Star: "Nixie Laboratory Counter"**

The portfolio reads as a single instrument chassis: blackened steel plate, inset tube wells, and amber nixie glow used sparingly as signal — never as decoration wash. Specialty sits on the chassis cap; skills and projects are labeled banks of readings. Hierarchy comes from plate vs steel type, chassis-edge rules, and glow on instrument labels and active states.

Density is laboratory-tight: mono labels with wide tracking, short supporting copy, hard edges, no card chrome. Motion is presence (tube bank pulse) and state feedback (glow on hover/focus), not page theater. Prefer-reduced-motion kills the tube animation and link transitions.

**Key Characteristics:**
- Full-bleed chassis panel with thick steel border and inset gloom
- Chakra Petch for name / lead / project titles; IBM Plex Mono for everything else
- Glow (`#ff6a1a`) reserved for specialty, lab labels, focus, and hover signal
- Tube wells (`#080808`) hold proof imagery with inset shadow and soft amber bloom
- Foot rail of uppercase contact links with glow underline on hover

## Colors

One accent voice on a blackened-steel ground; plate and steel carry readable hierarchy.

### Primary
- **Nixie Glow** (`{colors.glow}`): Specialty line, lab labels (`skills-lab`, `projects-lab`, detail section heads), focus ring, hover signal on foot/back/title links, hero lead border, project-link top rule. Rarity is the point.

### Neutral
- **Chassis Black** (`{colors.chassis}`): Page ground and panel base (`#0c0c0e`).
- **Chassis Face** (`{colors.chassis-face}`): Gradient wash over the steel plate texture (`#14161a`).
- **Chassis Steel** (`{colors.chassis-steel}`): Outer chassis border color (`#1a1c20`).
- **Chassis Edge** (`{colors.chassis-edge}`): Hairline instrument rules, scrollbar thumb (`#2a2c30`).
- **Steel** (`{colors.steel}`): Body/supporting copy (`#8a9098`).
- **Steel Dim** (`{colors.steel-dim}`): Indexes, lanes, foot mark, default foot links (`#6a7078`).
- **Plate** (`{colors.plate}`): Primary display text — name, hero intro, project titles (`#f0f2f4`).
- **Plate Soft** (`{colors.plate-soft}`): Default body foreground and skill names (`#e8eaee`).
- **Tube Well** (`{colors.tube-well}`): Inset media well behind tube bank / detail figure (`#080808`).
- **Selection Wash** (`{colors.selection}`): Text selection highlight (`rgba(255, 106, 26, 0.28)`).

### Named Rules
**The One Glow Rule.** Nixie orange is signal only: specialty, lab labels, focus, and hover. Do not flood backgrounds or large fills with glow.

**The Plate-on-Steel Rule.** Titles and name use plate; supporting sentences use steel. Never invert that hierarchy.

## Typography

**Display Font:** Chakra Petch (with system-ui, sans-serif) — weights 500 / 700 loaded; build uses 700 for titles  
**Body Font:** IBM Plex Mono (with ui-monospace, monospace) — weights 400 / 600 loaded; body uses 400  
**Label/Mono Font:** IBM Plex Mono (same stack)

**Character:** Instrument face: geometric display for the reading that matters; mono for every label, index, and rail. Tight leading on titles; wide tracking on uppercase labs.

### Hierarchy
- **Display** (700, `clamp(2rem, 5vw, 3rem)`, lh 1.05): Lead project title (`.hero-intro`).
- **Headline** (700, `clamp(1.5rem, 3.5vw, 2.25rem)`, lh 1.15, tracking `0.02em`): Brand name on chassis cap (`.cap-title`). Detail title uses `clamp(1.75rem, 4vw, 2.5rem)` / lh 1.1.
- **Title** (700, `1.25rem`): Project bank headings (`.project-link h2`).
- **Body** (400, `0.875rem`, lh 1.55): Hero copy (max ~38ch); detail body `0.875rem` / lh 1.6 (max ~62ch); project summary `0.8125rem` / lh 1.5 (max ~48ch).
- **Label** (400, `0.6875rem`–`0.75rem`, tracking `0.14em`–`0.18em`, uppercase): Specialty (`.cap-role`), lab labels, foot rail, lanes, back link, figcaption.

### Named Rules
**The Cap Specialty Rule.** Specialty is always the glow uppercase label on the chassis cap — never demoted to body steel and never replaced by a marketing eyebrow.

**The Index Rule.** Skill banks carry tube-style indexes (`T1`…); keep them steel-dim and smaller than the skill name.

## Layout

One chassis composition: `.panel` is min-height `100dvh`, column flex, thick border (`10px` → `12px` at 768px), padding `1.5rem 1.25rem 1.25rem` → `2.25rem 3rem 1.5rem` at 768px. Cap → hero (1-col → 2-col at 900px) → skills bank → project banks → foot rail (`margin-top: auto`).

Breakpoints observed: 640px (foot row), 768px (panel padding/border, project grid), 900px (hero / detail two-column). Section dividers are 1px `chassis-edge` top borders. Skills wrap with gap `0.875rem 2rem`; projects grid gap `1rem` → `1.25rem` at 768px.

## Elevation & Depth

Depth is tonal and inset, not floating cards. The panel uses a cover steel-plate image under a dark gradient, plus inset black vignette and a hairline top highlight. Tube banks and detail figures sit in tube-well with heavy inset shadow; tube bank adds a soft amber outer bloom that pulses (unless reduced motion).

### Shadow Vocabulary
- **Panel inset gloom** (`box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(138, 144, 152, 0.08)`): Chassis face depth.
- **Tube well** (`inset 0 0 40px rgba(0, 0, 0, 0.65)` + `0 0 28px rgba(255, 106, 26, 0.12)`): Media bank at rest; pulse brightens bloom to ~`0.22` alpha.
- **Hero lead inset signal** (`inset 12px 0 24px -18px rgba(255, 106, 26, 0.55)`): Hover/focus on lead reading.
- **Foot glow text** (`text-shadow: 0 0 12px rgba(255, 106, 26, 0.35)`): Hover/focus on foot links.

### Named Rules
**The Inset Well Rule.** Proof imagery lives in tube wells — dark recess + edge rule — never in lifted white cards or floating media frames.

## Shapes

Hard instrument geometry: `border-radius: 0` everywhere. Chassis is a thick steel frame; banks and figures use 1px `chassis-edge` strokes. Hero lead uses a 2px left glow bar on hover (transparent at rest). Interactive text links use 1px bottom borders that go glow-tinted on hover. No pills, no rounded chips, no soft cards.

## Components

Interactive surfaces are instrument links and banks, not filled CTA buttons.

### Chassis Panel
- **Shape:** Square corners; border `{spacing.chassis-border}` (`12px` from 768px) in chassis-steel
- **Background:** Chassis + face gradient + `/plates/chassis-steel-plate.png`
- **Structure:** Cap, slot children, foot rail

### Cap / Brand
- **Name:** Chakra headline in plate; link variant glows on hover when not home
- **Specialty:** Glow uppercase label (`.cap-role`), right/end-aligned on desktop

### Lab Labels
- **Style:** Glow, uppercase, wide tracking — section signal only (`.skills-lab`, `.projects-lab`, detail `h2`)

### Hero Lead
- **Shape:** Transparent left border at rest; glow border + faint wash + inset bloom on hover/focus
- **Type:** Display title + steel body copy

### Tube Bank
- **Corner Style:** None
- **Background:** Tube well + edge + inset/outer glow; optional `tube-presence` pulse
- **Media:** Full-width image, no caption overlay

### Skills Bank
- **Style:** Edge-top section; wrap list; `Tn` indexes in steel-dim; skill names in plate-soft

### Project Link
- **Shape:** Top edge rule; glow rule on hover/focus
- **Lane:** Uppercase steel-dim meta (`Live count · lead` / `Bank · secondary`)
- **Title / summary:** Plate title + steel summary

### Foot Link
- **Style:** Uppercase steel-dim; glow color + bottom border + text-shadow on hover/focus
- **Mark:** “Nixie laboratory counter” in steel-dim

### Detail Figure / Back (styles present)
- **Figure:** Tube-well well + edge + light inset amber; uppercase figcaption
- **Back:** Same glow-underline pattern as foot links

## Do's and Don'ts

### Do:
- **Do** keep specialty as the glow label on the chassis cap.
- **Do** present skills and projects as labeled banks with chassis-edge rules and tube indexes where used.
- **Do** put proof imagery in inset tube wells with hard edges.
- **Do** use Chakra Petch only for name, lead, and project/detail titles; mono everywhere else.
- **Do** honor `prefers-reduced-motion` by disabling tube pulse and link transitions.

### Don't:
- **Don't** flood large surfaces with nixie orange — glow is signal, not a theme wash.
- **Don't** introduce soft cards, pills, or non-zero radius on this chassis.
- **Don't** replace plate/steel type roles or swap display/mono pairings.
- **Don't** add floating badges, kickers, or promo chips on tube media.
- **Don't** invent filled primary buttons; interaction stays as instrument links and edge rules.
