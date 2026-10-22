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
    textColor: "{colors.steel}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.15rem"
  link-glow-hover:
    backgroundColor: "transparent"
    textColor: "{colors.glow}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.15rem"
  project-link:
    backgroundColor: "transparent"
    textColor: "{colors.plate}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0 0.25rem"
  project-link-hover:
    backgroundColor: "transparent"
    textColor: "{colors.plate}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0 0.25rem"
  hero-contacts:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
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
  project-carousel-nav:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.1rem"
  project-carousel-nav-hover:
    backgroundColor: "transparent"
    textColor: "{colors.glow}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.1rem"
---

# Design System: Nixie Counter

## Overview

**Creative North Star: "Nixie Laboratory Counter"**

The portfolio reads as a single instrument chassis: blackened steel plate, inset tube wells for project proof, and amber nixie glow used sparingly as signal — never as decoration wash. Specialty sits on the chassis cap; the first viewport carries a short CV intro and contact; skills and projects follow as labeled banks of readings. Hierarchy comes from plate vs steel type, chassis-edge rules, and glow on instrument labels and active states.

Density is laboratory-tight: mono labels with wide tracking, short supporting copy, hard edges, no card chrome. Skills and the project carousel sit close under the hero so titles clear the fold. Hover and focus still use glow on contact links and project top rules. The carousel advances one slide every 5 seconds, stops while the pointer is over it or focus is inside it (and resumes when that clears), and keeps running after Prev, Next, or a dot is used. `prefers-reduced-motion` stops that autoplay, sets slide duration to 0, and drops nav and dot transitions; it also kills contact-link transitions.

**Key Characteristics:**
- Full-bleed chassis panel with thick steel border and inset gloom
- Chakra Petch for name / project titles; IBM Plex Mono for everything else
- Glow (`#ff6a1a`) reserved for specialty, lab labels, focus, and hover signal
- Hero is a short CV intro (2–4 sentences) + Email / LinkedIn / GitHub (icons on hero rail); no lead project, no decorative tube bank
- Home projects are a looping carousel (one slide below 768px, two from 768px). Each card is lane → title → tube-well → summary (titles above wells)
- Skills are word-first (no T-indexes), grouped into labeled banks, all visible. The Google Cloud Certified Professional Data Engineer line is glow; the other certifications sit in steel under it
- Foot/hero contacts: steel + weight 600 + steel rest underline; glow color/underline/text-shadow only on hover/focus

## Colors

One accent voice on a blackened-steel ground; plate and steel carry readable hierarchy.

### Primary
- **Nixie Glow** (`{colors.glow}`): Specialty line, lab labels (`skills-lab`, `projects-lab`, detail section heads), focus ring, hover signal on hero/foot/back/title links and carousel Prev/Next, project-link top rule, and the active carousel dot. Rarity is the point.

### Neutral
- **Chassis Black** (`{colors.chassis}`): Page ground and panel base.
- **Chassis Face** (`{colors.chassis-face}`): Gradient wash over the steel plate texture.
- **Chassis Steel** (`{colors.chassis-steel}`): Outer chassis border color.
- **Chassis Edge** (`{colors.chassis-edge}`): Hairline instrument rules, scrollbar thumb.
- **Steel** (`{colors.steel}`): Body/supporting copy; default contact-link color (`.foot-link` at rest, weight 600).
- **Steel Dim** (`{colors.steel-dim}`): Lanes, foot mark, skill-group labels, detail tag indexes, detail-back at rest. Tuned for ≥4.5:1 on chassis (`#747a82`; prior `#6a7078` failed AA at ~3.9:1).
- **Plate** (`{colors.plate}`): Primary display text — name, project titles.
- **Plate Soft** (`{colors.plate-soft}`): Default body foreground and skill names.
- **Tube Well** (`{colors.tube-well}`): Inset media well behind home project previews and detail figures.
- **Selection Wash** (`{colors.selection}`): Text selection highlight.

### Named Rules
**The One Glow Rule.** Nixie orange is signal only: specialty, lab labels, focus, and hover. Do not flood backgrounds or large fills with glow.

**The Plate-on-Steel Rule.** Titles and name use plate; supporting sentences use steel. Never invert that hierarchy.

## Typography

**Display Font:** Chakra Petch (with system-ui, sans-serif) — weights 500 / 700 loaded; build uses 700 for titles  
**Body Font:** IBM Plex Mono (with ui-monospace, monospace) — weights 400 / 600 loaded; body uses 400; contact links use 600  
**Label/Mono Font:** IBM Plex Mono (same stack)

**Character:** Instrument face: geometric display for the reading that matters; mono for every label, lane, and rail. Tight leading on titles; wide tracking on uppercase labs.

### Hierarchy
- **Display** (700, `clamp(2rem, 5vw, 3rem)`, lh 1.05): Reserved scale; not used on the current home hero.
- **Headline** (700, `clamp(1.5rem, 3.5vw, 2.25rem)`, lh 1.15, tracking `0.02em`): Brand name on chassis cap (`.cap-title`). Detail title uses `clamp(1.75rem, 4vw, 2.5rem)` / lh 1.1.
- **Title** (700, `1.25rem`): Project bank headings (`.project-link h2`), above the tube well.
- **Body** (400, `0.875rem`, lh 1.55): Hero intro (`.hero-copy`, `clamp(0.9375rem, 1.35vw, 1.0625rem)`, lh 1.5; measure `min(58ch, 100%)` → `min(70ch, 55%)` at 900px → `min(90ch, 75%)` at 1280px) — real CV intro, 2–4 sentences; detail body `0.875rem` / lh 1.6 (max ~62ch); project summary `0.8125rem` / lh 1.5 (max ~48ch).
- **Label** (400 default / 600 on `.foot-link` and carousel Prev/Next, `0.75rem` for interactive rails / specialty / synth-note / lanes / back / skill-group labels; `0.6875rem` for lab signals and figcaptions; tracking `0.14em`–`0.18em`, uppercase where instrument): Specialty (`.cap-role` at `0.75rem`), lab labels, hero/foot contact rails, carousel Prev/Next, carousel status (uppercase synth-note, tabular numerals), project lanes, back link, synth-note, figcaption.

### Named Rules
**The Cap Specialty Rule.** Specialty is always the glow uppercase label on the chassis cap — never demoted to body steel and never replaced by a marketing eyebrow.

**The Word-First Skills Rule.** Skill banks (home groups and detail “Skills used”) list names only in plate-soft — no `.idx` / `Tn` spans.

## Layout

One chassis composition: `.panel` is min-height `100dvh`, column flex, thick border (`10px` → `12px` at 768px), padding `1.5rem 1.25rem 1.25rem` → `2.25rem 3rem 1.5rem` at 768px. Cap → hero → skills bank → project carousel → foot rail (`margin-top: auto`).

Home hero (`.panel-home .hero`): `min-height: 30vh`, column flex, vertically centered content (`justify-content: center`); padding `1.75rem 0 1.25rem` → `2rem 0 1.5rem` at 900px. Do not stretch the hero to fill the viewport.

Hero distribution (`.hero-body`): `<640` column stack; `640+` row, `align-items: center`, gap cluster (intro `flex: 1`, max ~58ch; contacts `flex-shrink: 0`; no `justify` so left cluster stays tight); `900+` `justify-content: space-between` with intro max `min(70ch, 55%)`; `1280+` intro max `min(90ch, 75%)` so contacts sit on the right without a dead right half or a hollow center.

Skills bank (`.skills`): edge-top; padding `0.875rem 0 0.35rem` — tight so project titles clear the fold. Skills wrap gap `0.5rem 1.5rem`. Projects (`.projects`): edge-top; padding `1rem 0`, margin-top `0.25rem`. The home list is a looping carousel, not a static grid. Head row: glow lab “Selected projects”, then a steel-dim status and Prev / Next. The viewport shows **1** full-width slide below 768px (track gap `0.75rem`) and **2** slides from 768px (track gap `1rem`; each slide `flex: 0 0 calc((100% - 1rem) / 2)`). Movement is one slide, aligned to the start. Each slide stacks **lane → title → well → summary**. Controls, dots, keyboard, and autoplay are specified under Projects Carousel.

Detail fills the chassis rail (no `max-width: 52rem` clamp). `.detail-title` is full rail width (`width: 100%`, no ch clamp). `.detail-deck` stacks copy then media below 900px; from 900px it splits `minmax(0, min(42ch, 40%)) | minmax(0, 1fr)` (story measure left, proof wells fill remaining width). Section dividers are 1px `chassis-edge` top borders.

Breakpoints observed: 640px (hero body row, foot row), 768px (panel padding/border, carousel 1→2 slides), 900px (hero `space-between` + hero padding + detail-deck columns), 1280px (hero intro measure grows).

## Elevation & Depth

Depth is tonal and inset, not floating cards. The panel uses a cover steel-plate image under a dark gradient, plus inset black vignette and a hairline top highlight. Home project previews and detail figures sit in tube-well with a light inset amber wash — no outer bloom pulse on the home surface.

### Shadow Vocabulary
- **Panel inset gloom** (`box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(138, 144, 152, 0.08)`): Chassis face depth.
- **Tube / detail figure well** (`box-shadow: inset 0 0 40px rgba(255, 106, 26, 0.05)`): Soft inset amber on home project previews and detail proof figures.
- **Contact / carousel-nav glow text** (`text-shadow: 0 0 12px rgba(255, 106, 26, 0.35)`): Hover/focus on hero/foot contact links and carousel Prev/Next — not at rest, and not on `.detail-back`.
- **Active carousel dot** (`box-shadow: 0 0 10px rgba(255, 106, 26, 0.35)`): Glow mark on the current snap only.

### Named Rules
**The Inset Well Rule.** Proof imagery lives in tube wells — dark recess + edge rule — never in lifted white cards or floating media frames.

## Shapes

Hard instrument geometry: `border-radius: 0` everywhere. Chassis is a thick steel frame; banks and figures use 1px `chassis-edge` strokes. Contact links (`.foot-link`) keep a steel-tinted 1px bottom border at rest (`rgba(138, 144, 152, 0.45)`); hover/focus turns the border glow-tinted. Project links use a 1px top edge that goes glow on hover/focus. Carousel dots are `0.55rem` squares with a chassis-edge stroke; the active dot is a glow fill. No pills, no rounded chips, no soft cards.

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
- **Body:** Steel CV intro (`.hero-copy`), 2–4 sentences; `text-align: justify`
- **Contacts:** Same Email / LinkedIn / GitHub rail as the foot (`.hero-contacts` + `.foot-link` at label `0.75rem` / weight 600); hero passes `withIcons` for 0.75rem inline SVG icons before each label; mid screens cluster after intro (gap); from 900px `space-between` parks contacts on the right; row cross-axis centers the intro with the rail. Hrefs are the real email, LinkedIn, and GitHub profiles.

### Skills Bank
- **Style:** Edge-top section with tight padding. Certifications first: group label in steel-dim, lead certification in glow (`.cert-lead`), remaining certifications in steel. Then labeled groups (`.skill-group-label` + `.skills-list`) in a single column, two columns from 640px. Skill names only, plate-soft at `0.9375rem` — no `.idx` spans on home
- **Groups:** Languages, Backend, Data, Databases, Cloud, ML, Automation & RPA. All groups stay visible

### Projects Carousel
Home project list inside `.projects`. Region is `role="region"` with `aria-roledescription="carousel"`, named by the glow lab “Selected projects”.

- **Slides:** Loop, align start, scroll one slide. **1** visible below 768px (`flex: 0 0 100%`, track gap `0.75rem`); **2** from 768px (`flex: 0 0 calc((100% - 1rem) / 2)`, track gap `1rem`). Track sets `touch-action: pan-y pinch-zoom`.
- **Status:** Uppercase steel-dim synth-note (`0.75rem`, tabular numerals), `aria-live="polite"`. Text is `{selectedSnap + 1}–{min(projectCount, selectedSnap + perPage)} / {projectCount}`. `perPage` is 1 below 768px and 2 from 768px.
- **Prev / Next:** Visible labels “Prev” and “Next” (`aria-label` “Previous projects” / “Next projects”). Transparent fill, steel, weight 600, `0.75rem`, uppercase, tracking `0.14em`, padding `0.35rem 0.1rem`, steel bottom border at rest; glow color, glow border, and contact text-shadow on hover/focus. Global `:focus-visible` ring stays. Controls stay enabled because the track loops. The stylesheet defines an unused disabled treatment (steel-dim, transparent underline, opacity `0.55`, `not-allowed`); the carousel does not set `disabled`.
- **Dots:** Omitted when there is only one scroll snap. Otherwise one `0.55rem` square button per snap (chassis-edge stroke, transparent fill). Active snap: glow fill, glow border, `box-shadow: 0 0 10px rgba(255, 106, 26, 0.35)`, `aria-current="true"`. Hover/focus turns the border glow. Group label “Project slides”. Each name is `Project {n} of {snapCount}` (`snapCount` is the scroll-snap list, not a separate page size).
- **Keyboard:** While focus is inside the region, ArrowLeft moves to the previous snap, ArrowRight to the next, Home to the first, End to the last.
- **Autoplay:** Delay `5000ms`, one slide. Stops while the pointer is over the carousel and while focus is inside it, then resumes when that clears. Prev, Next, and dot clicks do not stop it.
- **Reduced motion:** Autoplay is stopped, slide duration is `0`, and Prev/Next and dot transitions are `none`.
- **Card order:** Lane → title → well → summary (Project Link).

### Project Link
- **Role:** Slide card inside the home carousel
- **Shape:** Top edge rule; glow rule on hover/focus; padding `0.75rem 0 0.25rem`; keeps global `:focus-visible` ring
- **Order:** Lane → plate title → inset well → steel summary
- **Preview:** Inset `.project-well` (tube-well + chassis-edge + inset amber; margin `0.5rem 0 0.65rem`) with 16:9 proof schematic under the title
- **Lane:** Uppercase steel-dim stack tags from project data at `0.75rem` (not a generic “Bank” label)
- **Title / summary:** Plate title + steel summary. Home lanes are short labels; the full skill list is the detail “Skills used” bank. Figure wells are marked placeholder plates until real images replace the PNGs

### Foot / Contact Link
- **Style:** Uppercase steel at `0.75rem` / weight 600; padding `0.5rem 0.15rem` for hit area; rest underline `1px solid rgba(138, 144, 152, 0.45)`; glow color + glow border + text-shadow only on hover/focus (hero + foot); keeps global `:focus-visible` ring; foot rail omits icons
- **Mark:** “Nixie laboratory counter” in steel-dim (foot only)

### Detail Deck / Figure / Back
- **Deck:** `.detail-deck` — copy column (problem / approach / outcome) + media column of tube-well figures; single column stacked until 900px, then copy|media split
- **Figure:** Tube-well background + chassis-edge + light inset amber; full-width image; uppercase figcaption under a top edge rule
- **Meta tags:** Plain skill labels only — no `Tn` / `.idx` wrappers
- **Title:** `.detail-title` spans the full chassis content width
- **Back:** `width: fit-content` / `align-self: flex-start`; label `0.75rem`; glow color + bottom border on hover/focus — text-only signal, no contact text-shadow (`← Back to home`); may clear outline on its own focus rule (unlike home contact and project links)

## Do's and Don'ts

### Do:
- **Do** keep specialty as the glow label on the chassis cap.
- **Do** keep the first viewport as CV intro + contact (hero icons allowed); skills bank and project carousel below.
- **Do** put proof imagery in inset tube wells with hard edges (home project previews and detail figures).
- **Do** keep home projects as a looping carousel: one slide below 768px, two from 768px; Prev/Next; snap dots when more than one snap; ArrowLeft, ArrowRight, Home, and End while focus is inside the region.
- **Do** keep home project order lane → title → well → summary (titles above wells).
- **Do** keep home hero at content band (`min-height: 30vh`, flex-centered) — not a full-viewport stretch.
- **Do** keep detail full-rail with `.detail-deck` copy|media from 900px — no 52rem content clamp.
- **Do** use Chakra Petch only for name and project/detail titles; mono everywhere else.
- **Do** honor `prefers-reduced-motion` by stopping carousel autoplay, setting slide duration to 0, disabling carousel nav and dot transitions, and disabling contact-link transitions.
- **Do** keep steel-dim ≥4.5:1 on chassis for secondary UI text (`#747a82`).
- **Do** keep global `:focus-visible` rings on `.project-link` and `.foot-link` (no `outline: none`).

### Don't:
- **Don't** flood large surfaces with nixie orange — glow is signal, not a theme wash.
- **Don't** introduce soft cards, pills, or non-zero radius on this chassis.
- **Don't** replace plate/steel type roles or swap display/mono pairings.
- **Don't** add floating badges, kickers, or promo chips on figure media.
- **Don't** invent filled primary buttons; interaction stays as instrument links and edge rules.
- **Don't** resurrect skill T-indexes (home or detail), a collapsed “more skills” disclosure, a lead-project hero, or a decorative home tube bank — those patterns are retired.
- **Don't** add text-shadow glow to `.detail-back` — back link is color + underline only.
- **Don't** put glow underline/text-shadow on contact links at rest — rest is steel + weight 600 + steel underline only.
