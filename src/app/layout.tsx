import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Generation Uranium — TSX-V: GEN",
  description:
    "Pioneering uranium exploration in the Thelon Basin, Nunavut. Generation Uranium Inc. (TSX-V: GEN | OTCQB: GENRF | FRA: W85).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#2D3748]">
        <SiteNav />
        <div className="fixed top-16 left-0 right-0 z-40">
          <StockTicker />
        </div>
        <main className="flex-1 pt-[104px]">{children}</main>
      </body>
    </html>
  );
}
