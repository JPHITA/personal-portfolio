# Portfolio shape brief — Nixie Counter

## 1. Job and audience

- **Who:** Hiring managers and engineers scanning a personal portfolio for a full-stack / systems candidate.
- **Context:** Dark, night-ops instrument aesthetic; they need specialty, proof, and skills in one pass.
- **Need:** Identify role fast, judge craft from project proof, grab contact without hunting forms.
- **Visitor mode:** Experience — browse home, open project details, leave via links.

## 2. Outcome and proof

- **Primary task:** Land on home → read specialty + lead project → scan labeled skills → open a project or hit contact.
- **Success:** Specialty and skills readable without decoding glow; contact (Email, LinkedIn, GitHub) always one glance away; two project stories feel real enough to evaluate.
- **Evidence:** Project detail pages with images that stay on-page (no lightbox-only / off-site gallery); skills as plain labeled words under the hero.
- **Product truth:** Personal portfolio for Juan Nicolas Piedrahita Salas — code-first Next.js surface, not a design-tool mock export.

## 3. Selected direction

- **Label / optionId / kind:** Nixie Counter · `challenger-nixie` · challenger  
- **Catalog:** `signals-instruments-nixie-laboratory-counter`  
- **Lineage:** Nixie-tube laboratory counter  
- **Visual authority:** Blackened steel chassis (`#0c0c0e`, `#1a1c20`), neon orange tube glow (`#ff6a1a`), cool steel gray body copy (`#8a9098`), near-white nameplate type (`#f0f2f4` / `#e8eaee`). Materials: blackened steel, glass envelopes, neon orange glow.
- **Thesis:** Skills and proof as labeled tube banks on blackened steel; specialty engraved on the chassis cap.
- **Sequence:** Chassis cap (name + specialty) → hero plate (lead project title + short intro beside tube motif) → labeled skill banks directly under hero → contact on the foot rail → project detail routes below.
- **Focal moment:** Lead project as the “live count” — tube bank motif supports, never replaces, the project name and one supporting sentence.
- **Raised from declined hands (apply in craft, do not re-home worlds):** one focus ring / active lane on the lead project; contact as always-visible edge/caps links; skills as sequential labeled rows (fixed bank order); brightest contrast reserved for skill labels, glow secondary.
- **Risk to avoid:** Novelty gadget if orange glow outranks plain skill names.
- **Implementation consequence:** Code-led build (`buildPath: code`). Match decision sketch (`.impeccable/mocks/decision/challenger-nixie.html`) arrangement, palette, type density; decision comp (`.impeccable/mocks/decision/challenger-nixie.webp`) is finish-review critique reference only — do not regenerate. World board/hero set the craft bar: board + hero at catalog URLs for this world.

## 4. Scope and boundaries

- **Fidelity:** Production-quality responsive pages in Next.js + TypeScript + Tailwind; dark theme only (preference locked).
- **Breadth:** Home + project detail pages; two fake projects with plausible titles/copy/images.
- **Interactivity:** Navigation to project details; contact as links only (no contact form, no email modal).
- **Named target:** `.impeccable/shape/portfolio-brief.md` → build from this brief after confirmation.
- **Untouched:** No CMS, no auth, no blog, no light theme, no surface-brief persistence, no new design-system package.
- **Anti-goals:** Skills buried in glow/digits-only tubes; cards-as-default UI; purple/cream AI-default looks; contact forms; image carousels that leave the page; regenerating the chosen decision comp from scratch.

## 5. States and ranges

- **Content:** ~1 nameplate specialty line; 1 lead project on home hero; 2 fake projects total; ~5–8 labeled skills on home under hero; 3 contact links.
- **Copy length:** Hero intro ≤ ~2 short sentences; project detail: problem / approach / outcome paragraphs, not essays.
- **Images:** Stay embedded on page (inline figures); placeholder or stock OK for fake projects; world board/hero inform craft, not replace project screenshots.
- **Material states:** Default dark chassis; subtle hover on contact links and project affordances; no broken empty states required beyond sensible missing-image fallback.

## 6. Interaction and layout

- **Hierarchy:** Name/specialty (chassis cap) > lead project hero > labeled skills strip > project list / details > contact foot.
- **Topology:** Home is the instrument face; project details are deeper panels, same visual world.
- **Skills placement (hard):** On home, immediately below the hero — labeled, scannable text (words first, tube index/labels secondary).
- **Responsiveness:** Desktop first-viewport matches sketch density intent; mobile stacks cap → hero → skills → list without losing label readability.
- **Affordances:** Project titles/links clearly clickable; contact links plain and permanent in the foot (or equivalent always-visible rail).
- **Motion (light):** 2–3 intentional cues (e.g. soft tube glow presence, focus ring on lead project, link hover) — presence, not theater.

## 7. Constraints and open decisions

- **Platform:** Next.js + TypeScript + Tailwind; code-first (no owed pre-build comp round).
- **Delivery:** App in repo; images on-page.
- **A11y:** Readable contrast for skill labels and body; decorative tube digits `aria-hidden` if non-informational; links with clear names.
- **i18n:** English only unless later requested.
- **Do not invent:** Real employer claims, real project metrics, extra sections (testimonials, blog, newsletter), light mode, contact form fields.
- **Open (builder may choose within world):** Exact fake project names/copy; skill list contents; font pairing consistent with sketch (Chakra Petch + IBM Plex Mono or equivalent expressive + mono).

---

**Confirm this brief (or one correction round) before any build code.**
