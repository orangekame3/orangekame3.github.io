import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_BASE_DIR = path.resolve(
  process.env.HOME || "~",
  "src/github.com/orangekame3/vault"
);
const VAULT_BLOG_DIR = path.join(VAULT_BASE_DIR, "blog");
const VAULT_DAILY_DIR = path.join(VAULT_BASE_DIR, "daily");
const VAULT_ASSETS_DIR = path.join(VAULT_BASE_DIR, "assets");
const BLOG_CONTENT_DIR = path.resolve(__dirname, "../src/content/blog");
const DAILY_CONTENT_DIR = path.resolve(__dirname, "../src/content/daily");
const BLOG_IMAGES_DIR = path.resolve(__dirname, "../public/images/vault");

function parseFrontmatter(content: string): {
  rawFrontmatter: string;
  hasPublish: boolean;
  body: string;
} {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { rawFrontmatter: "", hasPublish: false, body: content };
  }

  const yamlContent = match[1];
  const body = match[2];

  // Check if publish: true
  const hasPublish = /^publish:\s*true\s*$/m.test(yamlContent);

  // Remove publish field from frontmatter
  const cleanedYaml = yamlContent
    .split("\n")
    .filter(line => !line.match(/^publish:\s*/))
    .join("\n");

  return { rawFrontmatter: cleanedYaml, hasPublish, body };
}

function generateAstroFrontmatter(rawYaml: string): string {
  return `---\n${rawYaml}\n---`;
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

function importContent(
  sourceDir: string,
  destDir: string,
  label: string
): { imported: number; skipped: number } {
  console.log(`\n[${label}]`);

  if (!fs.existsSync(sourceDir)) {
    console.log(`  Directory not found: ${sourceDir}`);
    return { imported: 0, skipped: 0 };
  }

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith(".md"));
  let imported = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(sourceDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { rawFrontmatter, hasPublish, body } = parseFrontmatter(content);

    if (!hasPublish) {
      console.log(`  Skipped (publish: false): ${file}`);
      skipped++;
      continue;
    }

    const copiedImages = new Set<string>();
    let processedBody = extractAndConvertImages(body, copiedImages);
    processedBody = convertWikiLinks(processedBody);

    const slug = generateSlug(file);
    const newFrontmatter = generateAstroFrontmatter(rawFrontmatter);
    const newContent = newFrontmatter + "\n" + processedBody;

    const destPath = path.join(destDir, `${slug}.md`);
    fs.writeFileSync(destPath, newContent);
    console.log(`  Imported: ${file} -> ${slug}.md`);

    if (copiedImages.size > 0) {
      copyImages(copiedImages);
    }

    imported++;
  }

  return { imported, skipped };
}

function main(): void {
  console.log("Importing from Obsidian Vault...");

  const blogResult = importContent(VAULT_BLOG_DIR, BLOG_CONTENT_DIR, "Blog");
  const dailyResult = importContent(VAULT_DAILY_DIR, DAILY_CONTENT_DIR, "Daily");

  const totalImported = blogResult.imported + dailyResult.imported;
  const totalSkipped = blogResult.skipped + dailyResult.skipped;

  console.log(`\nDone!`);
  console.log(`  Blog:  ${blogResult.imported} imported, ${blogResult.skipped} skipped`);
  console.log(`  Daily: ${dailyResult.imported} imported, ${dailyResult.skipped} skipped`);
  console.log(`  Total: ${totalImported} imported, ${totalSkipped} skipped`);
}

main();
