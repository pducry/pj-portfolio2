"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

type Img = { src: string; alt: string; width: number; height: number };

const imgDropdown: Img = {
  src: "/projects/estapar/estapar-nav-dropdown.webp",
  alt: "Estapar website: Solutions menu with audiences (companies, cities, drivers, brands) and services",
  width: 1440,
  height: 780,
};

const imgsZul: readonly [Img, Img] = [
  {
    src: "/projects/estapar/estapar-zul-landing.webp",
    alt: "Estapar website: Zul+ landing page with the app in hand and a strip of user reviews",
    width: 1440,
    height: 1880,
  },
  {
    src: "/projects/estapar/estapar-app-section.webp",
    alt: "Estapar website: Zul+ section with a driver hero and the app's feature cards",
    width: 1440,
    height: 2025,
  },
];

const imgArticle: Img = {
  src: "/projects/estapar/estapar-article.webp",
  alt: "Estapar website: full article page with author, photo carousel, quote, video and newsletter",
  width: 1440,
  height: 6441,
};

function GalleryImage({ img, twoCol = false }: { img: Img; twoCol?: boolean }) {
  return (
    <div className="overflow-hidden w-full">
      <Image
        src={asset(img.src)}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className="w-full h-auto"
        sizes={twoCol ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
      />
    </div>
  );
}

/** Two page screens side by side on desktop, top aligned, stacked on mobile. */
function TwoCol({ imgs }: { imgs: readonly [Img, Img] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
      {imgs.map((img, i) => (
        <Reveal key={img.src}>
          <div
            className={[
              "border-border",
              i === 0 ? "border-b md:border-b-0 md:border-r" : "",
            ].join(" ")}
          >
            <GalleryImage img={img} twoCol />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function TextBlock({ label, paragraphs }: { label?: string; paragraphs: readonly string[] }) {
  return (
    <div className="px-6 border-b border-border py-6">
      {label && <span className="text-sm text-muted">{label}</span>}
      <div className={label ? "mt-3 max-w-xl space-y-3" : "max-w-xl space-y-3"}>
        {paragraphs.map((p) => (
          <p key={p} className="text-base leading-snug text-foreground/70">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function EstaparContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const c = t.pages.estapar;

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <div className="px-6 pt-1 pb-4">
        <Link
          href="/works"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.common.backToWorks}
        </Link>
      </div>

      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Estapar</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Product Design"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2024</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Head of Design"]}</span>
      </div>

      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{c.desc1}</p>
          <p className="text-base leading-snug text-foreground/70">{c.desc2}</p>
          <p className="text-base leading-snug text-foreground/70">{c.role1}</p>
        </div>
      </div>

      {/* Live project link, same pattern as Foracle */}
      <div className="border-b border-border">
        <a
          href="https://www.estapar.com.br"
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
            <video
              src={asset("/projects/estapar/estapar-website.mp4")}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </Reveal>

        {/* Navigation: the Solutions menu that organizes the service portfolio */}
        <TextBlock paragraphs={[c.nav1, c.nav2]} />

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage img={imgDropdown} />
          </div>
        </Reveal>

        {/* Visual update: Zul+ landing page and app section */}
        <TextBlock paragraphs={[c.visual1, c.visual2]} />

        <TwoCol imgs={imgsZul} />

        {/* Repositioning: content. Article on the left, right cell reserved for the next screen */}
        <TextBlock paragraphs={[c.brand1, c.brand2]} />

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
          <Reveal>
            <div className="md:border-r border-border">
              <GalleryImage img={imgArticle} twoCol />
            </div>
          </Reveal>
          <div />
        </div>
      </div>

      <WorksFooter current="Estapar" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function EstaparPage() {
  return <EstaparContent />;
}
