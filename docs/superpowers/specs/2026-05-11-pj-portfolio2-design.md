# pj-portfolio2 Design Spec

**Date:** 2026-05-11  
**Branch:** pj-portfolio2  
**Reference:** Gustav Nordebrink portfolio (ultra-minimalist editorial/resume style)

---

## Goal

Redesign pj-portfolio with an ultra-minimalist, document/editorial aesthetic inspired by Scandinavian design studio portfolios. All existing content is preserved; only the visual presentation changes.

---

## Visual Language

- **Background:** White (`#ffffff`) with black/gray text — no dark mode
- **Typography:** Geist Sans (already installed), clean hierarchy:
  - Section labels: `text-xs uppercase tracking-widest text-gray-400`
  - Company names: `text-sm font-medium text-black`
  - Roles/years: `text-sm text-gray-400`
  - Body copy: `text-sm leading-relaxed text-gray-600`
- **No decorative elements:** no cards, shadows, rounded corners, background fills
- **Borders:** thin `border-b border-gray-100` between list entries
- **Color:** purely black, gray-400, gray-600 — no accent colors
- **Spacing:** generous padding, large vertical rhythm
- **Arrows:** `→` as navigation affordance for list entries (links to detail pages or external)

---

## Removed from v1

- Dark mode toggle and theme provider
- Custom cursor (sphere)
- Password gate
- Complex Framer Motion animations (entrance animations, stagger effects)
- Backdrop blur header
- Animated ping dot

## Kept from v1

- All bio/experience/clients/skills/contact content
- Gallery images (Playground page)
- Next.js + Tailwind stack
- Framer Motion (simple fade-in only, no complexity)
- GitHub Pages deployment configuration

---

## Navigation

**No top navigation bar.** Instead:
- Top-left: `Pedro Julien` (name) as home link
- Top-left below name: current section label (e.g., "Bio", "Works")
- Top-right: plain text nav links — `Bio · Works · Playground`
- Very minimal: `py-6 px-8` max, no backdrop blur, no border

---

## Pages

### 1. Bio (main landing — redirect from `/`)

Layout mirrors the reference exactly:

```
Pedro Julien          [Designer based in São Paulo. 18+ years of experience...   ]
Bio                   [paragraph continues with linked words...]
                      ↓

Current      2020–     Mercado Pago                                               →
             Current   Design Manager

Past         2018–2020 Rise New York & Partners                                   →
experience            Creative Director

             2017–2018 Meiuca                                                     →
                       Head of Design

             ...continuing all entries...

Education    ...        ...                                                        →

─────────────────────────────────────────────────────────────────────────────────

Professional Skills    Clients                Contact
Team Management        Google                 Email
User Experience        Facebook               Instagram
Branding               Nike                   LinkedIn
...                    ...                    Foundation / Objkt

© Pedro Julien 2026
```

**Grid columns:**
- Col 1 (sticky label): `w-[140px]` — shows only on first row of each section
- Col 2 (year): `w-[100px]` text-gray-400
- Col 3 (company + role): `flex-1`
- Col 4 (arrow): `w-[24px]` text-gray-400

### 2. Works (landing hero)

The current `/works` page is the site landing (home redirects here). In pj-portfolio2 it becomes:
- Minimal hero: `Pedro Julien` top-left, nav top-right
- Short intro text: "Hey, I'm Pedro Julien — UX Manager at Mercado Pago." adapted to the editorial tone
- `↓` scroll indicator
- No scroll content below — user navigates via nav links to Bio or Playground

### 3. Playground

- Gallery preserved — horizontal scroll or masonry grid
- Same images, minimal chrome: no cursor sphere, no password gate
- Clean white background, images speak for themselves

### 4. Contact (optional — folded into Bio footer)

- Contact info already in Bio footer — standalone `/contact` page can simply render the same info or redirect to Bio

---

## Component Architecture

```
src/
  app/
    layout.tsx          — Remove ThemeProvider, EntranceProvider, CustomCursor
    page.tsx            — redirect to /bio
    bio/page.tsx        — Main resume page (rewrite)
    works/page.tsx      — Project list (adapt)
    playground/page.tsx — Gallery (minimal updates)
    globals.css         — Rewrite for white-only palette
  components/
    navigation.tsx      — Rewrite: minimal text nav
    resume-row.tsx      — NEW: reusable table row (label | year | company | →)
    gallery-grid.tsx    — Keep horizontal-gallery, remove cursor logic
```

---

## Interaction

- **Hover on resume rows:** company name transitions `text-gray-600 → text-black`, arrow `text-gray-300 → text-black` — no underline
- **Page transitions:** simple `opacity: 0 → 1` fade via Framer Motion, 300ms
- **No scroll-linked animations**, no stagger on mount beyond a single fade

---

## Implementation Order

1. `globals.css` — establish white palette, remove dark mode vars
2. `layout.tsx` — strip providers, custom cursor
3. `navigation.tsx` — rewrite minimal nav
4. `bio/page.tsx` — full rewrite with resume table layout
5. `resume-row.tsx` — extract reusable row component
6. `works/page.tsx` — adapt to list style
7. `playground/page.tsx` — strip dark chrome, keep gallery
8. Test & deploy
