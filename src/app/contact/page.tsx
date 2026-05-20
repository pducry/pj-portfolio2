"use client";

import { SiteHeader } from "@/components/site-header";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const links = [
  { label: "Email",      href: "mailto:pducry@gmail.com" },
  { label: "GitHub",     href: "https://github.com/pducry" },
  { label: "Instagram",  href: "https://www.instagram.com/pedro_julien" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/pedro_julien" },
  { label: "Foundation", href: "https://foundation.app/@ixaser" },
  { label: "Objkt",      href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
];

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang].contact;

  return (
    <div className="animate-fade-in flex flex-col min-h-svh">
      <SiteHeader />

      {/* Intro — identical positioning to works/playground */}
      <div className="px-6">
        <div className="pt-6 pb-8">
          <div className="space-y-5 max-w-xl">
            <p className="text-base leading-snug text-foreground/75 whitespace-pre-line">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Links — anchored bottom-left */}
      <div className="flex-1 flex flex-col justify-end px-6 pb-8">
        <div className="grid grid-cols-2 gap-x-12 max-w-xl">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b border-border py-4 text-base text-foreground/70 transition-colors hover:text-foreground group"
            >
              <span>{label}</span>
              <span className="text-muted/40 transition-colors group-hover:text-foreground">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
