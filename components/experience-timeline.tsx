import { ExperienceItem } from "@/lib/types";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="grid gap-6">
      {items.map((item) => (
        <article
          key={`${item.org}-${item.role}`}
          className="card-surface grid gap-6 rounded-[2rem] p-6 lg:grid-cols-[0.95fr_1.55fr]"
        >
          <div>
            <p className="eyebrow">{item.org}</p>
            <h3 className="mt-3 font-display text-2xl tracking-tight text-ink">{item.role}</h3>
            <p className="mt-2 text-sm text-muted">{item.dates}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{item.summary}</p>
          </div>
          <div>
            <ul className="space-y-3 text-sm leading-6 text-ink">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.impactMetrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
