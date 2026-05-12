"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./theme-provider";
import { useLang } from "./language-provider";
import { translations } from "@/lib/translations";

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLang();
  const t = translations[lang].nav;

  const navLinks = [
    { href: "/works",        label: t.bio },
    { href: "/playground", label: t.playground },
    { href: "/contact",    label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-8 bg-background/80 backdrop-blur-sm">
      <Link href="/works" className="text-base font-medium text-foreground transition-opacity hover:opacity-60">
        Pedro Julien
      </Link>

      <div className="flex items-center gap-8">
        <nav className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-base transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Language toggle */}
        <button
          onClick={toggleLang}
          className="text-sm text-muted hover:text-foreground transition-colors tabular-nums"
          aria-label="Toggle language"
        >
          {lang === "en" ? "PT" : "EN"}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          className="relative flex h-6 w-6 items-center justify-center text-muted hover:text-foreground transition-colors"
        >
          {theme === "light" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
