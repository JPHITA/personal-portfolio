---
target: home page
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
target_identity: "file:/home/jphita/Desktop/Juan Nicolas Piedrahita Salas/personal-portfolio/src/app/page.tsx"
target_fingerprint: "sha256:ba0a755371f31d641f0f9cf678d5bd1ac67cc4090e84f02925778ac7a3af6b41"
target_path: /home/jphita/Desktop/Juan Nicolas Piedrahita Salas/personal-portfolio/src/app/page.tsx
timestamp: 2026-10-22T00-12-36Z
slug: src-app-page-tsx
---
Method: dual-agent (A: 7a24f1fd-c98a-4401-b62e-f9f72ec41f1a · B: 20f5ea82-67b6-4ebc-b527-93c173065899)

# Critique: home (`src/app/page.tsx`)

Experience portfolio. Heuristics 7 and 10 are n/a. Applicable maximum is 32. Scored the current rendered home page. The 18 Oct 2026 home critiques are a different fingerprint and were not reused.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Live range matches the wells, except the loop seam announces `6–1 / 6` |
| 2 | Match System / Real World | 3 | Contact and specialty are plain; DAG, YOLO, Parquet, and RPA are not glossed |
| 3 | User Control and Freedom | 3 | Prev, Next, dots, and the six card links work; autoplay is the only motion you do not stop with a click |
| 4 | Consistency and Standards | 4 | One chassis, one card order (lane, title, well, summary), one contact rail |
| 5 | Error Prevention | 3 | Links are the real email, LinkedIn, and GitHub; two home cards omit maturity the detail page states |
| 6 | Recognition Rather Than Recall | 3 | Titles and summaries are on the cards; the six dots are named only "Project n of 6" |
| 7 | Flexibility and Efficiency | n/a | Experience portfolio; accelerators are not the job |
| 8 | Aesthetic and Minimalist Design | 3 | Nixie chassis is tight; seven skill banks sit at equal weight before the wells |
| 9 | Error Recovery | 3 | No error UI on this path; a bad URL was not opened |
| 10 | Help and Documentation | n/a | Experience portfolio; the page is the explanation |
| **Total** | | **25/32** | **Good (78%)** |

## Design Specificity Verdict

**LLM assessment.** Authored for this portfolio. Blackened steel, glow reserved for the specialty and the lab labels, hard edges, tube wells, Chakra Petch titles, IBM Plex Mono rails. A generic card grid would not survive swapping the copy. The first viewport does the hiring job: name, "Backend & Data Engineer", a short CV intro, and Email / LinkedIn / GitHub.

**Deterministic scan.** `impeccable detect` on `src/app/page.tsx`, `src/app/projects`, `src/components`, and `src/content/projects` exited 0 with `[]`. Zero rules, zero files. The in-page `detect.js` overlay on `/` reported the same: no anti-patterns, zero highlight nodes. The detector did not see the seam label or the 28px dots; both are runtime or hit-target issues, not static anti-patterns. No false positives to discard. Nixie edges, glow, mono, and the carousel were not flagged.

**Visual overlays.** Injection succeeded. The console line was `[impeccable] No anti-patterns found.` There is no issue overlay to inspect, because the scan drew nothing. The live server on port 8400 was stopped with `--keep-inject`. Project source was not edited.

## Overall Impression

The instrument face holds. Specialty, intro, and contact land in the first viewport on a 1360px desktop and at 390×844, and the project wells are real night photographs, not plates. The biggest opportunity is honesty on the two cards whose detail pages still qualify the work, then the loop-seam counter, which looks broken even though it names the two wells that are actually lit.

## What's Working

- The cap keeps the specialty as a glow uppercase label. At 390px the string "Backend & Data Engineer" is 210px wide, does not overflow, and sits inside the screen.
- Hero and foot share the real contact targets: `mailto:jphita18@gmail.com`, `https://www.linkedin.com/in/jphita`, `https://github.com/JPHITA`. On the phone the hero rail starts around y=472 inside an 844px screen, so the hiring action is in the first viewport.
- Cards stay lane, then title, then well, then summary. In a browser that does not inject `data-cursor-ref`, Prev, Next, and the last dot move the track, and the status matches the wells (mobile `4 / 6` showed the CCTV card; desktop `4–5 / 6` showed CCTV and purchase prediction).

## Priority Issues

### [P1] Trading and CCTV cards read as finished work

- **Why it matters:** The home card is what a hiring manager scans before the story. Trading's summary is "Freelance for a trading client: Playwright automation on multiple machines with concurrent instances, GCP cloud Run webhooks, and Redis coordination." The detail outcome says those pieces "are being assembled." CCTV's summary lists the ingest, the two YOLO models, the Redis queue, and S3. The detail outcome opens with "Working prototype."
- **Fix:** Put that status in the lane or the first clause of the summary. Do not add a metric or a client name.
- **Suggested command:** `$impeccable clarify`

### [P2] The loop seam announces `6–1 / 6`

- **Why it matters:** At 1360px, dot "Project 6 of 6" shows the research-platform well and the Airflow well, and the live text is `6–1 / 6`. The pair on screen is right. The range reads backwards, and `aria-live="polite"` will speak it. `ProjectsCarousel.tsx` builds the end index with a modulo (`(selectedIndex + perPage - 1) % count`). DESIGN.md specifies `min(projectCount, selectedSnap + perPage)`, which at this snap is `6 / 6`.
- **Fix:** When the window wraps, print the documented `6 / 6`, or name the two titles. Do not leave a descending range in the live region.
- **Suggested command:** `$impeccable clarify`

### [P2] Prev, Next, dots, and hero links are under a thumb

- **Why it matters:** Measured hit boxes: dots 28×28, Next about 40×35, hero links 32px tall. A phone user aiming at Next or a dot hits the card, or the reverse. The CSS comment already calls the dot a 28px hit.
- **Fix:** Keep the 0.45rem square mark. Grow the dot button and the Prev/Next padding so the hit box is at least 44×44. Give the hero rail the same vertical padding.
- **Suggested command:** `$impeccable adapt`

## Cognitive load

2 failures. Moderate.

| Check | Result |
|---|---|
| Single focus | Pass. Contact is in the first viewport; the wells are the next scan. |
| Chunking | Fail. Data lists 7 skills; Languages, Backend, and Databases list 5. The brief wants every skill visible. |
| Grouping | Pass. Labeled banks and edge rules. |
| Visual hierarchy | Pass. Plate name, glow specialty, steel intro. |
| One thing at a time | Pass. This is a scan, not a wizard. |
| Minimal choices | Fail. Six dots plus Prev and Next. |
| Working memory | Pass. Title and summary sit on the card. |
| Progressive disclosure | Pass. The story opens on the detail page. |

Decision point over 4 options: the six project dots.

## Emotional journey

Peak is the cap and the first night photograph in a tube well. The valley is the skill bank (the whole CV at one weight) and the seam counter when the loop wraps. The end is the same Email / LinkedIn / GitHub rail in the foot. Reassurance is that those three links are real and already on the first screen.

## Persona Red Flags

**Jordan (first-timer).** The first action is obvious: labeled Email, LinkedIn, and GitHub, with icons on the hero. The six dots do not say which project they open. "DAG", "Parquet", "YOLO", and "RPA" sit in the summaries with no gloss. There is no help control, which this mode does not require, but the jargon still costs a non-engineer recruiter a pass.

**Riley (stress tester).** The trading and CCTV cards do not say what their detail outcomes say. Refresh returns the track to the start while autoplay will move it again after 5 seconds; that part matches DESIGN.md (`stopOnInteraction: false`). The seam text `6–1 / 6` looks like a broken counter even though those two wells are the ones lit.

**Casey (phone).** At 390×844 the hero copy is `text-align: start` (no justified river). Contact is in the first viewport and again in the foot, which is a long scroll (page about 1851px in the instrumented browser). Dots are 28px and Next is about 40×35. The primary links are at the top because the brief puts them there; the small controls are the miss.

## Minor Observations

- Placeholder plates are gone. Home previews are photographic JPGs. Wells use `object-fit: contain` with about 2px of padding, not a forced 16:9 letterbox.
- No `figcaption` on the home page. Not reopened; the previous caption issue is closed.
- Hero copy is justified from 900px and start below that. Phone rivers were not present.
- The foot is the contact rail only. DESIGN.md still names a "Nixie laboratory counter" mark that is not in `ChassisFoot`.
- Steel on chassis is about 6.1:1 and steel-dim about 4.5:1 (design-review measurement).
- A stuck track (`translate3d(0px, 0px, 0px)` while the status walked) appeared only in cursor-ide-browser, which hydrated `data-cursor-ref` onto `ChassisCap` and raised a Next.js hydration error ("This won't be patched up"). A clean Playwright session at 1360 and 390 moved the track with the status. Do not treat a frozen track as a product bug from this run.

## Questions to Consider

- The loop really does show project 6 beside project 1. Should the counter admit the wrap, or stay on the documented `6 / 6` and let the second well speak for itself?
- Trading is still being assembled and CCTV is a prototype. Should the lane say that before the card is opened?
- The skill bank is the whole CV on one face. Which group can sit under the wells without hiding a hiring requirement?
