import Link from "next/link";
import { ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  newTab?: boolean;
};

const styles = {
  primary:
    "border-accent bg-accent text-white hover:bg-ink hover:border-ink",
  secondary:
    "border-line bg-white/70 text-ink hover:border-accent hover:text-accent",
  ghost:
    "border-transparent bg-transparent text-ink hover:border-line hover:bg-white/60",
};

export function PrimaryButton({
  href,
  children,
  variant = "primary",
  newTab = false,
}: PrimaryButtonProps) {
  const external = newTab || href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.14em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${styles[variant]}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="text-base">
        ↗
      </span>
    </Link>
  );
}
