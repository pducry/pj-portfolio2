"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

function EstaparContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const c = t.pages.estapar;

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <div className="px-6 pt-1 pb-4">
        <Link
          href="/works"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.common.backToWorks}
        </Link>
      </div>

      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Estapar</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Product Design"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2024</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Head of Design"]}</span>
      </div>

      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{c.desc1}</p>
          <p className="text-base leading-snug text-foreground/70">{c.desc2}</p>
        </div>
      </div>

      <div className="mt-16 border-t border-border">
        <Reveal>
          <div className="border-b border-border">
            <video
              src={asset("/projects/estapar/estapar-website.mp4")}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </Reveal>
      </div>

      <WorksFooter current="Estapar" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function EstaparPage() {
  return <EstaparContent />;
}
