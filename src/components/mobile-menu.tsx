"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./language-provider";
import { useTheme } from "./theme-provider";
import { translations } from "@/lib/translations";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const t = translations[lang];

  const links = [
    { href: "/works",      label: t.nav.bio },
    { href: "/playground", label: t.nav.playground },
    { href: "/contact",    label: t.nav.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[6px]"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        <span className={`block h-px w-5 bg-foreground origin-center transition-all duration-300 ease-in-out ${open ? "translate-y-[9px] rotate-45" : ""}`} />
        <span className={`block h-px bg-foreground transition-all duration-300 ease-in-out ${open ? "w-0 opacity-0" : "w-5"}`} />
        <span className={`block h-px w-5 bg-foreground origin-center transition-all duration-300 ease-in-out ${open ? "-translate-y-[9px] -rotate-45" : ""}`} />
      </button>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-background flex flex-col px-6"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between py-6">
              <Link
                href="/works"
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                Pedro Julien
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center text-2xl text-muted hover:text-foreground transition-colors"
                aria-label="Fechar menu"
              >
                ×
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col mt-8">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 border-b border-border text-2xl font-medium text-foreground hover:text-muted transition-colors"
                  >
                    {label}
                    <span className="text-muted text-xl">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.2 }}
              className="mt-auto pb-10 flex items-center gap-8 text-base"
            >
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { lang === "pt" && toggleLang(); }}
                  className={`transition-colors ${lang === "en" ? "text-foreground" : "text-muted"}`}
                >EN</button>
                <span className="text-muted">/</span>
                <button
                  onClick={() => { lang === "en" && toggleLang(); }}
                  className={`transition-colors ${lang === "pt" ? "text-foreground" : "text-muted"}`}
                >PT</button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => { theme === "dark" && toggleTheme(); }}
                  className={`transition-colors ${theme === "light" ? "text-foreground" : "text-muted"}`}
                >Light</button>
                <span className="text-muted">/</span>
                <button
                  onClick={() => { theme === "light" && toggleTheme(); }}
                  className={`transition-colors ${theme === "dark" ? "text-foreground" : "text-muted"}`}
                >Dark</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
