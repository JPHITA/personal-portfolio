import { ProjectDeck } from "./deck";
import { figureSlot, type ProjectMeta } from "./types";

const slug = "purchase-prediction";

const figures = [
  figureSlot(
    slug,
    "diagram.png",
    "Model setup",
    "Random Forest and XGBoost purchase classifiers on imbalanced gaming-platform data",
  ),
  figureSlot(
    slug,
    "results.png",
    "Recall and precision",
    "buyer recall and precision for the purchase-prediction classifiers",
  ),
] as const;

export const meta = {
  slug,
  title: "Purchase prediction for a gaming platform",
  summary:
    "Freelance classifiers on a gaming platform where about 3.5% of users buy: about 59% recall on buyers at about 7% precision.",
  lane: "XGBoost · scikit-learn",
  tags: ["scikit-learn", "XGBoost", "Python"],
  figures,
  preview: { src: figures[0].src, alt: figures[0].alt },
  problem:
    "On a gaming platform, only about 3.5% of users are buyers, so purchase prediction is a hard imbalanced classification.",
  approach:
    "Random Forest and XGBoost classifiers trained for that minority of buyers.",
  outcome:
    "About 59% recall on buyers at about 7% precision. The low precision is the honest result of a rare-buyer problem.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
