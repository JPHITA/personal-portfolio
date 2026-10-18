import { ProjectDeck } from "./deck";
import { figureSlot, type ProjectMeta } from "./types";

const slug = "research-grant-ml";

const figures = [
  figureSlot(
    slug,
    "diagram.png",
    "Architecture diagram",
    "the Firebase and React platform for a public-entity research contest",
  ),
  figureSlot(
    slug,
    "frontend.png",
    "Frontend screenshot",
    "the React frontend of the research-grant platform",
  ),
] as const;

export const meta = {
  slug,
  title: "Research-grant ML platform",
  summary:
    "Freelance productivity-measurement model for a public-entity research contest, kept on the Firebase free tier. Paused, with no real users yet.",
  lane: "Paused · Firebase",
  tags: ["Firebase", "GCP", "React", "Python ML"],
  figures,
  preview: { src: figures[0].src, alt: figures[0].alt },
  problem:
    "A public-entity research contest needed a productivity-measurement model online without a cloud bill.",
  approach:
    "Firebase (Cloud Functions, Firestore, Storage, and Hosting), a React frontend, and a Cloudflare domain, kept on the free tier.",
  outcome: "$0 cloud cost. Paused, with no real users yet.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
