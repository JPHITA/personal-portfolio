# AGENTS.md

Agent-facing guide for this personal portfolio. Prefer this file for setup, workflows, content patterns, and design rules. Human-oriented notes live in `README.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project overview

Personal portfolio for **Juan Nicolas Piedrahita Salas** — a specialty-led hiring site (backend and data engineer). Visual world: **Nixie Counter** chassis (blackened steel, amber glow, labeled banks). Stack: **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS 4**.

Primary paths:

| Area | Location |
|------|----------|
| Home | `src/app/page.tsx` |
| Project detail | `src/app/projects/[slug]/page.tsx` |
| Chassis chrome | `src/components/ChassisShell.tsx` |
| Project content | `src/content/projects/` |
| Global styles / tokens | `src/app/globals.css` |
| Media | `public/projects/` |

Package manager: **npm** (lockfile: `package-lock.json`).

## UI / UX — Impeccable required

All design, develop, refine, critique, document, polish, layout, typeset, animate, audit, and related UI/UX work **must** be driven with the Impeccable skill. Do **not** freestyle redesign outside Impeccable.

Skill root: `.agents/skills/impeccable/` (scripts + `reference/` playbooks).

### Required session flow

1. Run once per session (cwd = project root):

   ```bash
   .agents/skills/impeccable/scripts/impeccable context
   ```

   Optional: `--target <path>` for a named file or route. Follow the script’s directives; do not rerun unless context is stale and the user asks.

2. Load the matching command reference under `.agents/skills/impeccable/reference/` (or `reference/new-work.md` for a new surface / replacement visual world). See the Commands table in `.agents/skills/impeccable/SKILL.md`.

3. Before any UI edit (including small refinements), read `.agents/skills/impeccable/reference/craft-floor.md`. Skip only for planning-only work.

4. Honor durable product and design truth:

   - `PRODUCT.md` — users, purpose, principles, placeholder rules
   - `DESIGN.md` — **Nixie Counter** tokens, components, atmosphere
   - Surface / shape briefs under `.impeccable/` (e.g. `.impeccable/surfaces/`, `.impeccable/shape/`)

If the launcher fails: say so before the next tool call, then read `PRODUCT.md` / `DESIGN.md` directly and continue with craft-floor + the matching reference. Do not invent missing product or visual context.

## Setup commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start    # production server after build
npm run lint
```

## Development workflow

- Dev: `npm run dev` (Next.js Turbopack / hot reload).
- Lint: `npm run lint` (ESLint via `eslint-config-next`).
- Production check: `npm run build` then `npm run start`.
- Path alias: `@/*` → `./src/*` (`tsconfig.json`).
- Before Next.js API usage unfamiliar to training data, read guides under `node_modules/next/dist/docs/` (see Next.js agent rules block above).

## Testing

Visual checks: use Impeccable verify / review flows and browser screenshots as needed. Regenerate ephemeral shots under `.impeccable/verify/` and `.impeccable/review/` on demand.

## Code style and file organization

- Prefer existing Nixie chassis patterns (`ChassisPanel`, tube-wells, bank labels, `synth-note`) over new layout systems.
- Keep styling consistent with `DESIGN.md` and `src/app/globals.css` (CSS variables, Chakra Petch + IBM Plex Mono from `src/app/layout.tsx`).
- Content is data + React bodies, not ad-hoc routes per project: one content module per project, registered in the index.
- Match local TypeScript style: named exports for `meta` / `ProjectBody`, `@/` imports, `ProjectMeta` from `./types`.
- Do not invent testimonials, employers, client or project proper names, or metrics. Contact URLs, skills, and project numbers are real CV content. Image files under `public/projects/<slug>/` are marked placeholders until replaced.

## Adding a project

Projects are **one `.tsx` content file + registry entry**. Detail routing is already dynamic via `src/app/projects/[slug]/page.tsx` (`generateStaticParams` reads the registry — no new page file needed).

### Steps

1. **Copy a template** from an existing project, e.g.:

 - `src/content/projects/airflow-etl-aws.tsx`
 - `src/content/projects/speed-detection-api.tsx`

   Save as `src/content/projects/<slug>.tsx` (filename usually matches `meta.slug`).

2. **Export `meta: ProjectMeta`** (`src/content/projects/types.ts`):

   | Field | Purpose |
   |-------|---------|
   | `slug` | URL segment `/projects/<slug>` — must be unique |
   | `title` | Detail H1 + metadata title |
   | `summary` | Home card + `generateMetadata` description |
   | `tags` | Skill-like indexes on the detail page |
   | `preview` | `{ src, alt }` — home tube-well image (typically same first figure asset) |

3. **Export `ProjectBody`** — detail body only (header/tags/back link come from the page). Follow the existing deck shape: `detail-deck` → `detail-copy` (Problem / Approach / Outcome) + `detail-media` (`next/image` figures with captions). Use `figureSlot()` so each figure names a drop-in file under `public/projects/<slug>/`. State status honestly (in development, prototype, paused) when that is the fact.

4. **Add static assets** under `public/projects/` (e.g. SVG schematic). Point `preview.src` and figure `src` at paths like `/projects/your-asset.svg`. Optional sidecar `*.svg.json` for prompt / provenance notes is fine if matching existing files.

5. **Register in `src/content/projects/index.ts`**:

   - Import `meta as …Meta` and `ProjectBody as …Body` from `./<slug>`.
   - Append `{ ...Meta, Body: …Body }` to the `projects` array.

6. **Optional:** extend the shared `skills` array in the same `index.ts` if the home skills bank should list new labels. Site name / specialty / contact live in `site` and `contact` there — do not invent real URLs.

7. **Verify:** `npm run dev` → home lists the project; `/projects/<slug>` renders body + tags. `npm run lint` / `npm run build` if touching types or routes.

Do **not** create a new `src/app/projects/...` route file per project. Do **not** redesign the detail chrome outside Impeccable when adding content.

## Design context pointers

| Artifact | Role |
|----------|------|
| `PRODUCT.md` | Product purpose, users, principles, placeholder constraints |
| `DESIGN.md` | Nixie Counter design system (tokens, components, do/don’t) |
| `.impeccable/` | Config, surface briefs, shape payloads, mocks, critique logs |
| `.impeccable/config.json` | e.g. `buildPath: "code"` for this project |
| `.agents/skills/impeccable/` | Skill entry (`SKILL.md`), scripts, reference playbooks |

Mode for this site is **Experience** (portfolio / showcase): artifact and chassis identity lead; do not treat it as a generic SaaS Operate UI.

## Build and deployment

- Build output: `.next/` (gitignored).
- `npm run build` then `npm run start` for a production-like local run.
- Compatible with Vercel or any Node host that runs Next.js; no project-specific CI config is required for agents beyond lint + build when changing code.

## Pull request / commit hygiene (agents)

- Do not commit on main branch.
- Do not remove or rewrite the `<!-- BEGIN:nextjs-agent-rules -->` … `<!-- END:nextjs-agent-rules -->` block.
- Prefer small, content- or token-aligned diffs; UI redesign goes through Impeccable.
- Never commit secrets (`.env*`)
