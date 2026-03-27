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

function RevealImage({ src, alt, scrollRef }: { src: string; alt: string; scrollRef: React.RefObject<HTMLDivElement | null> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const container = scrollRef.current;
    if (!el || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, root: container }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [scrollRef]);

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
        <div
          style={{
            transition: "transform 0.75s cubic-bezier(0.22,1,0.36,1)",
            transform: visible ? "scale(1)" : "scale(1.03)",
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
  const rightPanelRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <header className={`${animate ? "animate-fade-in-down" : ""} shrink-0 z-40 flex items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-20 backdrop-blur-xl bg-background/70 border-b border-transparent transition-colors duration-300`}>
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

      {/* Two-pane layout */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT — fixed info panel */}
        <div className="hidden lg:flex lg:w-[40%] shrink-0 flex-col justify-center px-12 xl:px-20 border-r border-border/40 overflow-hidden">
          <div className="space-y-8 max-w-xs">

            <div>
              <h1 className="text-4xl font-semibold tracking-tight">Mude</h1>
            </div>

            {/* Meta — same line */}
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Year</p>
                <p className="text-sm text-foreground">2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Role</p>
                <p className="text-sm text-foreground">Product Design</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Category</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] tracking-wide text-muted">Product Design</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 text-sm leading-relaxed text-muted border-t border-border/40 pt-6">
              <p>
                Mude is a wellness app designed to help people build sustainable mindfulness habits.
                Motivating and calm — encouraging consistency without adding pressure.
              </p>
              <p>
                Organizes daily wellness practices into digestible routines using gentle prompts and
                clear visual feedback. Every interaction reduces friction so healthy habits feel
                effortless to start and maintain.
              </p>
              <p>
                Clean space, deliberate typography, and a soft color system that signals calm
                without being passive. Built for real life.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
              </svg>
              Back to Works
            </Link>
          </div>
        </div>

        {/* RIGHT — scrollable images */}
        <div
          ref={rightPanelRef}
          className="flex-1 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="px-4 py-10 sm:px-8 lg:px-12 space-y-5">

            {/* Mobile info */}
            <div className="lg:hidden space-y-4 pb-6 border-b border-border/40">
              <h1 className="text-3xl font-semibold tracking-tight">Mude</h1>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted">Year</p>
                  <p className="text-sm">2024</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted">Role</p>
                  <p className="text-sm">Product Design</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                A wellness app designed to help people build sustainable mindfulness habits.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 text-xs text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7" />
                </svg>
                Back to Works
              </Link>
            </div>

            {images.map((img, i) => (
              <RevealImage key={i} src={img.src} alt={img.alt} scrollRef={rightPanelRef} />
            ))}

            <p className="text-xs text-muted pt-4 pb-2">&copy; Pedro Julien 2026</p>
          </div>
        </div>

      </div>
    </div>
  );
}
