"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./theme-provider";
import { useLang } from "./language-provider";
import { MobileMenu } from "./mobile-menu";
import { translations } from "@/lib/translations";

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLang();
  const t = translations[lang].nav;

  const navLinks = [
    { href: "/works",      label: t.bio },
    { href: "/playground", label: t.playground },
    { href: "/contact",    label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-background/70 backdrop-blur-md border-b border-border/40">
      <div className="flex items-center gap-3">
        <span className="sphere-pulse w-2 h-2 rounded-full bg-red-500 text-red-500 shrink-0" />
        <Link href="/works" className="text-[14px] font-medium text-foreground transition-opacity hover:opacity-60">
          Pedro Julien
        </Link>
        <span className="text-[12px] text-muted">Portfolio Version 26.2</span>
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-5">
        <nav className="flex items-center gap-5">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-[14px] transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Lang pill */}
        <div className="flex items-center bg-foreground/[0.06] rounded-full p-0.5">
          <button
            onClick={() => lang !== "en" && toggleLang()}
            className={`text-[11px] px-2.5 py-0.5 rounded-full transition-all ${
              lang === "en"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => lang !== "pt" && toggleLang()}
            className={`text-[11px] px-2.5 py-0.5 rounded-full transition-all ${
              lang === "pt"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            PT
          </button>
        </div>

        {/* Theme pill */}
        <div className="flex items-center bg-foreground/[0.06] rounded-full p-0.5">
          <button
            onClick={() => theme !== "light" && toggleTheme()}
            className={`text-[11px] px-2.5 py-0.5 rounded-full transition-all ${
              theme === "light"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            Light
          </button>
          <button
            onClick={() => theme !== "dark" && toggleTheme()}
            className={`text-[11px] px-2.5 py-0.5 rounded-full transition-all ${
              theme === "dark"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            Dark
          </button>
        </div>
      </div>

      {/* Mobile hamburger */}
      <MobileMenu />
    </header>
  );
}
