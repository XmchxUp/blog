import { defineCollection, z } from "astro:content";

const post = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(99),
    date: z.string(),
    category: z.string().max(20),
    cover: z.string().optional(),
    description: z.string().max(999).optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { post };
