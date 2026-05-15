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
    <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-8 bg-background">
      <Link href="/works" className="text-base font-medium text-foreground transition-opacity hover:opacity-60">
        Pedro Julien
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-8">
        <nav className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 text-sm tabular-nums">
          <button onClick={() => lang === "pt" && toggleLang()} className={`transition-colors ${lang === "en" ? "text-foreground" : "text-muted hover:text-foreground"}`}>EN</button>
          <span className="text-muted">/</span>
          <button onClick={() => lang === "en" && toggleLang()} className={`transition-colors ${lang === "pt" ? "text-foreground" : "text-muted hover:text-foreground"}`}>PT</button>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <button onClick={() => theme === "dark" && toggleTheme()} className={`transition-colors ${theme === "light" ? "text-foreground" : "text-muted hover:text-foreground"}`}>Light</button>
          <span className="text-muted">/</span>
          <button onClick={() => theme === "light" && toggleTheme()} className={`transition-colors ${theme === "dark" ? "text-foreground" : "text-muted hover:text-foreground"}`}>Dark</button>
        </div>
      </div>

      {/* Mobile hamburger */}
      <MobileMenu />
    </header>
  );
}
