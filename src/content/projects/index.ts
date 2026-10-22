import {
  meta as airflowMeta,
  ProjectBody as AirflowBody,
} from "./airflow-etl-aws";
import {
  meta as speedMeta,
  ProjectBody as SpeedBody,
} from "./speed-detection-api";
import {
  meta as tradingMeta,
  ProjectBody as TradingBody,
} from "./trading-rpa";
import {
  meta as cctvMeta,
  ProjectBody as CctvBody,
} from "./cctv-vehicle-monitor";
import {
  meta as purchaseMeta,
  ProjectBody as PurchaseBody,
} from "./purchase-prediction";
import {
  meta as researchMeta,
  ProjectBody as ResearchBody,
} from "./research-grant-ml";
import type { Project } from "./types";

export type { Project, ProjectMeta } from "./types";

export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "SQL", "Go", "TypeScript/JavaScript", "Linux/shell"],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "FastAPI",
      "asyncio",
      "REST APIs",
      "Docker",
      "unittest",
    ],
  },
  {
    id: "data",
    label: "Data",
    items: [
      "Apache Airflow",
      "ETL/ELT",
      "Polars",
      "DuckDB",
      "Apache Spark",
      "Parquet",
      "Apache Iceberg",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: [
      "PostgreSQL",
      "Oracle",
      "MongoDB",
      "Redis (queues, pub/sub)",
      "Firestore",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    items: [
      "AWS (EC2, ECS, ECR, S3, EBS, Lambda)",
      "GCP (Cloud Run, BigQuery, Firebase)",
      "Railway",
    ],
  },
  {
    id: "ml",
    label: "ML",
    items: ["PyTorch", "YOLO", "scikit-learn", "XGBoost"],
  },
  {
    id: "automation",
    label: "Automation & RPA",
    items: ["Playwright", "Excel VBA", "Office Scripts"],
  },
] as const;

export const certifications = {
  lead: "Google Cloud Certified Professional Data Engineer",
  also: [
    "OCI 2025 Multicloud Architect Professional",
    "GCP From Data to Insights Specialization",
  ],
} as const;

export const contact = {
  email: {
    label: "Email",
    href: "mailto:jphita18@gmail.com",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jphita",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/JPHITA",
  },
} as const;

export const site = {
  name: "Juan Nicolas Piedrahita Salas",
  specialty: "Backend & Data Engineer",
  description:
    "Backend and data engineer in Medellín, Colombia (UTC-5). Google Cloud Certified Professional Data Engineer building production Python systems, data pipelines, and process automation across AWS and GCP.",
  intro:
    "Google Cloud Certified Professional Data Engineer. Semi-Senior backend and data engineer in Medellín, Colombia (UTC-5), building production Python systems, data pipelines, and process automation (RPA) across AWS and GCP. Production work includes Apache Airflow platforms on AWS and FastAPI backends that handle frontend-originated user data and inference with Pytorch and ML models.",
} as const;

export const projects: Project[] = [
  { ...airflowMeta, Body: AirflowBody },
  { ...speedMeta, Body: SpeedBody },
  { ...tradingMeta, Body: TradingBody },
  { ...cctvMeta, Body: CctvBody },
  { ...purchaseMeta, Body: PurchaseBody },
  { ...researchMeta, Body: ResearchBody },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
