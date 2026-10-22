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
        {/* ponytail: evenodd so "in" punches holes (nonzero left solid square) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.625 4.385v7.23H2.297v-7.23h2.328zm-1.164-1.323c-.737 0-1.332-.595-1.332-1.332 0-.737.595-1.332 1.332-1.332.737 0 1.332.595 1.332 1.332 0 .737-.595 1.332-1.332 1.332zm4.861 8.553V8.431c0-.781.148-1.539.995-1.539.833 0 .846.777.846 1.582v4.322h2.328V8.226c0-2.215-1.186-3.246-2.768-3.246-1.289 0-1.845.715-2.165 1.217v.038h-.016l.016-.038V5.531H6.268c.03.678 0 7.23 0 7.23h2.328z"
        />
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
            {c.href.startsWith("http") ? (
              <span className="sr-only"> (opens in a new tab)</span>
            ) : null}
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
      <ContactLinks label="Footer contact" />
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
    <div className={home ? "panel panel-home" : "panel"}>
      <ChassisCap home={home} />
      {children}
      <ChassisFoot />
    </div>
  );
}
