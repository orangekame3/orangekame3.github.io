// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';
import { remarkLangSections } from './src/plugins/remark-lang-sections.ts';
import { remarkInstagram } from './src/plugins/remark-instagram.ts';
import { remarkYoutube } from './src/plugins/remark-youtube.ts';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.orangekame3.net',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkBreaks, remarkLangSections, remarkInstagram, remarkYoutube]
  }
});