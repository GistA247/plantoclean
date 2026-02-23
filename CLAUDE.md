# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Plantoclean is a bilingual (DE/EN) static website for a garden and landscaping company based in Dormagen, NRW. Built with Astro, deployed to GitHub Pages at `https://gista247.github.io/plantoclean`.

## Commands

```bash
source ~/.zshrc 2>/dev/null    # Required before npm commands (node via nvm)
npm run dev                     # Dev server with hot reload
npm run build                   # Production build → dist/
npm run preview                 # Preview production build locally
```

No linter or test runner is configured in scripts. Playwright is available as a dev dependency.

## Architecture

**Framework:** Astro 5 (static site generator) with React islands for interactive components.
**CSS:** Tailwind CSS v4 using `@theme` in `src/styles/global.css` (no tailwind.config file).
**Deployment:** GitHub Actions → GitHub Pages on push to `main`.

### BASE_URL Pattern

The site deploys to a subpath (`/plantoclean`). Every internal link must use:
```typescript
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
// Usage: href={`${base}/kontakt/`}
```

### i18n System

Lightweight custom implementation in `src/i18n/index.ts`:
- `type Locale = "de" | "en"` — two locales
- `t(locale, "key.path")` — translation lookup from `de.json` / `en.json`
- `getLocaleFromUrl(url)` — detects locale from pathname (`/en/...` → `"en"`)
- Route mapping between German and English paths (e.g., `/leistungen` ↔ `/en/services`)
- Components accept `locale?: Locale` prop, defaulting to `"de"`

### Component Types

- **Astro components** (`src/components/sections/`, `src/components/layout/`): Static, zero JS. Used for all page sections (Hero, USPGrid, Testimonials, etc.).
- **React components** (`src/components/*.tsx`): Only for interactive features — `BeforeAfterSlider.tsx`, `ContactForm.tsx`, `AccessibilityToolbar.tsx`. Hydrated via `client:load`.

### Data Layer

- `src/data/images.ts` — Centralized image URLs with bilingual alt texts, typed as `ImageEntry` with `alt: Record<Locale, string>`
- `src/data/seasonalTips.ts` — 12-month gardening tips with DE/EN content

### Versionen Preview System

Internal design variant comparison tool at `/versionen/`:
- `src/layouts/PreviewLayout.astro` — Minimal layout with `noindex`
- `src/pages/versionen/index.astro` — Tunnel page listing all sections
- Per-section pages show variants stacked vertically (A/B/C labeled)
- Variant components live in `src/components/sections/variants/`
- Theme overrides via CSS custom property wrappers (e.g., `.clover-theme` overrides `--color-primary`)

### Font Hosting

All fonts self-hosted in `public/fonts/` for DSGVO compliance (no Google Fonts CDN). Uses `@font-face` with `unicode-range` subsetting (Latin + Latin-Ext for German umlauts).

## Theme Colors

Defined as CSS custom properties in `src/styles/global.css` via Tailwind v4 `@theme`:
```
primary: #2d5016 (forest green)    primary-light: #4a7c29
accent: #8b6914 (earth brown)      anthracite: #1a1a2e
background-light: #fafaf5           background-dark: #181f13
```

## Known Quirks

- German quotation marks `„"` break the JSX/esbuild parser — use regular quotes in JSX
- Build warnings about font paths not resolving at build time are harmless (resolved at runtime)
- Material Icons loaded via Google CDN stylesheet (not self-hosted)
