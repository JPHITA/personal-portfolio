import { ProjectDeck } from "./deck";
import type { ProjectMeta } from "./types";

const slug = "cctv-vehicle-monitor";

const preview = {
  src: `/projects/${slug}/preview.jpg`,
  alt: "Night street under cool-white lamps: a pole-mounted CCTV camera, a steel monitor showing two cars in thin amber detection boxes, and a tray of captured stills.",
  width: 1280,
  height: 720,
} as const;

const figures = [
  {
    src: `/projects/${slug}/live-flow.png`,
    alt: "Amber flowchart on a black field: live camera, capture and detect vehicles, no vehicle exits while vehicle detected goes to drop batch, then Redis queue and temp store, track and capture stills, and S3 image store.",
    caption: `Architecture diagram · public/projects/${slug}/live-flow.png`,
    width: 1024,
    height: 572,
  },
] as const;

export const meta = {
  slug,
  title: "Real-time CCTV vehicle monitoring",
  summary:
    "RTSP and ffmpeg ingest, 2 YOLO models at about 30 FPS, a Redis queue, and records in S3.",
  lane: "YOLO · Redis",
  tags: ["Python multiprocessing", "YOLO", "Redis", "ffmpeg", "S3"],
  figures,
  preview,
  problem:
    "Live CCTV vehicle monitoring needed detection that could keep up with streaming.",
  approach:
    "RTSP ingest through ffmpeg, 2 YOLO models in parallel processes, decoupled with a Redis queue. Records are stored in S3.",
  outcome:
    "Working prototype. It ingests a real CCTV camera streaming over RTSP, runs 2 YOLO models in parallel processes, uses a Redis queue, stores records in S3, and deployed with Docker.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
