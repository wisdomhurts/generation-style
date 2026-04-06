const coreTokens = [
  {
    name: "Gen Dark",
    hex: "#1A1A2E",
    bg: "bg-gen-dark",
    text: "text-white",
    usage: "Primary dark backgrounds, hero sections, navigation bars, section dividers",
  },
  {
    name: "Gen Green",
    hex: "#7CC842",
    bg: "bg-gen-green",
    text: "text-gen-dark",
    usage: "Primary accent — overlines, CTAs, highlights, status indicators, data emphasis",
  },
  {
    name: "Logo Grey",
    hex: "#4A5568",
    bg: "bg-logo-grey",
    text: "text-white",
    usage: "Secondary text, subheadings, supporting copy, icon defaults",
  },
  {
    name: "Clean White",
    hex: "#FFFFFF",
    bg: "bg-clean-white",
    text: "text-gen-dark",
    usage: "Primary light background, content sections, cards, statement slides",
    border: true,
  },
  {
    name: "Slate",
    hex: "#6B7B8D",
    bg: "bg-slate",
    text: "text-white",
    usage: "Body text, captions, metadata, secondary information",
  },
];

const extendedTokens = [
  {
    name: "Reactor Blue",
    hex: "#2563EB",
    bg: "bg-reactor-blue",
    text: "text-white",
    usage: "Charts, links, interactive elements",
  },
  {
    name: "Tundra Green",
    hex: "#3D6B4F",
    bg: "bg-tundra-green",
    text: "text-white",
    usage: "Environmental themes, secondary green",
  },
  {
    name: "Uranium Yellow",
    hex: "#EAB308",
    bg: "bg-uranium-yellow",
    text: "text-gen-dark",
    usage: "Warnings, uranium pricing, highlight callouts",
  },
  {
    name: "Arctic White",
    hex: "#F8FAFC",
    bg: "bg-arctic-white",
    text: "text-gen-dark",
    usage: "Subtle backgrounds, alternate row shading, card backgrounds",
  },
  {
    name: "Granite",
    hex: "#374151",
    bg: "bg-granite",
    text: "text-white",
    usage: "Dark text, headings on light backgrounds",
  },
  {
    name: "Aurora Teal",
    hex: "#0D9488",
    bg: "bg-aurora-teal",
    text: "text-white",
    usage: "Data visualization accent, environmental data, secondary CTA",
  },
  {
    name: "Permafrost Blue",
    hex: "#93C5FD",
    bg: "bg-permafrost-blue",
    text: "text-gen-dark",
    usage: "Light accent, backgrounds, secondary charts",
  },
];

export default function FoundationPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-gen-green tracking-[0.2em] text-sm font-medium mb-3">
            FOUNDATION
          </p>
          <h1 className="font-display italic text-5xl md:text-6xl text-gen-dark mb-4">
            Design Tokens
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            The foundational color palette, typography system, and design tokens
            that define the Generation Uranium visual identity.
          </p>
        </div>

        {/* Core Tokens */}
        <section id="design-tokens" className="scroll-mt-20 mb-24">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Core Palette
          </h2>
          <p className="text-slate mb-8">
            Five primary tokens that form the backbone of every layout.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTokens.map((token) => (
              <div
                key={token.name}
                className={`rounded-2xl overflow-hidden ${token.border ? "border border-gen-dark/10" : ""}`}
              >
                <div
                  className={`${token.bg} ${token.text} h-36 flex items-end p-5`}
                >
                  <div>
                    <p className="text-xl font-semibold">{token.name}</p>
                    <p className="opacity-70 text-sm font-mono">{token.hex}</p>
                  </div>
                </div>
                <div className="p-5 bg-arctic-white">
                  <p className="text-sm text-slate leading-relaxed">
                    {token.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Extended Palette */}
        <section id="extended-palette" className="scroll-mt-20 mb-24">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Extended Palette
          </h2>
          <p className="text-slate mb-8">
            Supporting colors for data visualization, environmental themes, and
            interactive elements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {extendedTokens.map((token) => (
              <div key={token.name} className="rounded-2xl overflow-hidden">
                <div
                  className={`${token.bg} ${token.text} h-28 flex items-end p-4`}
                >
                  <div>
                    <p className="text-lg font-semibold">{token.name}</p>
                    <p className="opacity-70 text-xs font-mono">{token.hex}</p>
                  </div>
                </div>
                <div className="p-4 bg-arctic-white">
                  <p className="text-sm text-slate leading-relaxed">
                    {token.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section id="typography" className="scroll-mt-20 mb-24">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Typography
          </h2>
          <p className="text-slate mb-12">
            Two-font system: Cormorant Garamond italic for display, Inter for
            body.
          </p>

          {/* Display Font */}
          <div className="mb-16">
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="text-sm font-bold text-gen-green tracking-wider uppercase">
                Display — Cormorant Garamond Italic
              </h3>
            </div>
            <div className="space-y-6 border-l-2 border-gen-green/30 pl-8">
              <div>
                <p className="text-xs text-slate mb-1 font-mono">
                  56px / Hero Title
                </p>
                <p className="font-display italic text-[56px] leading-tight text-gen-dark">
                  Generating the Power of Tomorrow
                </p>
              </div>
              <div>
                <p className="text-xs text-slate mb-1 font-mono">
                  40px / Section Title
                </p>
                <p className="font-display italic text-[40px] leading-tight text-gen-dark">
                  Yukon&rsquo;s Premier Uranium District
                </p>
              </div>
              <div>
                <p className="text-xs text-slate mb-1 font-mono">
                  28px / Subsection
                </p>
                <p className="font-display italic text-[28px] leading-snug text-gen-dark">
                  Strategic Land Position in the Athabasca Basin
                </p>
              </div>
              <div>
                <p className="text-xs text-slate mb-1 font-mono">
                  20px / Card Title
                </p>
                <p className="font-display italic text-[20px] leading-snug text-gen-dark">
                  Next-Generation Clean Energy Exploration
                </p>
              </div>
            </div>
          </div>

          {/* Body Font */}
          <div className="mb-16">
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="text-sm font-bold text-gen-green tracking-wider uppercase">
                Body — Inter
              </h3>
            </div>
            <div className="space-y-6 border-l-2 border-gen-dark/10 pl-8">
              <div>
                <p className="text-xs text-slate mb-1 font-mono">
                  16px / Body Regular
                </p>
                <p className="text-[16px] leading-relaxed text-gen-dark">
                  Generation Uranium Corp. is a Canadian mineral exploration
                  company focused on acquiring and advancing high-potential
                  uranium properties in world-class jurisdictions.
                </p>
              </div>
              <div>
                <p className="text-xs text-slate mb-1 font-mono">
                  14px / Body Small
                </p>
                <p className="text-[14px] leading-relaxed text-logo-grey">
                  The Yath Uranium Project encompasses over 7,600 hectares of
                  prospective ground in the prolific Yukon Territory, positioned
                  within a historic uranium district.
                </p>
              </div>
              <div>
                <p className="text-xs text-slate mb-1 font-mono">
                  12px / Caption
                </p>
                <p className="text-[12px] leading-relaxed text-slate">
                  Source: Generation Uranium Corp. Technical Report, 2024. All
                  mineral resources are estimated in accordance with NI 43-101.
                </p>
              </div>
              <div>
                <p className="text-xs text-slate mb-1 font-mono">
                  10px / Fine Print
                </p>
                <p className="text-[10px] leading-relaxed text-slate">
                  This presentation contains forward-looking statements. Actual
                  results may differ materially from those anticipated.
                </p>
              </div>
            </div>
          </div>

          {/* Weight Specimens */}
          <div className="mb-16">
            <h3 className="text-sm font-bold text-gen-green tracking-wider uppercase mb-6">
              Weight Specimens
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-arctic-white rounded-xl p-6">
                <p className="text-xs text-slate mb-3 font-mono">
                  Inter Regular 400
                </p>
                <p className="text-lg font-normal">
                  Clean energy exploration across Canada&rsquo;s premier uranium
                  districts.
                </p>
              </div>
              <div className="bg-arctic-white rounded-xl p-6">
                <p className="text-xs text-slate mb-3 font-mono">
                  Inter Medium 500
                </p>
                <p className="text-lg font-medium">
                  Clean energy exploration across Canada&rsquo;s premier uranium
                  districts.
                </p>
              </div>
              <div className="bg-arctic-white rounded-xl p-6">
                <p className="text-xs text-slate mb-3 font-mono">
                  Inter Semibold 600
                </p>
                <p className="text-lg font-semibold">
                  Clean energy exploration across Canada&rsquo;s premier uranium
                  districts.
                </p>
              </div>
            </div>
          </div>

          {/* Button Styles */}
          <div>
            <h3 className="text-sm font-bold text-gen-green tracking-wider uppercase mb-6">
              Button Styles
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gen-green text-gen-dark font-semibold px-6 py-3 rounded-lg text-sm tracking-wide hover:brightness-110 transition">
                Primary Action
              </button>
              <button className="bg-gen-dark text-white font-semibold px-6 py-3 rounded-lg text-sm tracking-wide hover:bg-gen-dark/90 transition">
                Secondary Action
              </button>
              <button className="border-2 border-gen-green text-gen-green font-semibold px-6 py-3 rounded-lg text-sm tracking-wide hover:bg-gen-green/10 transition">
                Outline Action
              </button>
              <button className="bg-reactor-blue text-white font-semibold px-6 py-3 rounded-lg text-sm tracking-wide hover:brightness-110 transition">
                Link / Data Action
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
