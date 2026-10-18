import {
  meta as airflowMeta,
  ProjectBody as AirflowBody,
} from "./airflow-etl-aws";
import {
  meta as speedMeta,
  ProjectBody as SpeedBody,
} from "./speed-detection-api";
import {
  meta as loadMeta,
  ProjectBody as LoadBody,
} from "./ml-api-load-tests";
import {
  meta as reportMeta,
  ProjectBody as ReportBody,
} from "./report-automation";
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
    items: ["Python", "SQL", "Go", "Linux/shell"],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "FastAPI",
      "asyncio",
      "REST APIs",
      "Docker",
      "GitLab CI",
      "unittest",
      "Locust",
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
      "Power BI",
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
    items: ["PyTorch", "YOLO", "scikit-learn", "XGBoost", "OCR"],
  },
  {
    id: "automation",
    label: "Automation & RPA",
    items: [
      "Playwright",
      "SAP GUI scripting",
      "Excel VBA",
      "Office Scripts",
      "Tkinter desktop tools",
    ],
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
    "Google Cloud Certified Professional Data Engineer. Semi-Senior backend and data engineer in Medellín, Colombia (UTC-5), building production Python systems, data pipelines, and process automation (RPA) across AWS and GCP. Production work includes a 22-DAG Apache Airflow platform on AWS and load-tested FastAPI services for PyTorch, YOLO, and OCR models.",
} as const;

export const projects: Project[] = [
  { ...airflowMeta, Body: AirflowBody },
  { ...speedMeta, Body: SpeedBody },
  { ...loadMeta, Body: LoadBody },
  { ...reportMeta, Body: ReportBody },
  { ...tradingMeta, Body: TradingBody },
  { ...cctvMeta, Body: CctvBody },
  { ...purchaseMeta, Body: PurchaseBody },
  { ...researchMeta, Body: ResearchBody },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
