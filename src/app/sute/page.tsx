"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const images = [
  { src: "/sute/1.png",  alt: "Sute, 1"  },
  { src: "/sute/3.png",  alt: "Sute, 3"  },
  { src: "/sute/4.png",  alt: "Sute, 4"  },
  { src: "/sute/5.png",  alt: "Sute, 5"  },
  { src: "/sute/6.jpg",  alt: "Sute, 6"  },
  { src: "/sute/7.png",  alt: "Sute, 7"  },
  { src: "/sute/8.png",  alt: "Sute, 8"  },
  { src: "/sute/10.png",      alt: "Sute, 10"  },
  { src: "/sute/sute_001.png", alt: "Sute, 001" },
  { src: "/sute/sute_002.png", alt: "Sute, 002" },
];

export default function SutePage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link href="/works" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
          {t.common.backToWorks}
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Sute</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Branding"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2025</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Head of Design"]}</span>
      </div>

      {/* Description */}
      <div className="px-6 border-t border-b border-border py-16">
        <div className="max-w-xl space-y-6">
          <p className="text-base leading-snug text-foreground/70">
            {t.pages.sute.desc1}
          </p>
          <p className="text-base leading-snug text-foreground/70">
            {t.pages.sute.desc2}
          </p>
          <p className="text-base leading-snug text-foreground/70">
            {t.pages.sute.desc3}
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="px-6 py-6 space-y-6">
        {images.map((img) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img.src}
            src={asset(img.src)}
            alt={img.alt}
            className="w-full h-auto"
          />
        ))}
      </div>

      <WorksFooter current="Sute" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}
