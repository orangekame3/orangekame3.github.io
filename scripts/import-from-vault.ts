import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_BLOG_DIR = path.resolve(
  process.env.HOME || "~",
  "src/github.com/orangekame3/vault/blog"
);
const VAULT_ASSETS_DIR = path.resolve(
  process.env.HOME || "~",
  "src/github.com/orangekame3/vault/assets"
);
const BLOG_CONTENT_DIR = path.resolve(__dirname, "../src/content/blog");
const BLOG_IMAGES_DIR = path.resolve(__dirname, "../public/images/vault");

interface Frontmatter {
  title?: string;
  description?: string;
  date?: string;
  lang?: "en" | "ja";
  tags?: string[];
  publish?: boolean;
  draft?: boolean;
  [key: string]: unknown;
}

function parseFrontmatter(content: string): {
  frontmatter: Frontmatter;
  body: string;
} {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const yamlContent = match[1];
  const body = match[2];
  const frontmatter: Frontmatter = {};

  for (const line of yamlContent.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (value === "true") {
      frontmatter[key] = true;
    } else if (value === "false") {
      frontmatter[key] = false;
    } else if (value.startsWith("[") && value.endsWith("]")) {
      frontmatter[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    } else {
      frontmatter[key] = value;
    }
  }

  return { frontmatter, body };
}

function generateAstroFrontmatter(fm: Frontmatter): string {
  const lines = ["---"];
  lines.push(`title: "${fm.title || "Untitled"}"`);
  lines.push(`description: "${fm.description || ""}"`);
  lines.push(`date: ${fm.date || new Date().toISOString().split("T")[0]}`);
  lines.push(`lang: ${fm.lang || "ja"}`);
  lines.push(`draft: ${fm.draft ?? false}`);
  lines.push("---");
  return lines.join("\n");
}

function convertWikiLinks(content: string): string {
  // [[link|display]] -> display
  content = content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2");
  // [[link]] -> link
  content = content.replace(/\[\[([^\]]+)\]\]/g, "$1");
  return content;
}

function extractAndConvertImages(
  content: string,
  copiedImages: Set<string>
): string {
  const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"];

  // ![[image.png]] -> ![image](/images/vault/image.png)
  content = content.replace(/!\[\[([^\]]+)\]\]/g, (match, filename) => {
    const ext = path.extname(filename).toLowerCase();
    if (imageExtensions.includes(ext)) {
      copiedImages.add(filename);
      const name = path.basename(filename, ext);
      return `![${name}](/images/vault/${filename})`;
    }
    // Non-image embeds: remove
    return "";
  });

  return content;
}

function copyImages(images: Set<string>): void {
  if (!fs.existsSync(BLOG_IMAGES_DIR)) {
    fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });
  }

  for (const image of images) {
    const srcPath = path.join(VAULT_ASSETS_DIR, image);
    const destPath = path.join(BLOG_IMAGES_DIR, image);

    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`  Copied: ${image}`);
    } else {
      console.warn(`  Warning: Image not found: ${srcPath}`);
    }
  }
}

function generateSlug(filename: string): string {
  const name = path.basename(filename, ".md");
  return name.replace(/\s+/g, "-");
}

function main(): void {
  console.log("Importing from Obsidian Vault...\n");

  if (!fs.existsSync(VAULT_BLOG_DIR)) {
    console.error(`Error: Vault blog directory not found: ${VAULT_BLOG_DIR}`);
    process.exit(1);
  }

  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    fs.mkdirSync(BLOG_CONTENT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(VAULT_BLOG_DIR).filter((f) => f.endsWith(".md"));
  let imported = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(VAULT_BLOG_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { frontmatter, body } = parseFrontmatter(content);

    if (!frontmatter.publish) {
      console.log(`Skipped (publish: false): ${file}`);
      skipped++;
      continue;
    }

    const copiedImages = new Set<string>();
    let processedBody = convertWikiLinks(body);
    processedBody = extractAndConvertImages(processedBody, copiedImages);

    const slug = generateSlug(file);
    const newFrontmatter = generateAstroFrontmatter(frontmatter);
    const newContent = newFrontmatter + "\n" + processedBody;

    const destPath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);
    fs.writeFileSync(destPath, newContent);
    console.log(`Imported: ${file} -> ${slug}.md`);

    if (copiedImages.size > 0) {
      copyImages(copiedImages);
    }

    imported++;
  }

  console.log(`\nDone! Imported: ${imported}, Skipped: ${skipped}`);
}

main();
