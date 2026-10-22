import Image from "next/image";
import type { ProjectMeta } from "./types";

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
              priority={i === 0}
              sizes="(min-width: 900px) 55vw, 90vw"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
