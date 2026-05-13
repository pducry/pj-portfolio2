"use client";

import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

// Each section defines how many columns and which images
const sections: { columns: number; images: string[] }[] = [
  {
    columns: 1,
    images: ["/gallery/pj_001.png", "/gallery/pj_002.png"],
  },
  {
    columns: 2,
    images: ["/gallery/pj_003.png", "/gallery/pj_004.png", "/gallery/pj_005.png", "/gallery/pj_006.png"],
  },
  {
    columns: 3,
    images: ["/gallery/pj_007.png", "/gallery/pj_008.png", "/gallery/pj_009.png", "/gallery/pj_010.png", "/gallery/pj_011.png", "/gallery/pj_012.png"],
  },
  {
    columns: 1,
    images: ["/gallery/pj_013.png"],
  },
  {
    columns: 2,
    images: ["/gallery/pj_014.png", "/gallery/pj_015.png"],
  },
  {
    columns: 3,
    images: ["/gallery/pj_016.png", "/gallery/pj_017.png", "/gallery/pj_018.png"],
  },
  {
    columns: 1,
    images: ["/gallery/pj_019.png", "/gallery/pj_020.png"],
  },
];

export default function ForaclePage() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* ── Intro ── */}
      <div className="px-6">

        {/* Back link */}
        <div className="pt-1 pb-4">
          <Link
            href="/works"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            ← Works
          </Link>
        </div>

        {/* Title row */}
        <div className="border-t border-border py-4">
          <h1 className="text-base text-foreground">Foracle</h1>
        </div>

        {/* Meta row */}
        <div className="border-t border-border py-4 flex flex-wrap gap-x-12 gap-y-1">
          <span className="text-sm text-muted whitespace-nowrap">Digital Product</span>
          <span className="text-sm text-muted whitespace-nowrap">2025</span>
          <span className="text-sm text-muted whitespace-nowrap">Design Director</span>
        </div>

        {/* Description row */}
        <div className="border-t border-border py-6 border-b border-border">
          <p className="text-base leading-snug text-foreground/70 max-w-xl">
            Foracle is a design exploration at the intersection of data visualization and editorial
            design — building a new visual language for information density and clarity.
          </p>
        </div>

      </div>

      {/* ── Image sections ── */}
      <div className="px-6 pt-3 pb-16 space-y-3">
        {sections.map((section, si) => (
          <div
            key={si}
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
          >
            {section.images.map((src, ii) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={ii}
                src={asset(src)}
                alt={`Foracle — ${si + 1}.${ii + 1}`}
                className="w-full h-auto object-contain block"
              />
            ))}
          </div>
        ))}
      </div>

      <p className="px-6 pb-8 text-sm text-muted">© Pedro Julien 2026</p>
    </div>
  );
}
