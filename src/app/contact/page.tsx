"use client";

import { SiteHeader } from "@/components/site-header";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const links = [
  { label: "Email",      href: "mailto:pducry@gmail.com" },
  { label: "Instagram",  href: "https://www.instagram.com/pedro_julien" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/pedro_julien" },
  { label: "Foundation", href: "https://foundation.app/@ixaser" },
  { label: "Objkt",      href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
];

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang].contact;

  return (
    <div className="animate-fade-in">
      <SiteHeader />
      <main className="px-6 pt-16 pb-32">
        <div className="max-w-lg space-y-12">
          <div className="space-y-3">
            <p className="text-sm text-muted uppercase tracking-widest">{t.label}</p>
            <p className="text-base leading-snug text-foreground/70">{t.subtitle}</p>
          </div>
          <div className="space-y-5">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-border pb-5 text-base text-foreground/70 transition-colors hover:text-foreground group"
              >
                <span>{label}</span>
                <span className="text-muted/40 transition-colors group-hover:text-foreground">→</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
