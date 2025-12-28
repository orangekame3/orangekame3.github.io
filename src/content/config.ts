import { defineCollection, z } from 'astro:content';

const i18nString = z.union([
  z.string(),
  z.object({
    en: z.string().optional(),
    ja: z.string().optional(),
  }),
]);

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: i18nString,
    description: i18nString,
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
