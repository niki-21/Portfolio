"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { NavItem } from "@/lib/types";

type SiteNavProps = {
  items: NavItem[];
  resumeUrl: string;
  githubUrl: string;
  linkedInUrl: string;
};

export function SiteNav({ items, resumeUrl, githubUrl, linkedInUrl }: SiteNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? "hero");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-0 z-50 border-b border-line/80 bg-[rgba(245,242,236,0.82)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="font-display text-lg tracking-[0.16em] text-ink">
          NM
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-line/80 bg-white/70 p-1 lg:flex">
          {items.map((item) => {
            const isActive = active === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  isActive ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-accent hover:text-accent"
          >
            GitHub
          </Link>
          <Link
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-accent hover:text-accent"
          >
            LinkedIn
          </Link>
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-accent hover:text-accent"
          >
            Resume
          </Link>
        </div>
      </div>
      <div className="scrollbar-none overflow-x-auto px-4 pb-4 lg:hidden">
        <div className="flex min-w-max items-center gap-2">
          {items.map((item) => {
            const isActive = active === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                  isActive
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-white/70 text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
