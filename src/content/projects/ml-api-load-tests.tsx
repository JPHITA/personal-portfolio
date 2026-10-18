import { ProjectDeck } from "./deck";
import { figureSlot, type ProjectMeta } from "./types";

const slug = "ml-api-load-tests";

const figures = [
  figureSlot(
    slug,
    "diagram.png",
    "Load-test diagram",
    "the Locust setup against the FastAPI ML services",
  ),
  figureSlot(
    slug,
    "results.png",
    "Latency and success",
    "Locust p95 latency, error rate, and the 3-model OCR service at 99.3% success under load",
  ),
] as const;

export const meta = {
  slug,
  title: "Load-tested ML APIs and 3-model OCR",
  summary:
    "Locust on a PyTorch vision API and a user-facing API, plus a 3-model document OCR service at 99.3% success under load.",
  lane: "Locust · FastAPI · OCR",
  tags: ["FastAPI", "Locust", "PyTorch", "OCR", "asyncio", "S3"],
  figures,
  preview: { src: figures[0].src, alt: figures[0].alt },
  problem:
    "Capacity of the ML APIs was unmeasured, including where added users stopped succeeding.",
  approach:
    "Locust load tests. A PyTorch vision API reached about 17.5 requests per second and about 410 ms p95 with 30 users per worker, and scaled up to 12 workers. A user-facing API reached about 16 ms p95 with 40 users and 0.07% errors. Saturation between 35 and 115 users traced to connection-pool exhaustion and S3 throttling.",
  outcome:
    "A 3-model document OCR service reached 99.3% success under load. The same traces named connection-pool exhaustion and S3 throttling as the saturation cause.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
