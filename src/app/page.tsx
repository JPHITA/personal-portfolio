import type { Metadata } from "next";
import { ChassisPanel, ContactLinks } from "@/components/ChassisShell";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import {
  certifications,
  projects,
  site,
  skillGroups,
} from "@/content/projects";

export const metadata: Metadata = {
  title: { absolute: "Juan Piedrahita · Backend & Data" },
};

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
          Professional skills
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

      <section className="projects">
        <ProjectsCarousel
          projects={projects.map(({ slug, title, summary, lane, preview }) => ({
            slug,
            title,
            summary,
            lane,
            preview,
          }))}
        />
      </section>
    </ChassisPanel>
  );
}
