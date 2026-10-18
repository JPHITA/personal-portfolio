import { ProjectDeck } from "./deck";
import { figureSlot, type ProjectMeta } from "./types";

const slug = "speed-detection-api";

const figures = [
  figureSlot(
    slug,
    "diagram.png",
    "Architecture diagram",
    "the YOLO FastAPI speed-detection service fed by 9 cameras",
  ),
  figureSlot(
    slug,
    "service.png",
    "API and CI release",
    "the speed-detection service as Docker images released through GitLab CI",
  ),
] as const;

export const meta = {
  slug,
  title: "Computer-vision speed detection API",
  summary:
    "In production: a YOLO FastAPI service fed by 9 cameras, about 15k requests over 141 days, 99.91% success, and zero 5xx errors.",
  lane: "YOLO · FastAPI",
  tags: ["FastAPI", "YOLO", "PyTorch", "Docker", "GitLab CI"],
  figures,
  preview: { src: figures[0].src, alt: figures[0].alt },
  problem: "Vehicle speed from 9 cameras had to be served as a production API.",
  approach:
    "A YOLO-based FastAPI service reads those cameras. The service ships as Docker images through GitLab CI, with unittest suites.",
  outcome:
    "About 15k requests over 141 days (about 106 a day), 99.91% success, and zero 5xx errors.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
