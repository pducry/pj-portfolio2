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

const imgHero: Img = {
  src: "/projects/descomplica/descomplica-1.jpg",
  alt: "Descomplica brand campaign: portrait framing the camera with both hands under orange and green light",
  width: 2400,
  height: 1600,
};

const imgStudio: Img = {
  src: "/projects/descomplica/descomplica-2.jpg",
  alt: "Descomplica brand campaign: student in a wheelchair studying on a laptop under purple light",
  width: 2400,
  height: 1600,
};

const imgsStreet: readonly Img[] = [
  {
    src: "/projects/descomplica/descomplica-3.jpg",
    alt: "Descomplica brand campaign: student balancing on a wall in the city, looking at a phone",
    width: 1600,
    height: 2400,
  },
  {
    src: "/projects/descomplica/descomplica-4.jpg",
    alt: "Descomplica brand campaign: student with yellow backpack and headphones walking down a ramp with a phone",
    width: 1600,
    height: 2400,
  },
];

const imgNight: Img = {
  src: "/projects/descomplica/descomplica-5.jpg",
  alt: "Descomplica brand campaign: student smiling at a phone on a neon-lit subway platform",
  width: 2400,
  height: 1600,
};

function GalleryImage({ img, priority = false }: { img: Img; priority?: boolean }) {
  return (
    <div className="overflow-hidden w-full">
      <Image
        src={asset(img.src)}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className="w-full h-auto object-cover"
        sizes="100vw"
        priority={priority}
      />
    </div>
  );
}

function TextBlock({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="px-6 border-b border-border py-6">
      <div className="max-w-xl space-y-3">
        {paragraphs.map((p) => (
          <p key={p} className="text-base leading-snug text-foreground/70">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function DescomplicaContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const c = t.pages.descomplica;

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
        <span className="text-base text-foreground whitespace-nowrap">Descomplica</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Branding"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2022</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Design Manager"]}</span>
      </div>

      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{c.desc1}</p>
          <p className="text-base leading-snug text-foreground/70">{c.desc2}</p>
        </div>
      </div>

      <div className="mt-16 border-t border-border">
        <Reveal>
          <div className="border-b border-border">
            <GalleryImage img={imgHero} priority />
          </div>
        </Reveal>

        <TextBlock paragraphs={[c.brand1, c.brand2]} />

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage img={imgStudio} />
          </div>
        </Reveal>

        <TextBlock paragraphs={[c.campaign1]} />

        {/* Two portrait shots side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
          {imgsStreet.map((img, i) => (
            <Reveal key={img.src}>
              <div
                className={[
                  "border-border",
                  i === 0 ? "border-b md:border-b-0 md:border-r" : "",
                ].join(" ")}
              >
                <GalleryImage img={img} />
              </div>
            </Reveal>
          ))}
        </div>

        <TextBlock paragraphs={[c.system1, c.system2]} />

        <Reveal>
          <div className="border-b border-border">
            <GalleryImage img={imgNight} />
          </div>
        </Reveal>
      </div>

      <WorksFooter current="Descomplica" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function DescomplicaPage() {
  return <DescomplicaContent />;
}
