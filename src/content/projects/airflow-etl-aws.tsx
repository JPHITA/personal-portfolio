/**
 * How to add a project: copy this file, edit meta + ProjectBody, then register
 * the import in `./index.ts`. Drop images at the public paths in `meta.figures`.
 */
import { ProjectDeck } from "./deck";
import { type ProjectMeta } from "./types";

const slug = "airflow-etl-aws";

const preview = {
  src: `/projects/${slug}/preview.jpg`,
  alt: "Night archive bay under cool-white task lamps: database consoles and loose document pages become tall columnar file blocks with thin amber edges, then rest in open steel storage cages. One block is stamped PARQUET.",
  width: 1280,
  height: 720,
} as const;

const figures = [
  {
    src: `/projects/${slug}/run-flow.png`,
    alt: "Amber flowchart on a black field: scheduled run, read a time window and write local files, then transform or merge — yes runs DuckDB SQL and merges with S3, no uploads files to S3 — then align schema — yes normalizes the schema, no cleans up local and S3 files — then run complete.",
    caption: `Architecture diagram · public/projects/${slug}/run-flow.png`,
    width: 1024,
    height: 572,
  },
] as const;

export const meta = {
  slug,
  title: "Airflow ETL platform on AWS",
  summary:
    "22 Airflow DAGs on EC2 turn PostgreSQL and MongoDB extracts into Parquet on S3 — about 576 runs a day.",
  lane: "Airflow · AWS · S3",
  tags: [
    "Airflow",
    "Python",
    "Polars",
    "DuckDB",
    "Parquet",
    "S3",
    "EC2",
    "PostgreSQL",
    "MongoDB",
    "Spark",
    "Iceberg",
  ],
  figures,
  preview,
  problem:
    "Data extractions mostly did not exist. The rest were one-off scripts and manual runs.",
  approach:
    "22 Apache Airflow DAGs on EC2 extract from PostgreSQL and MongoDB, process with Polars and DuckDB, and write Parquet to S3. Six DAGs run every 15 minutes (about 576 runs a day, 1–2 minutes each), six run nightly, and ten run monthly (up to 10 hours). Loads range from hundreds of MB to dozens of GB.",
  outcome:
    "Reliable automated pipelines feed 1 live product and are designed to scale to more. A follow-up MVP moves processing to Apache Spark toward an S3 Apache Iceberg lakehouse.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
