import type { Metadata } from "next";
import Link from "next/link";

import { CaseStudyHero } from "@/components/case-study-hero";
import { SectionShell } from "@/components/section-shell";
import { caseStudies } from "@/lib/content";
import { CaseStudy } from "@/lib/types";

function getStudy(): CaseStudy {
  const study = caseStudies.find((entry) => entry.slug === "nrsaa");

  if (!study) {
    throw new Error("NRSAA case study content is missing.");
  }

  return study;
}

const study = getStudy();

export const metadata: Metadata = {
  title: "NRSAA Case Study",
  description: study.description,
};

export default function NrsaaCaseStudyPage() {
  return (
    <main className="pb-20">
      <div className="section-frame pb-0 pt-8">
        <Link href="/" className="underline-link text-sm font-semibold text-ink">
          Back to portfolio
        </Link>
      </div>

      <CaseStudyHero study={study} />

      <SectionShell id="context" eyebrow="Context" title="Challenge and solution">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-surface rounded-[2rem] p-6">
            <p className="eyebrow">Challenge</p>
            <p className="mt-4 text-sm leading-7 text-muted">{study.challenge}</p>
          </article>
          <article className="card-surface rounded-[2rem] p-6">
            <p className="eyebrow">Solution</p>
            <p className="mt-4 text-sm leading-7 text-muted">{study.solution}</p>
          </article>
        </div>
      </SectionShell>

      <SectionShell id="narrative" eyebrow="Narrative" title="How the project takes shape">
        <div className="grid gap-6 lg:grid-cols-3">
          {study.sections.map((section) => (
            <article key={section.title} className="card-surface rounded-[2rem] p-6">
              <h2 className="font-display text-2xl tracking-tight text-ink">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="outcomes" eyebrow="Outcomes" title="Why it matters">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <article className="card-surface rounded-[2rem] p-6">
            <ul className="space-y-3 text-sm leading-6 text-ink">
              {study.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card-surface rounded-[2rem] p-6">
            <p className="eyebrow">Signals of credibility</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              {study.awards.map((award) => (
                <li key={award} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </SectionShell>
    </main>
  );
}
