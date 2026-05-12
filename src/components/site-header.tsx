"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/bio", label: "Bio" },
  { href: "/playground", label: "Playground" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 flex items-start justify-between px-8 py-6 md:px-12 lg:px-20">
      <Link href="/bio" className="group flex flex-col gap-0.5">
        <span className="text-sm font-medium text-foreground transition-opacity group-hover:opacity-70">
          Pedro Julien
        </span>
      </Link>

      <nav className="flex items-center gap-8">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
