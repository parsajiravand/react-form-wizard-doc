import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import {
  remarkAdmonition,
  remarkNpm,
} from "fumadocs-core/mdx-plugins";

export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      // Keeps the ::: callout syntax the content was already written in.
      remarkAdmonition,
      // Renders npm/pnpm/yarn tabs for ```package-install blocks.
      remarkNpm,
    ],
  },
});
