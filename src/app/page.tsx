import Image from "next/image";
import Link from "next/link";
import { ChassisPanel, ContactLinks } from "@/components/ChassisShell";
import { projects, skills } from "@/content/projects";

/** Synthetic CV one-liner — replace when real bio is supplied. */
const heroLine =
  "Synthetic intro: full-stack systems work with labeled proof banks — glow as signal, contact when the reading fits.";

/** ponytail: primary bank size; rest disclosed — bump when real specialty tiers exist */
const PRIMARY_SKILL_COUNT = 4;

export default function Home() {
  const primarySkills = skills.slice(0, PRIMARY_SKILL_COUNT);
  const moreSkills = skills.slice(PRIMARY_SKILL_COUNT);

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
          {primarySkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        {moreSkills.length > 0 ? (
          <details className="skills-more">
            <summary>
              More banks · {moreSkills.length}
            </summary>
            <ul className="skills-list">
              {moreSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </details>
        ) : null}
      </aside>

      <section className="projects" aria-labelledby="projects-lab">
        <p id="projects-lab" className="projects-lab">
          Project banks
        </p>
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="project-link">
                <span className="lane">{p.tags.join(" · ")}</span>
                <h2>{p.title}</h2>
                <figure className="project-well">
                  <Image
                    src={p.preview.src}
                    alt={p.preview.alt}
                    width={960}
                    height={540}
                    sizes="(min-width: 768px) 40vw, 90vw"
                  />
                </figure>
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
