import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-label",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getqdine.com'),
  title: {
    default: "Qdine — The World's #1 Intelligent Restaurant Management System",
    template: "%s | Qdine",
  },
  description: "Qdine is the world's most intelligent restaurant management platform. AI-powered table management, inventory, digital menus, and analytics — all in one beautiful system.",
  keywords: [
    "restaurant management system",
    "POS",
    "restaurant POS",
    "AI restaurant software",
    "table management",
    "digital menu",
    "restaurant inventory",
    "QR code menu"
  ],
  openGraph: {
    title: "Qdine — Intelligent Restaurant Management",
    description: "AI-powered table management, inventory, digital menus, and analytics — all in one beautiful system.",
    url: "https://www.getqdine.com",
    siteName: "Qdine",
    images: [
      {
        url: "/images/hero-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Qdine Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qdine — Intelligent Restaurant Management",
    description: "AI-powered table management, inventory, digital menus, and analytics — all in one beautiful system.",
    images: ["/images/hero-dashboard.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}
