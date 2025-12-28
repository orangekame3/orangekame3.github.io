import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Html } from 'mdast';

export function remarkLangSections() {
  return (tree: Root) => {
    let currentLang: string | null = null;
    const nodesToWrap: { start: number; end: number; lang: string }[] = [];
    let currentStart: number | null = null;

    tree.children.forEach((node, index) => {
      if (node.type === 'paragraph') {
        const paragraph = node as Paragraph;
        if (paragraph.children.length === 1 && paragraph.children[0].type === 'text') {
          const text = (paragraph.children[0] as Text).value.trim();
          if (text === '::en' || text === '::ja') {
            const newLang = text.slice(2);

            // Close previous section
            if (currentLang !== null && currentStart !== null) {
              nodesToWrap.push({ start: currentStart, end: index - 1, lang: currentLang });
            }

            currentLang = newLang;
            currentStart = index + 1;

            // Mark this node for removal by converting to empty html
            (node as unknown as Html).type = 'html';
            (node as unknown as Html).value = '';
          }
        }
      }
    });

    // Close last section
    if (currentLang !== null && currentStart !== null) {
      nodesToWrap.push({ start: currentStart, end: tree.children.length - 1, lang: currentLang });
    }

    // Wrap sections in reverse order to maintain correct indices
    nodesToWrap.reverse().forEach(({ start, end, lang }) => {
      if (start <= end) {
        const wrappedNodes = tree.children.slice(start, end + 1);
        const wrapper: Html = {
          type: 'html',
          value: `<div data-lang="${lang}">`
        };
        const closeWrapper: Html = {
          type: 'html',
          value: '</div>'
        };

        tree.children.splice(start, end - start + 1, wrapper, ...wrappedNodes, closeWrapper);
      }
    });
  };
}
