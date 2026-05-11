# pj-portfolio2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign pj-portfolio with an ultra-minimalist editorial/resume aesthetic (inspired by Scandinavian studio portfolios) while preserving all existing content.

**Architecture:** Single Next.js app on branch `pj-portfolio2`. White-only palette, no dark mode. Shared `SiteHeader` component replaces individual page headers. Bio page becomes the main resume/CV page with a table layout. Works page redirects to Bio. Playground keeps the gallery.

**Tech Stack:** Next.js 15, Tailwind CSS v4, Framer Motion, Instrument Sans (Google Font, already configured)

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/app/globals.css` | Modify | White palette, remove dark mode, remove cursor:none |
| `src/app/layout.tsx` | Modify | Strip ThemeProvider, EntranceProvider, CustomCursor, PasswordGate |
| `src/app/page.tsx` | Modify | Redirect to /bio (was /works) |
| `src/components/site-header.tsx` | **Create** | Shared minimal header: name left, nav right |
| `src/components/navigation.tsx` | Modify | Slim down to Bio + Playground links only |
| `src/app/bio/page.tsx` | Modify | Full rewrite: intro paragraph + resume table |
| `src/app/works/page.tsx` | Modify | Redirect to /bio |
| `src/app/playground/page.tsx` | Modify | Strip chrome/easter-egg/entrance animation |
| `src/app/contact/page.tsx` | Modify | Redirect to /bio |

Components NOT touched (left in place, just no longer imported):
- `src/components/theme-provider.tsx`
- `src/components/theme-toggle.tsx`
- `src/components/custom-cursor.tsx`
- `src/components/password-gate.tsx`
- `src/components/entrance-provider.tsx`

---

## Task 1: Reset global styles

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace globals.css**

Replace the entire file with:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --muted: #737373;
  --border: #e5e5e5;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --font-sans: var(--font-instrument-sans);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), system-ui, sans-serif;
  overflow-y: scroll;
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}

::selection {
  background: var(--foreground);
  color: var(--background);
}

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out both;
}
```

- [ ] **Step 2: Start dev server and check blank page renders white**

```bash
cd /Users/pducry/.superset/worktrees/a174c4b0-0d65-4675-b34c-fd33e67dfed6/PJ-Portfolio
npm run dev
```

Open http://localhost:3000 — expect white background, no console errors about missing CSS vars.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "style: white-only palette, strip dark mode and cursor overrides"
```

---

## Task 2: Strip layout providers

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx**

```tsx
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pedro Julien — Creative Director",
  description:
    "Brazilian/Swiss designer and creative director with 18+ years of experience in digital products and branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify**

Reload http://localhost:3000 — should render without ThemeProvider/EntranceProvider errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "refactor: strip theme/entrance/cursor/password providers from layout"
```

---

## Task 3: Update home redirect

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Change redirect target**

```tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/bio");
}
```

- [ ] **Step 2: Verify**

http://localhost:3000 should redirect to /bio (404 is fine for now since bio will be rewritten).

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "chore: redirect home to /bio"
```

---

## Task 4: Create shared SiteHeader component

**Files:**
- Create: `src/components/site-header.tsx`

This is a client component because it reads the current pathname to highlight active nav links.

- [ ] **Step 1: Create the file**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/site-header.tsx
git commit -m "feat: add SiteHeader component — minimal name-left/nav-right layout"
```

---

## Task 5: Rewrite bio page — resume layout

**Files:**
- Modify: `src/app/bio/page.tsx`

This is a server component (no interactivity needed). The resume table uses a 4-column grid layout matching the reference.

- [ ] **Step 1: Replace bio/page.tsx entirely**

```tsx
import { SiteHeader } from "@/components/site-header";

type Entry = {
  company: string;
  role: string;
  period?: string;
};

type ResumeSection = {
  label: string;
  entries: Entry[];
};

const experience: ResumeSection[] = [
  {
    label: "Current",
    entries: [
      { company: "Mercado Pago", role: "Design Manager", period: "2020–" },
    ],
  },
  {
    label: "Past experience",
    entries: [
      { company: "Rise New York & Partners", role: "Creative Director" },
      { company: "Meiuca", role: "Head of Design" },
      { company: "Descomplica", role: "Design Manager" },
      { company: "DDB Unlimited", role: "Design Director" },
      { company: "Work & Co", role: "Senior Designer" },
      { company: "Google Brand Studio", role: "Senior Designer" },
      { company: "Y Dreams", role: "Senior Designer" },
      { company: "Koi Factory", role: "Senior Designer" },
    ],
  },
];

const skills = [
  "Team Management",
  "User Experience Design",
  "Branding",
  "Visual Design",
  "Product Envisioning",
  "Design Process Consulting",
  "Team Growth & Leadership",
  "Strong Sales Experience",
  "Entrepreneurial Background",
];

const clients = [
  "Google",
  "Facebook",
  "Nike",
  "Isadore",
  "Royal Canin",
  "KLM",
  "Heineken",
  "Globosat",
  "Adidas",
  "Shutterstock",
  "Art Directors Club",
  "Cisco",
  "Descomplica",
  "Neom",
];

export default function Bio() {
  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <main className="px-8 pb-24 md:px-12 lg:px-20">
        {/* Intro — two-column */}
        <div className="grid grid-cols-1 gap-12 pt-8 pb-16 border-b border-border lg:grid-cols-[200px_1fr] lg:gap-20">
          <div>
            <p className="text-sm text-muted">Bio</p>
          </div>
          <div className="max-w-2xl space-y-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              Designer based in São Paulo, Brazil. Pedro is a Brazilian/Swiss
              designer and creative director working at the intersection of
              digital products and branding experience. With 18+ years of
              professional experience, he plays a central and strategic role
              across all stages of a project — from understanding business
              strategy to delivering final prototypes.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              Fueled by curiosity, Pedro finds himself in a process of
              continuous iteration and experimentation. Founder of{" "}
              <span className="text-foreground font-medium">FFForma</span>, a
              studio crafting new motion and visual solutions using GenAI for
              the creative industry.
            </p>
            <div className="pt-2">
              <a href="#experience" className="text-sm text-muted hover:text-foreground transition-colors">
                ↓
              </a>
            </div>
          </div>
        </div>

        {/* Experience table */}
        <div id="experience" className="pt-0">
          {experience.map((section) => (
            <div key={section.label}>
              {section.entries.map((entry, i) => (
                <div
                  key={entry.company}
                  className="group grid items-baseline border-b border-border py-4 transition-colors hover:bg-foreground/[0.02] lg:grid-cols-[200px_120px_1fr_24px]"
                >
                  {/* Section label — only first row */}
                  <span className="hidden text-xs text-muted lg:block">
                    {i === 0 ? section.label : ""}
                  </span>

                  {/* Period */}
                  <span className="hidden text-sm text-muted lg:block">
                    {entry.period ?? ""}
                  </span>

                  {/* Company + role */}
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {entry.company}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{entry.role}</p>
                    {/* Mobile-only label */}
                    {i === 0 && (
                      <p className="text-xs text-muted mt-1 lg:hidden">
                        {section.label}
                      </p>
                    )}
                  </div>

                  {/* Arrow */}
                  <span className="hidden text-sm text-muted transition-colors group-hover:text-foreground lg:block">
                    →
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer grid: Skills · Clients · Contact */}
        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-border pt-16 lg:grid-cols-3 lg:gap-20">
          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-8">
              Professional Skills
            </p>
            <div className="space-y-3">
              {skills.map((s) => (
                <p key={s} className="text-sm text-foreground/70">
                  {s}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-8">
              Clients
            </p>
            <div className="space-y-3">
              {clients.map((c) => (
                <p key={c} className="text-sm text-foreground/70">
                  {c}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-8">
              Contact
            </p>
            <div className="space-y-3">
              {[
                { label: "Email", href: "mailto:pducry@gmail.com" },
                { label: "Instagram", href: "https://www.instagram.com/pedro_julien" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/pedro_julien" },
                { label: "Foundation", href: "https://foundation.app/@ixaser" },
                { label: "Objkt", href: "https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-16 text-xs text-muted">© Pedro Julien 2026</p>
      </main>
    </div>
  );
}
```

- [ ] **Step 2: Verify at http://localhost:3000/bio**

Expect: white page, name top-left, Bio/Playground nav top-right, intro paragraph, experience table rows, footer grid. No dark mode toggle. No custom cursor.

- [ ] **Step 3: Commit**

```bash
git add src/app/bio/page.tsx
git commit -m "feat: rewrite bio page as minimal resume/CV with table layout"
```

---

## Task 6: Rewrite works page — redirect to bio

**Files:**
- Modify: `src/app/works/page.tsx`

The works page previously served as the site landing hero. With bio now being the main page, works redirects there.

- [ ] **Step 1: Replace works/page.tsx**

```tsx
import { redirect } from "next/navigation";

export default function Works() {
  redirect("/bio");
}
```

- [ ] **Step 2: Verify**

http://localhost:3000/works should redirect to /bio.

- [ ] **Step 3: Commit**

```bash
git add src/app/works/page.tsx
git commit -m "chore: redirect /works to /bio"
```

---

## Task 7: Rewrite playground page — strip chrome, keep gallery

**Files:**
- Modify: `src/app/playground/page.tsx`

Remove: easter egg, entrance animations, theme toggle, backdrop blur header, hero section.  
Keep: `HorizontalGallery`, `GridControls`, IntersectionObserver for gallery visibility.

- [ ] **Step 1: Replace playground/page.tsx**

```tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { GridControls } from "@/components/grid-controls";

export default function Playground() {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(8);
  const [galleryInView, setGalleryInView] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setGalleryInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-fade-in">
      <SiteHeader />

      <div ref={galleryRef}>
        <HorizontalGallery columns={columns} gap={gap} />
      </div>

      <GridControls
        visible={galleryInView}
        columns={columns}
        gap={gap}
        onColumnsChange={setColumns}
        onGapChange={setGap}
      />
    </div>
  );
}
```

- [ ] **Step 2: Verify at http://localhost:3000/playground**

Expect: white page, name/nav header, gallery grid loads below, grid controls appear on scroll. No easter egg. No hero section.

- [ ] **Step 3: Commit**

```bash
git add src/app/playground/page.tsx
git commit -m "refactor: strip playground chrome, keep gallery + grid controls"
```

---

## Task 8: Redirect contact page

**Files:**
- Modify: `src/app/contact/page.tsx`

Contact info already lives in the Bio footer. The standalone contact page becomes a redirect.

- [ ] **Step 1: Replace contact/page.tsx**

```tsx
import { redirect } from "next/navigation";

export default function Contact() {
  redirect("/bio");
}
```

- [ ] **Step 2: Verify**

http://localhost:3000/contact should redirect to /bio.

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "chore: redirect /contact to /bio"
```

---

## Task 9: Update navigation links

**Files:**
- Modify: `src/components/navigation.tsx`

The old Navigation component is no longer used by any page (SiteHeader handles nav), but the file is still imported nowhere. We can simplify or delete it. Since SiteHeader already contains the nav, we'll delete the Navigation component file to avoid confusion.

- [ ] **Step 1: Verify Navigation is no longer imported**

```bash
grep -r "from.*navigation" /Users/pducry/.superset/worktrees/a174c4b0-0d65-4675-b34c-fd33e67dfed6/PJ-Portfolio/src --include="*.tsx" --include="*.ts"
```

Expected: no results (or only the file itself).

- [ ] **Step 2: Remove the file**

```bash
rm /Users/pducry/.superset/worktrees/a174c4b0-0d65-4675-b34c-fd33e67dfed6/PJ-Portfolio/src/components/navigation.tsx
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused Navigation component (replaced by SiteHeader)"
```

---

## Task 10: Polish grid controls styling

**Files:**
- Modify: `src/components/grid-controls.tsx`

The GridControls component currently uses `bg-background/50` and `border-border/50` which still work with the new white palette, but the frosted-glass effect should be cleaner on white. Also remove `backdrop-blur-xl` and simplify for the minimalist aesthetic.

- [ ] **Step 1: Update grid controls appearance**

In `src/components/grid-controls.tsx`, find this line (around line 54):

```tsx
className={`flex items-center overflow-hidden rounded-full border border-border/50 backdrop-blur-xl bg-background/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out ${
```

Replace with:

```tsx
className={`flex items-center overflow-hidden rounded-full border border-border bg-white shadow-sm transition-all duration-500 ease-out ${
```

- [ ] **Step 2: Verify**

On http://localhost:3000/playground, scroll down to see gallery and verify the grid controls pill appears with a clean white background and thin border.

- [ ] **Step 3: Commit**

```bash
git add src/components/grid-controls.tsx
git commit -m "style: clean up grid controls for white-only palette"
```

---

## Task 11: Smoke-test all routes and build

- [ ] **Step 1: Test all routes manually**

| Route | Expected |
|-------|----------|
| http://localhost:3000 | Redirects to /bio |
| http://localhost:3000/bio | White page, intro + table, no errors |
| http://localhost:3000/works | Redirects to /bio |
| http://localhost:3000/playground | White page, gallery + controls |
| http://localhost:3000/contact | Redirects to /bio |

- [ ] **Step 2: Production build**

```bash
npm run build
```

Expected: Build completes with no errors. Warnings about missing images are OK.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: pj-portfolio2 — editorial redesign complete"
```
