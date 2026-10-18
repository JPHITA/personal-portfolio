import { ProjectDeck } from "./deck";
import { figureSlot, type ProjectMeta } from "./types";

const slug = "report-automation";

const figures = [
  figureSlot(
    slug,
    "diagram.png",
    "Automation flow",
    "recurring report automation with Python, VBA, Office Scripts, and SAP GUI scripting",
  ),
  figureSlot(
    slug,
    "dashboard.png",
    "KPI dashboard screenshot",
    "the Power BI dashboard of department productivity indicators",
  ),
] as const;

export const meta = {
  slug,
  title: "Report automation and KPI dashboard",
  summary:
    "For an energy-sector company, about 10 recurring reports automated with Python, VBA, Office Scripts, and SAP GUI scripting, saving about 3 hours per run.",
  lane: "RPA · Power BI",
  tags: ["Python", "SAP GUI scripting", "VBA", "Office Scripts", "Power BI"],
  figures,
  preview: { src: figures[0].src, alt: figures[0].alt },
  problem:
    "An energy-sector company still produced about 10 recurring reports as manual runs.",
  approach:
    "Python, VBA, Office Scripts, and SAP GUI scripting generate the reports. A Power BI dashboard tracks department productivity indicators.",
  outcome:
    "About 3 hours saved per run, with the KPI dashboard available for those indicators.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
