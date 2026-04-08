import Link from "next/link";
import Footer from "@/components/Footer";

export default function InvestorsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="overline mb-4">INVESTOR RELATIONS</p>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-display-xl text-[#2D3748] mb-6">
            Investing in the Future of Energy
          </h1>
          <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl mx-auto mb-6">
            Access corporate materials, news releases, and financial data for Generation Uranium Inc. (TSX-V: GEN).
          </p>
          <div className="accent-line mx-auto" />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#F5F3ED] border-y border-[#E8E5DD]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "$4.2M", label: "MARKET CAP" },
            { value: "42.5M", label: "SHARES OUTSTANDING" },
            { value: "$0.8M", label: "CASH POSITION" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="stat-number text-3xl md:text-4xl mb-2">{stat.value}</p>
              <p className="text-xs font-semibold tracking-widest text-[#6B7B8D] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRESENTATIONS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-display-md text-[#2D3748] mb-10">
            Corporate Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Corporate Presentation", desc: "Company overview, project details, and investment thesis.", date: "March 2026", type: "PDF" },
              { title: "Fact Sheet", desc: "Key data points and project highlights at a glance.", date: "Q1 2026", type: "PDF" },
              { title: "Technical Report", desc: "NI 43-101 compliant technical report for the Yath Project.", date: "2025", type: "PDF" },
            ].map((doc) => (
              <div key={doc.title} className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F3ED] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#7CC842]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-[#6B7B8D] font-medium">{doc.type}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#2D3748] mb-1">{doc.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-3">{doc.desc}</p>
                <p className="text-xs text-[#6B7B8D]">{doc.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS RELEASES ── */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-display-md text-[#2D3748] mb-10">
            Recent News Releases
          </h2>
          <div className="space-y-4">
            {[
              { date: "Mar 15, 2026", title: "Generation Uranium Announces 2026 Exploration Program at Yath Project" },
              { date: "Feb 28, 2026", title: "Generation Uranium Reports Results from Geophysical Survey" },
              { date: "Jan 20, 2026", title: "Generation Uranium Closes $1.2M Private Placement" },
              { date: "Dec 12, 2025", title: "Generation Uranium Provides Corporate Update and 2026 Outlook" },
              { date: "Nov 05, 2025", title: "Generation Uranium Identifies New High-Priority Targets at Yath" },
            ].map((news) => (
              <div key={news.date} className="card p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-[#7CC842] whitespace-nowrap">{news.date}</span>
                  <h3 className="font-[family-name:var(--font-display)] font-medium text-[#2D3748] text-sm">{news.title}</h3>
                </div>
                <Link href="/news" className="flex-shrink-0 text-sm font-semibold text-[#7CC842] hover:underline">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STOCK CHART PLACEHOLDER ── */}
      <section className="bg-[#F5F3ED] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-display-sm text-[#2D3748] mb-2">
            TSX-V: GEN
          </h2>
          <p className="text-sm text-[#6B7B8D] mb-8">Interactive stock chart</p>
          <div className="bg-white rounded-2xl border border-[#E8E5DD] aspect-[16/6] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-[#D0CDC5] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <p className="text-sm text-[#6B7B8D]">Stock Chart Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
