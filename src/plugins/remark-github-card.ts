import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Link, Html } from 'mdast';

const GITHUB_REPO_REGEX = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/;

interface GitHubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  owner: {
    avatar_url: string;
    login: string;
  };
}

const repoCache = new Map<string, GitHubRepo | null>();

async function fetchRepoData(owner: string, repo: string): Promise<GitHubRepo | null> {
  const cacheKey = `${owner}/${repo}`;
  if (repoCache.has(cacheKey)) {
    return repoCache.get(cacheKey) || null;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'astro-github-card'
      }
    });

    if (!response.ok) {
      repoCache.set(cacheKey, null);
      return null;
    }

    const data = await response.json() as GitHubRepo;
    repoCache.set(cacheKey, data);
    return data;
  } catch {
    repoCache.set(cacheKey, null);
    return null;
  }
}

function formatCount(count: number): string {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return count.toString();
}

function createRepoCard(repo: GitHubRepo): string {
  const description = repo.description
    ? repo.description.length > 100
      ? repo.description.slice(0, 100) + '...'
      : repo.description
    : 'No description provided';

  return `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="github-card">
  <div class="github-card-header">
    <svg class="github-card-icon" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
    </svg>
    <span class="github-card-name">${repo.full_name}</span>
  </div>
  <p class="github-card-desc">${description}</p>
  <div class="github-card-meta">
    ${repo.language ? `<span class="github-card-lang"><span class="github-card-lang-dot" data-lang="${repo.language}"></span>${repo.language}</span>` : ''}
    <span class="github-card-stat">
      <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
      ${formatCount(repo.stargazers_count)}
    </span>
    <span class="github-card-stat">
      <svg viewBox="0 0 16 16" fill="currentColor"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg>
      ${formatCount(repo.forks_count)}
    </span>
  </div>
</a>`;
}

function createFallbackCard(url: string, owner: string, repo: string): string {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="github-card">
  <div class="github-card-header">
    <svg class="github-card-icon" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
    </svg>
    <span class="github-card-name">${owner}/${repo}</span>
  </div>
</a>`;
}

export function remarkGithubCard() {
  return async (tree: Root) => {
    const promises: Promise<void>[] = [];

    visit(tree, 'paragraph', (node: Paragraph, index, parent) => {
      if (!parent || index === undefined) return;

      if (node.children.length === 1) {
        const child = node.children[0];
        let url: string | null = null;
        let match: RegExpMatchArray | null = null;

        // Case 1: Bare URL as text
        if (child.type === 'text') {
          url = (child as Text).value.trim();
          match = url.match(GITHUB_REPO_REGEX);
        }

        // Case 2: URL as link
        if (child.type === 'link') {
          url = (child as Link).url;
          match = url.match(GITHUB_REPO_REGEX);
        }

        if (match && url) {
          const [, owner, repo] = match;
          const promise = fetchRepoData(owner, repo).then((repoData) => {
            const html = repoData
              ? createRepoCard(repoData)
              : createFallbackCard(url!, owner, repo);
            (parent.children[index] as unknown as Html).type = 'html';
            (parent.children[index] as unknown as Html).value = html;
          });
          promises.push(promise);
        }
      }
    });

    await Promise.all(promises);
  };
}
