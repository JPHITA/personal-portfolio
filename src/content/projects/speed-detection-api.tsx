import { ProjectDeck } from "./deck";
import type { ProjectMeta } from "./types";

const slug = "speed-detection-api";

const preview = {
  src: `/projects/${slug}/preview.jpg`,
  alt: "Night road from a fixed camera: three vehicles in amber detection boxes with speed readings, one plate marked.",
  width: 1280,
  height: 720,
} as const;

const pipeline = {
  src: `/projects/${slug}/pipeline.png`,
  alt: "Amber flowchart on a black field: request, confirm caller, then take a camera clip and plate in parallel with load road segment, detect vehicles, then read plates and estimate speed, mark detection, store decision, and return result.",
  width: 1024,
  height: 481,
} as const;

export const meta = {
  slug,
  title: "Computer-vision speed detection API",
  summary:
    "A YOLO FastAPI service fed by 9 cameras, about 15k requests over 141 days, 99.91% success, and zero 5xx errors.",
  lane: "YOLO · FastAPI · PostgreSQL · MongoDB",
  tags: ["FastAPI", "YOLO", "PyTorch", "Docker", "PostgreSQL", "MongoDB"],
  figures: [pipeline],
  preview,
  problem: "Vehicle speed from 9 cameras had to be served as a production API.",
  approach:
    "A FastAPI service estimates vehicle speed from those cameras with YOLO and returns the speed. The service ships as Docker images, with unittest suites.",
  outcome:
    "About 15k requests over 141 days (about 106 a day), 99.91% success, and zero 5xx errors.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
