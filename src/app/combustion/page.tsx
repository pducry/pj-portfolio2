"use client";
import { SiteHeader } from "@/components/site-header";
import { WorksFooter } from "@/components/works-footer";
import Link from "next/link";
import { RevealMedia, type MediaItem } from "@/components/reveal-media";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const media: MediaItem[] = [
  { type: "image", src: "/projects/combustion/combustion1.png", alt: "Combustion, 1" },
  { type: "image", src: "/projects/combustion/combustion2.png", alt: "Combustion, 2" },
  { type: "image", src: "/projects/combustion/combustion3.png", alt: "Combustion, 3" },
  { type: "image", src: "/projects/combustion/combustion4.png", alt: "Combustion, 4" },
  { type: "image", src: "/projects/combustion/combustion5.png", alt: "Combustion, 5" },
  { type: "image", src: "/projects/combustion/combustion6.png", alt: "Combustion, 6" },
  { type: "image", src: "/projects/combustion/combustion7.png", alt: "Combustion, 7" },
  { type: "image", src: "/projects/combustion/combustion8.png", alt: "Combustion, 8" },
  { type: "image", src: "/projects/combustion/combustion9.png", alt: "Combustion, 9" },
];

export default function CombustionPage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="w-full">

      {/* Fixed header */}
      <SiteHeader />

      {/* Fixed left panel, desktop only */}
      <div className="hidden lg:flex fixed top-[57px] left-0 bottom-0 w-[40%] z-30 flex-col justify-end px-12 xl:px-20 pb-16 border-r border-border/40 bg-background">
        <div className="space-y-8 max-w-sm">

          <h1 className="text-4xl font-semibold tracking-tight">Combustion</h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">{t.common.year}</p>
              <p className="text-sm text-foreground">2024</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">{t.common.role}</p>
              <p className="text-sm text-foreground">{t.roles["Creative Direction"]}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">{t.common.category}</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] tracking-wide text-muted">
                  {t.categories["Branding"]}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 text-sm leading-relaxed text-muted border-t border-border/40 pt-12">
            <p>{t.pages.combustion.desc}</p>
          </div>

          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            {t.common.backToWorksBtn}
          </Link>

        </div>
      </div>

      {/* Right scrollable content */}
      <div className="lg:ml-[40%] pt-[57px]">

        {/* Mobile info */}
        <div className="lg:hidden px-4 py-16 sm:px-8 space-y-6 border-b border-border/40">
          <h1 className="text-3xl font-semibold tracking-tight">Combustion</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">{t.common.year}</p>
              <p className="text-sm">2024</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">{t.common.role}</p>
              <p className="text-sm">{t.roles["Creative Direction"]}</p>
            </div>
          </div>
          <p className="text-sm text-muted leading-relaxed">{t.pages.combustion.descMobile}</p>
          <Link href="/works" className="inline-flex items-center gap-2 text-xs text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            {t.common.backToWorksBtn}
          </Link>
        </div>

        {/* Images */}
        <div className="px-4 py-10 sm:px-8 lg:px-12 space-y-5">
          {media.map((item, i) => (
            <RevealMedia key={i} item={item} />
          ))}
        </div>

        <WorksFooter current="Combustion" />

        <p className="px-6 pb-8 text-xs text-muted">{t.copyright}</p>

      </div>

    </div>
  );
}
