"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import { asset } from "@/lib/asset";
import { MobileMenu } from "@/components/mobile-menu";

type Entry = { company: string; role: string; years: string };
type ResumeSection = { label: string; entries: Entry[] };

const experience: ResumeSection[] = [
  {
    label: "Current",
    entries: [
      { company: "Mercado Pago",            role: "Design Manager",   years: "2020—"      },
    ],
  },
  {
    label: "Past experience",
    entries: [
      { company: "Rise New York & Partners",role: "Creative Director",years: "2018—2020"  },
      { company: "Meiuca",                  role: "Head of Design",   years: "2017—2018"  },
      { company: "Descomplica",             role: "Design Manager",   years: "2015—2017"  },
      { company: "DDB Unlimited",           role: "Design Director",  years: "2013—2015"  },
      { company: "Work & Co",               role: "Senior Designer",  years: "2011—2013"  },
      { company: "Google Brand Studio",     role: "Senior Designer",  years: "2010—2011"  },
      { company: "Y Dreams",                role: "Senior Designer",  years: "2008—2010"  },
      { company: "Koi Factory",             role: "Senior Designer",  years: "2006—2008"  },
    ],
  },
];

type Project = { category: string; year: string; name: string; role: string };

const projects: Project[] = [
  { category: "Design System",   year: "2020", name: "Andes Design System — Mercado Pago",        role: "Design Director"  },
  { category: "Brand Identity",  year: "2024", name: "FFForma — Creative Studio",                  role: "Senior Designer"  },
  { category: "Digital Product", year: "2019", name: "Rise New York & Partners — Brand Campaigns", role: "Design Director"  },
  { category: "Brand Identity",  year: "2018", name: "Descomplica — Brand Refresh",                role: "Senior Designer"  },
  { category: "Design System",   year: "2015", name: "Royal Canin — Global Design System",         role: "Design Director"  },
  { category: "Digital Product", year: "2014", name: "Adidas — Global Soccer Platform",            role: "Design Director"  },
  { category: "Digital Product", year: "2013", name: "Facebook & Santander — Digital Products",    role: "Senior Designer"  },
  { category: "Interactive",     year: "2011", name: "Performing Arts With Google",                role: "Senior Designer"  },
  { category: "Interactive",     year: "2010", name: "Hear the City — Cisco",                      role: "Senior Designer"  },
  { category: "Digital Product", year: "2008", name: "Globosat & Esporte Interativo",              role: "Senior Designer"  },
];

const clients = [
  "Google","Facebook","Nike","Isadore","Royal Canin",
  "KLM","Heineken","Globosat","Adidas","Shutterstock",
  "Art Directors Club","Cisco","Descomplica","Neom",
];

const TOP      = "lg:grid-cols-[180px_110px_1fr_auto]";
const COL      = "lg:grid-cols-[200px_110px_1fr_32px]";
const PROJ_COL = "lg:grid-cols-[180px_110px_200px_1fr_32px]";

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

      {/* ── Mobile: header + bio ── */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between pt-6">
          <Link href="/works" className="text-base font-medium text-foreground">
            Pedro Julien
          </Link>
          <MobileMenu />
        </div>
        <div className="pt-10 pb-20 space-y-5">
          <p className="text-base leading-snug text-foreground/75">{t.bio.p1}</p>
          <p className="text-base leading-snug text-foreground/75">
            {t.bio.p2a}{" "}
            <a href="https://ffforma.design" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-colors">FFForma</a>
            {t.bio.p2b}
          </p>
          <a href="mailto:pducry@gmail.com" className="inline-flex items-center gap-2 text-base text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors">
            {t.bio.cta} →
          </a>
        </div>
      </div>

      {/* ── Desktop: header + Intro na mesma row ── */}
      <div className={`hidden lg:grid ${TOP} gap-x-8 items-start pt-6 pb-28`}>
        <div className="pt-0.5">
          <Link href="/works" className="text-base font-medium text-foreground hover:opacity-60 transition-opacity">
            Pedro Julien
          </Link>
        </div>
        <span />
        <div className="space-y-5 max-w-xl">
          <p className="text-base leading-snug text-foreground/75">{t.bio.p1}</p>
          <p className="text-base leading-snug text-foreground/75">
            {t.bio.p2a}{" "}
            <a href="https://ffforma.design" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-colors">FFForma</a>
            {t.bio.p2b}
          </p>
          <a href="mailto:pducry@gmail.com" className="inline-flex items-center gap-2 text-base text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors">
            {t.bio.cta} →
          </a>
        </div>
        <div className="flex items-center justify-end gap-8 pt-0.5">
          <nav className="flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-base text-muted hover:text-foreground transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 text-sm tabular-nums">
            <button onClick={() => lang === "pt" && toggleLang()} className={`transition-colors ${lang === "en" ? "text-foreground" : "text-muted hover:text-foreground"}`}>EN</button>
            <span className="text-muted">/</span>
            <button onClick={() => lang === "en" && toggleLang()} className={`transition-colors ${lang === "pt" ? "text-foreground" : "text-muted hover:text-foreground"}`}>PT</button>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <button onClick={() => theme === "dark" && toggleTheme()} className={`transition-colors ${theme === "light" ? "text-foreground" : "text-muted hover:text-foreground"}`}>Light</button>
            <span className="text-muted">/</span>
            <button onClick={() => theme === "light" && toggleTheme()} className={`transition-colors ${theme === "dark" ? "text-foreground" : "text-muted hover:text-foreground"}`}>Dark</button>
          </div>
        </div>
      </div>

      {/* ── Video FFForma ── */}
      {/* Mobile: edge-to-edge com margem pequena */}
      <div className="lg:hidden -mx-6 mb-16 flex justify-center">
        <video
          src={asset("/ffforma-slideshow.mp4")}
          autoPlay loop muted playsInline
          className="w-full h-auto block px-3"
        />
      </div>
      {/* Desktop: alinhado à coluna */}
      <div className={`hidden lg:grid ${COL} gap-x-8 mb-24`}>
        <span />
        <span />
        <div className="col-span-2">
          <video
            src={asset("/ffforma-slideshow.mp4")}
            autoPlay loop muted playsInline
            className="w-[85%] h-auto block"
          />
        </div>
      </div>

      {/* ── Projects ── */}
      <div id="projects" className="border-t border-border">
        <div className={`grid ${PROJ_COL} gap-x-8 py-4 border-b border-border`}>
          <span className="hidden text-base text-foreground/30 lg:block">{t.projects.type}</span>
          <span className="hidden text-base text-foreground/30 lg:block">{t.projects.year}</span>
          <span className="hidden text-base text-foreground/30 lg:block">{t.projects.role}</span>
          <span className="text-base text-foreground/30">{t.projects.name}</span>
          <span className="hidden lg:block" />
        </div>

        {projects.map((project) => (
          <div
            key={project.name}
            className={`group grid items-center border-b border-border transition-colors hover:bg-foreground/[0.02] ${PROJ_COL} gap-x-8 py-4 lg:py-12`}
          >
            <span className="hidden text-base text-muted lg:block">
              {t.categories[project.category as keyof typeof t.categories]}
            </span>
            <span className="hidden text-base text-muted lg:block">{project.year}</span>
            <span className="hidden text-base text-muted lg:block">{project.role}</span>
            {/* Desktop: project name */}
            <p className="hidden lg:block text-base font-medium text-foreground truncate">{project.name}</p>
            {/* Mobile: name + metadata stacked */}
            <div className="lg:hidden">
              <p className="text-base font-medium text-foreground">{project.name}</p>
              <p className="text-sm text-muted mt-1">{project.role} · {project.year}</p>
            </div>
            <span className="hidden text-base text-muted/40 transition-colors group-hover:text-foreground lg:block text-right">→</span>
          </div>
        ))}
      </div>

      {/* ── Experience ── */}
      <div id="experience" className="mt-20 border-t border-border pt-4">
        {experience.map((section, si) => (
          <div key={section.label}>
            {/* Cabeçalho de cada seção na sua própria linha */}
            {si > 0 && (
              <div className={`hidden lg:grid ${COL} gap-x-8 pt-14 pb-2`}>
                <span className="text-base text-muted whitespace-nowrap">
                  {t.experience.past}
                </span>
                <span /><span /><span />
              </div>
            )}
            {section.entries.map((entry, i) => (
              <div
                key={entry.company}
                className={`grid items-center border-b border-border ${COL} gap-x-8
                    ${si === 0 ? "group transition-colors hover:bg-foreground/[0.02]" : ""}
                  py-4 lg:py-12`}
              >
                <span className="hidden text-base text-muted lg:block whitespace-nowrap">
                  {entry.years}
                </span>
                <span className="hidden lg:block" />
                {/* Desktop: company + role inline */}
                <div className="hidden lg:flex items-baseline gap-6 min-w-0">
                  <p className="text-base font-medium text-foreground whitespace-nowrap">{entry.company}</p>
                  <p className="text-base text-muted whitespace-nowrap">{t.roles[entry.role as keyof typeof t.roles]}</p>
                </div>
                {/* Mobile: stacked */}
                <div className="lg:hidden">
                  <p className="text-base font-medium text-foreground">{entry.company}</p>
                  <p className="text-sm text-muted mt-1">{t.roles[entry.role as keyof typeof t.roles]} · {entry.years}</p>
                </div>
                <span className="hidden text-base lg:block text-right text-muted/40">
                  {si === 0 ? <span className="transition-colors group-hover:text-foreground">→</span> : ""}
                </span>
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
