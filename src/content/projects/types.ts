import type { ComponentType } from "react";

/** List / chrome fields — home, generateStaticParams, detail header. */
export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

export type Project = ProjectMeta & {
  Body: ComponentType;
};
