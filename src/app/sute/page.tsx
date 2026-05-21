"use client";
import { SiteHeader } from "@/components/site-header";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RevealMedia, type MediaItem } from "@/components/reveal-media";
import { asset } from "@/lib/asset";

const carouselImages: string[] = [
  "/gallery/pj_021.png",
  "/gallery/pj_023.png",
  "/gallery/pj_026.png",
  "/gallery/pj_028.png",
  "/gallery/pj_031.png",
  "/gallery/pj_033.png",
];

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

function SuteCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-card aspect-[16/9]">
      {carouselImages.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={asset(src)}
          alt={`Sute — slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Slide indicators */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {carouselImages.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full bg-white transition-all duration-500 ${
              i === idx ? "w-6 opacity-80" : "w-1 opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
              Sute is a digital product built to bring order to complex information
              landscapes — taking what is normally dense, fragmented data and making it
              feel calm, navigable, and human.
            </p>
            <p>
              I led the design end-to-end alongside a small, focused team. The work spanned
              foundational research and product strategy, information architecture, the full
              UI system, motion principles, and the editorial tone that runs through every
              screen.
            </p>
            <p>
              The interface centers around a fluid navigation model that lets people pivot
              between high-level overviews and granular detail without losing their place —
              built on a typographic system designed to give hierarchy without shouting.
            </p>
            <p>
              Restrained type, deliberate negative space, and a quiet palette anchor the
              product. The visual language stays intentionally subdued so that the data,
              decisions, and the people using it remain the loudest voices in the room.
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
            A digital product built to bring order to complex information landscapes —
            calm, navigable, and human.
          </p>
          <Link href="/works" className="inline-flex items-center gap-2 text-xs text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Back to Works
          </Link>
        </div>

        {/* Hero carousel */}
        <div className="px-4 pt-10 sm:px-8 lg:px-12">
          <SuteCarousel />
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
