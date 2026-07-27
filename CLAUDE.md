# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

GSIA (Global Source Industrial Automation) — a single-page marketing/company website for an industrial automation firm in Bengaluru (electrical control panels, WECON automation hardware, industrial automation training). Despite `package.json` naming it `manebag`, this is the GSIA site.

## Commands

```bash
npm run dev       # Vite dev server with HMR
npm run build     # Production build to dist/
npm run preview   # Serve the production build locally
npm run lint      # ESLint (js/jsx); --max-warnings 0, so warnings fail
```

There is no test suite. Verify changes by running `npm run dev` and inspecting in the browser.

## Environment

The contact form posts to Web3Forms and needs `VITE_WEB3FORMS_ACCESS_KEY` in a `.env` file (referenced as `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY` in `src/components/Contact/Contact.jsx`). Without it, form submissions fail.

## Architecture

React 18 + Vite, plain JSX (no TypeScript), plain CSS (no CSS framework). React Router v7.

- **`src/App.jsx`** — the whole route table lives here. `/` renders the landing page as a vertical stack of section components (`Hero → Divisions → Products → WhyGsia → Training → Contact`). Two detail routes: `/training/details` and `/trading/details`. `Navbar`, `Footer`, and `FloatingButton` render outside `<Routes>` on every page.
- **Components** live in `src/components/<Name>/` — each folder pairs a `.jsx` with its own `.css` (co-located, component-scoped by convention/class-naming, not CSS modules). Section components are self-contained and import their assets directly.
- **`src/pages/`** — the two full detail pages.
- **`src/utils/`** and **`src/components/Helper/`** — small shared helpers: `useReveal` (scroll animation hook), `scrollToTop`, `downloadBrochure` (triggers the bundled `GSIA_BROCHURE.pdf` download). Note `src/components/Helper/Form.js` is a dead/stale template (references `React` without importing it, placeholder access key) — the live form is `Contact.jsx`.

### Design system — read before touching any styling

`src/index.css` is the **single source of truth** for the "Control Room" design system (graphite + signal-red; Archivo/Inter/IBM Plex Mono fonts loaded in `index.html`). It defines:

- **Design tokens** as CSS custom properties on `:root` (`--ink`, `--signal`, `--paper`, spacing, radii, shadows, transitions, `--max-width`, `--header-height`). Legacy variable names (`--primary-color`, `--accent-color`, etc.) are **remapped** to the new palette because many component stylesheets still reference them — don't remove the remaps.
- **Shared primitive classes** used across components: `.container`, `.section`, `.section-head`, `.eyebrow`, `.btn` / `.btn--primary` / `.btn--ghost` / `.btn--light`, `.grid-bg`, `.reveal`.

Always style with these tokens/primitives rather than hardcoding colors or introducing new patterns.

### Scroll reveal

Any element given the `.reveal` class animates in on scroll. `useReveal(deps)` (called once in `App.jsx`'s `AppShell` with `[location.pathname]`) scans the DOM for `.reveal` elements via IntersectionObserver and adds `.is-in`. It respects `prefers-reduced-motion` and re-runs on route change. If you add revealed content on a new route, the existing hook covers it — just use the class.
