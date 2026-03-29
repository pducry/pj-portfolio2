"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { useEntrance } from "@/components/entrance-provider";
import { RevealMedia, type MediaItem } from "@/components/reveal-media";

const media: MediaItem[] = [
  { type: "image", src: "/projects/mude/Mude2.png", alt: "Artas — 1" },
  { type: "image", src: "/projects/mude/Mude1.png", alt: "Artas — 2" },
  { type: "image", src: "/projects/mude/Mude3.png", alt: "Artas — 3" },
  { type: "image", src: "/projects/mude/Mude4.png", alt: "Artas — 4" },
  { type: "image", src: "/projects/mude/Mude5.png", alt: "Artas — 5" },
  { type: "image", src: "/projects/mude/Mude6.png", alt: "Artas — 6" },
  { type: "image", src: "/projects/mude/Mude7.png", alt: "Artas — 7" },
  { type: "image", src: "/projects/mude/Mude8.png", alt: "Artas — 8" },
  { type: "image", src: "/projects/mude/Mude9.png", alt: "Artas — 9" },
];

export default function ArtasPage() {
  const animate = useEntrance();
  const [tab, setTab] = useState<"overview" | "technical">("overview");

  return (
    <div className="w-full">

      {/* Fixed header */}
      <header className={`${animate ? "animate-fade-in-down" : ""} fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-20 backdrop-blur-xl bg-background/70 border-b border-transparent transition-colors duration-300`}>
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

      {/* Fixed left panel — desktop only */}
      <div className="hidden lg:flex fixed top-[57px] left-0 bottom-0 w-[40%] z-30 flex-col justify-end px-12 xl:px-20 pb-16 border-r border-border/40 bg-background">
        <div className="space-y-8 max-w-xs">

          <h1 className="text-4xl font-semibold tracking-tight">Artas</h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Year</p>
              <p className="text-sm text-foreground">2026</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Role</p>
              <p className="text-sm text-foreground">Design & Development</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">Category</p>
              <div className="flex flex-wrap gap-1.5">
                {["Product Design", "AI", "Branding"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] tracking-wide text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tab toggle */}
          <div className="flex gap-0 border-b border-border/40">
            <button
              onClick={() => setTab("overview")}
              className={`pb-2 text-[11px] font-medium uppercase tracking-widest transition-colors ${tab === "overview" ? "text-foreground border-b border-foreground" : "text-muted hover:text-foreground"}`}
            >
              Overview
            </button>
            <button
              onClick={() => setTab("technical")}
              className={`pb-2 ml-6 text-[11px] font-medium uppercase tracking-widest transition-colors ${tab === "technical" ? "text-foreground border-b border-foreground" : "text-muted hover:text-foreground"}`}
            >
              Technical
            </button>
          </div>

          {/* Tab content */}
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            {tab === "overview" ? (
              <>
                <p>
                  ARTAS is a social art platform that reimagines how visual art is discovered and shared online.
                  Instead of the typical flat-grid gallery, it opens with an immersive 3D spatial navigation
                  experience — a starfield universe where artworks float as explorable nodes.
                </p>
                <p>
                  Dark cinematic aesthetic. Spatial navigation with grab-cursor. Discover, engage, join,
                  create, connect — the 3D entry point isn&apos;t decoration, it shapes how users emotionally
                  approach the content.
                </p>
                <p>
                  The name plays on <em>art</em> + <em>artas</em> (Spanish for &ldquo;many things&rdquo;) — a space
                  where many forms of visual expression coexist.
                </p>
              </>
            ) : (
              <>
                <p>
                  Built with Three.js and Unreal Bloom post-processing — full WebGL pipeline with
                  a 10,000-particle starfield, bloom effects, and spatial audio-ready architecture.
                </p>
                <p>
                  6,100+ lines of handcrafted vanilla JS across 28 source files. Modular ES6
                  architecture — SceneManager, CameraController, ContentNodes, InteractionManager —
                  each a standalone ES module. Zero frameworks, zero bundlers.
                </p>
                <p>
                  Firebase handles the backend: Authentication (Google + email), Firestore for data,
                  Cloud Storage for uploads. Progressive enhancement with WebGL fallback detection
                  for unsupported devices.
                </p>
                <p>
                  14 meaningful commits over ~2 months — each one a working milestone.
                  100% open-source, zero proprietary dependencies.
                </p>
              </>
            )}
          </div>

          {/* Stack tags — technical only */}
          {tab === "technical" && (
            <div className="flex flex-wrap gap-1.5">
              {["Three.js", "WebGL", "ES Modules", "Firebase Auth", "Firestore", "Cloud Storage"].map((tag) => (
                <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] tracking-wide text-muted">
                  {tag}
                </span>
              ))}
            </div>
          )}

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

      {/* Right scrollable content */}
      <div className="lg:ml-[40%] pt-[57px]">

        {/* Mobile info */}
        <div className="lg:hidden px-4 py-10 sm:px-8 space-y-4 border-b border-border/40">
          <h1 className="text-3xl font-semibold tracking-tight">Artas</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">Year</p>
              <p className="text-sm">2026</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">Role</p>
              <p className="text-sm">Design & Development</p>
            </div>
          </div>

          {/* Mobile tab toggle */}
          <div className="flex gap-0 border-b border-border/40">
            <button
              onClick={() => setTab("overview")}
              className={`pb-2 text-[11px] font-medium uppercase tracking-widest transition-colors ${tab === "overview" ? "text-foreground border-b border-foreground" : "text-muted hover:text-foreground"}`}
            >
              Overview
            </button>
            <button
              onClick={() => setTab("technical")}
              className={`pb-2 ml-6 text-[11px] font-medium uppercase tracking-widest transition-colors ${tab === "technical" ? "text-foreground border-b border-foreground" : "text-muted hover:text-foreground"}`}
            >
              Technical
            </button>
          </div>

          <div className="text-sm text-muted leading-relaxed space-y-3">
            {tab === "overview" ? (
              <p>
                A social art platform with immersive 3D spatial navigation — a starfield universe
                where artworks float as explorable nodes.
              </p>
            ) : (
              <>
                <p>
                  Three.js + WebGL bloom pipeline with 10,000-particle starfield. 6,100+ lines of
                  vanilla JS, 28 source files, modular ES6 architecture. Firebase backend.
                </p>
                <p>
                  14 meaningful commits over ~2 months. 100% open-source.
                </p>
              </>
            )}
          </div>

          {tab === "technical" && (
            <div className="flex flex-wrap gap-1.5">
              {["Three.js", "WebGL", "ES Modules", "Firebase Auth", "Firestore", "Cloud Storage"].map((tag) => (
                <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] tracking-wide text-muted">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <Link href="/" className="inline-flex items-center gap-2 text-xs text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Back to Works
          </Link>
        </div>

        {/* Images */}
        <div className="px-4 py-10 sm:px-8 lg:px-12 space-y-5">
          {media.map((item, i) => (
            <RevealMedia key={i} item={item} />
          ))}
          <p className="text-xs text-muted pt-4 pb-8">&copy; Pedro Julien 2026</p>
        </div>

      </div>

    </div>
  );
}
