import { SiteHeader } from "@/components/site-header";

type Entry = {
  company: string;
  role: string;
  period?: string;
};

type ResumeSection = {
  label: string;
  entries: Entry[];
};

const experience: ResumeSection[] = [
  {
    label: "Current",
    entries: [
      { company: "Mercado Pago", role: "Design Manager", period: "2020–" },
    ],
  },
  {
    label: "Past experience",
    entries: [
      { company: "Rise New York & Partners", role: "Creative Director" },
      { company: "Meiuca", role: "Head of Design" },
      { company: "Descomplica", role: "Design Manager" },
      { company: "DDB Unlimited", role: "Design Director" },
      { company: "Work & Co", role: "Senior Designer" },
      { company: "Google Brand Studio", role: "Senior Designer" },
      { company: "Y Dreams", role: "Senior Designer" },
      { company: "Koi Factory", role: "Senior Designer" },
    ],
  },
];

const skills = [
  "Team Management",
  "User Experience Design",
  "Branding",
  "Visual Design",
  "Product Envisioning",
  "Design Process Consulting",
  "Team Growth & Leadership",
  "Strong Sales Experience",
  "Entrepreneurial Background",
];

const clients = [
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

export default function Bio() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <main className="px-8 pb-24 md:px-12 lg:px-20">
        {/* Intro — two-column */}
        <div className="grid grid-cols-1 gap-12 pt-8 pb-16 border-b border-border lg:grid-cols-[200px_1fr] lg:gap-20">
          <div>
            <p className="text-sm text-muted">Bio</p>
          </div>
          <div className="max-w-2xl space-y-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              Designer based in São Paulo, Brazil. Pedro is a Brazilian/Swiss
              designer and creative director working at the intersection of
              digital products and branding experience. With 18+ years of
              professional experience, he plays a central and strategic role
              across all stages of a project — from understanding business
              strategy to delivering final prototypes.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              Fueled by curiosity, Pedro finds himself in a process of
              continuous iteration and experimentation. Founder of{" "}
              <span className="text-foreground font-medium">FFForma</span>, a
              studio crafting new motion and visual solutions using GenAI for
              the creative industry.
            </p>
            <div className="pt-2">
              <a href="#experience" className="text-sm text-muted hover:text-foreground transition-colors">
                ↓
              </a>
            </div>
          </div>
        </div>

        {/* Experience table */}
        <div id="experience" className="pt-0">
          {experience.map((section) => (
            <div key={section.label}>
              {section.entries.map((entry, i) => (
                <div
                  key={entry.company}
                  className="group grid items-baseline border-b border-border py-4 transition-colors hover:bg-foreground/[0.02] lg:grid-cols-[200px_120px_1fr_24px]"
                >
                  {/* Section label — only first row */}
                  <span className="hidden text-xs text-muted lg:block">
                    {i === 0 ? section.label : ""}
                  </span>

                  {/* Period */}
                  <span className="hidden text-sm text-muted lg:block">
                    {entry.period ?? ""}
                  </span>

                  {/* Company + role */}
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {entry.company}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{entry.role}</p>
                    {/* Mobile-only label */}
                    {i === 0 && (
                      <p className="text-xs text-muted mt-1 lg:hidden">
                        {section.label}
                      </p>
                    )}
                  </div>

                  {/* Arrow */}
                  <span className="hidden text-sm text-muted transition-colors group-hover:text-foreground lg:block">
                    →
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer grid: Skills · Clients · Contact */}
        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-border pt-16 lg:grid-cols-3 lg:gap-20">
          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-8">
              Professional Skills
            </p>
            <div className="space-y-3">
              {skills.map((s) => (
                <p key={s} className="text-sm text-foreground/70">
                  {s}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-8">
              Clients
            </p>
            <div className="space-y-3">
              {clients.map((c) => (
                <p key={c} className="text-sm text-foreground/70">
                  {c}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-8">
              Contact
            </p>
            <div className="space-y-3">
              {[
                { label: "Email", href: "mailto:pducry@gmail.com" },
                { label: "Instagram", href: "https://www.instagram.com/pedro_julien" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/pedro_julien" },
                { label: "Foundation", href: "https://foundation.app/@ixaser" },
                { label: "Objkt", href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-16 text-xs text-muted">© Pedro Julien 2026</p>
      </main>
    </div>
  );
}
