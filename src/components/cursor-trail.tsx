"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const IMAGES = [
  "/gallery/1a.png", "/gallery/1m.png", "/gallery/1q.png", "/gallery/1w.png", "/gallery/1x.png",
  "/gallery/2a.png", "/gallery/2e.png", "/gallery/2m.png", "/gallery/2p.png", "/gallery/2q.png",
  "/gallery/2w.png", "/gallery/2x.png", "/gallery/3a.png", "/gallery/3e.png", "/gallery/3m.png",
  "/gallery/3p.png", "/gallery/3w.png", "/gallery/3x.png", "/gallery/4a.png", "/gallery/4e.png",
  "/gallery/4m.png", "/gallery/4p.png", "/gallery/4q.png", "/gallery/4w.png", "/gallery/4x.png",
  "/gallery/5a.png", "/gallery/5e.png", "/gallery/5m.png", "/gallery/5q.png", "/gallery/5w.png",
  "/gallery/5x.png", "/gallery/6a.png", "/gallery/6e.png", "/gallery/6p.png", "/gallery/6q.png",
  "/gallery/6w.png", "/gallery/6x.png", "/gallery/7e.png", "/gallery/7m.png", "/gallery/7p.png",
  "/gallery/7q.png", "/gallery/7w.png", "/gallery/7x.png", "/gallery/8a.png", "/gallery/8e.png",
  "/gallery/8m.png", "/gallery/8w.png", "/gallery/8x.png", "/gallery/9a.png", "/gallery/9e.png",
  "/gallery/9m.png", "/gallery/9p.png", "/gallery/9w.png", "/gallery/9x.png",
  "/gallery/108.png", "/gallery/111.png", "/gallery/112.png", "/gallery/114.png",
];

interface TrailItem {
  id: number;
  src: string;
  x: number;
  y: number;
  rotation: number;
  size: number;
  dying: boolean;
}

const MAX_ITEMS = 10;
const SPAWN_DISTANCE = 80;
const LIFETIME = 1400;

export function CursorTrail({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const [items, setItems] = useState<TrailItem[]>([]);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const idRef = useRef(0);
  const imgIndexRef = useRef(Math.floor(Math.random() * IMAGES.length));

  const spawn = useCallback((x: number, y: number) => {
    const id = ++idRef.current;
    const src = IMAGES[imgIndexRef.current % IMAGES.length];
    imgIndexRef.current++;

    const rotation = (Math.random() - 0.5) * 30;
    const size = 140 + Math.random() * 100;

    setItems((prev) => {
      const next = [...prev.slice(-MAX_ITEMS + 1), { id, src, x, y, rotation, size, dying: false }];
      return next;
    });

    // Start fade-out
    setTimeout(() => {
      setItems((prev) => prev.map((item) => item.id === id ? { ...item, dying: true } : item));
    }, LIFETIME * 0.6);

    // Remove
    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }, LIFETIME);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (!lastPos.current) {
        lastPos.current = { x, y };
        return;
      }

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist >= SPAWN_DISTANCE) {
        lastPos.current = { x, y };
        spawn(x, y);
      }
    };

    container.addEventListener("mousemove", onMove);
    return () => container.removeEventListener("mousemove", onMove);
  }, [containerRef, spawn]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: item.x,
            top: item.y,
            width: item.size,
            transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
            transition: item.dying ? "opacity 0.6s ease-out" : "opacity 0.15s ease-in",
            opacity: item.dying ? 0 : 1,
            zIndex: item.id % 10,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt=""
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}
