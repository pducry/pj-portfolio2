"use client";

import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { GridControls } from "@/components/grid-controls";

export default function Playground() {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(8);
  const [galleryInView, setGalleryInView] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

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

      <div ref={galleryRef}>
        <HorizontalGallery columns={columns} gap={gap} />
      </div>

      <GridControls
        visible={galleryInView}
        columns={columns}
        gap={gap}
        onColumnsChange={setColumns}
        onGapChange={setGap}
      />
    </div>
  );
}
