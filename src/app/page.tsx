"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { useEntrance } from "@/components/entrance-provider";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function Home() {
  const animate = useEntrance();
  const [easterEgg, setEasterEgg] = useState(false);
  const project1 = useScrollReveal();
  const project2 = useScrollReveal();
  const project3 = useScrollReveal();
  const project4 = useScrollReveal();
  const project5 = useScrollReveal();
  const project6 = useScrollReveal();

  const handleEnter = useCallback(() => setEasterEgg(true), []);
  const handleLeave = useCallback(() => setEasterEgg(false), []);

  return (
    <div className="w-full">
      {/* Easter Egg GIF */}
      {easterEgg && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
          <img
            src="/compilacao.gif"
            alt=""
            className="max-h-[400px] w-auto object-contain"
          />
        </div>
      )}

      {/* Sticky header */}
      <header className={`${animate ? "animate-fade-in-down" : ""} fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-20 backdrop-blur-xl bg-background/70 border-b border-transparent transition-colors duration-300`}>
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="relative flex h-2 w-2"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
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

      {/* Hero — fills remaining viewport height (pt-14 offsets fixed header) */}
      <div className="flex h-[calc(100svh-56px)] flex-col pt-14">
        <div className="flex flex-1 flex-col">
          <main className="flex flex-1 flex-col justify-end px-4 pb-[50px] sm:px-8 md:px-12 lg:px-20">
          <section className="max-w-lg space-y-6">
            <h1 className={`${animate ? "animate-fade-in-up" : ""} text-3xl font-semibold leading-tight tracking-tight md:text-4xl`} style={animate ? { animationDelay: "0.2s" } : undefined}>
              Hey, I&apos;m Pedro Julien &ndash;
              <br />
              Ux Manager in Mercado Pago.
            </h1>

            <p className={`${animate ? "animate-fade-in-up" : ""} max-w-md text-sm leading-relaxed text-muted`} style={animate ? { animationDelay: "0.4s" } : undefined}>
              I&apos;m a builder at heart, with 20+ years shaping products
              and branding experiences. I chase what&apos;s new, but always
              grounded in what&apos;s real. Prototyping fast, iterating with
              intention and turn insights into visuals that&apos;s clear,
              human and purposeful.
            </p>

            <div className={`${animate ? "animate-fade-in-up" : ""} flex items-center gap-3`} style={animate ? { animationDelay: "0.6s" } : undefined}>
              <p className="text-xs text-muted">
                Making things that <span className="font-semibold text-foreground">matter</span>, powered by <span className="font-semibold text-foreground">AI</span>.
              </p>
              <div className="animate-bounce">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
                  <path d="M12 3v14M5 11l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <p className={`${animate ? "animate-fade-in-up" : ""} text-xs text-muted`} style={animate ? { animationDelay: "0.8s" } : undefined}>
              &copy; Pedro Julien 2026
            </p>
          </section>
        </main>
        </div>
      </div>

      {/* Project Module — Artas */}
      <section ref={project1.ref} className="px-4 py-16 sm:px-8 md:py-24 md:px-12 lg:px-20">
        <div className="block space-y-6 lg:flex lg:space-y-0 lg:items-end lg:gap-20">
          <div className={`space-y-4 lg:flex-1 ${project1.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project1.visible ? { animationDelay: "0.1s" } : undefined}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">2026</p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Artas</h2>
            <div className="flex flex-wrap gap-2">
              {["Product Design", "AI", "Branding"].map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              A product that reimagines how we interact with images — turning passive visuals into
              dynamic, expressive experiences. Through creative interfaces, Artas opens new ways
              to explore, manipulate and connect imagery, making every interaction feel intentional,
              fluid and deeply human.
            </p>
          </div>
          <div className={`lg:w-[62%] lg:shrink-0 ${project1.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project1.visible ? { animationDelay: "0.3s" } : undefined}>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "5 / 3" }}>
              <Image
                src="/gallery/artasthumb.png"
                alt="Artas — creative image interaction"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Module — Mercado Pago 2026 */}
      <section ref={project2.ref} className="px-4 py-16 sm:px-8 md:py-24 md:px-12 lg:px-20">
        <div className="block space-y-6 lg:flex lg:space-y-0 lg:items-end lg:gap-20">
          <div className={`space-y-4 lg:flex-1 ${project2.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project2.visible ? { animationDelay: "0.1s" } : undefined}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">2026</p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Mercado Pago 2026</h2>
            <div className="flex flex-wrap gap-2">
              {["Product Design", "AI"].map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Shaping the next generation of Mercado Pago&apos;s product experience — where AI-driven
              design meets real financial needs. From acquisition flows to core app interfaces,
              a UX approach built to reduce friction, build trust and make financial inclusion
              feel effortless for millions of users across Latin America.
            </p>
          </div>
          <div className={`lg:w-[62%] lg:shrink-0 ${project2.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project2.visible ? { animationDelay: "0.3s" } : undefined}>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "5 / 3" }}>
              <Image
                src="/gallery/meli3.jpg"
                alt="Mercado Pago 2026 — UX design with AI"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Module — Mude */}
      <section ref={project3.ref} className="px-4 py-16 sm:px-8 md:py-24 md:px-12 lg:px-20">
        <div className="block space-y-6 lg:flex lg:space-y-0 lg:items-end lg:gap-20">
          <div className={`space-y-4 lg:flex-1 ${project3.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project3.visible ? { animationDelay: "0.1s" } : undefined}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">2024</p>
            <Link href="/mude" className="group inline-block">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl group-hover:opacity-70 transition-opacity">Mude</h2>
            </Link>
            <div className="flex flex-wrap gap-2">
              {["Product Design"].map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              An app that brings structure to mindfulness. Mude organizes and encourages daily
              wellness practices — making it easier to build routines that actually stick.
              Intentional design for a more present life.
            </p>
          </div>
          <div className={`lg:w-[62%] lg:shrink-0 ${project3.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project3.visible ? { animationDelay: "0.3s" } : undefined}>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "5 / 3" }}>
              <Image
                src="/gallery/mude.png"
                alt="Mude — mindfulness app"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Module — Foracle */}
      <section ref={project4.ref} className="px-4 py-16 sm:px-8 md:py-24 md:px-12 lg:px-20">
        <div className="block space-y-6 lg:flex lg:space-y-0 lg:items-end lg:gap-20">
          <div className={`space-y-4 lg:flex-1 ${project4.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project4.visible ? { animationDelay: "0.1s" } : undefined}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">2026</p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Foracle</h2>
            <div className="flex flex-wrap gap-2">
              {["AI", "Branding"].map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              A curated collection of the best free fonts on the web. Foracle brings together
              type with real character — handpicked for designers who care about craft,
              without the paywall.
            </p>
          </div>
          <div className={`lg:w-[62%] lg:shrink-0 ${project4.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project4.visible ? { animationDelay: "0.3s" } : undefined}>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "5 / 3" }}>
              <Image
                src="/gallery/foracle1.jpg"
                alt="Foracle — free fonts curation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Module — My Phone */}
      <section ref={project5.ref} className="px-4 py-16 sm:px-8 md:py-24 md:px-12 lg:px-20">
        <div className="block space-y-6 lg:flex lg:space-y-0 lg:items-end lg:gap-20">
          <div className={`space-y-4 lg:flex-1 ${project5.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project5.visible ? { animationDelay: "0.1s" } : undefined}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">2023</p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">My Phone</h2>
            <div className="flex flex-wrap gap-2">
              {["Product Design", "Branding"].map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              A complete digital product experience — from website design and responsive interfaces
              to cohesive branding that connects every touchpoint. Crafted with attention to detail,
              blending visual identity with a seamless user journey across web and mobile.
            </p>
          </div>
          <div className={`lg:w-[62%] lg:shrink-0 ${project5.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project5.visible ? { animationDelay: "0.3s" } : undefined}>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "5 / 3" }}>
              <Image
                src="/gallery/Myphonethumb.png"
                alt="My Phone — product showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Module — Combustion */}
      <section ref={project6.ref} className="px-4 py-16 sm:px-8 md:py-24 md:px-12 lg:px-20">
        <div className="block space-y-6 lg:flex lg:space-y-0 lg:items-end lg:gap-20">
          <div className={`space-y-4 lg:flex-1 ${project6.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project6.visible ? { animationDelay: "0.1s" } : undefined}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">2024</p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Combustion</h2>
            <div className="flex flex-wrap gap-2">
              {["Branding"].map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Rebranding of a São Paulo-based sound design studio with a strong international presence.
              A new visual identity built to match the weight and reach of their work — bold, precise
              and unmistakably sonic.
            </p>
          </div>
          <div className={`lg:w-[62%] lg:shrink-0 ${project6.visible ? "animate-fade-in-up" : "opacity-0"}`} style={project6.visible ? { animationDelay: "0.3s" } : undefined}>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "5 / 3" }}>
              <Image
                src="/gallery/combustion.png"
                alt="Combustion — sound design studio rebranding"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
