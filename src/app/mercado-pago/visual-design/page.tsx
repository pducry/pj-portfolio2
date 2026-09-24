"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

function GalleryImage({
  src,
  alt,
  width,
  height,
  twoCol = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  twoCol?: boolean;
}) {
  return (
    <div className="overflow-hidden w-full">
      <Image
        src={asset(src)}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
        sizes={twoCol ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
      />
    </div>
  );
}

type Img = { src: string; alt: string; width: number; height: number };

/** Investments carousel slides, in reading order. All 1600x843. */
const imgsInvest: readonly Img[] = [
  { src: "/projects/visual-design/vd_09.jpg", alt: "New UI Kit: investments carousel, automatic yield on the account balance", width: 1600, height: 843 },
  { src: "/projects/visual-design/vd_10.jpg", alt: "New UI Kit: investments carousel, savings jars with piggy banks", width: 1600, height: 843 },
  { src: "/projects/visual-design/vd_11.jpg", alt: "New UI Kit: investments carousel, fixed income with a calendar", width: 1600, height: 843 },
  { src: "/projects/visual-design/vd_12.jpg", alt: "New UI Kit: investments carousel, investment funds with a glass of coins", width: 1600, height: 843 },
  { src: "/projects/visual-design/vd_13.jpg", alt: "New UI Kit: investments carousel, crypto market with a stack of coins", width: 1600, height: 843 },
];

/** Two images side by side on desktop, stacked on mobile. A missing second image leaves the right cell empty. */
function TwoCol({ imgs }: { imgs: readonly [Img, Img?] }) {
  const [a, b] = imgs;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
      <Reveal>
        <div className={b ? "border-b md:border-b-0 md:border-r border-border" : "md:border-r border-border"}>
          <GalleryImage {...a} twoCol />
        </div>
      </Reveal>
      {b ? (
        <Reveal>
          <div>
            <GalleryImage {...b} twoCol />
          </div>
        </Reveal>
      ) : (
        <div />
      )}
    </div>
  );
}

function VisualDesignContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const vd = t.pages.visualDesign;

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <div className="px-6 pt-1 pb-4">
        <Link
          href="/mercado-pago"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.common.backToMP}
        </Link>
      </div>

      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">New UI Kit</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Creative"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{vd.intro1}</p>
          <p className="text-base leading-snug text-foreground/70">{vd.intro2}</p>
        </div>
      </div>

      {/* Links */}
      <div className="border-b border-border">
        <a
          href="https://www.mercadopago.com.br/conta"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-foreground hover:text-background"
        >
          <span className="text-sm text-foreground group-hover:text-background transition-colors">{t.common.liveProject}</span>
          <span className="text-sm text-muted group-hover:text-background transition-colors">↗</span>
        </a>
      </div>

      <div className="mt-16 border-t border-border">
        <Reveal>
          <div className="border-b border-border">
            <GalleryImage
              src="/projects/visual-design/vd_02.png"
              alt="Visual Design: Mercado Pago visual"
              width={1920}
              height={1227}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage
              src="/projects/visual-design/vd_04.png"
              alt="Visual Design: Mercado Pago visual"
              width={1920}
              height={1227}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage
              src="/projects/visual-design/vd_06.png"
              alt="Visual Design: Mercado Pago visual"
              width={2880}
              height={1841}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage
              src="/projects/visual-design/vd_07.png"
              alt="Visual Design: Mercado Pago visual"
              width={1920}
              height={1080}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage
              src="/projects/visual-design/vd_08.png"
              alt="Visual Design: Mercado Pago visual"
              width={1920}
              height={1080}
            />
          </div>
        </Reveal>

        {/* Investments carousel: five slides in two-column rows, last one bottom left */}
        <TwoCol imgs={[imgsInvest[0], imgsInvest[1]]} />
        <TwoCol imgs={[imgsInvest[2], imgsInvest[3]]} />
        <TwoCol imgs={[imgsInvest[4]]} />
      </div>

      <WorksFooter current="Mercado Pago" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function VisualDesignPage() {
  return <VisualDesignContent />;
}
