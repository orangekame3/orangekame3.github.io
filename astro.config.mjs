// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';
import { remarkLangSections } from './src/plugins/remark-lang-sections.ts';
import { remarkInstagram } from './src/plugins/remark-instagram.ts';
import { remarkYoutube } from './src/plugins/remark-youtube.ts';
import { remarkGithubVideo } from './src/plugins/remark-github-video.ts';
import { remarkGithubCard } from './src/plugins/remark-github-card.ts';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://orangekame3.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkBreaks, remarkLangSections, remarkInstagram, remarkYoutube, remarkGithubCard, remarkGithubVideo]
  }
});