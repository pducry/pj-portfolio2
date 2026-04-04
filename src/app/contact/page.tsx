"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { useEntrance } from "@/components/entrance-provider";

export default function Contact() {
  const animate = useEntrance();

  return (
    <div>
      <header className={`${animate ? "animate-fade-in-down" : ""} fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-4 md:px-12 lg:px-20 backdrop-blur-xl bg-background/70 border-b border-transparent transition-colors duration-300`}>
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="text-sm font-medium tracking-widest text-foreground">
            PJ&thinsp;&mdash;&thinsp;26
          </span>
        </Link>
          <div className="flex items-center gap-3 md:gap-8">
          <Navigation />
          <ThemeToggle />
        </div>
      </header>

      <div className="flex min-h-[calc(100svh-56px)] flex-col pt-14">
        <main className="flex flex-1 flex-col justify-end px-8 pb-16 md:px-12 lg:px-20">
          <section className="max-w-xl">

            <p className="text-sm text-muted mb-10">Say hello</p>

            <a
              href="mailto:pducry@gmail.com"
              className="block text-sm font-bold text-foreground hover:opacity-60 transition-opacity"
            >
              pducry@gmail.com
            </a>

            <div className="mt-16 flex flex-col gap-3">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted mb-2">Elsewhere</p>
              <a href="https://www.instagram.com/pedro_julien" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-muted hover:text-foreground transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/pedro_julien" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-muted hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://github.com/pducry" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-muted hover:text-foreground transition-colors">GitHub</a>
              <a href="https://foundation.app/@ixaser" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-muted hover:text-foreground transition-colors">Foundation</a>
              <a href="https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-muted hover:text-foreground transition-colors">Objkt</a>
            </div>

            <p className="mt-16 text-xs text-muted">
              &copy; Pedro Julien 2026
            </p>

          </section>
        </main>
      </div>
    </div>
  );
}
