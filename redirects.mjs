/**
 * Single source of truth for legacy URLs.
 *
 * The docs were reorganised twice — Docusaurus categories, then the Fumadocs
 * rebuild — so every previously published path is mapped here. Both the Next
 * dev server and the Netlify deploy read this file, so they cannot drift.
 */
export const redirects = {
  "/docs/intro": "/docs",
  "/docs/props": "/docs/api/form-wizard",
  "/docs/event": "/docs/api/events",
  "/docs/refrence": "/docs/api/methods",
  "/docs/validation": "/docs/guides/validation",
  "/docs/headless": "/docs/guides/headless",
  "/docs/theming": "/docs/guides/theming",
  "/docs/persistence": "/docs/guides/persistence",
  "/docs/accessibility": "/docs/guides/accessibility",
  "/docs/category/demos-v2": "/docs/demos",
  "/docs/category/demos-v1": "/docs/demos",
  "/docs/category/demos-old": "/docs/demos",
  "/docs/category/real-world-examples": "/docs/examples/checkout",
  "/docs/category/guides": "/docs/guides/validation",
  "/docs/category/getting-started": "/docs/getting-started/installation",
};
