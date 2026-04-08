import Link from "next/link";
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon, TikTokIcon } from "@/components/SocialIcons";

/* ─── SECTION ICON SVGs ─── */
function FoundationIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="14" width="24" height="14" rx="2" /><path d="M8 14V10a8 8 0 0116 0v4" /><circle cx="16" cy="21" r="2" />
    </svg>
  );
}
function PresentationIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="26" height="18" rx="2" /><path d="M16 22v6M10 28h12" />
    </svg>
  );
}
function DataIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 28V18l6-4 6 8 6-12 6 6v12H4z" /><circle cx="10" cy="14" r="1.5" /><circle cx="16" cy="22" r="1.5" /><circle cx="22" cy="10" r="1.5" /><circle cx="28" cy="16" r="1.5" />
    </svg>
  );
}
function CollateralIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="3" width="20" height="26" rx="2" /><path d="M11 10h10M11 15h10M11 20h6" />
    </svg>
  );
}
function IconsIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" /><path d="M16 10v6l4 2" />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6l8 3 8-3 8 3v20l-8-3-8 3-8-3V6z" /><path d="M12 9v20M20 6v20" />
    </svg>
  );
}

const sectionIcons = [FoundationIcon, PresentationIcon, DataIcon, CollateralIcon, IconsIcon, MapIcon];

const stats = [
  { value: "25,000+", label: "Hectares" },
  { value: "$80/lb", label: "U\u2083O\u2088" },
  { value: "Thelon", label: "Basin" },
  { value: "TSX-V:", label: "GEN" },
];

const sections = [
  {
    num: "01",
    title: "Foundation",
    desc: "Colors, typography, spacing, and the design tokens that define every visual decision.",
    href: "/foundation",
  },
  {
    num: "02",
    title: "Presentation",
    desc: "Hero slides, statements, section dividers, and signature deck components at 16:9.",
    href: "/presentation",
  },
  {
    num: "03",
    title: "Data & Templates",
    desc: "Maps, charts, timelines, peer comparisons, drill results, and cross-sections.",
    href: "/data-templates",
  },
  {
    num: "04",
    title: "Collateral",
    desc: "One-pagers, social templates, email headers, conference banners, and web components.",
    href: "/collateral",
  },
  {
    num: "05",
    title: "Icons",
    desc: "30 purpose-built SVG icons across nuclear, exploration, data, corporate, and environment.",
    href: "/icons",
  },
  {
    num: "06",
    title: "Map Callouts",
    desc: "Property callout specimens, pin styles, and geographic annotation patterns.",
    href: "/data-templates#callout-library",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-between bg-white overflow-hidden">
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
          {/* Overline */}
          <p
            className="font-mono text-[#7CC842] text-xs tracking-[0.35em] uppercase mb-8 animate-fade-up"
          >
            GENERATION URANIUM
          </p>

          {/* Main headline */}
          <h1
            className="font-display font-bold text-[#2D3748] text-display-xl max-w-5xl mb-6 animate-fade-up delay-100"
          >
            Generating the Power of Tomorrow
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#6B7B8D] text-lg md:text-xl max-w-[600px] leading-relaxed mb-8 animate-fade-up delay-200"
          >
            The complete visual identity system for Generation Uranium. Design tokens,
            presentation templates, and investor-grade collateral for the clean energy future.
          </p>

          {/* Accent line */}
          <div
            className="h-[2px] bg-[#7CC842] animate-line-grow delay-300"
          />

          {/* Dual CTAs */}
          <div className="flex gap-4 mt-8 animate-fade-up delay-400">
            <Link
              href="/presentation"
              className="bg-[#7CC842] text-white font-display font-bold px-7 py-3 rounded-lg text-sm tracking-wide hover:bg-[#6AB835] transition-all duration-300"
            >
              View Presentation
            </Link>
            <Link
              href="/foundation"
              className="border border-[#E8E5DD] text-[#4A5568] font-display font-semibold px-7 py-3 rounded-lg text-sm tracking-wide hover:border-[#7CC842] hover:text-[#7CC842] transition-all duration-300"
            >
              Explore Foundation
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="relative z-10 px-6 pb-12 bg-[#F5F3ED]">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-white rounded-xl border border-[#E8E5DD] px-6 py-5 text-center animate-fade-up`}
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <p className="stat-number text-2xl md:text-3xl mb-1">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#6B7B8D] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ─── */}
      <div className="section-divider mx-6" />

      {/* ─── SECTION CARDS GRID ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="mono-label mb-4">BRAND SYSTEM</p>
            <h2 className="font-display font-bold text-[#2D3748] text-display-md">
              Six chapters of visual identity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s, idx) => {
              const SectionIcon = sectionIcons[idx];
              return (
                <Link
                  key={s.num}
                  href={s.href}
                  className="group bg-white rounded-2xl p-7 card-hover relative overflow-hidden"
                >
                  {/* Icon + Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <SectionIcon />
                    <p className="font-mono text-[#7CC842] text-sm tracking-wider">
                      {s.num}
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-[#2D3748] text-xl mb-2 group-hover:text-[#7CC842] transition-colors duration-300">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7B8D] text-sm leading-relaxed">
                    {s.desc}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-[#7CC842]/50 group-hover:text-[#7CC842] transition-colors duration-300">
                    <span className="font-mono text-xs tracking-wider">EXPLORE</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ─── */}
      <div className="section-divider mx-6" />

      {/* ─── WHY URANIUM ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="mono-label mb-4">INVESTMENT THESIS</p>
            <h2 className="font-display font-bold text-[#2D3748] text-display-md">
              Why Uranium Now
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Clean Energy Demand",
                desc: "Global nuclear capacity is expanding as nations commit to net-zero targets and energy security.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="20" cy="20" r="6" /><path d="M20 4v4M20 32v4M4 20h4M32 20h4M8.9 8.9l2.8 2.8M28.3 28.3l2.8 2.8M8.9 31.1l2.8-2.8M28.3 11.7l2.8-2.8" />
                  </svg>
                ),
              },
              {
                title: "Supply Deficit",
                desc: "Uranium production has lagged demand for years, creating a structural supply gap that supports higher prices.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 36V20l8-6 8 10 8-16 4 6v22H6z" /><path d="M6 36h28" />
                  </svg>
                ),
              },
              {
                title: "Strategic Jurisdiction",
                desc: "Canadian-focused assets in Tier-1 mining jurisdictions with established permitting frameworks.",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 4l-2 6h-6l5 4-2 6 5-4 5 4-2-6 5-4h-6L20 4z" /><circle cx="20" cy="28" r="8" /><path d="M16 28h8M20 24v8" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-7 card-hover group">
                <div className="mb-5">{card.icon}</div>
                <h3 className="font-display font-bold text-[#2D3748] text-lg mb-2 group-hover:text-[#7CC842] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-[#6B7B8D] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 px-6 bg-[#F5F3ED]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mono-label mb-4">GET STARTED</p>
          <h2 className="font-display font-bold text-[#2D3748] text-display-md mb-6">
            Ready to explore the brand system?
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/presentation"
              className="bg-[#7CC842] text-white font-display font-bold px-7 py-3 rounded-lg text-sm tracking-wide hover:bg-[#6AB835] transition-all duration-300"
            >
              View Presentation
            </Link>
            <Link
              href="/foundation"
              className="border border-[#E8E5DD] text-[#4A5568] font-display font-semibold px-7 py-3 rounded-lg text-sm tracking-wide hover:border-[#7CC842] hover:text-[#7CC842] transition-all duration-300"
            >
              Foundation
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#F5F3ED] border-t border-[#E8E5DD] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-mono text-[#7CC842] text-sm tracking-[0.15em]">
              GENERATION URANIUM
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><InstagramIcon className="w-5 h-5" /></a>
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><XIcon className="w-5 h-5" /></a>
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><YouTubeIcon className="w-5 h-5" /></a>
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><TikTokIcon className="w-5 h-5" /></a>
            </div>
            <p className="text-[#6B7B8D] text-xs tracking-wide">
              TSX-V: GEN &nbsp;|&nbsp; OTCQB: GENRF &nbsp;|&nbsp; FRA: W85
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#E8E5DD]">
            <p className="text-[#6B7B8D] text-xs">
              &copy; {new Date().getFullYear()} Generation Uranium Corp. Brand Style System.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
