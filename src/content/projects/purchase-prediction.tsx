import { ProjectDeck } from "./deck";
import type { ProjectMeta } from "./types";

const slug = "purchase-prediction";

const preview = {
  src: `/projects/${slug}/preview.jpg`,
  alt: "Night gaming floor under cool-white lamps: a few player stations carry a thin amber score tick, one station brighter as a likely buyer, the rest quiet.",
  width: 1280,
  height: 720,
} as const;

const diagram = {
  src: `/projects/${slug}/diagram.png`,
  alt: "Amber flowchart on a blackened steel field: game accounts and the player database, and PayU payments of real purchases, both feed a player profile of activity plus VIP, which feeds a buyer score of likely to buy.",
  width: 1024,
  height: 414,
} as const;

export const meta = {
  slug,
  title: "Purchase prediction for a gaming platform",
  summary:
    "Freelance classifiers on a gaming platform where the data is imbalanced (only about 3.5% of users buy): about 59% recall on buyers without overfitting.",
  lane: "XGBoost · scikit-learn",
  tags: ["scikit-learn", "XGBoost", "Python"],
  figures: [diagram],
  preview,
  problem:
    "On a gaming platform, only about 3.5% of users are buyers, so purchase prediction is a hard imbalanced classification.",
  approach:
    "Random Forest and XGBoost classifiers trained for that minority of buyers.",
  outcome:
    "About 59% recall on buyers without overfitting. The data is imbalanced: only about 3.5% of users buy.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
