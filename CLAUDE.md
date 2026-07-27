# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

GSIA (Global Source Industrial Automation) — a single-page marketing/company website for an industrial automation firm in Bengaluru (electrical control panels, WECON automation hardware, industrial automation training). Despite `package.json` naming it `manebag`, this is the GSIA site.

## Commands

```bash
npm run dev       # Next.js dev server with HMR
npm run build     # Production build (.next/)
npm run start     # Serve the production build locally
npm run lint      # next lint (eslint-config-next)
```

There is no test suite. Verify changes by running `npm run dev` and inspecting in the browser.

## Environment

The contact form posts to Web3Forms and needs `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in a `.env.local` file (referenced as `process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `src/components/Contact/Contact.jsx`). Without it, form submissions fail. The `NEXT_PUBLIC_` prefix is required for the value to be exposed to client-side code.

## Architecture

Next.js 14 (App Router) + React 18, plain JSX (no TypeScript), plain CSS (no CSS framework).

- **`src/app/`** — the App Router routes. `layout.jsx` is the root layout (renders `Navbar`, `Footer`, `FloatingButton`, `RevealController` around every page, loads the Google Fonts + global CSS, and exports the default `metadata`). `page.jsx` is the landing page — a vertical stack of section components (`Hero → Divisions → Products → WhyGsia → Training → Contact`). Detail routes `app/training/details/page.jsx` and `app/trading/details/page.jsx` each export their own `metadata` and render the matching view component.
- **`src/views/`** — the two full detail page components (`TrainingDetailsPage`, `TradingDetailsPage`), rendered by the route `page.jsx` files. (Kept out of `src/pages/` on purpose — that name would collide with Next's Pages Router.)
- **Components** live in `src/components/<Name>/` — each folder pairs a `.jsx` with its own `.css` (co-located, component-scoped by convention/class-naming, not CSS modules; App Router allows plain global CSS imports anywhere). Any component using state, effects, browser APIs, event handlers, or `next/navigation` starts with `"use client"`; purely presentational ones (`WhyGsia`, `Logo`) are server components. `RevealController` is a client component that re-runs `useReveal` on route change via `usePathname`.
- **Assets** live in `public/assets/` and are referenced by URL string (e.g. `src="/assets/logo.png"`), not imported. They render through `next/image` (`<Image>`) for optimization — use `fill` inside a positioned/sized container for cover images and explicit `width`/`height` otherwise. SVGs go through the optimizer too (`dangerouslyAllowSVG` is enabled in `next.config.mjs` for the trusted local icons). The bundled brochure is `public/assets/res/GSIA_BROCHURE.pdf`.
- **`src/utils/`** and **`src/components/Helper/`** — small shared helpers: `useReveal` (scroll animation hook), `scrollToTop`, `downloadBrochure` (triggers the brochure download).

### Design system — read before touching any styling

`src/index.css` is the **single source of truth** for the "Control Room" design system (graphite + signal-red; Archivo/Inter/IBM Plex Mono fonts self-hosted via `next/font/google` in `src/app/layout.jsx`, exposed as the `--font-archivo`/`--font-inter`/`--font-ibm-plex-mono` CSS variables that the `--font-display`/`--font-body`/`--font-mono` tokens consume). It defines:

- **Design tokens** as CSS custom properties on `:root` (`--ink`, `--signal`, `--paper`, spacing, radii, shadows, transitions, `--max-width`, `--header-height`). Legacy variable names (`--primary-color`, `--accent-color`, etc.) are **remapped** to the new palette because many component stylesheets still reference them — don't remove the remaps.
- **Shared primitive classes** used across components: `.container`, `.section`, `.section-head`, `.eyebrow`, `.btn` / `.btn--primary` / `.btn--ghost` / `.btn--light`, `.grid-bg`, `.reveal`.

Always style with these tokens/primitives rather than hardcoding colors or introducing new patterns.

### Scroll reveal

Any element given the `.reveal` class animates in on scroll. `useReveal(deps)` (called once in `App.jsx`'s `AppShell` with `[location.pathname]`) scans the DOM for `.reveal` elements via IntersectionObserver and adds `.is-in`. It respects `prefers-reduced-motion` and re-runs on route change. If you add revealed content on a new route, the existing hook covers it — just use the class.
