# GSIA — Global Source Industrial Automation

Marketing website for **Global Source Industrial Automation** (Bengaluru) —
electrical control panels, WECON automation hardware, and industrial automation
training. Built with **Next.js 14 (App Router)** and React 18.

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
```

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Next.js dev server with HMR              |
| `npm run build` | Production build (`.next/`)              |
| `npm run start` | Serve the production build locally       |
| `npm run lint`  | Lint with `eslint-config-next`           |

## Environment

The contact form posts to [Web3Forms](https://web3forms.com/). Create a
`.env.local` with your access key:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
```

The `NEXT_PUBLIC_` prefix is required so the key is available to client-side
code. Without it, form submissions fail.

## Project structure

- `src/app/` — App Router routes. `layout.jsx` is the root layout (fonts,
  global CSS, `Navbar`/`Footer`/`FloatingButton`/`RevealController`, metadata).
  `page.jsx` is the landing page; `training/details` and `trading/details` are
  the detail routes.
- `src/views/` — the two full detail page components rendered by those routes.
- `src/components/<Name>/` — components, each co-located with its own CSS.
- `src/utils/`, `src/components/Helper/` — shared helpers (`useReveal`,
  `scrollToTop`, `downloadBrochure`).
- `public/assets/` — images, icons, and the brochure PDF, referenced by URL.

## Design system

`src/index.css` is the single source of truth for the "Control Room" design
system (graphite + signal-red; Archivo / Inter / IBM Plex Mono via `next/font`).
Style with its design tokens and shared primitive classes rather than
hardcoding values. See `CLAUDE.md` for details.
