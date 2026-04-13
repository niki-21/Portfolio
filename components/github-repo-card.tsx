import Link from "next/link";

import { GitHubRepoCardData } from "@/lib/types";
import { formatDateLabel } from "@/lib/utils";

type GitHubRepoCardProps = {
  repo: GitHubRepoCardData;
};

export function GitHubRepoCard({ repo }: GitHubRepoCardProps) {
  return (
    <article className="card-surface flex h-full flex-col rounded-[2rem] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{repo.source === "live" ? "Live GitHub data" : "Curated fallback"}</p>
          <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">{repo.name}</h3>
        </div>
        <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted">
          {repo.language}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">{repo.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {repo.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.16em]">Stars</p>
          <p className="mt-1 font-semibold text-ink">{repo.stars ?? "—"}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em]">Forks</p>
          <p className="mt-1 font-semibold text-ink">{repo.forks ?? "—"}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em]">Updated</p>
          <p className="mt-1 font-semibold text-ink">{formatDateLabel(repo.updatedAt)}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
        <Link href={repo.href} target="_blank" rel="noreferrer" className="underline-link">
          Open repo
        </Link>
        {repo.homepage ? (
          <Link href={repo.homepage} target="_blank" rel="noreferrer" className="underline-link">
            Visit project
          </Link>
        ) : null}
      </div>
    </article>
  );
}
