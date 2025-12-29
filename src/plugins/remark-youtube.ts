import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Link, Html } from 'mdast';

const YOUTUBE_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/;

export function remarkYoutube() {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node: Paragraph, index, parent) => {
      if (!parent || index === undefined) return;

      if (node.children.length === 1) {
        const child = node.children[0];

        // Case 1: Bare URL as text
        if (child.type === 'text') {
          const match = (child as Text).value.trim().match(YOUTUBE_REGEX);
          if (match) {
            const embedHtml = createEmbed(match[1]);
            (parent.children[index] as unknown as Html).type = 'html';
            (parent.children[index] as unknown as Html).value = embedHtml;
            return;
          }
        }

        // Case 2: URL as link
        if (child.type === 'link') {
          const link = child as Link;
          const match = link.url.match(YOUTUBE_REGEX);
          if (match) {
            const embedHtml = createEmbed(match[1]);
            (parent.children[index] as unknown as Html).type = 'html';
            (parent.children[index] as unknown as Html).value = embedHtml;
            return;
          }
        }
      }
    });
  };
}

function createEmbed(videoId: string): string {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return `<figure class="youtube-embed">
  <figcaption><span class="youtube-label"># youtube.video</span></figcaption>
  <div class="youtube-frame">
    <iframe
      src="${embedUrl}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
</figure>`;
}
