import { ProjectDeck } from "./deck";
import type { ProjectMeta } from "./types";

const slug = "research-grant-ml";

const preview = {
  src: `/projects/${slug}/preview.jpg`,
  alt: "Night steel desk under a cool-white lamp: two unbranded scoring sheets, one ruled like a spreadsheet, with a thin amber instrument pen on the research record. Faint corner ticks.",
  width: 1280,
  height: 720,
} as const;

const diagram = {
  src: `/projects/${slug}/diagram.png`,
  alt: "Amber flowchart on a black field: a user opens a web app into a React web app with Firebase Auth beside it, then a Cloud Function runs a prediction from model storage, and Firestore keeps history and also sends an Excel file to a browser Excel file.",
  width: 1024,
  height: 572,
} as const;

export const meta = {
  slug,
  title: "Web platform to access the ML model",
  summary:
    "Freelance productivity-measurement model for a public-entity research contest, kept on the Firebase free tier.",
  lane: "Firebase",
  tags: ["Firebase", "GCP", "React", "Python ML"],
  figures: [diagram],
  preview,
  problem:
    "A public-entity research contest needed a productivity-measurement model online reducing cloud costs.",
  approach:
    "Firebase (Cloud Functions, Firestore, Storage, and Hosting), a React frontend, and a Cloudflare domain, kept on the free tier.",
  outcome:
    "A $0 cloud-cost platform that exposes the productivity-measurement model, keeps the data, and can swap the model.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
