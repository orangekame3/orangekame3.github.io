import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const sortedPosts = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Takafumi Miyanaga',
    description: 'Blog posts by Takafumi Miyanaga',
    site: context.site ?? 'https://orangekame3.dev',
    items: sortedPosts.map((post) => ({
      title: post.data.title_en || post.data.title_ja || 'Untitled',
      pubDate: post.data.date,
      description: post.data.desc_en || post.data.desc_ja || '',
      link: `/blog/${post.slug}/`,
    })),
  });
}
