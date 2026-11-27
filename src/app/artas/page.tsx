"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { WorksFooter } from "@/components/works-footer";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const stack = ["Three.js", "WebGL", "ES Modules", "Firebase Auth", "Firestore", "Cloud Storage"];

export default function ArtasPage() {
  const { lang } = useLang();
  const t = translations[lang];

  const links = [
    {
      label: t.common.liveProject,
      href: "https://artas-experience.web.app",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/pducry/artas",
      external: true,
    },
  ];

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      {/* Back */}
      <div className="px-6 pt-1 pb-4">
        <Link href="/works" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
          {t.common.backToWorks}
        </Link>
      </div>

      {/* Title + meta */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-baseline gap-x-10 gap-y-1">
        <span className="text-base text-foreground whitespace-nowrap">Artas</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.categories["Product Design"]}</span>
        <span className="text-sm text-muted whitespace-nowrap">2026</span>
        <span className="text-sm text-muted whitespace-nowrap">{t.roles["Designer"]}</span>
      </div>

      {/* Stack */}
      <div className="px-6 border-t border-border py-4 flex flex-wrap items-center gap-2">
        {stack.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
          Claude Code
        </span>
      </div>

      {/* Description */}
      <div className="px-6 border-t border-b border-border py-16">
        <div className="max-w-xl space-y-6">
          <p className="text-base leading-snug text-foreground/70">
            {t.pages.artas.desc1}
          </p>
          <p className="text-base leading-snug text-foreground/70">
            {t.pages.artas.desc2}
          </p>
          <p className="text-base leading-snug text-foreground/70">
            {t.pages.artas.desc3a}<span className="text-foreground font-medium">{t.pages.artas.desc3b}</span>{t.pages.artas.desc3c}
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="border-b border-border">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-6 py-5 border-b border-border last:border-b-0 transition-colors hover:bg-foreground hover:text-background"
          >
            <span className="text-sm text-foreground group-hover:text-background transition-colors">{label}</span>
            <span className="text-sm text-muted group-hover:text-background transition-colors">↗</span>
          </a>
        ))}
      </div>

      {/* Video */}
      <div className="px-6 py-6">
        <video
          src={asset("/videos/ARTAS.mp4")}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
        />
      </div>

      <div className="px-6 pb-6">
        <Image
          src={asset("/projects/artas/artas_01.png")}
          alt="ARTAS: metal name badge on dark fabric"
          width={1672}
          height={941}
          className="w-full h-auto"
          sizes="100vw"
        />
      </div>

      <WorksFooter current="Artas" />

      <p className="px-6 pb-8 text-sm text-muted">{t.copyright}</p>
    </div>
  );
}
