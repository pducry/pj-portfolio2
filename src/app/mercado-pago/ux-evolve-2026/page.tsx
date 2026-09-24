"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; alt: string };

/** Slides and background loops from the deck, all 16:9. */
const slideColors: Media   = { kind: "image", src: "/images/uxevolve/slide-1.jpg", alt: "UxEvolve deck: color proposal with the two yellows, black and white" };
const slideType: Media     = { kind: "image", src: "/images/uxevolve/slide-2.jpg", alt: "UxEvolve deck: typography, Mercado Livre sans serif" };
const slideBadge: Media    = { kind: "image", src: "/images/uxevolve/slide-3.jpg", alt: "UxEvolve badge on white and on black" };
const slideIndices: Media  = { kind: "image", src: "/images/uxevolve/slide-4.jpg", alt: "UxSummit deck: relevant indices, big numbers on yellow, blue and black" };
const slideAI: Media       = { kind: "image", src: "/images/uxevolve/slide-5.jpg", alt: "UxSummit deck: AI innovations from the Mercado Pago UX team" };
const slideMeeting: Media  = { kind: "image", src: "/images/uxevolve/slide-6.jpg", alt: "UxSummit deck: annual UX meeting section opener over the yellow wave" };
const loopYellow: Media    = { kind: "video", src: "/videos/uxevolve/loop-1.mp4", alt: "UxEvolve background loop, soft yellow gradient" };
const loopDark: Media      = { kind: "video", src: "/videos/uxevolve/loop-2.mp4", alt: "UxEvolve background loop, yellow curve on black" };
const loopWave: Media      = { kind: "video", src: "/videos/uxevolve/loop-3.mp4", alt: "UxEvolve background loop, yellow wave on white" };

const separator: Media      = { kind: "video", src: "/videos/uxevolve/separator-01.mp4", alt: "UxEvolve separator, cinematic transition between talks" };

function SectionText({ label, text }: { label: string; text: string }) {
  return (
    <Reveal>
      <div className="px-6 border-b border-border py-6">
        <div className="max-w-xl space-y-2">
          <p className="text-xs text-muted">{label}</p>
          <p className="text-base leading-snug text-foreground/70">{text}</p>
        </div>
      </div>
    </Reveal>
  );
}

function MediaCell({ m }: { m: Media }) {
  return (
    <div className="aspect-video w-full overflow-hidden">
      {m.kind === "video" ? (
        <video
          src={asset(m.src)}
          autoPlay
          muted
          loop
          playsInline
          aria-label={m.alt}
          className="w-full h-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={asset(m.src)} alt={m.alt} className="w-full h-full object-cover" />
      )}
    </div>
  );
}

/** Two 16:9 cells side by side on desktop, stacked on mobile. */
function TwoCol({ items }: { items: readonly [Media, Media] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
      {items.map((m, i) => (
        <Reveal key={m.src}>
          <div className={i === 0 ? "border-b lg:border-b-0 lg:border-r border-border" : ""}>
            <MediaCell m={m} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function UxEvolveContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const ux = t.pages.uxEvolve;

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
        <span className="text-base text-foreground whitespace-nowrap">UxEvolve 2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Culture"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      {/* Intro */}
      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{ux.intro1}</p>
          <p className="text-base leading-snug text-foreground/70">{ux.intro2}</p>
        </div>
      </div>

      {/* Opener: highlight reel */}
      <Reveal>
        <div className="mt-16 border-t border-b border-border">
          <video
            src={asset("/videos/uxevolve/close-all.mp4")}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
          />
        </div>
      </Reveal>

      {/* Hosts + agenda */}
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
          <div className="px-6 py-6 border-b lg:border-b-0 lg:border-r border-border">
            <p className="text-xs text-muted">{ux.hostsLabel}</p>
            <ul className="mt-3 space-y-1 max-w-xl">
              {ux.hosts.map((h) => (
                <li key={h.name} className="flex justify-between gap-6 text-sm">
                  <span className="text-foreground">{h.name}</span>
                  <span className="text-muted whitespace-nowrap">{h.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-6">
            <p className="text-xs text-muted">{ux.agendaLabel}</p>
            <ul className="mt-3 space-y-1 max-w-xl">
              {ux.talks.map((tk) => (
                <li key={tk.label} className="flex justify-between gap-6 text-sm">
                  <span className="text-foreground">{tk.label}</span>
                  <span className="text-muted text-right">{tk.speakers}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Visual identity: concept, foundations, badge */}
      <div className="mt-16 border-t border-border">
        <SectionText label={`${ux.visualLabel} · ${ux.conceptLabel}`} text={ux.conceptText} />

        <TwoCol items={[slideColors, slideType]} />

        <Reveal>
          <div className="border-b border-border">
            <MediaCell m={slideBadge} />
          </div>
        </Reveal>

        {/* Separators: the transition loops, each paired with the slide that uses its background */}
        <SectionText label={ux.separatorsLabel} text={ux.separatorsText} />

        <Reveal>
          <div className="border-b border-border">
            <MediaCell m={separator} />
          </div>
        </Reveal>

        <TwoCol items={[slideMeeting, loopWave]} />
        <TwoCol items={[loopDark, slideAI]} />

        {/* The deck: data slide with the soft yellow loop */}
        <SectionText label={ux.deckLabel} text={ux.deckText} />

        <TwoCol items={[slideIndices, loopYellow]} />

        {/* The evolution: closing text and the still backgrounds in the marquee */}
        <SectionText label={ux.evolutionLabel} text={ux.evolutionText} />

        {/* Slide backgrounds, automatic side-scrolling carousel */}
        <Reveal>
          <div className="overflow-hidden border-b border-border">
            <div className="flex w-max animate-marquee">
              {[0, 1].map((dup) =>
                [1, 2, 3, 4].map((i) => (
                  <div key={`${dup}-${i}`} className="h-64 lg:h-96 shrink-0 border-r border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(`/images/uxevolve/bg-${i}.jpg`)}
                      alt={`UxEvolve 2026, background ${i}`}
                      className="h-full w-auto object-cover"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </Reveal>
      </div>

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function UxEvolvePage() {
  return <UxEvolveContent />;
}
