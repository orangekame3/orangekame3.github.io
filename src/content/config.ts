import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title_ja: z.string().optional(),
    title_en: z.string().optional(),
    desc_ja: z.string().optional(),
    desc_en: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
  }),
});

export const collections = { blog };
