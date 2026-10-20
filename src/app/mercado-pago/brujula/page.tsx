"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

// Static export of the Brújula MP reference library, served from public/.
const APP_SRC = "/projects/brujula-mp/index.html";

function BrujulaContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const br = t.pages.brujula;

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
        <span className="text-base text-foreground whitespace-nowrap">Brújula MP</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Creative"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      {/* Intro */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{br.intro1}</p>
          <p className="text-base leading-snug text-foreground/70">{br.intro2}</p>
        </div>
      </div>

      {/* Live app */}
      <Reveal>
        <div className="mt-16 border-t border-b border-border">
          <div className="px-6 py-3 border-b border-border flex items-baseline justify-between gap-4">
            <span className="text-sm text-foreground/30">{t.common.liveProject}</span>
            <a
              href={asset(APP_SRC)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors whitespace-nowrap"
            >
              {br.openFull}
            </a>
          </div>
          <iframe
            src={asset(APP_SRC)}
            title="Brújula MP"
            loading="lazy"
            className="block w-full h-[85vh] min-h-[640px] bg-white"
          />
        </div>
      </Reveal>

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function BrujulaPage() {
  return <BrujulaContent />;
}
