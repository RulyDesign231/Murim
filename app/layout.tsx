import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murim · A Life Unwritten",
  description: "Live a martial lifetime. Discover hidden arts and leave a legacy.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

