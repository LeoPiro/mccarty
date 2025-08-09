import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "McCarty | Building & Development",
  description: "Modern construction and development portfolio.",
  openGraph: {
    title: "McCarty | Building & Development",
    description: "Modern construction and development portfolio.",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "McCarty OpenGraph" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "McCarty | Building & Development",
    description: "Modern construction and development portfolio.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen antialiased bg-neutral-200 text-neutral-900 font-sans">
        {children}
      </body>
    </html>
  );
}
