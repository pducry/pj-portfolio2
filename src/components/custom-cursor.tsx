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

    const isInteractive = (el: Element | null): boolean => {
      if (!el || !(el instanceof Element)) return false;
      return !!el.closest('a, button, [role="button"], label, summary, input, select, textarea, [data-hoverable]');
    };

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element) && dotRef.current) {
        dotRef.current.classList.add("cursor-hovering");
      }
    };

    const onOut = (e: MouseEvent) => {
      const to = e.relatedTarget as Element | null;
      if (!isInteractive(to) && dotRef.current) {
        dotRef.current.classList.remove("cursor-hovering");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return (
    <div
      ref={dotRef}
      className="custom-cursor pointer-events-none fixed z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 text-red-500"
      style={{ left: -40, top: -40 }}
    />
  );
}
