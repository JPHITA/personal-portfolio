import { ProjectDeck } from "./deck";
import { figureSlot, type ProjectMeta } from "./types";

const slug = "cctv-vehicle-monitor";

const figures = [
  figureSlot(
    slug,
    "diagram.png",
    "Architecture diagram",
    "RTSP ingest, two YOLO processes, a Redis queue, and S3 for the CCTV prototype",
  ),
  figureSlot(
    slug,
    "pipeline.png",
    "Ingest pipeline",
    "the RTSP, ffmpeg, and YOLO detection path of the vehicle-monitoring prototype",
  ),
] as const;

export const meta = {
  slug,
  title: "Real-time CCTV vehicle monitoring",
  summary:
    "Working prototype: RTSP and ffmpeg ingest, 2 YOLO models at about 30 FPS, a Redis queue, and records in S3.",
  lane: "YOLO · Redis",
  tags: ["Python multiprocessing", "YOLO", "Redis", "ffmpeg", "S3"],
  figures,
  preview: { src: figures[0].src, alt: figures[0].alt },
  problem:
    "Live CCTV vehicle monitoring needed detection that could keep up with the streams without blocking storage.",
  approach:
    "RTSP ingest through ffmpeg, 2 YOLO models in parallel processes (about 30 FPS detection), decoupled with a Redis queue. Records are stored in S3.",
  outcome: "Working prototype.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
