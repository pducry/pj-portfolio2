"use client";

import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { asset } from "@/lib/asset";

// Each section defines how many columns and which images
const sections: { columns: number; images: string[] }[] = [
  {
    columns: 1,
    images: ["/gallery/pj_021.png", "/gallery/pj_023.png"],
  },
  {
    columns: 2,
    images: ["/gallery/pj_026.png", "/gallery/pj_027.png", "/gallery/pj_028.png", "/gallery/pj_031.png"],
  },
  {
    columns: 3,
    images: ["/gallery/pj_032.png", "/gallery/pj_033.png", "/gallery/pj_035.png", "/gallery/pj_037.png", "/gallery/pj_039.png", "/gallery/pj_040.png"],
  },
  {
    columns: 1,
    images: ["/gallery/pj_041.png"],
  },
  {
    columns: 2,
    images: ["/gallery/pj_044.png", "/gallery/pj_045.png"],
  },
  {
    columns: 3,
    images: ["/gallery/pj_046.png", "/gallery/pj_048.png", "/gallery/pj_050.png"],
  },
  {
    columns: 1,
    images: ["/gallery/pj_051.png"],
  },
];

export default function SutePage() {
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

        {/* Title + meta — same line */}
        <div className="border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
          <span className="text-base text-foreground whitespace-nowrap">Sute</span>
          <span className="text-sm text-muted whitespace-nowrap">Digital Product</span>
          <span className="text-sm text-muted whitespace-nowrap">2025</span>
          <span className="text-sm text-muted whitespace-nowrap">Head of Design</span>
        </div>

        {/* Description row */}
        <div className="border-t border-border py-6 border-b border-border">
          <p className="text-base leading-snug text-foreground/70 max-w-xl">
            Sute is a digital product designed to bring clarity to complex information
            architectures — pairing editorial rigor with a fluid interaction model.
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
                alt={`Sute — ${si + 1}.${ii + 1}`}
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
