import Image from "next/image";
import type { ProjectMeta } from "./types";

// Below 900px the figure is the full content box. From 900px it sits in the
// remaining column after a min(42ch, 40%) copy column and a 3rem gap.
const DETAIL_FIGURE_SIZES =
  "(max-width: 767px) calc(100vw - 2.5rem - 20px), (max-width: 899px) calc(100vw - 6rem - 24px), calc(100vw - 9rem - 24px - min(25rem, 40vw))";

export function ProjectDeck({ meta }: { meta: ProjectMeta }) {
  return (
    <div className="detail-deck">
      <div className="detail-copy">
        <div className="detail-section">
          <h2>Problem</h2>
          <p>{meta.problem}</p>
        </div>
        <div className="detail-section">
          <h2>Approach</h2>
          <p>{meta.approach}</p>
        </div>
        <div className="detail-section">
          <h2>Outcome</h2>
          <p>{meta.outcome}</p>
        </div>
      </div>
      <div className="detail-media">
        {meta.figures.map((fig, i) => (
          <figure key={fig.src} className="detail-figure">
            <Image
              src={fig.src}
              alt={fig.alt}
              width={fig.width ?? 960}
              height={fig.height ?? 540}
              sizes={DETAIL_FIGURE_SIZES}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
