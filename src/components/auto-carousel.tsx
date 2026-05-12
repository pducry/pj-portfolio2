"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { asset } from "@/lib/asset";

const images = [
  "/gallery/pj_001.png", "/gallery/pj_002.png", "/gallery/pj_003.png",
  "/gallery/pj_004.png", "/gallery/pj_005.png", "/gallery/pj_006.png",
  "/gallery/pj_007.png", "/gallery/pj_008.png", "/gallery/pj_009.png",
  "/gallery/pj_010.png", "/gallery/pj_011.png", "/gallery/pj_012.png",
  "/gallery/pj_013.png", "/gallery/pj_014.png", "/gallery/pj_015.png",
  "/gallery/pj_016.png", "/gallery/pj_017.png", "/gallery/pj_018.png",
  "/gallery/pj_019.png", "/gallery/pj_020.png", "/gallery/pj_021.png",
  "/gallery/pj_022.png", "/gallery/pj_023.png", "/gallery/pj_025.png",
  "/gallery/pj_026.png", "/gallery/pj_027.png", "/gallery/pj_028.png",
  "/gallery/pj_029.png", "/gallery/pj_030.png", "/gallery/pj_031.png",
  "/gallery/pj_032.png", "/gallery/pj_033.png", "/gallery/pj_034.png",
  "/gallery/pj_035.png", "/gallery/pj_036.png", "/gallery/pj_037.png",
  "/gallery/pj_038.png", "/gallery/pj_039.png", "/gallery/pj_040.png",
  "/gallery/pj_041.png", "/gallery/pj_042.png", "/gallery/pj_043.png",
  "/gallery/pj_044.png", "/gallery/pj_045.png", "/gallery/pj_046.png",
  "/gallery/pj_047.png", "/gallery/pj_048.png", "/gallery/pj_049.png",
  "/gallery/pj_050.png", "/gallery/pj_051.png", "/gallery/pj_052.png",
  "/gallery/pj_053.png", "/gallery/pj_054.png", "/gallery/pj_055.png",
  "/gallery/pj_056.png", "/gallery/pj_057.png", "/gallery/pj_058.png",
  "/gallery/pj_059.png", "/gallery/pj_060.png", "/gallery/pj_061.png",
  "/gallery/pj_062.png", "/gallery/pj_063.png", "/gallery/pj_064.png",
  "/gallery/pj_065.png", "/gallery/pj_066.png",
];

function shuffle(arr: string[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function AutoCarousel() {
  const [list] = useState(() => shuffle(images));
  const [idx, setIdx] = useState(0);
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const cacheRef = useRef<HTMLImageElement[]>([]);

  // Preload all images
  useEffect(() => {
    const srcs = list.map((s) => asset(s));
    cacheRef.current = srcs.map((src) => {
      const img = new window.Image();
      img.src = src;
      return img;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap image directly on DOM node — no React re-render, no browser transition
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const src = asset(list[idx]);
    el.src = src;
  }, [idx, list]);

  const go = useCallback((dir: 1 | -1) => {
    setIdx((i) => (i + dir + list.length) % list.length);
  }, [list.length]);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverSide(e.clientX - rect.left < rect.width / 2 ? "left" : "right");
  }, []);

  const onMouseLeave = useCallback(() => setHoverSide(null), []);

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    go(e.clientX - rect.left < rect.width / 2 ? -1 : 1);
  }, [go]);

  const cursor =
    hoverSide === "right"
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cline x1='6' y1='24' x2='42' y2='24' stroke='%23ff0000' stroke-width='2' stroke-linecap='round'/%3E%3Cpolyline points='30,12 42,24 30,36' fill='none' stroke='%23ff0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 24 24, e-resize`
      : hoverSide === "left"
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cline x1='42' y1='24' x2='6' y2='24' stroke='%23ff0000' stroke-width='2' stroke-linecap='round'/%3E%3Cpolyline points='18,12 6,24 18,36' fill='none' stroke='%23ff0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 24 24, w-resize`
      : "default";

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden aspect-[4/3] select-none"
      style={{ cursor }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={asset(list[0])}
        alt="Project"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-contain block"
      />
    </div>
  );
}
