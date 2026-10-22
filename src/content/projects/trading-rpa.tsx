import { ProjectDeck } from "./deck";
import type { ProjectMeta } from "./types";

const slug = "trading-rpa";

const preview = {
  src: `/projects/${slug}/preview.jpg`,
  alt: "Night desk under a task lamp: a local machine showing an order confirm, a small unbranded chat-setup screen beside it, and a steel unit with cables.",
  width: 1280,
  height: 720,
} as const;

const diagram = {
  src: `/projects/${slug}/diagram.png`,
  alt: "Amber flowchart on a black field: a mini app sets bots in Telegram and saves them to a cloud API for bots and accounts, which writes Postgres to store the setup. A cloud function publishes indicator alerts to Redis as a signal channel, which signals a trading robot on the PC. The cloud API sends a plan to the robot and the robot returns a run result. The robot places an order on the trading site.",
  width: 1024,
  height: 572,
} as const;

export const meta = {
  slug,
  title: "Distributed trading RPA",
  summary:
    "Freelance for a trading client: Playwright automation on multiple machines with concurrent instances, Cloud Run webhooks, and Redis coordination.",
  lane: "Playwright · GCP · Redis",
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
  figures: [diagram],
  preview,
  problem:
    "A trading client needed TradingView alerts turned into coordinated browser actions across machines, with configuration a non-technical person could edit.",
  approach:
    "Playwright bots run on multiple machines with concurrent instances. Go webhook endpoints on GCP Cloud Run receive TradingView alerts. Redis Cloud coordinates the bots across networks. A companion Telegram bot SaaS on Railway uses FastAPI, PostgreSQL, and a React Telegram Mini App, with purchases.",
  outcome:
    "Playwright bots on multiple machines, Cloud Run webhooks, and Redis are being assembled so TradingView alerts become coordinated browser actions, with a Telegram Mini App for configuration a non-technical person can edit.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
