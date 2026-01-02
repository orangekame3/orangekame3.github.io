import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Link, Html } from 'mdast';

const GITHUB_VIDEO_REGEX = /^https:\/\/github\.com\/user-attachments\/assets\/[a-f0-9-]+$/;

export function remarkGithubVideo() {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node: Paragraph, index, parent) => {
      if (!parent || index === undefined) return;

      if (node.children.length === 1) {
        const child = node.children[0];

        // Case 1: Bare URL as text
        if (child.type === 'text') {
          const url = (child as Text).value.trim();
          if (GITHUB_VIDEO_REGEX.test(url)) {
            const embedHtml = createVideoEmbed(url);
            (parent.children[index] as unknown as Html).type = 'html';
            (parent.children[index] as unknown as Html).value = embedHtml;
            return;
          }
        }

        // Case 2: URL as link
        if (child.type === 'link') {
          const link = child as Link;
          if (GITHUB_VIDEO_REGEX.test(link.url)) {
            const embedHtml = createVideoEmbed(link.url);
            (parent.children[index] as unknown as Html).type = 'html';
            (parent.children[index] as unknown as Html).value = embedHtml;
            return;
          }
        }
      }
    });
  };
}

function createVideoEmbed(videoUrl: string): string {
  return `<figure class="github-video-embed">
  <video controls playsinline preload="metadata">
    <source src="${videoUrl}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</figure>`;
}
