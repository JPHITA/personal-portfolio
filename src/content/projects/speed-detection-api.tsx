import { ProjectDeck } from "./deck";
import { figureSlot, type ProjectMeta } from "./types";

const slug = "speed-detection-api";

const placeholder = figureSlot(
  slug,
  "diagram.png",
  "Architecture diagram",
  "the YOLO FastAPI speed-detection service fed by 9 cameras",
);

const pipeline = {
  src: `/projects/${slug}/pipeline.jpg`,
  alt: "Amber flowchart on a black field: request, confirm caller, then take a camera clip and plate in parallel with load road segment, detect vehicles, then read plates and estimate speed, mark detection, store decision, and return result.",
  width: 1024,
  height: 481,
} as const;

export const meta = {
  slug,
  title: "Computer-vision speed detection API",
  summary:
    "In production: a YOLO FastAPI service fed by 9 cameras, about 15k requests over 141 days, 99.91% success, and zero 5xx errors.",
  lane: "YOLO · FastAPI",
  tags: ["FastAPI", "YOLO", "PyTorch", "Docker"],
  figures: [pipeline],
  preview: { src: placeholder.src, alt: placeholder.alt },
  problem: "Vehicle speed from 9 cameras had to be served as a production API.",
  approach:
    "A YOLO-based FastAPI service reads those cameras. The service ships as Docker images, with unittest suites.",
  outcome:
    "About 15k requests over 141 days (about 106 a day), 99.91% success, and zero 5xx errors.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
