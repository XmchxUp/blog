import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    react(),
    mdx({
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, { theme: "github-dark" }],
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
