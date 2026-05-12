"use client";

import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { GridControls } from "@/components/grid-controls";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const COL = "lg:grid-cols-[180px_110px_1fr_32px]";

export default function Playground() {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(8);
  const [galleryInView, setGalleryInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setGalleryInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* ── Desktop intro text — mesmo grid de Works ── */}
      <div className={`hidden lg:grid ${COL} gap-x-0 items-start px-6 pt-6 pb-20`}>
        <span className="text-base text-muted">{t.playground.label}</span>
        <span />
        <p className="text-base leading-snug text-foreground/75 max-w-xl">
          {t.playground.p1}
        </p>
        <span />
      </div>

      {/* ── Gallery ── */}
      <div ref={galleryRef}>
        <HorizontalGallery columns={columns} gap={gap} />
      </div>

      {/* Grid controls — desktop only */}
      {isDesktop && (
        <GridControls
          visible={galleryInView}
          columns={columns}
          gap={gap}
          onColumnsChange={setColumns}
          onGapChange={setGap}
        />
      )}
    </div>
  );
}
