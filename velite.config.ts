import { defineCollection, defineConfig, s } from "velite";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const posts = defineCollection({
  name: "Post", // collection type name
  pattern: "posts/**/*.mdx", // content files glob pattern
  schema: s
    .object({
      title: s.string().max(99), // Zod primitive type
      slug: s.path(), // auto generate slug from file path
      date: s.isodate(), // input Date-like string, output ISO Date string.
      cover: s.image().optional(), // input image relative path, output image object with blurImage.
      description: s.string().max(999).optional(),
      body: s.mdx(), // transform markdown to html
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
    })
    // more additional fields (computed fields)
    .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
});
