"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import { asset } from "@/lib/asset";

type Entry = { company: string; role: string; period?: string };
type ResumeSection = { label: string; entries: Entry[] };

const experience: ResumeSection[] = [
  {
    label: "Current",
    entries: [
      { company: "Mercado Pago", role: "Design Manager", period: "2020" },
    ],
  },
  {
    label: "Past experience",
    entries: [
      { company: "Rise New York & Partners", role: "Creative Director" },
      { company: "Meiuca",                  role: "Head of Design" },
      { company: "Descomplica",             role: "Design Manager" },
      { company: "DDB Unlimited",           role: "Design Director" },
      { company: "Work & Co",               role: "Senior Designer" },
      { company: "Google Brand Studio",     role: "Senior Designer" },
      { company: "Y Dreams",                role: "Senior Designer" },
      { company: "Koi Factory",             role: "Senior Designer" },
    ],
  },
];

type Project = { category: string; year: string; name: string };

const projects: Project[] = [
  { category: "Design System",   year: "2020", name: "Andes Design System — Mercado Pago" },
  { category: "Brand Identity",  year: "2024", name: "FFForma — Creative Studio" },
  { category: "Digital Product", year: "2019", name: "Rise New York & Partners — Brand Campaigns" },
  { category: "Brand Identity",  year: "2018", name: "Descomplica — Brand Refresh" },
  { category: "Design System",   year: "2015", name: "Royal Canin — Global Design System" },
  { category: "Digital Product", year: "2014", name: "Adidas — Global Soccer Platform" },
  { category: "Digital Product", year: "2013", name: "Facebook & Santander — Digital Products" },
  { category: "Interactive",     year: "2011", name: "Performing Arts With Google" },
  { category: "Interactive",     year: "2010", name: "Hear the City — Cisco" },
  { category: "Digital Product", year: "2008", name: "Globosat & Esporte Interativo" },
];

const clients = [
  "Google","Facebook","Nike","Isadore","Royal Canin",
  "KLM","Heineken","Globosat","Adidas","Shutterstock",
  "Art Directors Club","Cisco","Descomplica","Neom",
];

// col 1 e col 2 idênticos ao COL das tabelas, col 4 auto para o nav
const TOP  = "lg:grid-cols-[180px_110px_1fr_auto]";
const COL  = "lg:grid-cols-[180px_110px_1fr_32px]";

export default function Bio() {
  const { lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const t = translations[lang];

  const navLinks = [
    { href: "/works",        label: t.nav.bio },
    { href: "/playground", label: t.nav.playground },
    { href: "/contact",    label: t.nav.contact },
  ];

  return (
    <div className="animate-fade-in px-6">

      {/* ── Header + Intro na mesma row ── */}
      <div className={`grid ${TOP} gap-x-0 items-start pt-6 pb-28`}>

        {/* Col 1: nome */}
        <div className="pt-0.5">
          <Link href="/bio" className="text-base font-medium text-foreground hover:opacity-60 transition-opacity">
            Pedro Julien
          </Link>
        </div>

        {/* Col 2: vazia */}
        <span className="hidden lg:block" />

        {/* Col 3: texto bio — alinhado com Project's Name */}
        <div className="space-y-5 max-w-xl mt-6 lg:mt-0">
          <p className="text-base leading-snug text-foreground/75">{t.bio.p1}</p>
          <p className="text-base leading-snug text-foreground/75">
            {t.bio.p2a}{" "}
            <span className="text-foreground font-medium">FFForma</span>
            {t.bio.p2b}
          </p>
          <a
            href="mailto:pducry@gmail.com"
            className="inline-flex items-center gap-2 text-base text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors"
          >
            {t.bio.cta} →
          </a>
        </div>

        {/* Col 4: nav + lang + theme numa linha */}
        <div className="hidden lg:flex items-center justify-end gap-8 pt-0.5">
          <nav className="flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-base text-muted hover:text-foreground transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* EN / PT — sempre visíveis */}
          <div className="flex items-center gap-1 text-sm tabular-nums">
            <button
              onClick={() => lang === "pt" && toggleLang()}
              className={`transition-colors ${lang === "en" ? "text-foreground" : "text-muted hover:text-foreground"}`}
            >EN</button>
            <span className="text-muted">/</span>
            <button
              onClick={() => lang === "en" && toggleLang()}
              className={`transition-colors ${lang === "pt" ? "text-foreground" : "text-muted hover:text-foreground"}`}
            >PT</button>
          </div>

          {/* Light / Dark — sempre visíveis */}
          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => theme === "dark" && toggleTheme()}
              className={`transition-colors ${theme === "light" ? "text-foreground" : "text-muted hover:text-foreground"}`}
            >Light</button>
            <span className="text-muted">/</span>
            <button
              onClick={() => theme === "light" && toggleTheme()}
              className={`transition-colors ${theme === "dark" ? "text-foreground" : "text-muted hover:text-foreground"}`}
            >Dark</button>
          </div>
        </div>
      </div>

      {/* ── Video FFForma ── */}
      <div className={`grid ${COL} gap-x-0 mb-24`}>
        <span className="hidden lg:block" />
        <span className="hidden lg:block" />
        <div className="col-span-2">
          <video
            src={asset("/ffforma-slideshow.mp4")}
            autoPlay
            loop
            muted
            playsInline
            className="w-[85%] h-auto block"
          />
        </div>
      </div>

      {/* ── Projects ── */}
      <div id="projects" className="border-t border-border">
        <div className={`grid ${COL} gap-x-0 py-3 border-b border-border`}>
          <span className="hidden text-base text-foreground/30 lg:block">{t.projects.type}</span>
          <span className="hidden text-base text-foreground/30 lg:block">{t.projects.year}</span>
          <span className="text-base text-foreground/30">{t.projects.name}</span>
          <span className="hidden lg:block" />
        </div>

        {projects.map((project) => (
          <div
            key={project.name}
            className={`group grid items-baseline border-b border-border transition-colors hover:bg-foreground/[0.02] ${COL} gap-x-0 py-6`}
          >
            <span className="hidden text-base text-muted lg:block self-start pt-0.5">
              {t.categories[project.category as keyof typeof t.categories]}
            </span>
            <span className="hidden text-base text-muted lg:block">{project.year}</span>
            <div>
              <p className="text-base font-medium text-foreground">{project.name}</p>
              <p className="text-sm text-muted mt-1 lg:hidden">
                {t.categories[project.category as keyof typeof t.categories]} · {project.year}
              </p>
            </div>
            <span className="hidden text-base text-muted/40 transition-colors group-hover:text-foreground lg:block text-right">→</span>
          </div>
        ))}
      </div>

      {/* ── Experience ── */}
      <div id="experience" className="mt-20 border-t border-border pt-4">
        {experience.map((section, si) => (
          <div key={section.label}>
            {section.entries.map((entry, i) => (
              <div
                key={entry.company}
                className={`group grid items-baseline border-b border-border transition-colors hover:bg-foreground/[0.02] ${COL} gap-x-0
                  ${i === 0 && si > 0 ? "pt-12 pb-6" : "py-6"}`}
              >
                <span className="hidden text-base text-muted lg:block self-start pt-0.5">
                  {i === 0 ? t.experience[section.label === "Current" ? "current" : "past"] : ""}
                </span>
                <span className="hidden text-base text-muted lg:block">{entry.period ?? ""}</span>
                <div>
                  <p className="text-base font-medium text-foreground">{entry.company}</p>
                  <p className="text-base text-muted mt-1">
                    {t.roles[entry.role as keyof typeof t.roles]}
                  </p>
                  {i === 0 && (
                    <p className="text-sm text-muted mt-2 lg:hidden">
                      {t.experience[section.label === "Current" ? "current" : "past"]}
                    </p>
                  )}
                </div>
                <span className="hidden text-base text-muted/40 transition-colors group-hover:text-foreground lg:block text-right">→</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Footer ── */}
      <div className="mt-32 grid grid-cols-1 gap-16 border-t border-border pt-20 lg:grid-cols-3 lg:gap-24">
        <div>
          <p className="text-sm text-muted uppercase tracking-widest mb-10">{t.footer.skills}</p>
          <div className="space-y-4">
            {t.skills.map((s) => (
              <p key={s} className="text-base text-foreground/60">{s}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-muted uppercase tracking-widest mb-10">{t.footer.clients}</p>
          <div className="space-y-4">
            {clients.map((c) => (
              <p key={c} className="text-base text-foreground/60">{c}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-muted uppercase tracking-widest mb-10">{t.footer.contact}</p>
          <div className="space-y-4">
            {[
              { label: "Email",      href: "mailto:pducry@gmail.com" },
              { label: "Instagram",  href: "https://www.instagram.com/pedro_julien" },
              { label: "LinkedIn",   href: "https://www.linkedin.com/in/pedro_julien" },
              { label: "Foundation", href: "https://foundation.app/@ixaser" },
              { label: "Objkt",      href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="block text-base text-foreground/60 transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-20 text-sm text-muted pb-8">{t.copyright}</p>
    </div>
  );
}
