import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconPath = path.resolve(__dirname, '../../../public/orangekame3.jpg');
const iconData = fs.readFileSync(iconPath);
const iconBase64 = `data:image/jpeg;base64,${iconData.toString('base64')}`;

const jetbrainsMonoData = await fetch(
  'https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.0.1/files/jetbrains-mono-latin-700-normal.woff'
).then((res) => res.arrayBuffer());

const notoSansJpData = await fetch(
  'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-jp@5.0.1/files/noto-sans-jp-japanese-700-normal.woff'
).then((res) => res.arrayBuffer());

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { post } = props;
  const title = post.data.title_en || post.data.title_ja || 'Untitled';

  // Nord Dark theme colors
  const bgPrimary = '#2e3440';
  const bgSecondary = '#3b4252';
  const textPrimary = '#eceff4';
  const textTertiary = '#7b88a1';
  const accent = '#88c0d0';

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: `linear-gradient(135deg, ${bgPrimary} 0%, ${bgSecondary} 100%)`,
          padding: '60px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                width: '80px',
                height: '4px',
                background: accent,
                borderRadius: '2px',
                marginBottom: '40px',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                width: '100%',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: title.length > 30 ? '48px' : '56px',
                      fontWeight: 700,
                      fontFamily: 'JetBrains Mono, Noto Sans JP',
                      color: textPrimary,
                      textAlign: 'center',
                      lineHeight: 1.4,
                      maxWidth: '90%',
                      wordBreak: 'break-word',
                    },
                    children: title,
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '40px',
              },
              children: [
                {
                  type: 'img',
                  props: {
                    src: iconBase64,
                    style: {
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '24px',
                      fontFamily: 'JetBrains Mono, Noto Sans JP',
                      color: textTertiary,
                    },
                    children: 'orangekame3.dev',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'JetBrains Mono',
          data: jetbrainsMonoData,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Noto Sans JP',
          data: notoSansJpData,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const png = resvg.render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
