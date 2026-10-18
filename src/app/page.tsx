import Link from "next/link";
import { ChassisPanel, ContactLinks } from "@/components/ChassisShell";
import { projects, skills } from "@/content/projects";

/** Synthetic CV one-liner — replace when real bio is supplied. */
const heroLine =
  "Synthetic intro: full-stack systems work with labeled proof banks — glow as signal, contact when the reading fits.";

export default function Home() {
  return (
    <ChassisPanel home>
      <section className="hero" aria-labelledby="hero-line">
        <div className="hero-body">
          <p id="hero-line" className="hero-copy">
            {heroLine}
          </p>
          <ContactLinks className="hero-contacts" withIcons />
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
                <span className="lane">Bank</span>
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
