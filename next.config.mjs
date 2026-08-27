import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // The docs were reorganised over two releases. Every previously published
  // URL still resolves rather than 404ing.
  async redirects() {
    const map = {
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
      "/docs/playground": "/docs/playground",
    };

    return Object.entries(map)
      .filter(([from, to]) => from !== to)
      .map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default withMDX(config);
