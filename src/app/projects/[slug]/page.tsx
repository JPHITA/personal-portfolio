import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ChassisPanel } from "@/components/ChassisShell";
import { getProject, projects, site } from "@/content/projects";

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
  const title = `${project.title} · ${site.name}`;
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: ["/twitter-image"],
    },
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
        ← Back to home
      </Link>
      <h1 className="detail-title">{project.title}</h1>
      <Body />
      <div className="detail-meta">
        <p id="skills-used" className="skills-lab">
          Skills used
        </p>
        <ul className="detail-tags" aria-labelledby="skills-used">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
