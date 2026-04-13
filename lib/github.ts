import { CuratedRepo, GitHubRepoCardData } from "@/lib/types";

type GitHubApiRepo = {
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  homepage: string | null;
  updated_at: string;
  topics?: string[];
};

function toFallback(repo: CuratedRepo): GitHubRepoCardData {
  return {
    ...repo,
    source: "fallback",
  };
}

async function fetchRepo(repo: CuratedRepo): Promise<GitHubRepoCardData> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "nikita-miller-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}`, {
      headers,
      signal: AbortSignal.timeout(1500),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return toFallback(repo);
    }

    const data = (await response.json()) as GitHubApiRepo;

    return {
      ...repo,
      description: data.description ?? repo.description,
      language: data.language ?? repo.language,
      href: data.html_url ?? repo.href,
      homepage: data.homepage || repo.homepage,
      topics: data.topics?.length ? data.topics : repo.topics,
      stars: data.stargazers_count,
      forks: data.forks_count,
      updatedAt: data.updated_at,
      source: "live",
    };
  } catch {
    return toFallback(repo);
  }
}

export async function getCuratedRepos(repos: CuratedRepo[]) {
  return Promise.all(repos.map(fetchRepo));
}
