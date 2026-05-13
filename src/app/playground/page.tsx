"use client";

import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { GridControls } from "@/components/grid-controls";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";


export default function Playground() {
  const [columns, setColumns] = useState(1);
  const [gap, setGap] = useState(8);
  const [galleryInView, setGalleryInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = translations[lang];

  useEffect(() => {
    const check = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      setColumns(desktop ? 3 : 1);
    };
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

      <div className="px-6">
        <div className="pt-4 pb-16">
          <p className="text-base leading-snug text-foreground/75 max-w-xl">{t.playground.p1}</p>
        </div>
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
