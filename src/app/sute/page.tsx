"use client";
import { SiteHeader } from "@/components/site-header";

import Link from "next/link";
import { RevealMedia, type MediaItem } from "@/components/reveal-media";

const media: MediaItem[] = [
  { type: "image", src: "/gallery/pj_021.png", alt: "Sute — 1" },
  { type: "image", src: "/gallery/pj_023.png", alt: "Sute — 2" },
  { type: "image", src: "/gallery/pj_026.png", alt: "Sute — 3" },
  { type: "image", src: "/gallery/pj_027.png", alt: "Sute — 4" },
  { type: "image", src: "/gallery/pj_028.png", alt: "Sute — 5" },
  { type: "image", src: "/gallery/pj_031.png", alt: "Sute — 6" },
  { type: "image", src: "/gallery/pj_032.png", alt: "Sute — 7" },
  { type: "image", src: "/gallery/pj_033.png", alt: "Sute — 8" },
  { type: "image", src: "/gallery/pj_035.png", alt: "Sute — 9" },
];

export default function SutePage() {

  return (
    <div className="w-full">

      {/* Fixed header */}
      <SiteHeader />

      {/* Fixed left panel — desktop only */}
      <div className="hidden lg:flex fixed top-[57px] left-0 bottom-0 w-[40%] z-30 flex-col justify-end px-12 xl:px-20 pb-16 border-r border-border/40 bg-background">
        <div className="space-y-8 max-w-sm">

          <h1 className="text-4xl font-semibold tracking-tight">Sute</h1>

          {/* Meta — same line */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Year</p>
              <p className="text-sm text-foreground">2025</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Role</p>
              <p className="text-sm text-foreground">Head of Design</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Category</p>
              <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] tracking-wide text-muted">Digital Product</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 text-sm leading-relaxed text-muted border-t border-border/40 pt-6">
            <p>
              Sute is a digital product crafted to bring clarity to complex information
              architectures — pairing editorial rigor with a fluid interaction model.
            </p>
            <p>
              Designed end-to-end with a small, focused team — from research and product
              vision to interface, motion, and the visual system that holds it together.
            </p>
            <p>
              Restrained typography, deliberate negative space, and a calm palette anchor
              the experience and let the content lead.
            </p>
          </div>

          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Back to Works
          </Link>

        </div>
      </div>

      {/* Right scrollable content — offset by left panel width */}
      <div className="lg:ml-[40%] pt-[57px]">

        {/* Mobile info */}
        <div className="lg:hidden px-4 py-10 sm:px-8 space-y-4 border-b border-border/40">
          <h1 className="text-3xl font-semibold tracking-tight">Sute</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">Year</p>
              <p className="text-sm">2025</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">Role</p>
              <p className="text-sm">Head of Design</p>
            </div>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            A digital product crafted to bring clarity to complex information architectures.
          </p>
          <Link href="/works" className="inline-flex items-center gap-2 text-xs text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Back to Works
          </Link>
        </div>

        {/* Images */}
        <div className="px-4 py-10 sm:px-8 lg:px-12 space-y-5">
          {media.map((item, i) => (
            <RevealMedia key={i} item={item} />
          ))}
          <p className="text-xs text-muted pt-4 pb-8">&copy; Pedro Julien 2026</p>
        </div>

      </div>

    </div>
  );
}
