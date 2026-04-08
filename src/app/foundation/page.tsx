const coreTokens = [
  {
    name: "Deep Charcoal",
    hex: "#FFFFFF",
    rgb: "30, 42, 42",
    usage: "Primary dark backgrounds, hero sections, navigation bars",
    tints: ["#FFFFFF", "#F5F3ED", "#3D4A4A", "#4D5A5A", "#5D6A6A"],
  },
  {
    name: "Chartreuse",
    hex: "#7CC842",
    rgb: "200, 230, 74",
    usage: "Primary accent — overlines, CTAs, highlights, glow effects, energy",
    tints: ["#7CC842", "#D3EB6E", "#DEF092", "#E9F5B6", "#F4FADA"],
  },
  {
    name: "Carbon",
    hex: "#F5F3ED",
    rgb: "45, 58, 58",
    usage: "Card backgrounds, secondary panels, elevated surfaces",
    tints: ["#F5F3ED", "#3D4A4A", "#4D5A5A", "#5D6A6A", "#6D7A7A"],
  },
  {
    name: "Warm Sand",
    hex: "#F5F3ED",
    rgb: "245, 243, 237",
    usage: "Light text on dark, statement slides, clean backgrounds",
    tints: ["#F5F3ED", "#F7F5F0", "#F9F8F4", "#FBFAF7", "#FDFCFB"],
  },
  {
    name: "Graphite",
    hex: "#4A5568",
    rgb: "74, 85, 104",
    usage: "Body text, captions, metadata, secondary information",
    tints: ["#4A5568", "#5E6779", "#727A8A", "#868D9B", "#9AA0AC"],
  },
];

const extendedTokens = [
  { name: "Reactor Blue", hex: "#2563EB", usage: "Charts, links, interactive states" },
  { name: "Tundra Green", hex: "#3D6B4F", usage: "Environmental themes, secondary green" },
  { name: "Uranium Yellow", hex: "#EAB308", usage: "Warnings, pricing highlights" },
  { name: "Arctic White", hex: "#F8FAFC", usage: "Alternate backgrounds, subtle cards" },
  { name: "Granite", hex: "#374151", usage: "Dark text, headings on light" },
  { name: "Aurora Teal", hex: "#0D9488", usage: "Data accent, secondary CTA" },
  { name: "Permafrost Blue", hex: "#93C5FD", usage: "Light accent, backgrounds" },
];

export default function FoundationPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-20">
          <p className="mono-label mb-4">FOUNDATION</p>
          <h1 className="font-display font-bold text-[#2D3748] text-display-lg mb-4">
            Design Tokens
          </h1>
          <p className="text-graphite text-lg max-w-2xl leading-relaxed">
            The foundational color palette, typography system, and design tokens
            that power every visual decision in the Generation Uranium identity.
          </p>
        </div>

        {/* ─── CORE PALETTE ─── */}
        <section id="design-tokens" className="scroll-mt-24 mb-28">
          <div className="flex items-baseline gap-4 mb-10">
            <h2 className="font-display font-bold text-[#2D3748] text-display-sm">
              Core Palette
            </h2>
            <span className="font-mono text-gen-green text-xs tracking-wider">5 TOKENS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTokens.map((token) => {
              const isLight = ["#F5F3ED", "#7CC842"].includes(token.hex);
              return (
                <div
                  key={token.name}
                  className="rounded-2xl overflow-hidden card-hover bg-[#F5F3ED] group"
                >
                  {/* Color swatch */}
                  <div
                    className="h-[200px] flex items-end p-6 relative"
                    style={{ backgroundColor: token.hex }}
                  >
                    <div>
                      <p className={`font-display font-bold text-xl ${isLight ? "text-gen-dark" : "text-[#2D3748]"}`}>
                        {token.name}
                      </p>
                      <p className={`font-mono text-xs mt-1 ${isLight ? "text-gen-dark/60" : "text-[#6B7B8D]"}`}>
                        {token.hex}
                      </p>
                    </div>
                  </div>

                  {/* Tint strip */}
                  <div className="flex h-3">
                    {token.tints.map((tint, i) => (
                      <div key={i} className="flex-1" style={{ backgroundColor: tint }} />
                    ))}
                  </div>

                  {/* Usage */}
                  <div className="p-5">
                    <p className="text-sm text-graphite leading-relaxed">
                      {token.usage}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── EXTENDED PALETTE ─── */}
        <section id="extended-palette" className="scroll-mt-24 mb-28">
          <div className="section-divider mb-16" />
          <div className="flex items-baseline gap-4 mb-10">
            <h2 className="font-display font-bold text-[#2D3748] text-display-sm">
              Extended Palette
            </h2>
            <span className="font-mono text-gen-green text-xs tracking-wider">7 TOKENS</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {extendedTokens.map((token) => {
              const isLight = ["#F8FAFC", "#EAB308", "#93C5FD"].includes(token.hex);
              return (
                <div key={token.name} className="rounded-xl overflow-hidden card-hover bg-[#F5F3ED] group">
                  <div
                    className="h-28 flex items-end p-4"
                    style={{ backgroundColor: token.hex }}
                  >
                    <div>
                      <p className={`font-display font-semibold text-sm ${isLight ? "text-gen-dark" : "text-[#2D3748]"}`}>
                        {token.name}
                      </p>
                      <p className={`font-mono text-[10px] mt-0.5 ${isLight ? "text-gen-dark/60" : "text-[#6B7B8D]"}`}>
                        {token.hex}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-graphite leading-relaxed">{token.usage}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── TYPOGRAPHY ─── */}
        <section id="typography" className="scroll-mt-24 mb-28">
          <div className="section-divider mb-16" />
          <div className="flex items-baseline gap-4 mb-12">
            <h2 className="font-display font-bold text-[#2D3748] text-display-sm">
              Typography
            </h2>
            <span className="font-mono text-gen-green text-xs tracking-wider">3 FONTS</span>
          </div>

          {/* Outfit Display */}
          <div className="mb-16">
            <p className="mono-label mb-8">DISPLAY — OUTFIT</p>
            <div className="space-y-8 border-l-2 border-gen-green/30 pl-8">
              <div className="bg-[#F5F3ED] rounded-xl p-8">
                <p className="font-mono text-[10px] text-gen-green/60 tracking-wider mb-3">72px / HERO</p>
                <p className="font-display font-bold text-[72px] leading-[1.05] text-[#2D3748] tracking-tight">
                  Power
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-[#E8E5DD]">
                <p className="font-mono text-[10px] text-gen-green/60 tracking-wider mb-3">48px / SECTION TITLE</p>
                <p className="font-display font-bold text-[48px] leading-tight text-[#2D3748]">
                  Generating Tomorrow
                </p>
              </div>
              <div className="bg-[#F5F3ED] rounded-xl p-8">
                <p className="font-mono text-[10px] text-gen-green/60 tracking-wider mb-3">32px / SUBSECTION</p>
                <p className="font-display font-semibold text-[32px] leading-snug text-[#2D3748]">
                  Strategic Uranium Exploration in the Thelon Basin
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-[#E8E5DD]">
                <p className="font-mono text-[10px] text-gen-green/60 tracking-wider mb-3">24px / CARD TITLE</p>
                <p className="font-display font-semibold text-[24px] leading-snug text-[#2D3748]">
                  Next-Generation Clean Energy Exploration
                </p>
              </div>
            </div>
          </div>

          {/* Manrope */}
          <div className="mb-16">
            <p className="mono-label mb-8">MONO LABELS — MANROPE</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F5F3ED] rounded-xl p-8">
                <p className="font-mono text-gen-green text-xs tracking-[0.25em] mb-3">OVERLINE LABEL</p>
                <p className="font-mono text-gen-green text-lg tracking-wider">
                  TSX-V: GEN
                </p>
                <p className="font-mono text-[#A0AEC0] text-xs mt-4 tracking-wider">
                  SECTION 01 &middot; FOUNDATION
                </p>
              </div>
              <div className="bg-warm-sand rounded-xl p-8">
                <p className="font-mono text-gen-dark text-xs tracking-[0.25em] mb-3">LIGHT CONTEXT</p>
                <p className="font-mono text-gen-dark text-lg tracking-wider">
                  25,000+ HECTARES
                </p>
                <p className="font-mono text-graphite text-xs mt-4 tracking-wider">
                  THELON BASIN &middot; NUNAVUT
                </p>
              </div>
            </div>
          </div>

          {/* Inter Body */}
          <div className="mb-16">
            <p className="mono-label mb-8">BODY — INTER</p>
            <div className="space-y-6 border-l-2 border-[#E8E5DD] pl-8">
              <div>
                <p className="font-mono text-[10px] text-gen-green/60 tracking-wider mb-2">16px / BODY REGULAR</p>
                <p className="text-[16px] leading-relaxed text-[#2D3748]">
                  Generation Uranium Corp. is a Canadian mineral exploration
                  company focused on acquiring and advancing high-potential
                  uranium properties in world-class jurisdictions.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-gen-green/60 tracking-wider mb-2">14px / BODY SMALL</p>
                <p className="text-[14px] leading-relaxed text-graphite">
                  The Yath Uranium Project encompasses over 7,600 hectares of
                  prospective ground in the prolific Yukon Territory, positioned
                  within a historic uranium district.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-gen-green/60 tracking-wider mb-2">12px / CAPTION</p>
                <p className="text-[12px] leading-relaxed text-slate">
                  Source: Generation Uranium Corp. Technical Report, 2024. All
                  mineral resources are estimated in accordance with NI 43-101.
                </p>
              </div>
            </div>
          </div>

          {/* Weight Specimens */}
          <div className="mb-16">
            <p className="mono-label mb-8">WEIGHT SPECIMENS</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { weight: "Regular 400", cls: "font-normal" },
                { weight: "Medium 500", cls: "font-medium" },
                { weight: "Semibold 600", cls: "font-semibold" },
              ].map((w) => (
                <div key={w.weight} className="bg-[#F5F3ED] rounded-xl p-6 card-hover">
                  <p className="font-mono text-[10px] text-gen-green/60 tracking-wider mb-3">
                    Inter {w.weight}
                  </p>
                  <p className={`text-lg text-[#2D3748] ${w.cls}`}>
                    Clean energy exploration across Canada&rsquo;s premier uranium districts.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Button Styles */}
          <div>
            <p className="mono-label mb-8">BUTTON STYLES</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gen-green text-gen-dark font-display font-bold px-7 py-3 rounded-lg text-sm tracking-wide hover:shadow-[0_0_20px_rgba(200,230,74,0.3)] hover:brightness-110 transition-all duration-300">
                Primary Action
              </button>
              <button className="bg-[#F5F3ED] text-[#2D3748] font-display font-semibold px-7 py-3 rounded-lg text-sm tracking-wide border border-[#E8E5DD] hover:border-gen-green/30 transition-all duration-300">
                Secondary Action
              </button>
              <button className="border-2 border-gen-green text-gen-green font-display font-semibold px-7 py-3 rounded-lg text-sm tracking-wide hover:bg-gen-green/10 hover:shadow-[0_0_20px_rgba(200,230,74,0.15)] transition-all duration-300">
                Outline Action
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
