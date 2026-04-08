import Link from "next/link";

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
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,230,74,0.06)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(200,230,74,0.04)_0%,_transparent_50%)]" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
          {/* Overline */}
          <p
            className="font-mono text-gen-green text-xs tracking-[0.35em] mb-8 animate-fade-up"
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
            className="text-graphite text-lg md:text-xl max-w-[600px] leading-relaxed mb-8 animate-fade-up delay-200"
          >
            The complete visual identity system for Generation Uranium. Design tokens,
            presentation templates, and investor-grade collateral for the clean energy future.
          </p>

          {/* Accent line */}
          <div
            className="h-[2px] bg-gen-green animate-line-grow delay-300 glow-green-line"
          />
        </div>

        {/* Stats row */}
        <div className="relative z-10 px-6 pb-12">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`glass-dark rounded-xl px-6 py-5 text-center animate-fade-up`}
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <p className="stat-number text-2xl md:text-3xl mb-1">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#A0AEC0] uppercase">
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
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="mono-label mb-4">BRAND SYSTEM</p>
            <h2 className="font-display font-bold text-[#2D3748] text-display-md">
              Six chapters of visual identity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link
                key={s.num}
                href={s.href}
                className="group bg-[#F5F3ED] rounded-2xl p-7 card-hover relative overflow-hidden"
              >
                {/* Number */}
                <p className="font-mono text-gen-green text-sm mb-4 tracking-wider">
                  {s.num}
                </p>

                {/* Title */}
                <h3 className="font-display font-bold text-[#2D3748] text-xl mb-2 group-hover:text-gen-green transition-colors duration-300">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-graphite text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-gen-green/50 group-hover:text-gen-green transition-colors duration-300">
                  <span className="font-mono text-xs tracking-wider">EXPLORE</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ─── */}
      <div className="section-divider mx-6" />

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-white/[0.05] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-mono text-gen-green text-sm tracking-[0.15em]">
              GENERATION URANIUM
            </p>
            <p className="text-slate text-xs tracking-wide">
              TSX-V: GEN &nbsp;|&nbsp; OTCQB: GENRF &nbsp;|&nbsp; FRA: W85
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.03]">
            <p className="text-[#CBD5E0] text-xs">
              &copy; {new Date().getFullYear()} Generation Uranium Corp. Brand Style System.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
