import type { Metadata } from "next";
import { Outfit, Inter, Manrope } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import { StockTicker } from "@/components/StockTicker";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${outfit.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="noise-overlay min-h-full flex flex-col bg-gen-dark text-warm-sand">
        <SiteNav />
        <div className="fixed top-16 left-0 right-0 z-40">
          <StockTicker />
        </div>
        <main className="flex-1 pt-[104px]">{children}</main>
      </body>
    </html>
  );
}
