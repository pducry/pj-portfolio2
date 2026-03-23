"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { GeoTime } from "@/components/geo-time";
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
        <GeoTime />
          <div className="flex items-center gap-3 md:gap-8">
          <Navigation />
          <ThemeToggle />
        </div>
      </header>

      <div className="flex min-h-[calc(100svh-56px)] flex-col pt-14">
        <main className="flex flex-1 flex-col justify-end px-8 pb-[50px] md:px-12 lg:px-20">
          <section className="max-w-lg space-y-6">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Contact
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-muted">
              Get in touch.
            </p>

            <div className="space-y-2 text-sm text-muted">
              <a
                href="mailto:pducry@gmail.com"
                className="block transition-colors hover:text-foreground"
              >
                pducry@gmail.com
              </a>
            </div>

            <p className="text-xs text-muted">
              &copy; Pedro Julien 2026
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
