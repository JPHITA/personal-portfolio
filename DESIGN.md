---
name: Nixie Counter
description: Skills and proof as labeled banks on blackened steel; specialty on the chassis cap.
colors:
  chassis: "#0c0c0e"
  chassis-face: "#14161a"
  chassis-steel: "#1a1c20"
  chassis-edge: "#2a2c30"
  glow: "#ff6a1a"
  steel: "#8a9098"
  steel-dim: "#747a82"
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
    fontSize: "0.75rem"
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
    padding: "0.35rem 0"
  link-glow-hover:
    backgroundColor: "transparent"
    textColor: "{colors.glow}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0"
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
  hero-contacts:
    backgroundColor: "transparent"
    textColor: "{colors.steel-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
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
  detail-figure:
    backgroundColor: "{colors.tube-well}"
    textColor: "{colors.steel-dim}"
    rounded: "{rounded.none}"
    padding: "0"
  detail-back:
    backgroundColor: "transparent"
    textColor: "{colors.steel-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0"
  detail-back-hover:
    backgroundColor: "transparent"
    textColor: "{colors.glow}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0"
---

# Design System: Nixie Counter

## Overview

**Creative North Star: "Nixie Laboratory Counter"**

The portfolio reads as a single instrument chassis: blackened steel plate, inset tube wells for project proof, and amber nixie glow used sparingly as signal — never as decoration wash. Specialty sits on the chassis cap; the first viewport carries a short CV one-liner and contact; skills and projects follow as labeled banks of readings. Hierarchy comes from plate vs steel type, chassis-edge rules, and glow on instrument labels and active states.

Density is laboratory-tight: mono labels with wide tracking, short supporting copy, hard edges, no card chrome. Motion is state feedback only (glow on hover/focus for links and project top rules), not page theater. Prefer-reduced-motion kills contact-link transitions.

**Key Characteristics:**
- Full-bleed chassis panel with thick steel border and inset gloom
- Chakra Petch for name / project titles; IBM Plex Mono for everything else
- Glow (`#ff6a1a`) reserved for specialty, lab labels, focus, and hover signal
- Hero is CV one-liner + Email / LinkedIn / GitHub (icons on hero rail); no lead project, no decorative tube bank
- Home project banks carry inset tube-well previews; detail pages reuse the same well treatment for proof figures
- Skills are word-first (no T-indexes): primary strip of four names, remainder behind `More banks · N`
- Foot rail of uppercase contact links with glow underline on hover (contacts remain synthetic scaffolding by intent)

## Colors

One accent voice on a blackened-steel ground; plate and steel carry readable hierarchy.

### Primary
- **Nixie Glow** (`{colors.glow}`): Specialty line, lab labels (`skills-lab`, `projects-lab`, detail section heads), focus ring, hover signal on hero/foot/back/title links, project-link top rule. Rarity is the point.

### Neutral
- **Chassis Black** (`{colors.chassis}`): Page ground and panel base.
- **Chassis Face** (`{colors.chassis-face}`): Gradient wash over the steel plate texture.
- **Chassis Steel** (`{colors.chassis-steel}`): Outer chassis border color.
- **Chassis Edge** (`{colors.chassis-edge}`): Hairline instrument rules, scrollbar thumb.
- **Steel** (`{colors.steel}`): Body/supporting copy.
- **Steel Dim** (`{colors.steel-dim}`): Lanes, foot mark, default contact links, synth scaffolding note, detail tag indexes. Tuned for ≥4.5:1 on chassis (`#747a82`; prior `#6a7078` failed AA at ~3.9:1).
- **Plate** (`{colors.plate}`): Primary display text — name, project titles.
- **Plate Soft** (`{colors.plate-soft}`): Default body foreground and skill names.
- **Tube Well** (`{colors.tube-well}`): Inset media well behind home project previews and detail figures.
- **Selection Wash** (`{colors.selection}`): Text selection highlight.

### Named Rules
**The One Glow Rule.** Nixie orange is signal only: specialty, lab labels, focus, and hover. Do not flood backgrounds or large fills with glow.

**The Plate-on-Steel Rule.** Titles and name use plate; supporting sentences use steel. Never invert that hierarchy.

## Typography

**Display Font:** Chakra Petch (with system-ui, sans-serif) — weights 500 / 700 loaded; build uses 700 for titles  
**Body Font:** IBM Plex Mono (with ui-monospace, monospace) — weights 400 / 600 loaded; body uses 400  
**Label/Mono Font:** IBM Plex Mono (same stack)

**Character:** Instrument face: geometric display for the reading that matters; mono for every label, lane, and rail. Tight leading on titles; wide tracking on uppercase labs.

### Hierarchy
- **Display** (700, `clamp(2rem, 5vw, 3rem)`, lh 1.05): Reserved scale; not used on the current home hero.
- **Headline** (700, `clamp(1.5rem, 3.5vw, 2.25rem)`, lh 1.15, tracking `0.02em`): Brand name on chassis cap (`.cap-title`). Detail title uses `clamp(1.75rem, 4vw, 2.5rem)` / lh 1.1.
- **Title** (700, `1.25rem`): Project bank headings (`.project-link h2`).
- **Body** (400, `0.875rem`, lh 1.55): Hero one-liner (`.hero-copy`, `clamp(0.9375rem, 1.35vw, 1.0625rem)`, lh 1.5; measure `min(58ch, 100%)` → `min(70ch, 55%)` at 900px → `min(90ch, 75%)` at 1280px); detail body `0.875rem` / lh 1.6 (max ~62ch); project summary `0.8125rem` / lh 1.5 (max ~48ch).
- **Label** (400, `0.75rem` for interactive rails / specialty / synth-note / lanes / back / skills-more summary; `0.6875rem` for lab signals, figcaptions, and detail tag indexes; tracking `0.14em`–`0.18em`, uppercase where instrument): Specialty (`.cap-role` at `0.75rem`), lab labels, hero/foot contact rails, project lanes, back link, synth-note, figcaption.

### Named Rules
**The Cap Specialty Rule.** Specialty is always the glow uppercase label on the chassis cap — never demoted to body steel and never replaced by a marketing eyebrow.

**The Word-First Skills Rule.** Home skill banks list names only in plate-soft — no `.idx` / `T1` spans. Tube-style indexes stay on detail meta tags only, steel-dim and smaller than the tag name.

## Layout

One chassis composition: `.panel` is min-height `100dvh`, column flex, thick border (`10px` → `12px` at 768px), padding `1.5rem 1.25rem 1.25rem` → `2.25rem 3rem 1.5rem` at 768px. Cap → hero → skills bank → project banks → foot rail (`margin-top: auto`).

Home hero (`.panel-home .hero`): `min-height: 30vh`, column flex, vertically centered content (`justify-content: center`); padding `1.75rem 0 1.25rem` → `2rem 0 1.5rem` at 900px. Do not stretch the hero to fill the viewport.

Hero distribution (`.hero-body`): `<640` column stack; `640+` row, `align-items: center`, gap cluster (intro `flex: 1`, max ~58ch; contacts `flex-shrink: 0`; no `justify` so left cluster stays tight); `900+` `justify-content: space-between` with intro max `min(70ch, 55%)`; `1280+` intro max `min(90ch, 75%)` so contacts sit on the right without a dead right half or a hollow center.

Detail fills the chassis rail (no `max-width: 52rem` clamp). `.detail-deck` stacks copy then media below 900px; from 900px it splits `minmax(0, min(42ch, 40%)) | minmax(0, 1fr)` (story measure left, proof wells fill remaining width). Section dividers are 1px `chassis-edge` top borders. Skills wrap with gap `0.875rem 2rem`; projects grid gap `1rem` → `1.25rem` at 768px.

Breakpoints observed: 640px (hero body row, foot row), 768px (panel padding/border, project grid 2-col), 900px (hero `space-between` + hero padding + detail-deck columns), 1280px (hero intro measure grows).

## Elevation & Depth

Depth is tonal and inset, not floating cards. The panel uses a cover steel-plate image under a dark gradient, plus inset black vignette and a hairline top highlight. Home project previews and detail figures sit in tube-well with a light inset amber wash — no outer bloom pulse on the home surface.

### Shadow Vocabulary
- **Panel inset gloom** (`box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(138, 144, 152, 0.08)`): Chassis face depth.
- **Tube / detail figure well** (`box-shadow: inset 0 0 40px rgba(255, 106, 26, 0.05)`): Soft inset amber on home project previews and detail proof figures.
- **Contact glow text** (`text-shadow: 0 0 12px rgba(255, 106, 26, 0.35)`): Hover/focus on hero/foot contact links only — not on `.detail-back`.

### Named Rules
**The Inset Well Rule.** Proof imagery lives in tube wells — dark recess + edge rule — never in lifted white cards or floating media frames.

## Shapes

Hard instrument geometry: `border-radius: 0` everywhere. Chassis is a thick steel frame; banks and figures use 1px `chassis-edge` strokes. Interactive text links use 1px bottom borders that go glow-tinted on hover. No pills, no rounded chips, no soft cards.

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

### Hero CV
- **Band:** Home-only `min-height: 30vh` with flex-centered `.hero-body`
- **Body:** One steel one-liner (`.hero-copy`) — synthetic scaffolding until real bio
- **Contacts:** Same Email / LinkedIn / GitHub rail as the foot (`.hero-contacts` + `.foot-link` at label `0.75rem`); hero passes `withIcons` for 0.75rem inline SVG icons before each label; mid screens cluster after intro (gap); from 900px `space-between` parks contacts on the right; row cross-axis centers one-liner with the rail. Contact hrefs stay synthetic by intent until real URLs are supplied.

### Skills Bank
- **Style:** Edge-top section; wrap list of skill names only (plate-soft at `0.9375rem`) — no `.idx` spans on home
- **Disclosure:** Primary strip shows the first four skills; remainder lives in `.skills-more` (`More banks · N`) with glow `+`/`−` marker at label `0.75rem`

### Project Link
- **Shape:** Top edge rule; glow rule on hover/focus
- **Preview:** Inset `.project-well` (tube-well + chassis-edge + inset amber) with 16:9 proof schematic before meta
- **Lane:** Uppercase steel-dim stack tags from project data at `0.75rem` (not a generic “Bank” label)
- **Title / summary:** Plate title + steel summary; trailing `.synth-note` disclaimer at `0.75rem` under the bank list

### Foot / Contact Link
- **Style:** Uppercase steel-dim at `0.75rem`; padding `0.35rem 0` for hit area; glow color + bottom border + text-shadow on hover/focus (hero + foot); foot rail omits icons
- **Mark:** “Nixie laboratory counter” in steel-dim (foot only)

### Detail Deck / Figure / Back
- **Deck:** `.detail-deck` — copy column (problem / approach / outcome) + media column of tube-well figures; single column stacked until 900px, then copy|media split
- **Figure:** Tube-well background + chassis-edge + light inset amber; full-width image; uppercase figcaption under a top edge rule
- **Meta tags:** Optional `Tn` indexes (`.idx`) before each tag name — detail only
- **Back:** `width: fit-content` / `align-self: flex-start`; label `0.75rem`; glow color + bottom border on hover/focus — text-only signal, no contact text-shadow (`← Chassis face`)

## Do's and Don'ts

### Do:
- **Do** keep specialty as the glow label on the chassis cap.
- **Do** keep the first viewport as CV one-liner + contact (hero icons allowed); skills and projects as labeled banks below.
- **Do** put proof imagery in inset tube wells with hard edges (home project previews and detail figures).
- **Do** keep home hero at content band (`min-height: 30vh`, flex-centered) — not a full-viewport stretch.
- **Do** keep detail full-rail with `.detail-deck` copy|media from 900px — no 52rem content clamp.
- **Do** use Chakra Petch only for name and project/detail titles; mono everywhere else.
- **Do** honor `prefers-reduced-motion` by disabling contact-link transitions.
- **Do** keep steel-dim ≥4.5:1 on chassis for secondary UI text (`#747a82`).

### Don't:
- **Don't** flood large surfaces with nixie orange — glow is signal, not a theme wash.
- **Don't** introduce soft cards, pills, or non-zero radius on this chassis.
- **Don't** replace plate/steel type roles or swap display/mono pairings.
- **Don't** add floating badges, kickers, or promo chips on figure media.
- **Don't** invent filled primary buttons; interaction stays as instrument links and edge rules.
- **Don't** resurrect skill T-indexes on the home bank, a lead-project hero, or a decorative home tube bank — those patterns are retired.
- **Don't** add text-shadow glow to `.detail-back` — back link is color + underline only.
