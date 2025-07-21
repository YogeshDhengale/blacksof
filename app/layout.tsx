import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/floating-navbar";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supreme Group",
  description: "A modern, performant frontend implementation of the Supreme Group website built with Next.js, featuring pixel-perfect design adherence, smooth animations, and comprehensive accessibility support.",
  keywords: "Modern, Animated website, blacksof, design adherence, smooth animations, comprehensive accessibility",
  openGraph: {
    type: "website",
    locale: "en-IN",
    url: "https://blacksof-sigma.vercel.app/",
    siteName: "blacksof assessment",
    images: [
      {
        url: "https://blacksof-sigma.vercel.app/web-app-manifest-192x192.png",
        width: 600,
        height: 300,
        alt: "blacksof"
      }
    ]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", manrope.variable)}
      >
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
