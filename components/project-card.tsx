import Link from "next/link";

import { ProjectItem } from "@/lib/types";

type ProjectCardProps = {
  project: ProjectItem;
};

const linkLabels: Record<string, string> = {
  repo: "Repository",
  website: "Website",
  linkedin: "LinkedIn",
  demo: "Live demo",
  paper: "Paper",
  competition: "Competition",
  article: "Article",
  caseStudy: "Case study",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const links = Object.entries(project.links).filter(([, href]) => Boolean(href));

  return (
    <article className="card-surface group flex h-full flex-col rounded-[2rem] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{project.highlight}</p>
          <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">{project.title}</h3>
        </div>
        <p className="text-sm text-muted">{project.dates}</p>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">{project.motivation}</p>

      <div className="mt-6 space-y-4 text-sm leading-6 text-muted">
        <p>
          <span className="font-semibold text-ink">Challenge:</span> {project.challenge}
        </p>
        <p>
          <span className="font-semibold text-ink">Solution:</span> {project.solution}
        </p>
      </div>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-ink">
        {project.outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted"
          >
            {item}
          </span>
        ))}
      </div>

      {links.length ? (
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-ink">
          {links.map(([key, href]) => (
            <Link
              key={key}
              href={href as string}
              target={(href as string).startsWith("http") ? "_blank" : undefined}
              rel={(href as string).startsWith("http") ? "noreferrer" : undefined}
              className="underline-link"
            >
              {linkLabels[key]}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}
