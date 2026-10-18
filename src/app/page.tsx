import Image from "next/image";
import Link from "next/link";
import { ChassisPanel } from "@/components/ChassisShell";
import { getLeadProject, projects, skills } from "@/content/projects";

export default function Home() {
  const lead = getLeadProject();

  return (
    <ChassisPanel home>
      <section className="hero" aria-labelledby="lead-title">
        <div>
          <Link href={`/projects/${lead.slug}`} className="hero-lead">
            <h2 id="lead-title" className="hero-intro">
              {lead.title}
            </h2>
            <p className="hero-copy">{lead.summary}</p>
          </Link>
        </div>
        <div className="tube-bank" aria-hidden="true">
          <Image
            src="/plates/nixie-tube-bank.png"
            alt=""
            width={960}
            height={540}
            className="tube-bank-img"
            priority
          />
        </div>
      </section>

      <aside className="skills" aria-labelledby="skills-lab">
        <p id="skills-lab" className="skills-lab">
          Skill banks · labeled
        </p>
        <ul className="skills-list">
          {skills.map((skill, i) => (
            <li key={skill}>
              <span className="idx" aria-hidden="true">
                T{i + 1}
              </span>
              {skill}
            </li>
          ))}
        </ul>
      </aside>

      <section className="projects" aria-labelledby="projects-lab">
        <p id="projects-lab" className="projects-lab">
          Project banks
        </p>
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="project-link">
                <span className="lane">
                  {p.lead ? "Live count · lead" : "Bank · secondary"}
                </span>
                <h2>{p.title}</h2>
                <p>{p.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="synth-note">All project content is synthetic scaffolding.</p>
      </section>
    </ChassisPanel>
  );
}
