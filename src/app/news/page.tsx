"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

const categories = ["All", "News Releases", "Media"];

const newsItems = [
  {
    date: "Mar 15, 2026",
    category: "News Releases",
    title: "Generation Uranium Announces 2026 Exploration Program at Yath Project",
    excerpt: "Company plans systematic geophysical surveys and diamond drilling at high-priority targets identified in the Thelon Basin.",
  },
  {
    date: "Feb 28, 2026",
    category: "News Releases",
    title: "Generation Uranium Reports Results from Geophysical Survey",
    excerpt: "Airborne electromagnetic survey identifies multiple conductive anomalies consistent with unconformity-style uranium targets.",
  },
  {
    date: "Jan 20, 2026",
    category: "News Releases",
    title: "Generation Uranium Closes $1.2M Private Placement",
    excerpt: "Proceeds to fund upcoming exploration program and general corporate purposes at the Yath Uranium Project.",
  },
  {
    date: "Dec 12, 2025",
    category: "Media",
    title: "CEO Anthony Fiorilli Discusses Uranium Market Outlook",
    excerpt: "In an exclusive interview, CEO Anthony Fiorilli shares his perspective on the growing nuclear energy renaissance and its implications.",
  },
  {
    date: "Nov 05, 2025",
    category: "News Releases",
    title: "Generation Uranium Identifies New High-Priority Targets at Yath",
    excerpt: "Compilation of historical data and modern analysis reveals previously unrecognized exploration targets within the project area.",
  },
  {
    date: "Oct 18, 2025",
    category: "Media",
    title: "Thelon Basin: Canada's Next Uranium Frontier",
    excerpt: "Feature article explores the geological potential of the Thelon Basin and Generation Uranium's strategic position in the district.",
  },
];

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? newsItems
    : newsItems.filter(n => n.category === activeFilter);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="overline mb-4">NEWSROOM</p>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-display-xl text-[#2D3748] mb-6">
            Latest Updates
          </h1>
          <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl mx-auto">
            Stay up to date with the latest news, press releases, and media coverage from Generation Uranium.
          </p>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? "bg-[#7CC842] text-white"
                    : "bg-[#F5F3ED] text-[#4A5568] hover:text-[#7CC842]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div key={i} className="card overflow-hidden">
                {/* Image placeholder */}
                <div className="h-[100px] bg-[#F5F3ED] flex items-center justify-center border-b border-[#E8E5DD]">
                  <svg className="w-10 h-10 text-[#D0CDC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-[#7CC842] mb-2">{item.date}</p>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#2D3748] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-4">{item.excerpt}</p>
                  <Link href="#" className="text-sm font-semibold text-[#7CC842] hover:underline">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
