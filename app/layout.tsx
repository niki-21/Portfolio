import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nikita Miller | AI Engineer | End-to-End ML Pipelines",
    template: "%s | Nikita Miller",
  },
  description:
    "Nikita Miller is an AI engineer building end-to-end pipelines and products. Explore AllerNav, distributed learning, MLOps, and applied AI projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
