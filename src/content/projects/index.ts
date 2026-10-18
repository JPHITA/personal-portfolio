import {
  meta as atlasMeta,
  ProjectBody as AtlasBody,
} from "./atlas-route-planner";
import {
  meta as relayMeta,
  ProjectBody as RelayBody,
} from "./relay-signal-bench";
import type { Project } from "./types";

export type { Project, ProjectMeta } from "./types";

export const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "PostgreSQL",
  "API design",
  "System design",
  "Node.js",
  "Observability",
] as const;

export const contact = {
  email: {
    label: "Email",
    href: "mailto:synthetic.contact@example.invalid",
    note: "synthetic",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/synthetic-jnps-portfolio",
    note: "synthetic",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/synthetic-jnps-portfolio",
    note: "synthetic",
  },
} as const;

export const site = {
  name: "Juan Nicolas Piedrahita Salas",
  specialty: "Full-stack systems",
} as const;


export const projects: Project[] = [
  { ...atlasMeta, Body: AtlasBody },
  { ...relayMeta, Body: RelayBody },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getLeadProject() {
  return projects.find((p) => p.lead) ?? projects[0];
}
