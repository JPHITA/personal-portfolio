/**
 * How to add a project: copy this file, edit meta + ProjectBody, then register
 * the import in `./index.ts`. Drop images at the public paths in `meta.figures`.
 */
import { ProjectDeck } from "./deck";
import { figureSlot, type ProjectMeta } from "./types";

const slug = "airflow-etl-aws";

const figures = [
  figureSlot(
    slug,
    "diagram.png",
    "Architecture diagram",
    "22 Airflow DAGs on EC2 extracting PostgreSQL and MongoDB, processing with Polars and DuckDB, and writing Parquet to S3",
  ),
  figureSlot(
    slug,
    "schedule.png",
    "DAG schedule",
    "six DAGs every 15 minutes, six nightly DAGs, and ten monthly DAGs",
  ),
] as const;

export const meta = {
  slug,
  title: "Production Airflow ETL platform on AWS",
  summary:
    "22 Airflow DAGs on EC2 turn PostgreSQL and MongoDB extracts into Parquet on S3 — about 576 runs a day — and feed 1 live product.",
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
  preview: { src: figures[0].src, alt: figures[0].alt },
  problem:
    "Data extractions mostly did not exist. The rest were one-off scripts and manual midnight runs.",
  approach:
    "22 Apache Airflow DAGs on EC2 extract from PostgreSQL and MongoDB, process with Polars and DuckDB, and write Parquet to S3. Six DAGs run every 15 minutes (about 576 runs a day, 1–2 minutes each), six run nightly, and ten run monthly (up to 10 hours). Loads range from hundreds of MB to dozens of GB.",
  outcome:
    "Reliable automated pipelines feed 1 live product and are designed to scale to more. A follow-up MVP moves processing to Apache Spark toward an S3 Apache Iceberg lakehouse. That lakehouse is still a proposal.",
} satisfies ProjectMeta;

export function ProjectBody() {
  return <ProjectDeck meta={meta} />;
}
