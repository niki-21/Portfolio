import { PrimaryButton } from "@/components/primary-button";
import { MetricPill } from "@/components/metric-pill";
import { CaseStudy } from "@/lib/types";

type CaseStudyHeroProps = {
  study: CaseStudy;
};

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <header className="section-frame pt-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow">{study.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight text-ink sm:text-6xl">
            {study.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{study.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {study.heroLinks.map((link, index) => (
              <PrimaryButton
                key={link.href}
                href={link.href}
                newTab={link.href.startsWith("http") || link.href.startsWith("/assets")}
                variant={index === 0 ? "primary" : "secondary"}
              >
                {link.label}
              </PrimaryButton>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {study.metrics.slice(0, 4).map((metric) => (
            <MetricPill key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </header>
  );
}
