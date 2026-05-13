"use client";

import Link from "next/link";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import { SiteHeader } from "@/components/site-header";

type Entry = { company: string; role: string; years: string };

const experience: Entry[] = [
  { company: "Mercado Pago",            role: "Design Manager",   years: "2020—"      },
  { company: "Rise New York & Partners",role: "Creative Director",years: "2018—2020"  },
  { company: "Meiuca",                  role: "Head of Design",   years: "2017—2018"  },
  { company: "Descomplica",             role: "Design Manager",   years: "2015—2017"  },
  { company: "DDB Unlimited",           role: "Design Director",  years: "2013—2015"  },
  { company: "Work & Co",               role: "Senior Designer",  years: "2011—2013"  },
  { company: "Google Brand Studio",     role: "Senior Designer",  years: "2010—2011"  },
  { company: "Y Dreams",                role: "Senior Designer",  years: "2008—2010"  },
  { company: "Koi Factory",             role: "Senior Designer",  years: "2006—2008"  },
];

type Project = { category: string; year: string; name: string; role: string; href?: string };

const projects: Project[] = [
  { category: "Digital Product", year: "2025", name: "Mercado Pago Projects",                      role: "Design Manager"   },
  { category: "Digital Product", year: "2025", name: "Foracle",                                    role: "Design Director",  href: "/foracle" },
  { category: "Brand Identity",  year: "2024", name: "FFForma — Creative Studio",                  role: "Founder"          },
  { category: "Digital Product", year: "2025", name: "Sute",                                        role: "Design Director"  },
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
const COL      = "lg:grid-cols-[260px_110px_1fr_32px]";
const PROJ_COL = "lg:grid-cols-[220px_110px_260px_1fr_32px]";

export default function Bio() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="animate-fade-in">
      {/* ── Header — idêntico em todas as páginas ── */}
      <SiteHeader />

      <div className="px-6">
      {/* ── Intro text — centrado no grid, stick ao topo ── */}
      <div className="pt-1 pb-8">
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
      </div>

      {/* ── Spacer ── */}
      <div className="h-10 lg:h-[150px]" />

      {/* ── Projects ── */}
      <div id="projects" className="border-t border-border">
        {/* Column headers */}
        <div className={`grid ${PROJ_COL} gap-x-8 py-3 border-b border-border`}>
          <span className="hidden text-sm text-foreground/30 lg:block">{t.projects.type}</span>
          <span className="hidden text-sm text-foreground/30 lg:block">{t.projects.year}</span>
          <span className="hidden text-sm text-foreground/30 lg:block">{t.projects.role}</span>
          <span className="text-sm text-foreground/30">{t.projects.name}</span>
          <span className="hidden lg:block" />
        </div>

        {projects.map((project) => {
          const inner = (
            <>
              <span className="hidden text-base text-muted lg:block whitespace-nowrap">
                {t.categories[project.category as keyof typeof t.categories]}
              </span>
              <span className="hidden text-base text-muted lg:block whitespace-nowrap">{project.year}</span>
              <span className="hidden text-base text-muted lg:block whitespace-nowrap">{project.role}</span>
              {/* Desktop */}
              <p className="hidden lg:block text-base text-foreground truncate">{project.name}</p>
              {/* Mobile */}
              <div className="lg:hidden flex items-start justify-between gap-3 w-full">
                <div className="min-w-0">
                  <p className="text-base text-foreground leading-snug">{project.name}</p>
                  <p className="text-sm text-muted mt-1 leading-snug">{t.categories[project.category as keyof typeof t.categories]} · {project.year}</p>
                </div>
                <span className="text-base text-muted/40 shrink-0 mt-0.5">→</span>
              </div>
              <span className={`hidden text-base lg:block text-right transition-colors ${project.href ? "text-foreground/40 group-hover:text-foreground" : "text-muted/40"}`}>→</span>
            </>
          );

          const cls = `group grid items-center border-b border-border ${PROJ_COL} gap-x-8 py-5 lg:py-12${project.href ? " transition-colors hover:bg-foreground/[0.02] cursor-pointer" : ""}`;

          return project.href ? (
            <Link key={project.name} href={project.href} className={cls}>
              {inner}
            </Link>
          ) : (
            <div key={project.name} className={cls}>
              {inner}
            </div>
          );
        })}
      </div>

      {/* ── Experience ── */}
      <div id="experience" className="mt-16 lg:mt-20">
        {/* Module header — border above and below, aligned with Projects */}
        <div className="py-3 border-t border-b border-border">
          <span className="text-sm text-foreground/30 whitespace-nowrap">{t.experience.past}</span>
        </div>

        {experience.map((entry) => (
          <div
            key={entry.company}
            className={`grid items-center border-b border-border ${COL} gap-x-8 py-3 lg:py-3`}
          >
            {/* Desktop — order: role / years / company */}
            <span className="hidden text-base text-muted lg:block whitespace-nowrap">
              {t.roles[entry.role as keyof typeof t.roles]}
            </span>
            <span className="hidden text-base text-muted lg:block whitespace-nowrap">{entry.years}</span>
            <p className="hidden text-base text-foreground lg:block whitespace-nowrap truncate">{entry.company}</p>
            <span className="hidden lg:block" />
            {/* Mobile — order: role on top, company below, years on right */}
            <div className="lg:hidden flex items-center justify-between gap-3 w-full">
              <div className="min-w-0">
                <p className="text-sm text-muted leading-snug">{t.roles[entry.role as keyof typeof t.roles]}</p>
                <p className="text-base text-foreground mt-1 leading-snug">{entry.company}</p>
              </div>
              <span className="text-sm text-muted/70 whitespace-nowrap shrink-0">{entry.years}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer ── */}
      <div className="mt-16 lg:mt-32 grid grid-cols-1 gap-12 border-t border-border pt-12 lg:pt-20 lg:grid-cols-3 lg:gap-24">
        <div>
          <p className="text-sm text-muted mb-6 lg:mb-10">{t.footer.skills}</p>
          <div className="space-y-3 lg:space-y-4">
            {t.skills.map((s) => (
              <p key={s} className="text-base text-foreground/60">{s}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-muted mb-6 lg:mb-10">{t.footer.clients}</p>
          <div className="space-y-3 lg:space-y-4">
            {clients.map((c) => (
              <p key={c} className="text-base text-foreground/60">{c}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-muted mb-6 lg:mb-10">{t.footer.contact}</p>
          <div className="space-y-3 lg:space-y-4">
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

      <p className="mt-12 lg:mt-20 text-sm text-muted pb-8">{t.copyright}</p>
      </div>{/* end px-6 */}
    </div>
  );
}
