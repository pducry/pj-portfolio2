"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const imagesLead = [
  { src: "/projects/caju/Caju1.png", width: 2320, height: 1536 },
  { src: "/projects/caju/Caju4.png", width: 2320, height: 1536 },
];

const imagesDynamics = [
  { src: "/projects/caju/Caju8.png", width: 3840, height: 2160 },
  { src: "/projects/caju/Caju5.png", width: 3000, height: 3000 },
];

const imagesScale = [
  { src: "/projects/caju/Caju6.png", width: 2320, height: 1536 },
  { src: "/projects/caju/Caju7.png", width: 1920, height: 1080 },
];

function GalleryImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="overflow-hidden w-full">
      <Image
        src={asset(src)}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
        sizes="100vw"
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

function GalleryBlock({
  images,
}: {
  images: readonly { src: string; width: number; height: number }[];
}) {
  return (
    <>
      {images.map((img, i) => (
        <Reveal key={img.src}>
          <div className="border-b border-border">
            <GalleryImage
              src={img.src}
              alt={`Caju — app redesign ${i + 1}`}
              width={img.width}
              height={img.height}
            />
          </div>
        </Reveal>
      ))}
    </>
  );
}

function CajuContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const c = t.pages.caju;

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
        <span className="text-base text-foreground whitespace-nowrap">Caju</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Product Design"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2024</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Head of Design"]}</span>
      </div>

      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{c.desc1}</p>
          <p className="text-base leading-snug text-foreground/70">{c.desc2}</p>
          <p className="text-base leading-snug text-foreground/70">{c.desc3}</p>
        </div>
      </div>

      <div className="mt-16 border-t border-border">
        <Reveal>
          <div className="border-b border-border">
            <video
              src={asset("/projects/caju/caju-bento.mp4")}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </Reveal>

        <TextBlock paragraphs={[c.lead1, c.lead2]} />
        <GalleryBlock images={imagesLead} />

        <TextBlock paragraphs={[c.dyn1, c.dyn2]} />

        {/* KPIs */}
        <div className="px-6 border-b border-border py-6">
          <span className="text-sm text-muted">{c.kpisTitle}</span>
          <div className="mt-3 flex flex-wrap gap-x-10 gap-y-3">
            {c.kpis.map((kpi) => (
              <div key={kpi.label} className="flex flex-col gap-0.5">
                <span className="text-base text-foreground whitespace-nowrap">{kpi.value}</span>
                <span className="text-sm text-muted whitespace-nowrap">{kpi.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted">{c.kpisNote}</p>
        </div>

        <GalleryBlock images={imagesDynamics} />

        <TextBlock paragraphs={[c.scale1]} />
        <GalleryBlock images={imagesScale} />
      </div>

      <WorksFooter current="Caju" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function CajuPage() {
  return <CajuContent />;
}
