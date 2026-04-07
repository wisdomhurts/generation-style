import type { Metadata } from "next";
import { Outfit, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Generation Style — Brand System",
  description:
    "Brand style system for Generation Uranium (TSX-V: GEN). Design tokens, presentation templates, data layouts, collateral, and icon library for clean energy investor communications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="noise-overlay min-h-full flex flex-col bg-gen-dark text-warm-sand">
        <SiteNav />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
