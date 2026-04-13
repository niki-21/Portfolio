import Image from "next/image";
import Link from "next/link";

import { PrimaryButton } from "@/components/primary-button";
import { Profile, ProjectItem } from "@/lib/types";

type HeroProps = {
  profile: Profile;
  flagship: ProjectItem;
};

export function Hero({ profile, flagship }: HeroProps) {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="section-frame pt-12">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <p className="eyebrow">{profile.name}</p>
            <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[0.96] tracking-tight text-ink sm:text-7xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href={flagship.links.caseStudy ?? "#flagship"}>{profile.ctaText}</PrimaryButton>
              <PrimaryButton href={profile.githubUrl} variant="secondary" newTab>
                GitHub
              </PrimaryButton>
              <PrimaryButton href={profile.linkedInUrl} variant="secondary" newTab>
                LinkedIn
              </PrimaryButton>
              <PrimaryButton href={profile.resumeUrl} variant="secondary" newTab>
                Resume
              </PrimaryButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {profile.heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            {profile.publicNote ? (
              <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">{profile.publicNote}</p>
            ) : null}
          </div>

          <div className="grid gap-5">
            <aside className="card-surface overflow-hidden rounded-[2rem] p-3">
              <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(228,239,246,0.9),rgba(244,247,249,0.82))] p-4">
                <Image
                  src={profile.heroVisualSrc ?? profile.portraitSrc}
                  alt={profile.heroVisualAlt ?? "Portrait of Nikita Miller"}
                  width={750}
                  height={815}
                  className="h-[19rem] w-full rounded-[1.25rem] object-contain bg-white sm:h-[21rem] lg:h-[19rem]"
                />
              </div>
            </aside>

            <aside className="card-surface relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,141,194,0.14),transparent_48%)]" />
              <div className="relative">
                <p className="eyebrow">Featured now</p>
                <h2 className="mt-4 font-display text-3xl tracking-tight text-ink">{flagship.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{flagship.solution}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-ink">
                  {flagship.outcomes.slice(0, 3).map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                  {flagship.links.website ? (
                    <Link href={flagship.links.website} target="_blank" rel="noreferrer" className="underline-link">
                      NRSAA.com
                    </Link>
                  ) : null}
                  {flagship.links.linkedin ? (
                    <Link href={flagship.links.linkedin} target="_blank" rel="noreferrer" className="underline-link">
                      NRSAA LinkedIn
                    </Link>
                  ) : null}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
