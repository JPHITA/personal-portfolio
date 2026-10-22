---
target: project detail pages
total_score: 27
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
target_identity: "file:/home/jphita/Desktop/Juan Nicolas Piedrahita Salas/personal-portfolio/src/app/projects/[slug]/page.tsx"
target_fingerprint: "sha256:46f1a64ec250ff1aec9f3db4360d8bb2f0baae07ef8e730308c9520244cbbc02"
target_path: /home/jphita/Desktop/Juan Nicolas Piedrahita Salas/personal-portfolio/src/app/projects/[slug]/page.tsx
timestamp: 2026-10-22T00-12-37Z
slug: src-app-projects-slug-page-tsx
---
Method: dual-agent (A: 7a24f1fd-c98a-4401-b62e-f9f72ec41f1a · B: 20f5ea82-67b6-4ebc-b527-93c173065899)

# Critique: project detail (`src/app/projects/[slug]/page.tsx`)

Experience portfolio. One score for the shared detail chrome. Heuristics 7 and 10 are n/a. Applicable maximum is 32. All six slugs were in the review set: `airflow-etl-aws`, `speed-detection-api`, `trading-rpa`, `cctv-vehicle-monitor`, `purchase-prediction`, `research-grant-ml`. Copy differences below do not split the score.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Back, title, and Problem / Approach / Outcome are immediate; maturity lives inside the outcome sentence |
| 2 | Match System / Real World | 3 | The section order matches a hiring read; the figure has no sighted caption |
| 3 | User Control and Freedom | 4 | `← Back to home` and the name in the cap both return to `/` |
| 4 | Consistency and Standards | 3 | All six pages share the deck; `.detail-back:focus-visible` sets `outline: none` |
| 5 | Error Prevention | 4 | Read-only page; footer targets are the real email, LinkedIn, and GitHub |
| 6 | Recognition Rather Than Recall | 4 | Title, story, figure, and skills are on the page |
| 7 | Flexibility and Efficiency | n/a | Experience portfolio; accelerators are not the job |
| 8 | Aesthetic and Minimalist Design | 3 | The deck is tight; Airflow puts 11 skill names in one band |
| 9 | Error Recovery | 3 | Back is the exit; a missing slug was not opened |
| 10 | Help and Documentation | n/a | Experience portfolio; the story is the explanation |
| **Total** | | **27/32** | **Good (84%)** |

## Design Specificity Verdict

**LLM assessment.** Same authored instrument as the home chassis. Full-rail deck, glow section labels, steel copy, one tube-well figure. It is not an interchangeable case-study template with a hero metric and a card grid. Specialty stays on the cap. The intro is replaced by the project story, which is the right trade for this route.

**Deterministic scan.** The same CLI scan (exit 0, `[]`) covered `src/app/projects`. In-page `detect.js` on `/projects/airflow-etl-aws`, `/projects/speed-detection-api`, and `/projects/trading-rpa` each logged `[impeccable] No anti-patterns found.` Highlight count was 0. `cctv-vehicle-monitor` was not injected; trading-rpa was the extra detail page. The detector did not catch the back-link focus override. No false positives.

**Visual overlays.** Injection succeeded on those three detail URLs and drew nothing. Live server port 8400 was stopped with `--keep-inject`. Source was not edited.

## Overall Impression

The detail deck is the stronger surface. A hiring manager gets one project, three labeled sections, a real flowchart, the skills that page used, and a way home. The biggest opportunity is the phone: the contact rail is only in the foot, and on Airflow that foot starts at about y=1182 inside an 844px screen.

## What's Working

- One deck on every slug: Problem, Approach, Outcome, then Skills used, then the foot. Desktop splits copy and media. At 390px Airflow is a single column, body text `text-align: start`.
- Figures are real amber-on-black diagrams with specific alt text. Airflow's image box matches its intrinsic ratio with 2px of well padding. CSS is not letterboxing the proof.
- Back is a visible text control (`← Back to home`, about 30px tall on the phone). The name in the cap is a link to `/` on detail pages.

## Priority Issues

### [P2] On a phone the contact rail is below the story

- **Why it matters:** Contact is the job of the site. The detail route drops the hero rail and keeps Email / LinkedIn / GitHub in the foot only. At 390×844 the Airflow foot starts near y=1182 (page height about 1244). The hire action on that page is a scroll past the story and the figure.
- **Fix:** Repeat the three text links under the title, the same steel rail as the foot. Leave icons off if the foot stays text-only.
- **Suggested command:** `$impeccable layout`

### [P2] The back link removes the focus ring

- **Why it matters:** `.detail-back:focus-visible` sets `outline: none` and keeps only the glow color and the bottom border. Contact links and project cards keep the global 2px glow outline. Keyboard users lose the ring on the control that leaves the page.
- **Fix:** Keep the glow color and the bottom border, and keep the global focus outline. Do not add text-shadow; DESIGN.md keeps that off `.detail-back`.
- **Suggested command:** `$impeccable audit`

### [P3] Airflow lists 11 skills in one band

- **Why it matters:** The row is a label list, not a menu, but it is the noisiest thing on an otherwise short deck. The other pages use shorter lists (trading has 8).
- **Fix:** Let it wrap, and add a second labeled line once a group passes four, matching the home banks.
- **Suggested command:** `$impeccable layout`

## Per-page notes that do not split the score

Shared chrome held. These are copy facts:

- Trading's outcome says the bots, webhooks, and Redis "are being assembled." The home summary does not.
- CCTV's outcome opens with "Working prototype." The home summary does not.
- Purchase, speed, Airflow, and the research platform state results in the outcome paragraph without that caveat.
- Trading's diagram is a dark plate (natural about 630×352) with the flowchart inside the art. Airflow's diagram is the same kind of plate (natural about 351×196 as served). Well padding is 2px. This is not the old forced 16:9 letterbox.

## Cognitive load

1 failure. Low.

| Check | Result |
|---|---|
| Single focus | Pass. One project. |
| Chunking | Fail. Airflow lists 11 skill tags in one row. |
| Grouping | Pass. Copy, media, skills under a rule. |
| Visual hierarchy | Pass. Back, plate title, glow section labels. |
| One thing at a time | Pass. |
| Minimal choices | Pass. Back, the name, and three contact links. |
| Working memory | Pass. The title stays on the page. |
| Progressive disclosure | Pass. Home summary, then this story. |

No action has more than 4 options. The Airflow skill row is a label list, not a menu.

## Emotional journey

Peak is the flowchart in the tube well next to a concrete outcome (Airflow's run flow, the speed API's result line). The phone valley is the first screen: back, title, and the start of the story, with the figure and the contact rail below the fold. Trading's outcome is a quieter valley because the system is still being assembled, and that sentence is the honest one. The end is Skills used, then the same contact rail. Reassurance is the back link and the name in the cap.

## Persona Red Flags

**Jordan (first-timer).** The path is readable: back, title, three labeled sections. Diagrams carry their own labels. Trading and CCTV finally say the work is unfinished, but only after the home card has already sounded finished. There is no caption under the figure for a sighted reader who does not parse the amber boxes; alt text covers assistive tech.

**Riley (stress tester).** The six URLs use the same deck. The back link's focus treatment does not match every other instrument link. A bad slug was not opened, so recovery there is untested. Refresh keeps the story; there is no form state to lose.

**Casey (phone).** The speed title wraps. Back is about 30px tall and the foot links match the home rail (about 32px). The figure and the contact links sit below the first screen on Airflow. Copy is left-aligned, not justified. Specialty on the cap does not overflow at 390px.

## Minor Observations

- No `figcaption` on the detail figures sampled. Not reopened as a defect. DESIGN.md still describes an uppercase figcaption; alt text is doing that job for assistive tech only.
- On home the name is an `h1` and not a link. On detail it is a link to `/`. That split is correct.
- Placeholder plates and "placeholder" copy were not on these pages.
- Detail body text is `text-align: start` at desktop and at 390px.

## Questions to Consider

- The flowchart is the proof. What one line under the well would tell a sighted reader what the branches mean, without bringing back a caption that only repeated the alt text?
- Contact is the point of the page. On a phone, does that rail belong under the title as well as in the foot?
- Eleven skills under Airflow. Which of those did this project actually turn on?
