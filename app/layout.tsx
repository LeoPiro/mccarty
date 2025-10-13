import type { Metadata } from "next";
import { Playfair_Display, Lato, Montserrat } from "next/font/google";
import "./globals.css";

// Font configurations
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "McCarty | Building & Development",
  description: "Modern construction and development portfolio.",
  icons: {
    icon: [
      { url: "/mccarty-logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/mccarty-logo.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: "/mccarty-logo.jpg",
    shortcut: "/mccarty-logo.jpg",
  },
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
    <html lang="en" className={`h-full ${playfair.variable} ${lato.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/mccarty-logo.jpg" />
        <link rel="shortcut icon" href="/mccarty-logo.jpg" />
        <link rel="apple-touch-icon" href="/mccarty-logo.jpg" />
      </head>
      <body className="min-h-screen antialiased bg-mccarty-light text-mccarty-dark">
        {children}
      </body>
    </html>
  );
}
