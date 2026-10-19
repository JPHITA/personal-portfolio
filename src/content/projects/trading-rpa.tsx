import { ProjectDeck } from "./deck";
import { figureSlot, type ProjectMeta } from "./types";

const slug = "trading-rpa";

const figures = [
  figureSlot(
    slug,
    "diagram.png",
    "Architecture diagram",
    "Playwright bots, Cloud Run webhooks, and Redis coordination for a trading client",
  ),
  figureSlot(
    slug,
    "miniapp.png",
    "Telegram Mini App screenshot",
    "the companion Telegram bot SaaS Mini App",
  ),
] as const;

export const meta = {
  slug,
  title: "Distributed trading RPA",
  summary:
    "Freelance, in development, for a trading client: Playwright on 2 machines × 4 instances, Cloud Run webhooks, and Redis coordination.",
  lane: "Playwright",
  tags: [
    "Playwright",
    "Go",
    "Cloud Run",
    "Redis",
    "FastAPI",
    "PostgreSQL",
    "React",
    "Railway",
  ],
  figures,
  preview: { src: figures[0].src, alt: figures[0].alt },
  problem:
    "A trading client needed TradingView alerts turned into coordinated browser actions across machines, with configuration a non-technical person could edit.",
  approach:
    "Playwright bots run on 2 machines × 4 concurrent instances. Go webhook endpoints on GCP Cloud Run receive TradingView alerts. Redis Cloud coordinates the bots across networks. The Google Sheets API stores that configuration. A companion Telegram bot SaaS on Railway uses FastAPI, PostgreSQL, and a React Telegram Mini App, with purchases through Telegram Stars.",
  outcome: "In development.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
