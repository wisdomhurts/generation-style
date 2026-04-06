import Link from "next/link";

const sections = [
  {
    title: "Foundation",
    desc: "Design tokens, color palette, and typography system",
    href: "/foundation",
    preview: (
      <div className="flex gap-2 mt-3">
        <div className="w-8 h-8 rounded bg-gen-dark" />
        <div className="w-8 h-8 rounded bg-gen-green" />
        <div className="w-8 h-8 rounded bg-logo-grey" />
        <div className="w-8 h-8 rounded bg-reactor-blue" />
        <div className="w-8 h-8 rounded bg-uranium-yellow" />
      </div>
    ),
  },
  {
    title: "Presentation",
    desc: "Investor deck slides and visual components",
    href: "/presentation",
    preview: (
      <div className="mt-3 aspect-video bg-gen-dark rounded-lg flex items-center justify-center p-3">
        <div className="text-center">
          <div className="text-[8px] text-gen-green tracking-widest">
            TSX-V: GEN
          </div>
          <div className="text-[10px] text-white font-display italic mt-1">
            Generating the Power of Tomorrow
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Data & Templates",
    desc: "Maps, charts, timelines, and data visualization",
    href: "/data-templates",
    preview: (
      <div className="mt-3 flex gap-1">
        {[65, 40, 80, 55, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gen-green/80"
            style={{ height: `${h * 0.4}px` }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Collateral",
    desc: "One-pagers, updates, social media, letterheads",
    href: "/collateral",
    preview: (
      <div className="mt-3 bg-gen-dark rounded-lg p-3">
        <div className="h-1.5 w-12 bg-gen-green rounded mb-1.5" />
        <div className="h-1 w-full bg-white/20 rounded mb-1" />
        <div className="h-1 w-3/4 bg-white/20 rounded mb-1" />
        <div className="h-1 w-5/6 bg-white/20 rounded" />
      </div>
    ),
  },
  {
    title: "Icons",
    desc: "30-icon SVG system across 5 categories",
    href: "/icons",
    preview: (
      <div className="mt-3 grid grid-cols-4 gap-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded bg-arctic-white flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="3" fill="#7CC842" />
              <ellipse
                cx="18"
                cy="18"
                rx="14"
                ry="6"
                stroke="#1A1A2E"
                strokeWidth="1.5"
                transform={`rotate(${i * 60} 18 18)`}
              />
            </svg>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "TSX-V: GEN",
    desc: "Visit Generation Uranium corporate website",
    href: "https://generationuranium.com",
    preview: (
      <div className="mt-3 text-gen-green text-xl font-bold tracking-wider">
        GEN ↗
      </div>
    ),
    external: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gen-dark text-white py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gen-green tracking-[0.3em] text-sm font-medium mb-6">
            GENERATION URANIUM · TSX-V: GEN
          </p>
          <h1 className="font-display italic text-6xl md:text-7xl lg:text-8xl font-normal leading-tight mb-6">
            Brand Style System
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            The complete visual identity system for Generation Uranium. Design
            tokens, presentation templates, data visualizations, marketing
            collateral, and icon library — built for clean energy investor
            communications.
          </p>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((s) =>
              s.external ? (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-gen-dark/10 rounded-2xl p-6 hover:border-gen-green/40 hover:shadow-lg transition-all"
                >
                  <h3 className="font-display italic text-2xl text-gen-dark group-hover:text-gen-green transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate text-sm mt-1">{s.desc}</p>
                  {s.preview}
                </a>
              ) : (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group border border-gen-dark/10 rounded-2xl p-6 hover:border-gen-green/40 hover:shadow-lg transition-all"
                >
                  <h3 className="font-display italic text-2xl text-gen-dark group-hover:text-gen-green transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate text-sm mt-1">{s.desc}</p>
                  {s.preview}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gen-dark text-white py-12 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-display italic text-xl">Generation Uranium</p>
            <p className="text-white/40 text-sm mt-1">
              Clean energy exploration
            </p>
          </div>
          <div className="text-right">
            <p className="text-gen-green font-bold tracking-wider text-sm">
              TSX-V: GEN
            </p>
            <p className="text-white/40 text-sm mt-1">Brand Style System</p>
          </div>
        </div>
      </footer>
    </>
  );
}
