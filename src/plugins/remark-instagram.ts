import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Link, Html } from 'mdast';

const INSTAGRAM_REGEX = /https?:\/\/(?:www\.)?instagram\.com\/(p|reel)\/([A-Za-z0-9_-]+)\/?/;

export function remarkInstagram() {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node: Paragraph, index, parent) => {
      if (!parent || index === undefined) return;

      // Check if paragraph contains only a single Instagram URL
      if (node.children.length === 1) {
        const child = node.children[0];

        // Case 1: Bare URL as text
        if (child.type === 'text') {
          const match = (child as Text).value.trim().match(INSTAGRAM_REGEX);
          if (match) {
            const embedHtml = createEmbed(match[1], match[2]);
            (parent.children[index] as unknown as Html).type = 'html';
            (parent.children[index] as unknown as Html).value = embedHtml;
            return;
          }
        }

        // Case 2: URL as link
        if (child.type === 'link') {
          const link = child as Link;
          const match = link.url.match(INSTAGRAM_REGEX);
          if (match) {
            const embedHtml = createEmbed(match[1], match[2]);
            (parent.children[index] as unknown as Html).type = 'html';
            (parent.children[index] as unknown as Html).value = embedHtml;
            return;
          }
        }
      }
    });
  };
}

function createEmbed(type: string, id: string): string {
  const embedUrl = `https://www.instagram.com/${type}/${id}/embed/captioned/`;
  const label = type === 'reel' ? 'reel' : 'post';
  return `<figure class="instagram-embed">
  <figcaption><span class="instagram-label"># instagram.${label}</span></figcaption>
  <div class="instagram-frame">
    <iframe
      src="${embedUrl}"
      frameborder="0"
      scrolling="no"
      allowtransparency="true"
      loading="lazy"
    ></iframe>
  </div>
</figure>`;
}
