"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const principles = [
  {
    id: "immediacy",
    duration: "150–500ms",
    rule: "",
    examples: [
      { duration: "300ms",      file: "/videos/mp/01_TransicionPantalla-Inmediatez.mp4" },
      { duration: "350ms",      file: "/videos/mp/01_TransicionPantalla-SharedElement-Inmediatez.mp4" },
      { duration: "Full flow",  file: "/videos/mp/02_Home-Transferencias-Flow-MLA_1.mp4" },
    ],
  },
  {
    id: "focus",
    duration: "500–3000ms",
    rule: "",
    examples: [
      { duration: "950ms",      file: "/videos/mp/02_TransicionPantalla-Foco.mp4" },
      { duration: "700ms",      file: "/videos/mp/02_TransicionPantalla-SharedElement-Foco.mp4" },
      { duration: "350ms",      file: "/videos/mp/02_Microinteraccion-Foco-2.mp4" },
      { duration: "Full flow",  file: "/videos/mp/05_Tarjetas-SolicitudFisica-Flow-MLA.mp4" },
    ],
  },
  {
    id: "immersion",
    duration: "1000–5000ms",
    rule: "",
    examples: [
      { duration: "2500ms",     file: "/videos/mp/03_TransicionPantalla-Inmersion.mp4" },
      { duration: "3000ms",     file: "/videos/mp/03_TransicionPantalla-SharedElement-Inmersion.mp4" },
      { duration: "Full flow",  file: "/videos/mp/08-Pagos-Flow-MLA.mp4" },
    ],
  },
];

function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const onTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 5) {
        video.currentTime = 0;
      }
    };
    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      playsInline
      className="w-full h-auto"
    />
  );
}

function VideoClip({
  file,
  label,
  context,
  duration,
}: {
  file: string;
  label: string;
  context: string;
  duration: string;
}) {
  return (
    <div className="space-y-3">
      <video
        src={asset(file)}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto bg-foreground/5"
      />
      <div className="space-y-1 border-t border-border pt-3">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-sm text-foreground">{label}</p>
          <span className="text-xs text-muted tabular-nums shrink-0">{duration}</span>
        </div>
        <p className="text-xs text-muted leading-snug">{context}</p>
      </div>
    </div>
  );
}

function MotionFoundationsContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const mp = t.pages.motionFoundations;

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link
          href="/mercado-pago"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.common.backToMP}
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Motion Foundations</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Design System"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      {/* Intro */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{mp.intro1}</p>
          <p className="text-base leading-snug text-foreground/70">{mp.intro2}</p>
        </div>
      </div>

      {/* Hero video */}
      <Reveal>
        <div className="border-b border-border">
          <HeroVideo src={asset("/videos/mp/motion-principles-hero.mp4")} />
        </div>
      </Reveal>

      {/* Foundations */}
      <Reveal>
        <div className="mt-16">
          <div className="px-6 py-3 border-t border-b border-border">
            <span className="text-sm text-foreground/30">{t.common.foundations}</span>
          </div>
          <div className="px-6 pt-6 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-4xl">
            {mp.foundations.map((f) => (
              <div key={f.label} className="space-y-1.5">
                <p className="text-sm text-foreground">{f.label}</p>
                <p className="text-sm text-muted leading-snug">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Principles */}
      {principles.map((p, pi) => {
        const tp = mp.principles[pi];
        return (
          <Reveal key={p.id}>
            <div className="mt-8">
              {/* Principle header */}
              <div className="px-6 py-5 border-t border-b border-border">
                <div className="max-w-2xl space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                    <h2 className="text-base text-foreground">{tp.label}</h2>
                    <span className="text-sm text-muted">{tp.tagline}</span>
                    <span className="text-xs text-muted/60 tabular-nums">{p.duration}</span>
                  </div>
                  <p className="text-sm text-muted leading-snug">{tp.description}</p>
                  {p.rule && (
                    <p className="text-xs text-foreground/35 leading-snug border-l border-border pl-3 mt-1">
                      {p.rule}
                    </p>
                  )}
                </div>
              </div>

              {/* Videos grid */}
              <div
                className={`px-6 pt-8 pb-12 grid grid-cols-1 gap-10 lg:gap-6 ${
                  p.examples.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
                }`}
              >
                {p.examples.map((ex, ei) => (
                  <VideoClip
                    key={ei}
                    file={ex.file}
                    label={tp.examples[ei].label}
                    context={tp.examples[ei].context}
                    duration={ex.duration}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function MotionFoundationsPage() {
  return <MotionFoundationsContent />;
}
