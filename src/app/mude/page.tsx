"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { useEntrance } from "@/components/entrance-provider";

const images = [
  { src: "/projects/mude/Mude1.png", alt: "Mude — 1" },
  { src: "/projects/mude/Mude2.png", alt: "Mude — 2" },
  { src: "/projects/mude/Mude3.png", alt: "Mude — 3" },
  { src: "/projects/mude/Mude4.png", alt: "Mude — 4" },
  { src: "/projects/mude/Mude5.png", alt: "Mude — 5" },
  { src: "/projects/mude/Mude6.png", alt: "Mude — 6" },
  { src: "/projects/mude/Mude7.png", alt: "Mude — 7" },
  { src: "/projects/mude/Mude8.png", alt: "Mude — 8" },
  { src: "/projects/mude/Mude9.png", alt: "Mude — 9" },
];

function RevealImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
      }}
    >
      <div className="overflow-hidden rounded-lg">
        <div
          style={{
            transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            transform: visible ? "scale(1)" : "scale(1.04)",
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
      </div>
    </div>
  );
}

export default function MudePage() {
  const animate = useEntrance();

  return (
    <div className="w-full">
      {/* Header */}
      <header className={`${animate ? "animate-fade-in-down" : ""} fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-20 backdrop-blur-xl bg-background/70 border-b border-transparent transition-colors duration-300`}>
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="text-sm font-medium tracking-widest text-foreground">
            PJ&thinsp;&mdash;&thinsp;26
          </span>
        </Link>
        <div className="flex items-center gap-3 md:gap-8">
          <Navigation />
          <ThemeToggle />
        </div>
      </header>

      {/* Two-column layout */}
      <div className="pt-14 flex flex-col lg:flex-row min-h-screen">

        {/* LEFT — sticky info */}
        <div className="lg:w-[42%] lg:sticky lg:top-14 lg:h-[calc(100vh-56px)] px-4 py-12 sm:px-8 md:px-12 lg:pl-20 lg:pr-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border/40">
          <div className="space-y-10 max-w-sm">

            {/* Title */}
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Mude</h1>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Year</p>
                <p className="text-sm text-foreground">2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Role</p>
                <p className="text-sm text-foreground">Product Design, UX/UI</p>
              </div>
              <div className="space-y-2 col-span-2">
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Category</p>
                <div className="flex flex-wrap gap-2">
                  {["Product Design"].map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm leading-relaxed text-muted border-t border-border/40 pt-8">
              <p>
                Mude is a wellness app designed to help people build sustainable mindfulness habits.
                The challenge was creating an experience that feels both motivating and calm —
                encouraging consistency without adding pressure.
              </p>
              <p>
                The product organizes daily wellness practices into digestible routines, using gentle
                prompts and clear visual feedback. Every interaction was designed to reduce friction
                so healthy habits feel effortless to start and maintain.
              </p>
              <p>
                Clean space, deliberate typography, and a soft color system that signals calm
                without being passive. Built for real life.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT — scrolling images */}
        <div className="lg:w-[58%] px-4 py-12 sm:px-8 md:px-12 lg:pr-20 lg:pl-10 space-y-6">
          {images.map((img, i) => (
            <RevealImage key={i} src={img.src} alt={img.alt} />
          ))}

          {/* Back link at bottom */}
          <div className="pt-8 pb-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
              </svg>
              Back to Works
            </Link>
          </div>
          <p className="text-xs text-muted pb-8">&copy; Pedro Julien 2026</p>
        </div>

      </div>
    </div>
  );
}
