# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **static Next.js 16 (App Router)** portfolio site for Pedro Julien. There is no backend, database, or API — everything is client-side after the static export is served. Package manager is **npm** (`package-lock.json`). Node 20+ is required (Next 16); the CI in `.github/workflows/deploy.yml` uses Node 20.

Standard commands live in `package.json` scripts:
- `npm run dev` — dev server on http://localhost:3000 (Turbopack, hot reload).
- `npm run build` — static export to `out/`. Note: `next.config.ts` sets `NODE_ENV=production` behavior which applies `basePath: /pj-portfolio2` and `assetPrefix` (for GitHub Pages). So the production build is served under `/pj-portfolio2`, while `npm run dev` serves at the root path with no basePath.
- `npm run lint` — ESLint. The repo currently has pre-existing lint errors (e.g. `react-hooks/set-state-in-effect` in `theme-provider.tsx` and `reveal.tsx`); these are not caused by env setup.

Non-obvious gotchas:
- The whole site is behind a **client-side password gate** (`src/components/password-gate.tsx`). The default password is `pjpj`. The gate renders client-side only (uses `sessionStorage` key `pj-auth`), so an initial `curl` of a page will not show the gate markup — you must use a browser to authenticate. After entering `pjpj`, the portfolio content loads.
- `/` and `/bio` redirect to `/works`.
- There are no automated tests configured.
