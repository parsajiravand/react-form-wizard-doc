# React Form Wizard — documentation

Docs site for [`react-form-wizard-component`](https://github.com/parsajiravand/react-form-wizard),
built with [Fumadocs](https://fumadocs.dev) on Next.js.

```bash
npm install
npm run dev      # http://localhost:3037
npm run build
npm run start    # http://localhost:3001
```

## Layout

```
app/
  (home)/          landing page
  docs/            docs shell + catch-all page
  layout.config.tsx  nav and links, shared by both layouts
  global.css       the design layer — one accent, one ramp
content/docs/      all MDX; meta.json controls sidebar order
components/
  examples/        the four real-world builds
  demos/           feature demos
  demos-schema/    schema-API demos
  demos-legacy/    0.2.x demos
lib/source.ts      fumadocs content source
```

## Conventions

**One accent.** `app/global.css` defines a single hue as `--accent-50…900` and
maps `--color-fd-primary` onto it. Components must not hardcode an accent —
they inherit it. Status colours (danger/success/warning) are reserved for state
and never reused as accents.

**Shown code is running code.** Demo and example pages embed their component
source verbatim in the final ```tsx fence. If you edit a component, re-sync its
page or the docs will document code that no longer exists.

**URLs are stable.** `next.config.mjs` redirects every previously published
path. Renaming or moving a page means adding a redirect.
