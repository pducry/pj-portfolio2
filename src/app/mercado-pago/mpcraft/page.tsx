"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

function MPCraftContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const mp = t.pages.mpcraft;

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link
          href="/mercado-pago"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.common.backToMP}
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">MPCraft</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Leadership"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2025–</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      {/* Intro */}
      <div className="px-6 border-t border-b border-border py-16">
        <div className="max-w-xl space-y-6">
          <p className="text-base leading-snug text-foreground/70">{mp.intro1}</p>
          <p className="text-base leading-snug text-foreground/70">{mp.intro2}</p>
        </div>
      </div>

      {/* Leadership Pillars */}
      <Reveal>
        <div className="mt-16">
          <div className="px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">{mp.pillarsLabel}</span>
          </div>
          <div className="divide-y divide-border">
            {mp.pillars.map((pillar, i) => (
              <div key={i} className="px-6 py-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 lg:gap-12">
                <p className="text-base text-foreground">{pillar.label}</p>
                <p className="text-sm text-muted leading-snug">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Initiatives */}
      <Reveal>
        <div className="mt-16">
          <div className="px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">{mp.initiativesLabel}</span>
          </div>
          <div className="divide-y divide-border">
            {mp.initiatives.map((item, i) => (
              <div key={i} className="px-6 py-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 lg:gap-12">
                <p className="text-base text-foreground">{item.label}</p>
                <p className="text-sm text-muted leading-snug">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Rituals */}
      <Reveal>
        <div className="mt-16">
          <div className="px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">{mp.ritualsLabel}</span>
          </div>
          <div className="divide-y divide-border">
            {mp.rituals.map((ritual, i) => (
              <div key={i} className="px-6 py-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 lg:gap-12">
                <div>
                  <p className="text-base text-foreground">{ritual.label}</p>
                  <p className="text-xs text-muted mt-0.5">{ritual.duration}</p>
                </div>
                <p className="text-sm text-muted leading-snug">{ritual.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Agentic Leadership */}
      <Reveal>
        <div className="mt-16">
          <div className="px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">{mp.agenticLabel}</span>
          </div>
          <div className="px-6 py-16 border-b border-border max-w-xl">
            <p className="text-sm text-muted leading-snug">{mp.agenticIntro}</p>
          </div>
          <div className="divide-y divide-border">
            {mp.agentic.map((item, i) => (
              <div key={i} className="px-6 py-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 lg:gap-12">
                <p className="text-base text-foreground">{item.label}</p>
                <p className="text-sm text-muted leading-snug">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Closing image */}
      <Reveal>
        <div className="mt-16 border-t border-b border-border">
          <Image
            src={asset("/projects/mpcraft/mpcraft_hero.png")}
            alt="MPCraft"
            width={2880}
            height={1800}
            className="w-full h-auto"
            sizes="100vw"
          />
        </div>
      </Reveal>

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function MPCraftPage() {
  return <MPCraftContent />;
}
