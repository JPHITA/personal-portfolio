import type { ComponentType } from "react";

/** List / chrome fields — home, generateStaticParams, detail header. */
export type FigureSlot = {
  /** Public URL, e.g. `/projects/<slug>/diagram.png`. */
  src: string;
  alt: string;
  /** Visible caption. Omit for a figure with no caption bar. */
  caption?: string;
  /** Intrinsic size. Defaults to the 16:9 placeholder plate. */
  width?: number;
  height?: number;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  /** Short home lane. Full skill list is `tags`. */
  lane: string;
  tags: string[];
  /** Home tube-well preview — first proof plate. */
  preview: { src: string; alt: string; width?: number; height?: number };
  figures: readonly FigureSlot[];
  problem: string;
  approach: string;
  outcome: string;
};

export type Project = ProjectMeta & {
  Body: ComponentType;
};

/** Marked drop-in plate. Replace the file at `public/projects/<slug>/<file>`. */
export function figureSlot(
  slug: string,
  file: string,
  label: string,
  subject: string,
): FigureSlot {
  const src = `/projects/${slug}/${file}`;
  return {
    src,
    alt: `Placeholder image slot for the ${label.toLowerCase()} — ${subject}. No photograph or diagram has been added yet.`,
    caption: `${label} · public${src}`,
  };
}
