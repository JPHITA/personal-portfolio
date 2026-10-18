import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ChassisPanel } from "@/components/ChassisShell";
import { getProject, projects } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} · Juan Nicolas Piedrahita Salas`,
    description: project.summary,
  };
}

function DetailFallback() {
  return (
    <article className="detail" aria-busy="true">
      <p className="synth-note">Reading panel…</p>
    </article>
  );
}

async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { Body } = project;

  return (
    <article className="detail">
      <Link href="/" className="detail-back">
        ← Chassis face
      </Link>
      <h1 className="detail-title">{project.title}</h1>
      <Body />
      <div className="detail-meta">
        <ul className="detail-tags">
          {project.tags.map((tag, i) => (
            <li key={tag}>
              <span className="idx" aria-hidden="true">
                T{i + 1}{" "}
              </span>
              {tag}
            </li>
          ))}
        </ul>
        <p className="synth-note">
          Synthetic project — not a real employer or metric claim.
        </p>
      </div>
    </article>
  );
}

export default function ProjectPage({ params }: Props) {
  return (
    <ChassisPanel>
      <Suspense fallback={<DetailFallback />}>
        <ProjectDetail params={params} />
      </Suspense>
    </ChassisPanel>
  );
}
