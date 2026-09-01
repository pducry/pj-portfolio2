"use client";

import { useEffect } from "react";

// Inertia scroll — lerp-based, frame-rate independent.
// The viewport smoothly "chases" the wheel target each frame,
// giving a weighted, drifting feel. SMOOTHING: 0.06 heavy → 0.13 snappy.
const SMOOTHING = 0.09;

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // The lerp loop drives window.scrollTo directly; CSS smooth scrolling
    // would animate each step and fight the effect.
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let rafId: number | null = null;
    let ticking = false;
    let lastTime: number | null = null;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const tick = (now: number) => {
      // Normalise elapsed frames to 60fps so SMOOTHING feels the same at any Hz
      const frames = lastTime ? Math.min((now - lastTime) / (1000 / 60), 4) : 1;
      lastTime = now;

      const t = 1 - Math.pow(1 - SMOOTHING, frames);
      const delta = targetY - currentY;

      if (Math.abs(delta) < 0.05) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        ticking = false;
        rafId = null;
        lastTime = null;
        return;
      }

      currentY += delta * t;
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!rafId) {
        ticking = true;
        lastTime = null;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // pinch-zoom
      e.preventDefault();

      let dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 40;
      if (e.deltaMode === 2) dy *= window.innerHeight;

      targetY = Math.max(0, Math.min(maxScroll(), targetY + dy));
      start();
    };

    // Route same-page anchor links (e.g. "Scroll down ↓") through the lerp
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      targetY = Math.max(
        0,
        Math.min(maxScroll(), el.getBoundingClientRect().top + window.scrollY)
      );
      start();
    };

    // Keep in sync for keyboard, touch, and programmatic scrolls
    const onScroll = () => {
      if (!ticking) {
        const sy = window.scrollY;
        targetY = sy;
        currentY = sy;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      html.style.scrollBehavior = prevBehavior;
    };
  }, []);

  return null;
}
