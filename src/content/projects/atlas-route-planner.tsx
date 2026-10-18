/**
 * How to add a project: copy this file, edit meta + ProjectBody, then register
 * the import in `./index.ts` (append to the `projects` array).
 */
import Image from "next/image";
import type { ProjectMeta } from "./types";

export const meta: ProjectMeta = {
  slug: "atlas-route-planner",
  title: "Atlas Route Planner",
  summary:
    "Synthetic bank: pathfinding console that treats latency budgets like tube readings — words first, glow second.",
  tags: ["TypeScript", "Next.js", "System design"],
  preview: {
    src: "/projects/atlas-route.svg",
    alt: "Synthetic schematic of Atlas Route Planner instrument face",
  },
};

const figures = [
  {
    src: "/projects/atlas-route.svg",
    alt: "Synthetic schematic of Atlas Route Planner instrument face",
    caption: "On-page figure · synthetic schematic",
  },
  {
    src: "/projects/atlas-route.svg",
    alt: "Placeholder second plate for Atlas Route Planner",
    caption: "Secondary plate · placeholder (same asset)",
  },
] as const;

export function ProjectBody() {
  return (
    <div className="detail-deck">
      <div className="detail-copy">
        <div className="detail-section">
          <h2>Problem</h2>
          <p>
            Operators needed a readable way to compare candidate routes without
            drowning in raw hop tables. (Synthetic scenario — not a shipped
            product claim.)
          </p>
        </div>
        <div className="detail-section">
          <h2>Approach</h2>
          <p>
            A dark instrument face: ranked lanes, labeled skill-like indexes for
            constraints, and on-page route sketches instead of off-site galleries.
          </p>
        </div>
        <div className="detail-section">
          <h2>Outcome</h2>
          <p>
            Hiring managers can scan the project story and open the panel for
            problem / approach / outcome. Synthetic demo only.
          </p>
        </div>
      </div>
      <div className="detail-media">
        {figures.map((fig, i) => (
          <figure key={fig.caption} className="detail-figure">
            <Image
              src={fig.src}
              alt={fig.alt}
              width={960}
              height={540}
              priority={i === 0}
            />
            <figcaption>{fig.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
