import type { ComponentType } from "react";

/** List / chrome fields — home, generateStaticParams, detail header. */
export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  /** Home tube-well preview — first proof plate (same asset as detail). */
  preview: { src: string; alt: string };
};

export type Project = ProjectMeta & {
  Body: ComponentType;
};
