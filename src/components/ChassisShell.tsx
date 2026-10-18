import Link from "next/link";
import { contact, site } from "@/content/projects";

const contacts = [contact.email, contact.linkedin, contact.github] as const;

type ContactLabel = (typeof contacts)[number]["label"];

function ContactIcon({ label }: { label: ContactLabel }) {
  const common = {
    className: "foot-link-icon",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": true as const,
    focusable: false as const,
  };
  if (label === "Email") {
    return (
      <svg {...common}>
        <path d="M1.5 3.5A1.5 1.5 0 0 1 3 2h10a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 13 14H3a1.5 1.5 0 0 1-1.5-1.5v-9Zm1.3.4 5.2 3.6 5.2-3.6H2.8Zm10.7 1.4-5.05 3.5a1 1 0 0 1-1.1 0L2.3 5.3v7.2c0 .11.09.2.2.2h10.8c.11 0 .2-.09.2-.2V5.3Z" />
      </svg>
    );
  }
  if (label === "LinkedIn") {
    return (
      <svg {...common}>
        <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5v9A1.5 1.5 0 0 0 2.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 11.5 2h-9ZM5.2 12.2V6.7H3.4v5.5h1.8Zm-.9-6.25a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1ZM12.6 12.2v-3c0-1.6-.87-2.35-2.03-2.35-.93 0-1.35.52-1.58.88V6.7H7.2c.02.45 0 5.5 0 5.5h1.8V9.3c0-.15.01-.3.06-.41.12-.3.4-.62.87-.62.61 0 .86.47.86 1.15v2.78h1.81Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        fillRule="evenodd"
        d="M8 1.2a6.8 6.8 0 0 0-2.15 13.25c.34.06.46-.15.46-.33v-1.16c-1.87.41-2.27-.9-2.27-.9-.3-.78-.75-.99-.75-.99-.61-.42.05-.41.05-.41.68.05 1.03.7 1.03.7.6 1.03 1.58.73 1.97.56.06-.43.24-.73.43-.9-1.5-.17-3.07-.75-3.07-3.33 0-.74.26-1.34.7-1.81-.07-.17-.3-.86.07-1.79 0 0 .57-.18 1.86.7a6.4 6.4 0 0 1 3.38 0c1.3-.88 1.86-.7 1.86-.7.37.93.14 1.62.07 1.79.43.47.7 1.07.7 1.81 0 2.59-1.58 3.16-3.08 3.33.24.21.46.62.46 1.25v1.85c0 .18.12.4.47.33A6.8 6.8 0 0 0 8 1.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ContactLinks({
  className = "foot-contacts",
  label = "Contact",
  withIcons = false,
}: {
  className?: string;
  label?: string;
  withIcons?: boolean;
}) {
  return (
    <nav className={className} aria-label={label}>
      {contacts.map((c, i) => (
        <span key={c.label} className="foot-item">
          {i > 0 ? (
            <span className="foot-sep" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
          ) : null}
          <a
            href={c.href}
            className="foot-link"
            rel="noopener noreferrer"
            {...(c.href.startsWith("http") ? { target: "_blank" } : {})}
          >
            {withIcons ? <ContactIcon label={c.label} /> : null}
            {c.label}
            <span className="sr-only"> ({c.note})</span>
          </a>
        </span>
      ))}
    </nav>
  );
}

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
      <ContactLinks />
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
