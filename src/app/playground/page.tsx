"use client";

import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { GridControls } from "@/components/grid-controls";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";


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

      {/* Intro — mesmo padrão de Works */}
      <div className="px-6 pt-6 pb-16 max-w-xl">
        <p className="text-base leading-snug text-foreground/75">
          {t.playground.p1}
        </p>
      </div>

      {/* Gallery */}
      <div ref={galleryRef}>
        <HorizontalGallery columns={columns} gap={gap} />
      </div>

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
