"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

function UxEvolveContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const ux = t.pages.uxEvolve;

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
        <span className="text-base text-foreground whitespace-nowrap">UxEvolve 2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Culture"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      {/* Intro */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{ux.intro1}</p>
          <p className="text-base leading-snug text-foreground/70">{ux.intro2}</p>
        </div>
      </div>

      {/* Highlight reel */}
      <Reveal>
        <div className="mt-16 border-t border-b border-border">
          <video
            src={asset("/videos/uxevolve/close-all.mp4")}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
          />
        </div>
      </Reveal>

      {/* Visual identity */}
      <div className="mt-16 border-t border-border">

        {/* Separator video 1 */}
        <Reveal>
          <div className="border-b border-border">
            <video
              src={asset("/videos/uxevolve/separator-01.mp4")}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </Reveal>

        {/* Concept text */}
        <Reveal>
          <div className="px-6 border-b border-border py-6">
            <div className="max-w-xl space-y-2">
              <p className="text-xs text-muted">{ux.conceptLabel}</p>
              <p className="text-base leading-snug text-foreground/70">{ux.conceptText}</p>
            </div>
          </div>
        </Reveal>

        {/* Slide backgrounds, automatic side-scrolling carousel */}
        <Reveal>
          <div className="overflow-hidden border-b border-border">
            <div className="flex w-max animate-marquee">
              {[0, 1].map((dup) =>
                [1, 2, 3, 4].map((i) => (
                  <div key={`${dup}-${i}`} className="h-64 lg:h-96 shrink-0 border-r border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(`/images/uxevolve/bg-${i}.jpg`)}
                      alt={`UxEvolve 2026, background ${i}`}
                      className="h-full w-auto object-cover"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </Reveal>
      </div>

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function UxEvolvePage() {
  return <UxEvolveContent />;
}
