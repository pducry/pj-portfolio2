"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";

export type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

export function RevealMedia({ item }: { item: MediaItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
      }}
    >
      <div className="overflow-hidden rounded-lg">
        <div style={{
          transition: "transform 0.75s cubic-bezier(0.22,1,0.36,1)",
          transform: visible ? "scale(1)" : "scale(1.03)",
        }}>
          {item.type === "video" ? (
            <video
              src={asset(item.src)}
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto"
            />
          ) : (
            <Image
              src={asset(item.src)}
              alt={item.alt}
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          )}
        </div>
      </div>
    </div>
  );
}
