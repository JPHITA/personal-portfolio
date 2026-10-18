import Image from "next/image";
import Link from "next/link";
import { ChassisPanel, ContactLinks } from "@/components/ChassisShell";
import {
  certifications,
  projects,
  site,
  skillGroups,
} from "@/content/projects";

export default function Home() {
  return (
    <ChassisPanel home>
      <section className="hero" aria-labelledby="hero-line">
        <div className="hero-body">
          <p id="hero-line" className="hero-copy">
            {site.intro}
          </p>
          <ContactLinks className="hero-contacts" withIcons />
        </div>
      </section>

      <aside className="skills" aria-labelledby="skills-lab">
        <p id="skills-lab" className="skills-lab">
          Skill banks · labeled
        </p>
        <div className="certs">
          <p id="certs-lab" className="skill-group-label">
            Certifications
          </p>
          <ul className="cert-list" aria-labelledby="certs-lab">
            <li className="cert-lead">{certifications.lead}</li>
            {certifications.also.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.id} className="skill-group">
              <p id={`skill-${group.id}`} className="skill-group-label">
                {group.label}
              </p>
              <ul
                className="skills-list"
                aria-labelledby={`skill-${group.id}`}
              >
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <section className="projects" aria-labelledby="projects-lab">
        <p id="projects-lab" className="projects-lab">
          Project banks
        </p>
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`} className="project-link">
                <span className="lane">{p.lane}</span>
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
      </section>
    </ChassisPanel>
  );
}
