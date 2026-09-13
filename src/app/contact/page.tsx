"use client";

import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

type DescKey = keyof typeof translations.en.about.descriptions;
type RoleKey = keyof typeof translations.en.roles;

type Entry = {
  company: string;
  role: RoleKey;
  years: string;
  descKey: DescKey;
};

const experience: Entry[] = [
  { company: "Mercado Pago",             role: "Design Manager",   years: "2026–",    descKey: "mercadoPago"  },
  { company: "Rise New York & Partners", role: "Creative Director", years: "2024–2025", descKey: "rise"         },
  { company: "Meiuca",                   role: "Head of Design",   years: "2024–2024", descKey: "meiuca"       },
  { company: "Descomplica",              role: "Design Manager",   years: "2019–2024", descKey: "descomplica"  },
  { company: "DDB Unlimited",            role: "Design Director",  years: "2017–2019", descKey: "ddb"          },
  { company: "Work & Co",                role: "Senior Designer",  years: "2015–2017", descKey: "workCo"       },
  { company: "Google Brand Studio",      role: "Senior Designer",  years: "2015",      descKey: "google"       },
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
  "Mercado Pago",
  "Mercado Livre",
  "Google",
  "Facebook",
  "Nike",
  "Isadore",
  "Royal Canin",
  "KLM",
  "Heineken",
  "Globosat",
  "Adidas",
  "Shutterstock",
  "Art Directors Club",
  "Cisco",
  "Descomplica",
  "Neom",
];

const contactLinks = [
  { label: "Email",      href: "mailto:pducry@gmail.com" },
  { label: "Instagram",  href: "https://www.instagram.com/pedro_julien" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/pedrojulien/" },
  { label: "Objkt",      href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
];

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang];
  const a = t.about;

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Intro */}
      <div className="px-6 pt-6 pb-8">
        <div className="max-w-xl space-y-5">
          <p className="text-2xl lg:text-[22px] leading-snug text-foreground/75">
            {a.intro1}
          </p>
          <p className="text-2xl lg:text-[22px] leading-snug text-foreground/75">
            {a.intro2a}{" "}
            <span className="text-foreground font-medium">FFForma</span>
            {a.intro2b}
          </p>
          <p className="pt-1 text-lg lg:text-[22px] leading-relaxed text-muted italic">
            {a.quote}
          </p>
        </div>
      </div>

      <div className="h-8 lg:h-16" />

      {/* Experience */}
      <div id="experience" className="border-t border-border">
        <Reveal>
          <div className="px-6 py-3 border-b border-border">
            <span className="text-sm text-foreground/30">{a.experienceLabel}</span>
          </div>
        </Reveal>

        {experience.map((entry) => (
          <Reveal key={entry.company}>
            <div className="grid items-start gap-x-12 border-b border-border px-6 py-6 grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr]">
              <span className="text-sm text-muted tabular-nums whitespace-nowrap pt-0.5">
                {entry.years}
              </span>
              <div>
                <p className="text-xs text-muted mb-1">
                  {t.roles[entry.role]}
                </p>
                <p className="text-base text-foreground">{entry.company}</p>
                <p className="text-sm text-muted mt-2 leading-relaxed max-w-prose">
                  {a.descriptions[entry.descKey]}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Footer: Skills · Recognition · Clients · Contact */}
      <div className="mt-16 lg:mt-20">
        <Reveal>
          <div className="hidden lg:grid grid-cols-4 gap-16 px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">{t.footer.skills}</span>
            <span className="text-sm text-foreground/30">{a.recognitionLabel}</span>
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
              {a.skills.map((s) => (
                <p key={s} className="text-base text-foreground/60">{s}</p>
              ))}
            </div>
          </Reveal>

          {/* Recognition */}
          <Reveal delay={0.06}>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">{a.recognitionLabel}</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {recognition.map((r) => (
                <p key={r} className="text-base text-foreground/60">{r}</p>
              ))}
            </div>
          </Reveal>

          {/* Clients */}
          <Reveal delay={0.12}>
            <div className="lg:hidden px-6 py-3 border-t border-b border-border">
              <span className="text-sm text-foreground/30">{t.footer.clients}</span>
            </div>
            <div className="px-6 lg:px-0 py-6 lg:py-0 space-y-3 lg:space-y-4">
              {clients.map((c) => (
                <p key={c} className="text-base text-foreground/60">{c}</p>
              ))}
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
