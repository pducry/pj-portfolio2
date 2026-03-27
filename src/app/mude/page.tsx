"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { useEntrance } from "@/components/entrance-provider";

const images = [
  { src: "/projects/mude/Mude1.png", alt: "Mude — screen 1" },
  { src: "/projects/mude/Mude2.png", alt: "Mude — screen 2" },
  { src: "/projects/mude/Mude3.png", alt: "Mude — screen 3" },
  { src: "/projects/mude/Mude4.png", alt: "Mude — screen 4" },
  { src: "/projects/mude/Mude5.png", alt: "Mude — screen 5" },
  { src: "/projects/mude/Mude6.png", alt: "Mude — screen 6" },
  { src: "/projects/mude/Mude7.png", alt: "Mude — screen 7" },
  { src: "/projects/mude/Mude8.png", alt: "Mude — screen 8" },
  { src: "/projects/mude/Mude9.png", alt: "Mude — screen 9" },
];

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

      {/* Hero */}
      <div className="pt-14">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 7" }}>
          <Image
            src="/projects/mude/Mudethumb.png"
            alt="Mude — hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Project Info */}
      <section className="px-4 py-16 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">

          {/* Meta */}
          <div className="space-y-8">
            <div className="space-y-1">
              <p className="text-xs font-medium uppercase tracking-widest text-muted">Project</p>
              <h1 className="text-2xl font-semibold tracking-tight">Mude</h1>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-medium uppercase tracking-widest text-muted">Year</p>
              <p className="text-sm text-foreground">2024</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-widest text-muted">Category</p>
              <div className="flex flex-wrap gap-2">
                {["Product Design"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-medium uppercase tracking-widest text-muted">Role</p>
              <p className="text-sm text-foreground">Product Design, UX/UI</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              An app that brings structure to mindfulness.
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Mude is a wellness app designed to help people build sustainable mindfulness habits.
                The core challenge was creating an experience that feels both motivating and calm —
                encouraging consistency without adding pressure to an already overwhelming digital life.
              </p>
              <p>
                The product organizes daily wellness practices into digestible routines, using gentle
                prompts and clear visual feedback to guide users through their day. Every interaction
                was designed with intention — reducing friction at every step so that healthy habits
                feel effortless to start and maintain.
              </p>
              <p>
                The design language draws from mindfulness itself: clean space, deliberate typography,
                and a soft color system that signals calm without being passive. The result is a product
                that feels human, focused, and built for real life.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40 mx-4 sm:mx-8 md:mx-12 lg:mx-20" />

      {/* Image Gallery */}
      <section className="px-4 py-16 sm:px-8 md:px-12 lg:px-20">
        <div className="space-y-4">
          {images.map((img, i) => (
            <div key={i} className="relative w-full overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.alt}
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="px-4 pb-20 sm:px-8 md:px-12 lg:px-20">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Back to Works
        </Link>
      </section>

      <p className="px-4 pb-8 text-xs text-muted sm:px-8 md:px-12 lg:px-20">
        &copy; Pedro Julien 2026
      </p>
    </div>
  );
}
