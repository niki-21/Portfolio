import Image from "next/image";
import Link from "next/link";

import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { MetricPill } from "@/components/metric-pill";
import { PrimaryButton } from "@/components/primary-button";
import { ProjectCard } from "@/components/project-card";
import { SectionReveal } from "@/components/section-reveal";
import { SectionShell } from "@/components/section-shell";
import { SiteNav } from "@/components/site-nav";
import {
  caseStudies,
  contactLinks,
  experienceItems,
  flagshipMetrics,
  navItems,
  profile,
  projects,
  skillGroups,
  summaryMetrics,
  summaryParagraphs,
} from "@/lib/content";

export default async function HomePage() {
  const flagship = projects.find((project) => project.slug === "nrsaa");

  if (!flagship) {
    throw new Error("Flagship project is missing.");
  }

  const nrsaaStudy = caseStudies.find((study) => study.slug === "nrsaa");

  if (!nrsaaStudy) {
    throw new Error("NRSAA case study is missing.");
  }

  return (
    <main className="pb-20">
      <SiteNav
        items={navItems}
        resumeUrl={profile.resumeUrl}
        githubUrl={profile.githubUrl}
        linkedInUrl={profile.linkedInUrl}
      />
      <Hero profile={profile} flagship={flagship} />

      <SectionReveal>
        <SectionShell
          id="summary"
          eyebrow="Summary"
          title="Human-centered work starts with detail, clarity, and a reason to matter."
          intro="I’m most interested in systems that can feel complex in the backend and simple in real life, especially when they affect safety, accessibility, or everyday decision making."
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5 text-base leading-8 text-muted">
              {summaryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {summaryMetrics.map((metric) => (
                <MetricPill key={metric.label} metric={metric} />
              ))}
            </div>
          </div>
        </SectionShell>
      </SectionReveal>

      <SectionReveal>
        <SectionShell
          id="flagship"
          eyebrow="Flagship NRSAA"
          title="The project that best represents what I care about building."
          intro="NRSAA brings together healthcare impact, predictive systems, public-facing storytelling, and the kind of detail that makes a product feel credible."
        >
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="card-surface rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm leading-7 text-muted">{nrsaaStudy.challenge}</p>
              <p className="mt-6 text-sm leading-7 text-muted">{nrsaaStudy.solution}</p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-ink">
                {nrsaaStudy.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/case-studies/nrsaa">Read the full case study</PrimaryButton>
                <PrimaryButton
                  href={flagship.links.website ?? profile.linkedInUrl}
                  variant="secondary"
                  newTab
                >
                  Visit NRSAA.com
                </PrimaryButton>
                <PrimaryButton
                  href={flagship.links.linkedin ?? profile.linkedInUrl}
                  variant="secondary"
                  newTab
                >
                  NRSAA LinkedIn
                </PrimaryButton>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {flagshipMetrics.map((metric) => (
                  <MetricPill key={metric.label} metric={metric} />
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-1">
                {nrsaaStudy.media.slice(0, 2).map((asset) => (
                  <figure key={asset.src} className="card-surface overflow-hidden rounded-[1.75rem] p-3">
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      width={asset.width}
                      height={asset.height}
                      className="h-auto w-full rounded-[1.25rem] border border-line/70 object-cover"
                    />
                    <figcaption className="px-1 pt-4 text-sm leading-6 text-muted">
                      {asset.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>
      </SectionReveal>

      <SectionReveal>
        <SectionShell
          id="experience"
          eyebrow="Selected Experience"
          title="A through-line of ownership across healthcare, graduate study, and early product building."
          intro="These snapshots are short on purpose: enough to show how I think, what I care about, and where I’m investing my energy now."
        >
          <ExperienceTimeline items={experienceItems} />
        </SectionShell>
      </SectionReveal>

      <SectionReveal>
        <SectionShell
          id="projects"
          eyebrow="Featured Projects"
          title="The work I want this site to be known for."
          intro="These projects show the mix I care about most: human impact, technical depth, and products that feel understandable outside a lab or competition room."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </SectionShell>
      </SectionReveal>

      <SectionReveal>
        <SectionShell
          id="skills"
          eyebrow="Skills"
          title="The blend behind the work: machine learning, systems thinking, and product empathy."
          intro="I think of skills less as a checklist and more as the habits and lenses that shape what I build."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <article key={group.label} className="card-surface rounded-[2rem] p-6">
                <h3 className="font-display text-2xl tracking-tight text-ink">{group.label}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionShell>
      </SectionReveal>

      <SectionReveal>
        <SectionShell
          id="contact"
          eyebrow="Contact"
          title="Open to conversations, collaborations, and high-impact ideas."
          intro="If you’re building thoughtful technology, exploring health-tech, or just want to connect over product-minded ML work, I’d love to hear from you."
        >
          <div className="card-surface rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="max-w-2xl text-lg leading-8 text-muted">
                  I’m especially interested in work that improves how people move through healthcare, technology, and everyday decision making. If that overlaps with what you’re building, let’s connect.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {contactLinks.map((link, index) => (
                    <PrimaryButton
                      key={link.href}
                      href={link.href}
                      newTab
                      variant={index === 0 ? "primary" : "secondary"}
                    >
                      {link.label}
                    </PrimaryButton>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-line bg-white/70 p-5">
                <p className="eyebrow">Quick links</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-ink">
                  <li>
                    <Link href={profile.githubUrl} target="_blank" rel="noreferrer" className="underline-link">
                      {profile.githubUrl.replace("https://", "")}
                    </Link>
                  </li>
                  <li>
                    <Link href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="underline-link">
                      LinkedIn profile
                    </Link>
                  </li>
                  <li>
                    <Link href={profile.email} className="underline-link">
                      nikimiller1221@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SectionShell>
      </SectionReveal>
    </main>
  );
}
