---
version: 1
slug: "home"
primary_target: "home"
related_targets: ["projects/[slug]"]
---

# Home + project detail — Experience portfolio

## Scope and mode

Visitor mode: Experience. Routes: `/` (instrument face) and `/projects/[slug]` (deeper panels). Sections: chassis cap, lead hero, labeled skills strip, projects list, contact foot. No form, no CMS, no light theme.

## Audience and job

Hiring managers/engineers scan specialty → proof → skills → contact. Success: specialty readable without decoding glow; Email / LinkedIn / GitHub one glance away; two synthetic project stories evaluable on-page.

## Chosen direction

Nixie Counter (`challenger-nixie`, catalog `signals-instruments-nixie-laboratory-counter`). Composition match: `.impeccable/mocks/decision/challenger-nixie.html`. buildPath: code.

## Direction contract

THESIS: Skills and proof as labeled tube banks on blackened steel; specialty engraved on the chassis cap. Refuses generic card-grid portfolio and glow-over-words gadget demos.

OWN-WORLD: Ground `#0c0c0e` / `#1a1c20`; neon tube glow `#ff6a1a`; steel gray `#8a9098`; near-white `#f0f2f4` / `#e8eaee`. Chakra Petch display + IBM Plex Mono for labels/data. Chassis borders, inset tube wells, instrument foot rail. Nav/buttons/links speak as instrument controls (cap rail, bank indexes, foot contacts).

STORY: Visitor reads name + specialty, judges the live lead project, scans labeled skill banks, opens a project panel or hits contact links. Believes craft from on-page proof, not claims.

FIRST VIEWPORT: Cap row — name left (hero-level), specialty right in orange tracked caps. Hero — lead project title large left, short intro, three decorative nixie tubes right (`aria-hidden`). Primary action: lead title links to `/projects/[slug]`. Immediately under hero: “Skill banks · labeled” with indexed skill words (words first). Cap and foot contacts always reachable.

FORM: Nixie laboratory counter, challenger win from direction hand. Signature interaction: soft tube glow pulse on the live bank + one focus/active lane on the lead project + contact link hover as rail highlight. Motion grammar: presence glow, not theater. SEED REFERENCE: seed:97a19711d21ba71f

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Constraints

Synthetic content only. Skills under hero. Contact links only. Dark only. Easy-to-extend projects data file.
