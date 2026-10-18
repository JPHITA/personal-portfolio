import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { Body } = project;

  return (
    <ChassisPanel>
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
    </ChassisPanel>
  );
}
