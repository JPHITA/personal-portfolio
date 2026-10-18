---
target: home page
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/home/jphita/Desktop/Juan Nicolas Piedrahita Salas/personal-portfolio/src/app/page.tsx"
target_fingerprint: "sha256:0d285a861d179918e49fe9cf1900d130447205c4ad69b4daca25359d728819ad"
target_path: /home/jphita/Desktop/Juan Nicolas Piedrahita Salas/personal-portfolio/src/app/page.tsx
timestamp: 2026-10-18T12-19-30Z
slug: src-app-page-tsx
closed: true
---
Method: dual-agent (A: 2d501500-ee37-4f52-b4dd-176724a31343 · B: ecaa0cbc-39d8-4d78-b986-96bf7ab70a22)

# Impeccable Critique — Home (`src/app/page.tsx`)

**Mode:** Experience (portfolio) · **Brief:** Nixie Counter · **Slug:** `src-app-page-tsx`

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover/focus glow works; desktop hero contact rail is tiny and far-right — easy to miss |
| 2 | Match System / Real World | 2 | Lab metaphor coherent; hiring language is not (“labeled proof banks,” “Bank,” `T1…T8`) |
| 3 | User Control and Freedom | 3 | Clear exits: contact or open a project; no traps |
| 4 | Consistency and Standards | 3 | Cap/labs/foot-link pattern consistent; identical “Bank” meta on every project |
| 5 | Error Prevention | 1 | Contacts look live but hit synthetic/`mailto:…invalid` destinations |
| 6 | Recognition Rather Than Recall | 3 | Most labels on-page; `Tn` / “Bank” need decode with no legend |
| 7 | Flexibility and Efficiency | n/a | Experience portfolio — power accelerators not expected |
| 8 | Aesthetic and Minimalist Design | 2 | Craft tight per brief, but first viewport packs cap + hero + 8 skills + projects + foot |
| 9 | Error Recovery | 2 | `synth-note` honest; outbound contact failures get no recovery affordance |
| 10 | Help and Documentation | n/a | Experience surface — help docs not expected |
| **Total** | | **19/32** | **Acceptable** (~59%) |

---

## Design Specificity Verdict

**Start here.** Visual world is authored for this product — not category-interchangeable. Steel-plate chassis, thick border, inset gloom, Chakra Petch + IBM Plex Mono, `#ff6a1a` as signal-only, hard edges, no cards: could not be swapped onto a generic SaaS landing unchanged.

**Experience mode undercuts that win.** Visitor is inside an *instrument shell*, not inside the *work*. Home carries zero project imagery / tube-well proof; artifact lives only after a click. “Bank” lanes and synthetic scaffolding read as design-system cosplay more than Juan’s craft.

**LLM assessment:** Visual world: specific. Portfolio Experience: still template-shaped around chassis, not around proof. Brand-first chassis cap succeeds; hero budget and artifact-leading fail.

**Deterministic scan:** CLI `impeccable detect --json` on `src/app/page.tsx` and `src/components/ChassisShell.tsx` → exit 0, `[]` (0 findings). Browser overlay (computed CSS) found **5 findings on 3 elements**: `undersized-ui-text` ×2 on `.lane` “Bank” (10px); `low-contrast` (3.9:1), `tiny-text` (11px), `wide-tracking` on `p.synth-note`. Detector caught legibility issues LLM underweighted. Likely FPs: `wide-tracking` / `tiny-text` on short disclaimer; CLI empty vs browser hits is expected (static TSX cannot see computed sizes).

**Visual overlays:** Injected successfully into the **[Human]** browser tab (`http://localhost:3000/`). Overlay labels: UNDERSIZED FUNCTIONAL TEXT (×2), LOW CONTRAST TEXT, TINY BODY TEXT, WIDE LETTER SPACING. Live-server stopped with `--keep-inject`.

---

## Overall Impression

The Nixie chassis is a strong, owned visual world — then the Experience fails: no work artifact leads, the first viewport dumps the whole site, and the product goal (contact) is wired to synthetic destinations that look real. **Biggest opportunity:** make proof visible on home (within Nixie tube-well rules) and quarantine fake contacts until real URLs ship.

---

## What's Working

1. **Nixie Counter fidelity** — Plate texture, steel border, inset vignette, zero radius, One Glow / Plate-on-Steel / Cap Specialty rules honored.
2. **Brand-first chassis cap** — Name in Chakra plate; specialty as uppercase glow `.cap-role`, not a marketing eyebrow.
3. **Interaction vocabulary** — Instrument links (edge → glow), not filled CTAs or cards; `prefers-reduced-motion` respected.

---

## Priority Issues

### [P0] Synthetic contacts look real
- **Why it matters:** PRODUCT success = reach out. Fake Email/LinkedIn/GitHub (`mailto:synthetic.contact@example.invalid`, synthetic LinkedIn/GitHub) burn trust at the peak-end.
- **Fix:** Quarantine scaffolding (muted/disabled styling or non-actionable labels) until real URLs ship; never present `.invalid` / synthetic profiles as primary CTAs.
- **Suggested command:** `$impeccable harden`

### [P1] Experience without artifact on home
- **Why it matters:** Mode says artifact leads; DESIGN retired lead-project hero, so first viewport is CV + text banks. Visitor never *sees* work until after a click.
- **Fix:** One inset tube-well preview per project (or a single proof well in the projects bank) — hard-edged, no cards/overlays — without resurrecting lead-project theater.
- **Suggested command:** `$impeccable layout`

### [P1] First-viewport overload (hero budget)
- **Why it matters:** Desktop packs skills (~201px) + projects (~291px) + foot in one screen — not brand + one line + CTA. Amber labs compete with contact.
- **Fix:** Cap + one-liner + contacts above the fold; push skills and/or projects below fold (or collapse skills).
- **Suggested command:** `$impeccable distill`

### [P2] Skills bank: 8 unchunked tubes
- **Why it matters:** Exceeds working-memory grouping; equal weight flattens specialty signal.
- **Fix:** Chunk into ≤4 banks or show 3–4 primary with the rest disclosed.
- **Suggested command:** `$impeccable distill`

### [P2] Identical “Bank” lane + detector undersized text
- **Why it matters:** Meta that doesn’t differentiate = clutter; detector flags 10px functional “Bank” labels.
- **Fix:** Per-project lane (stack/year/role) at readable size, or drop until real tags exist.
- **Suggested command:** `$impeccable clarify`

---

## Persona Red Flags

**Jordan (First-Timer):** “Synthetic intro… labeled proof banks” is not a human one-liner; `T1…T8` / “Bank” with no legend; contact is steel-dim vs glowing section labs — unclear primary action.

**Casey (Mobile):** First screen packs intro + contacts + full 8-skill wrap + project start; second project and foot often below fold; dense thumb scroll.

**Riley (Stress Tester):** Clicks contacts → synthetic/invalid → trust collapse; duplicate hero+foot contacts look like two systems; no home proof media to verify craft fast.

---

## Minor Observations

- Display type scale unused on home — name could own more presence vs amber section labs.
- Hero icons help; foot omits them (per brief) — slightly inconsistent under stress.
- `synth-note` honesty is good; also advertises emptiness at the emotional end of the project bank; contrast 3.9:1 fails AA.
- Motion correctly restrained — not theater noise.
- No AI-slop purple/cream/broadsheet — brief honored.
- Context launcher reported no PRODUCT/DESIGN (path resolution quirk); both files exist and were used.

---

## Cognitive Load

**5 checklist failures:** single focus, chunking (8 skills), visual hierarchy, one thing at a time, progressive disclosure. **Moderate→high.** Decision points >4: skills bank (8); first-viewport action cluster (~5–8).

---

## Emotional Journey

Open/chassis = peak. Synthetic intro = valley. Text-only projects = Experience valley. Foot contacts = soft close that collapses if clicked (fake destinations). Peak is chassis; end is weak/risky. No emotional high from *work*.

---

## Questions to Consider

1. If Experience means the visitor is *inside the work*, why is the strongest object on `/` the chassis — and the work only a text link?
2. Should “synthetic scaffolding” read as a temporary cover plate (obviously provisional), or as the default voice of the specialty?
3. On desktop, specialty and contact live on the far right at label size — is the Nixie cap actually brand-first, or name-left / signal-right with contact as an afterthought?
4. What would this page feel like if the first viewport had **one** glowing tube-well of proof and **no** skill indexes until scroll?
