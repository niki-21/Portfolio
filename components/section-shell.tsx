import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, intro, children }: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="section-frame">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{intro}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
