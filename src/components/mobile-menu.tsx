"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./language-provider";
import { useTheme } from "./theme-provider";
import { translations } from "@/lib/translations";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [domReady, setDomReady] = useState(false);
  const pathname = usePathname();
  const { lang, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const t = translations[lang];
  const scrollY = useRef(0);

  useEffect(() => { setDomReady(true); }, []);

  const links = [
    { href: "/works",      label: t.nav.bio       },
    { href: "/playground", label: t.nav.playground },
    { href: "/contact",    label: t.nav.contact    },
  ];

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      scrollY.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY.current);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [open]);

  const bg     = theme === "dark" ? "#161616" : "#ffffff";
  const fg     = theme === "dark" ? "#ededed" : "#0a0a0a";
  const border = theme === "dark" ? "1px solid #2a2a2a" : "1px solid #e5e5e5";
  const pill   = theme === "dark" ? "rgba(237,237,237,0.08)" : "rgba(10,10,10,0.06)";

  const menu = (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 99999,
      backgroundColor: bg,
      display: "flex",
      flexDirection: "column",
      fontFamily: "inherit",
    }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: border }}>
        <Link href="/works" onClick={close} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ef4444", flexShrink: 0, display: "block" }} />
          <span style={{ fontSize: 14, fontWeight: 500, color: fg }}>Pedro Julien</span>
        </Link>
        <button onClick={close} style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, color: fg, background: "none", border: "none", cursor: "pointer" }}>
          ×
        </button>
      </div>

      {/* Nav links */}
      <nav style={{ display: "flex", flexDirection: "column", flex: 1, padding: "0 24px" }}>
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={close}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "24px 0",
                borderBottom: border,
                textDecoration: "none",
                color: isActive ? fg : `${fg}99`,
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              {label}
              <span style={{ fontSize: 18, color: `${fg}66` }}>{isActive ? "●" : "→"}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom controls */}
      <div style={{ padding: "20px 24px 48px", display: "flex", flexWrap: "wrap", gap: 12, borderTop: border }}>
        {/* Lang */}
        <div style={{ display: "flex", borderRadius: 999, padding: 3, backgroundColor: pill }}>
          {(["en", "pt"] as const).map((l) => (
            <button key={l} onClick={() => lang !== l && toggleLang()} style={{ padding: "10px 22px", borderRadius: 999, border: "none", cursor: "pointer", fontSize: 30, fontWeight: lang === l ? 600 : 400, backgroundColor: lang === l ? bg : "transparent", color: lang === l ? fg : `${fg}55` }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Theme */}
        <div style={{ display: "flex", borderRadius: 999, padding: 3, backgroundColor: pill }}>
          {(["light", "dark"] as const).map((th) => (
            <button key={th} onClick={() => theme !== th && toggleTheme()} style={{ padding: "10px 22px", borderRadius: 999, border: "none", cursor: "pointer", fontSize: 30, fontWeight: theme === th ? 600 : 400, backgroundColor: theme === th ? bg : "transparent", color: theme === th ? fg : `${fg}55`, textTransform: "capitalize" }}>
              {th}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hamburger: lg:hidden keeps it mobile-only; no display in inline style to avoid override */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden flex flex-col justify-center items-center"
        style={{ width: 44, height: 44, gap: 6, background: "none", border: "none", cursor: "pointer" }}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        <span style={{ display: "block", height: 1, width: 20, backgroundColor: fg, transformOrigin: "center", transition: "all 0.3s", transform: open ? "translateY(9px) rotate(45deg)" : "none" }} />
        <span style={{ display: "block", height: 1, backgroundColor: fg, transition: "all 0.3s", width: open ? 0 : 20, opacity: open ? 0 : 1 }} />
        <span style={{ display: "block", height: 1, width: 20, backgroundColor: fg, transformOrigin: "center", transition: "all 0.3s", transform: open ? "translateY(-9px) rotate(-45deg)" : "none" }} />
      </button>

      {/* Portal: renders directly in document.body, bypasses all stacking contexts */}
      {domReady && open && createPortal(menu, document.body)}
    </>
  );
}
