import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nikita Miller | ML Engineer Portfolio",
    template: "%s | Nikita Miller",
  },
  description:
    "A modern editorial-tech portfolio for Nikita Miller, featuring NRSAA, federated learning, applied ML projects, and live GitHub snapshots.",
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
