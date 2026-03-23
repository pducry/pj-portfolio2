"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Works" },
  { href: "/playground", label: "Playground" },
  { href: "/bio", label: "Bio" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {links.map(({ href, label }) => {
          const isActive = pathname === href || (href === "/" && pathname === "/works");
          return (
            <Link
              key={href}
              href={href}
              className={`group relative text-sm transition-colors ${
                isActive
                  ? "font-medium text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {label}
              <span className="absolute bottom-[-2px] left-0 h-[1px] w-0 bg-foreground transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          );
        })}
      </nav>

      {/* Mobile hamburger button */}
      <button
        className="relative z-[60] flex md:hidden flex-col justify-center items-center w-8 h-8 gap-[5px]"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span
          className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
            open ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-[1.5px] w-5 bg-foreground transition-all duration-300 ${
            open ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile overlay — portaled to body so it escapes header stacking context */}
      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-[55] bg-background md:hidden"
          onClick={() => setOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-8 z-10 flex items-center justify-center w-8 h-8"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-foreground">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <nav
            className="absolute inset-0 flex flex-col items-center justify-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map(({ href, label }) => {
              const isActive = pathname === href || (href === "/" && pathname === "/works");
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-lg tracking-tight transition-colors ${
                    isActive
                      ? "font-semibold text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
