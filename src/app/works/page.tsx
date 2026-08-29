"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";

// ─── Data ────────────────────────────────────────────────────────────────────

import { projects, type Project } from "@/lib/projects";

type Entry = { company: string; role: string; years: string };

const experience: Entry[] = [
  { company: "Mercado Pago",            role: "Design Manager",   years: "2025–"      },
  { company: "Rise New York & Partners",role: "Creative Director",years: "2024–2025"  },
  { company: "Meiuca",                  role: "Head of Design",   years: "2024–2024"  },
  { company: "Descomplica",             role: "Design Manager",   years: "2019–2024"  },
  { company: "DDB Unlimited",           role: "Design Director",  years: "2017–2019"  },
  { company: "Work & Co",               role: "Senior Designer",  years: "2015–2017"  },
  { company: "Google Brand Studio",     role: "Senior Designer",  years: "2015–2015"  },
  { company: "Y Dreams",                role: "Senior Designer",  years: "2014–2015"  },
];

const recognition = [
  "Cannes Lions",
  "Webby Awards",
  "SxSW Digital Design",
  "Adobe's Cutting Edge",
  "D&AD",
  "Behance Portfolio Review",
  "Brasil Design Awards",
  "FastCo. Most Innovative Companies 2021",
  "Computer Arts",
  "Awwwards",
  "FWA",
];

const clients = [
  "Mercado Pago", "Google", "Facebook", "Nike", "Isadore", "Royal Canin",
  "KLM", "Heineken", "Globosat", "Adidas", "Shutterstock",
  "Art Directors Club", "Cisco", "Descomplica", "Neom",
];

const contactLinks = [
  { label: "Email",      href: "mailto:pducry@gmail.com" },
  { label: "Instagram",  href: "https://www.instagram.com/pedro_julien" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/pedrojulien/" },
  { label: "Objkt",      href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
];

// ─── Components ──────────────────────────────────────────────────────────────

function ModuleHeader({ label }: { label: string }) {
  return (
    <div className="px-6 py-3 border-t border-b border-border">
      <span className="text-sm text-foreground/30">{label}</span>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const linked = !!project.href;
  const cls = [
    "group grid items-baseline gap-x-6 border-b border-border px-6 py-5 transition-colors",
    "grid-cols-[48px_1fr_auto] lg:grid-cols-[64px_200px_180px_1fr_24px]",
    linked ? "hover:bg-foreground cursor-pointer" : "",
  ].join(" ");

  const txt = (prominent = false) =>
    linked
      ? `transition-colors group-hover:text-background ${prominent ? "text-foreground" : "text-muted"}`
      : prominent
      ? "text-foreground"
      : "text-muted";

  const inner = (
    <div className={cls}>
      <span className={`text-sm tabular-nums whitespace-nowrap ${txt()}`}>{project.year}</span>

      {/* Mobile: name + category below */}
      <div className="lg:hidden">
        <span className={`text-sm whitespace-nowrap ${txt(true)}`}>{project.name}</span>
        <p className={`text-xs mt-0.5 ${txt()}`}>{project.category}</p>
      </div>

      {/* Desktop columns */}
      <span className={`hidden lg:block text-sm whitespace-nowrap ${txt()}`}>{project.category}</span>
      <span className={`hidden lg:block text-sm whitespace-nowrap ${txt()}`}>{project.role}</span>
      <span className={`hidden lg:block text-base whitespace-nowrap ${txt(true)}`}>{project.name}</span>

      <span className={`text-sm justify-self-end transition-colors ${linked ? "text-muted/40 group-hover:text-background" : "invisible"}`}>→</span>
    </div>
  );

  return (
    <Reveal>
      {linked ? <Link href={project.href!}>{inner}</Link> : <div>{inner}</div>}
    </Reveal>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Bio() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Intro */}
      <div className="px-6 pt-6 pb-8">
        <div className="max-w-xl space-y-6">
          <p className="text-2xl lg:text-[22px] leading-snug text-foreground/75">{t.bio.p1}</p>
          <p className="text-2xl lg:text-[22px] leading-tight text-foreground/75">
            {t.bio.p4a}{" "}
            <a
              href="https://ffforma.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium hover:opacity-60 transition-opacity"
            >
              FFForma
            </a>
            {t.bio.p4b}
          </p>
          <a
            href="mailto:pducry@gmail.com"
            className="inline-flex items-center gap-2 text-2xl lg:text-[22px] text-foreground hover:opacity-60 transition-opacity"
          >
            {t.bio.cta} →
          </a>
          <div>
            <a
              href="#projects"
              className="inline-flex items-baseline gap-2 text-sm text-foreground/30 transition-colors hover:text-foreground"
            >
              {t.bio.scroll}
              <span className="animate-scroll-hint">↓</span>
            </a>
          </div>
        </div>
      </div>

      <div className="h-12 lg:h-[140px]" />

      {/* Works */}
      <div id="projects" className="border-t border-border">
        <Reveal>
          <div className="px-6 py-3 border-b border-border">
            <span className="text-sm text-foreground/30">Works</span>
          </div>
        </Reveal>
        {projects.map((p) => <ProjectRow key={p.name} project={p} />)}
      </div>

      {/* Experience */}
      <div id="experience" className="mt-16 lg:mt-20">
        <Reveal>
          <ModuleHeader label={t.experience.past} />
        </Reveal>
        {experience.map((entry) => (
          <Reveal key={entry.company}>
            <div className="grid items-baseline gap-x-6 border-b border-border px-6 py-6 grid-cols-[80px_1fr] lg:grid-cols-[120px_180px_1fr]">
              <span className="text-sm text-muted tabular-nums whitespace-nowrap">{entry.years}</span>
              <span className="hidden lg:block text-sm text-muted whitespace-nowrap">{t.roles[entry.role as keyof typeof t.roles]}</span>
              <div>
                <p className="text-base text-foreground">{entry.company}</p>
                <p className="text-xs text-muted mt-0.5 lg:hidden">{t.roles[entry.role as keyof typeof t.roles]}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 lg:mt-20">
        {/* Desktop header */}
        <Reveal>
          <div className="hidden lg:grid grid-cols-4 gap-16 px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">{t.footer.skills}</span>
            <span className="text-sm text-foreground/30">{t.footer.recognition}</span>
            <span className="text-sm text-foreground/30">{t.footer.clients}</span>
            <span className="text-sm text-foreground/30">{t.footer.contact}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-16 lg:mt-3 lg:px-6">
          {/* Skills */}
          <Reveal>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">{t.footer.skills}</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {t.skills.map((s) => <p key={s} className="text-base text-foreground/60">{s}</p>)}
            </div>
          </Reveal>

          {/* Recognition */}
          <Reveal delay={0.06}>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">{t.footer.recognition}</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {recognition.map((r) => <p key={r} className="text-base text-foreground/60">{r}</p>)}
            </div>
          </Reveal>

          {/* Clients */}
          <Reveal delay={0.12}>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">{t.footer.clients}</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {clients.map((c) => <p key={c} className="text-base text-foreground/60">{c}</p>)}
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.18}>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">{t.footer.contact}</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {contactLinks.map(({ label, href }) => (
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
          </Reveal>
        </div>
      </div>

      <Reveal>
        <p className="mt-16 px-6 text-sm text-muted pb-8">{t.copyright}</p>
      </Reveal>
    </div>
  );
}
