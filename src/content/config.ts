import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'ja']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
