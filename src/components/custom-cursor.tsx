"use client";

import { useEffect, useRef, useCallback } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -40, y: -40 });
  const dotPos = useRef({ x: -40, y: -40 });
  const raf = useRef<number>(0);

  const animate = useCallback(() => {
    dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.35;
    dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.35;

    if (dotRef.current) {
      dotRef.current.style.left = `${dotPos.current.x}px`;
      dotRef.current.style.top = `${dotPos.current.y}px`;
    }

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return (
    <div
      ref={dotRef}
      className="custom-cursor-dot pointer-events-none fixed z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"
      style={{ left: -40, top: -40 }}
    />
  );
}
