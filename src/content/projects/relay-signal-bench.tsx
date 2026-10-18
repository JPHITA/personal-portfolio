import Image from "next/image";
import type { ProjectMeta } from "./types";

export const meta: ProjectMeta = {
  slug: "relay-signal-bench",
  title: "Relay Signal Bench",
  summary:
    "Synthetic second project: a bench for tracing event relays across services with steel-panel clarity.",
  tags: ["API design", "Observability", "PostgreSQL"],
};

const figures = [
  {
    src: "/projects/relay-bench.svg",
    alt: "Synthetic schematic of Relay Signal Bench panels",
    caption: "On-page figure · synthetic schematic",
  },
] as const;

export function ProjectBody() {
  return (
    <>
      <div className="detail-section">
        <h2>Problem</h2>
        <p>
          Cross-service traces were readable only after exporting dumps. The ask
          was an on-page bench with fixed bank order. (Synthetic.)
        </p>
      </div>
      <div className="detail-section">
        <h2>Approach</h2>
        <p>
          Indexed signal banks, mono labels, and embedded waveform placeholders
          that stay on the detail page.
        </p>
      </div>
      <div className="detail-section">
        <h2>Outcome</h2>
        <p>
          Second proof point for craft vocabulary without inventing employers or
          metrics. Synthetic demo only.
        </p>
      </div>
      {figures.map((fig) => (
        <figure key={fig.caption} className="detail-figure">
          <Image src={fig.src} alt={fig.alt} width={960} height={540} priority />
          <figcaption>{fig.caption}</figcaption>
        </figure>
      ))}
    </>
  );
}
