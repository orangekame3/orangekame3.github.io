import fs from 'node:fs/promises';
import path from 'node:path';

import { projects } from '../src/data/projects.ts';
import { githubStars } from '../src/data/projectStars.ts';

type Repo = `${string}/${string}`;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const fetchRepoStars = async (repo: Repo, token?: string): Promise<number> => {
  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GitHub API error for ${repo}: ${res.status} ${res.statusText} ${text}`.trim());
  }

  const json = (await res.json()) as { stargazers_count?: number };
  if (typeof json.stargazers_count !== 'number') {
    throw new Error(`Unexpected response for ${repo}: missing stargazers_count`);
  }
  return json.stargazers_count;
};

const main = async () => {
  const repos = Array.from(
    new Set(projects.flatMap((p) => (p.repo ? [p.repo] : []))),
  ).sort();

  const token = process.env.GITHUB_TOKEN;
  const next: Record<string, number | null> = { ...githubStars };

  for (const repo of repos) {
    try {
      const stars = await fetchRepoStars(repo as Repo, token);
      next[repo] = stars;
      // Be gentle to avoid hitting rate limits without a token.
      if (!token) await sleep(250);
      // eslint-disable-next-line no-console
      console.log(`${repo}: ${stars}`);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(String(e));
    }
  }

  const keys = Object.keys(next).sort();
  const output =
    `export const githubStars: Record<string, number | null> = {\n` +
    keys.map((k) => `  '${k}': ${next[k] === null ? 'null' : next[k]},\n`).join('') +
    `};\n`;

  const outPath = path.join(process.cwd(), 'src/data/projectStars.ts');
  await fs.writeFile(outPath, output, 'utf8');
};

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});
