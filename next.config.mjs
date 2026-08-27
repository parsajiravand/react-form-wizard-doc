import { createMDX } from "fumadocs-mdx/next";
import { redirects as legacyRoutes } from "./redirects.mjs";

const withMDX = createMDX();

// The site is entirely static — every page is prerendered and the search index
// is generated at build time — so it exports to plain HTML. That keeps the
// Netlify deploy a static upload with no serverless runtime.
const isExport = process.env.NEXT_OUTPUT === "export";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  ...(isExport ? { output: "export", images: { unoptimized: true } } : {}),

  // `redirects()` is unsupported in an export build; Netlify serves the same
  // map from public/_redirects, written by scripts/write-redirects.mjs.
  ...(isExport
    ? {}
    : {
        async redirects() {
          return Object.entries(legacyRoutes).map(([source, destination]) => ({
            source,
            destination,
            permanent: true,
          }));
        },
      }),
};

export default withMDX(config);
