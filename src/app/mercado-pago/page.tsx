"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const subProjects = [
  {
    year: "2026",
    category: "Creative",
    name: "New UI Kit",
    role: "Design Manager",
    href: "/mercado-pago/visual-design",
  },
  {
    year: "2026",
    category: "Creative",
    name: "Art Direction",
    role: "Design Manager",
    href: "/mercado-pago/art-direction",
  },
  {
    year: "2026",
    category: "Culture",
    name: "UxEvolve 2026",
    role: "Design Manager",
    href: "/mercado-pago/ux-evolve-2026",
  },
  // Unpublished: kept in src/app/mercado-pago/_motion-foundations
  // {
  //   year: "2026",
  //   category: "Design System",
  //   name: "Motion Foundations",
  //   role: "Design Manager",
  //   href: "/mercado-pago/motion-foundations",
  // },
  {
    year: "2025",
    category: "Leadership",
    name: "MPCraft",
    role: "Design Manager",
    href: "/mercado-pago/mpcraft",
  },
];

function MercadoPagoContent() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link
          href="/works"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.common.backToWorks}
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Mercado Pago</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Product Design"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2025–</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      {/* Description */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">
            {t.pages.mercadoPago.desc1}
          </p>
          <p className="text-base leading-snug text-foreground/70">
            {t.pages.mercadoPago.desc2}
          </p>
        </div>
      </div>

      {/* Projects list */}
      <div className="border-t border-border mt-16">
        <Reveal>
          <div className="px-6 py-3 border-b border-border">
            <span className="text-sm text-foreground/30">{t.common.projects}</span>
          </div>
        </Reveal>

        {subProjects.map((p) => {
          const linked = !!p.href;
          const row = (
            <div className={`group grid items-baseline gap-x-6 border-b border-border px-6 py-5 transition-colors grid-cols-[48px_1fr_auto] lg:grid-cols-[64px_200px_1fr_24px] ${linked ? "hover:bg-foreground cursor-pointer" : ""}`}>
              <span className={`text-sm tabular-nums whitespace-nowrap text-muted ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                {p.year}
              </span>
              <div className="lg:hidden">
                <span className={`text-sm whitespace-nowrap text-foreground ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                  {p.name}
                </span>
                <p className={`text-xs mt-0.5 text-muted ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                  {t.categories[p.category as keyof typeof t.categories]}
                </p>
              </div>
              <span className={`hidden lg:block text-sm whitespace-nowrap text-muted ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                {t.categories[p.category as keyof typeof t.categories]}
              </span>
              <span className={`hidden lg:block text-base whitespace-nowrap text-foreground ${linked ? "transition-colors group-hover:text-background" : ""}`}>
                {p.name}
              </span>
              <span className={`text-sm justify-self-end ${linked ? "text-muted/40 transition-colors group-hover:text-background" : "invisible"}`}>
                →
              </span>
            </div>
          );
          return (
            <Reveal key={p.name}>
              {linked ? <Link href={p.href}>{row}</Link> : <div>{row}</div>}
            </Reveal>
          );
        })}
      </div>

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function MercadoPagoPage() {
  return <MercadoPagoContent />;
}
