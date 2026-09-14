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

const wide = (n: string, alt: string): Img => ({ src: `/projects/mude/${n}.webp`, alt, width: 2500, height: 1406 });
const tall = (n: string, alt: string): Img => ({ src: `/projects/mude/${n}.webp`, alt, width: 1920, height: 2160 });

const imgOnboarding = wide("mude-01", "Mude app: onboarding flow, from commitment to a customized experience");
const imgComponents = wide("mude-02", "Mude app: dark UI components, journeys, subscription and location");
const imgJourney    = wide("mude-03", "Mude app: journey detail, event page and explore by activity type");
const imgSeason     = wide("mude-04", "Mude app: season overview, video player and audio session");
const imgLogo       = tall("mude-05", "Mude brand: wordmark");
const imgType       = tall("mude-06", "Mude brand: editorial serif typography");
const imgNav        = tall("mude-07", "Mude design system: navigation pill and button specs");
const imgCard       = tall("mude-08", "Mude design system: journey card");

function GalleryImage({ img, priority = false, fillCell = false }: { img: Img; priority?: boolean; fillCell?: boolean }) {
  return (
    <div className={fillCell ? "overflow-hidden w-full h-full" : "overflow-hidden w-full"}>
      <Image
        src={asset(img.src)}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className={fillCell ? "w-full h-full object-cover" : "w-full h-auto object-cover"}
        sizes={fillCell ? "(max-width: 1024px) 100vw, 50vw" : "100vw"}
        priority={priority}
      />
    </div>
  );
}

function FullRow({ img, priority = false }: { img: Img; priority?: boolean }) {
  return (
    <Reveal>
      <div className="border-b border-border">
        <GalleryImage img={img} priority={priority} />
      </div>
    </Reveal>
  );
}

function PairRow({ left, right }: { left: Img; right: Img }) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        <div className="border-b lg:border-b-0 lg:border-r border-border">
          <GalleryImage img={left} fillCell />
        </div>
        <div>
          <GalleryImage img={right} fillCell />
        </div>
      </div>
    </Reveal>
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

function MudeContent() {
  const { lang } = useLang();
  const t = translations[lang];
  const c = t.pages.mude;

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
        <span className="text-base text-foreground whitespace-nowrap">Mude</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Product Design"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2024</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Head of Design"]}</span>
      </div>

      <div className="px-6 border-t border-b border-border py-6">
        <div className="max-w-xl space-y-3">
          <p className="text-base leading-snug text-foreground/70">{c.desc1}</p>
          <p className="text-base leading-snug text-foreground/70">{c.desc2}</p>
        </div>
      </div>

      {/* Gallery rhythm: full / text / full / full / text / pair / text / pair / full */}
      <div className="mt-16 border-t border-border">
        <FullRow img={imgOnboarding} priority />

        <TextBlock paragraphs={[c.experience1]} />
        <FullRow img={imgJourney} />
        <FullRow img={imgSeason} />

        <TextBlock paragraphs={[c.identity1]} />
        <PairRow left={imgLogo} right={imgType} />

        <TextBlock paragraphs={[c.system1]} />
        <PairRow left={imgNav} right={imgCard} />
        <FullRow img={imgComponents} />
      </div>

      <WorksFooter current="Mude" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}

export default function MudePage() {
  return <MudeContent />;
}
