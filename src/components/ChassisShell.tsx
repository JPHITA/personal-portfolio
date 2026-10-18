import Link from "next/link";
import { contact, site } from "@/content/projects";

const contacts = [contact.email, contact.linkedin, contact.github];

export function ChassisCap({ home = false }: { home?: boolean }) {
  const NameTag = home ? "h1" : "p";
  return (
    <header className="cap">
      <div className="cap-name">
        {home ? (
          <NameTag className="cap-title">{site.name}</NameTag>
        ) : (
          <Link href="/" className="cap-title cap-title-link">
            {site.name}
          </Link>
        )}
      </div>
      <p className="cap-role">{site.specialty}</p>
    </header>
  );
}

export function ChassisFoot() {
  return (
    <footer className="foot">
      <nav className="foot-contacts" aria-label="Contact">
        {contacts.map((c, i) => (
          <span key={c.label} className="foot-item">
            {i > 0 ? <span className="foot-sep" aria-hidden="true"> · </span> : null}
            <a
              href={c.href}
              className="foot-link"
              rel="noopener noreferrer"
              {...(c.href.startsWith("http") ? { target: "_blank" } : {})}
            >
              {c.label}
              <span className="sr-only"> ({c.note})</span>
            </a>
          </span>
        ))}
      </nav>
      <span className="foot-mark">Nixie laboratory counter</span>
    </footer>
  );
}

export function ChassisPanel({
  children,
  home = false,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="panel">
      <ChassisCap home={home} />
      {children}
      <ChassisFoot />
    </div>
  );
}
