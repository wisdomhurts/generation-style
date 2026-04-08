export default function CollateralPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-14">
          <p className="mono-label mb-4">COLLATERAL</p>
          <h1 className="font-display font-bold text-[#2D3748] text-display-lg mb-4">
            Marketing Materials
          </h1>
          <p className="text-[#4A5568] text-lg max-w-2xl leading-relaxed">
            Investor-facing collateral templates for one-pagers, quarterly
            updates, social media, letterheads, conference materials, and web components.
          </p>
        </div>

        {/* ─── INVESTOR ONE-PAGER ─── */}
        <section id="investor-one-pager" className="scroll-mt-24 mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-[#7CC842] text-sm tracking-wider">01</span>
            <h2 className="font-display font-bold text-[#2D3748] text-display-sm">
              Investor One-Pager
            </h2>
          </div>
          <p className="text-[#4A5568] mb-6 max-w-xl">
            Single-page fact sheet with branded header, key statistics, and company overview.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden card-hover max-w-2xl mx-auto">
            {/* Header */}
            <div className="bg-[#F5F3ED] p-6 md:p-8 border-b border-[#E8E5DD]">
              <div className="flex items-center justify-between mb-6">
                <p className="font-mono text-[#7CC842] tracking-[0.2em] text-xs">
                  GENERATION URANIUM
                </p>
                <p className="font-mono text-[#6B7B8D] text-xs">TSX-V: GEN</p>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#2D3748] mb-2">
                Corporate Fact Sheet
              </h3>
              <p className="text-[#6B7B8D] text-sm font-mono">Q4 2024 — Investor Overview</p>
              <div className="grid grid-cols-4 gap-4 mt-6 pt-4 border-t border-[#E8E5DD]">
                {[
                  { value: "$8.2M", label: "Market Cap" },
                  { value: "25,000+", label: "Hectares" },
                  { value: "4", label: "Projects" },
                  { value: "TSX-V", label: "Exchange" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="stat-number text-lg">{stat.value}</p>
                    <p className="text-[#6B7B8D] font-mono text-[9px] tracking-wider uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Body */}
            <div className="p-6 md:p-8 space-y-5">
              <div>
                <p className="mono-label mb-3">COMPANY OVERVIEW</p>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  Generation Uranium Corp. is a Canadian mineral exploration
                  company focused on acquiring and advancing high-potential
                  uranium properties in world-class jurisdictions, positioning
                  for the growing demand in clean energy.
                </p>
              </div>
              <div>
                <p className="mono-label mb-3">KEY PROJECTS</p>
                <div className="space-y-2">
                  {[
                    { name: "Yath Project", loc: "Yukon Territory", size: "7,600 ha", status: "Active" },
                    { name: "Lac Savane", loc: "Quebec", size: "12,400 ha", status: "Permitting" },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center justify-between bg-[#F5F3ED] rounded-lg p-3 border border-[#E8E5DD]">
                      <div>
                        <p className="text-sm font-display font-semibold text-[#2D3748]">{p.name}</p>
                        <p className="text-xs text-[#4A5568] font-mono">{p.loc} &middot; {p.size}</p>
                      </div>
                      <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full ${
                        p.status === "Active"
                          ? "bg-[#7CC842]/10 text-[#7CC842] border border-[#7CC842]/20"
                          : "bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/20"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-[#E8E5DD] pt-4 flex items-center justify-between text-xs text-[#4A5568] font-mono">
                <span>generationuranium.com</span>
                <span>info@generationuranium.com</span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── QUARTERLY UPDATE ─── */}
        <section id="quarterly-update" className="scroll-mt-24 mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-[#7CC842] text-sm tracking-wider">02</span>
            <h2 className="font-display font-bold text-[#2D3748] text-display-sm">
              Quarterly Update
            </h2>
          </div>
          <p className="text-[#4A5568] mb-6 max-w-xl">
            Shareholder letter template with progress metrics and milestones.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden card-hover max-w-2xl mx-auto">
            <div className="border-l-2 border-[#7CC842] p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <p className="mono-label">SHAREHOLDER UPDATE</p>
                <p className="text-[#4A5568] font-mono text-xs">Q4 2024</p>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#2D3748] mb-4">
                Quarter in Review
              </h3>
              <div className="space-y-4 text-sm text-[#4A5568] leading-relaxed">
                <p>Dear Shareholders,</p>
                <p>
                  The fourth quarter of 2024 marked a transformational period
                  for Generation Uranium. We completed the first phase of our
                  drill program at the Yath Project, with results exceeding
                  initial expectations.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-[#E8E5DD]">
                {[
                  { metric: "Drill Holes", value: "12", change: "+8 QoQ" },
                  { metric: "Meters Drilled", value: "2,400m", change: "+1,800m" },
                  { metric: "Assays Pending", value: "5", change: "Expected Q1" },
                ].map((item) => (
                  <div key={item.metric} className="text-center">
                    <p className="stat-number text-xl">{item.value}</p>
                    <p className="text-xs text-[#4A5568] font-mono mt-1">{item.metric}</p>
                    <p className="text-[10px] text-[#7CC842] font-mono mt-1">{item.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── SOCIAL MEDIA ─── */}
        <section id="social-media" className="scroll-mt-24 mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-[#7CC842] text-sm tracking-wider">03</span>
            <h2 className="font-display font-bold text-[#2D3748] text-display-sm">
              Social Media
            </h2>
          </div>
          <p className="text-[#4A5568] mb-6 max-w-xl">
            Templates for LinkedIn, Twitter/X, and Instagram posts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* LinkedIn */}
            <div>
              <p className="font-mono text-[10px] text-[#6B7B8D] tracking-wider mb-3">LINKEDIN — 1200x627</p>
              <div className="aspect-[1200/627] bg-[#F5F3ED] rounded-xl overflow-hidden p-5 flex flex-col justify-between card-hover">
                <p className="font-mono text-[#7CC842] tracking-[0.2em] text-[10px]">
                  GENERATION URANIUM &middot; TSX-V: GEN
                </p>
                <div>
                  <h4 className="font-display font-bold text-lg text-[#2D3748] leading-snug mb-2">
                    Drill Results Confirm High-Grade Uranium at Yath
                  </h4>
                  <div className="flex gap-2">
                    {["#Uranium", "#CleanEnergy", "#TSXVenture"].map((tag) => (
                      <span key={tag} className="bg-[#7CC842]/10 text-[#7CC842] text-[8px] font-mono px-2 py-0.5 rounded-full border border-[#7CC842]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Twitter */}
            <div>
              <p className="font-mono text-[10px] text-[#6B7B8D] tracking-wider mb-3">TWITTER/X — 1600x900</p>
              <div className="aspect-[16/9] bg-[#F5F3ED] rounded-xl overflow-hidden p-5 flex flex-col justify-center items-center text-center relative card-hover">
                <p className="font-mono text-[#7CC842] tracking-[0.3em] text-[10px] mb-2 relative z-10">TSX-V: GEN</p>
                <h4 className="font-display font-bold text-2xl text-[#2D3748] leading-snug relative z-10">
                  The Future<br />is Nuclear
                </h4>
                <p className="text-[#6B7B8D] font-mono text-[10px] mt-2 relative z-10">generationuranium.com</p>
              </div>
            </div>
            {/* Instagram */}
            <div>
              <p className="font-mono text-[10px] text-[#6B7B8D] tracking-wider mb-3">INSTAGRAM — 1080x1080</p>
              <div className="aspect-square bg-[#F5F3ED] rounded-xl overflow-hidden p-5 flex flex-col justify-between card-hover">
                <p className="font-mono text-[#7CC842] tracking-[0.2em] text-[10px]">GENERATION URANIUM</p>
                <div className="text-center">
                  <p className="stat-number text-5xl mb-1">$80</p>
                  <p className="text-[#6B7B8D] font-mono text-xs">/lb U&#x2083;O&#x2088; Spot Price</p>
                  <p className="text-[#7CC842] font-mono text-[10px] mt-2">&#x25B2; 220% since 2020</p>
                </div>
                <p className="text-[#6B7B8D] font-mono text-[10px] text-center">TSX-V: GEN</p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── EMAIL & LETTERHEAD ─── */}
        <section id="email-letterhead" className="scroll-mt-24 mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-[#7CC842] text-sm tracking-wider">04</span>
            <h2 className="font-display font-bold text-[#2D3748] text-display-sm">
              Email &amp; Letterhead
            </h2>
          </div>
          <p className="text-[#4A5568] mb-6 max-w-xl">
            Branded email header and corporate letterhead templates.
          </p>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Email */}
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="bg-[#F5F3ED] px-6 py-4 flex items-center justify-between">
                <p className="font-mono text-[#7CC842] tracking-[0.15em] text-xs">GENERATION URANIUM</p>
                <p className="text-[#6B7B8D] font-mono text-xs">TSX-V: GEN</p>
              </div>
              <div className="h-[2px] bg-[#7CC842]" />
              <div className="p-6 space-y-3">
                <p className="text-sm text-[#4A5568] font-mono">Subject: Q4 2024 Exploration Update</p>
                <p className="text-sm text-[#2D3748]">Dear Investor,</p>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  We are pleased to share the results of our Phase 1 drill program at the Yath Uranium Project...
                </p>
                <div className="pt-3 border-t border-[#E8E5DD] text-xs text-[#4A5568] font-mono">
                  <p className="text-[#2D3748] font-display font-semibold">Generation Uranium Corp.</p>
                  <p>Suite 810 &#8211; 789 West Pender Street</p>
                  <p>Vancouver, BC V6C 1H2</p>
                  <p className="text-[#7CC842] mt-1">generationuranium.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── CONFERENCE BANNERS ─── */}
        <section id="conference-banners" className="scroll-mt-24 mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-[#7CC842] text-sm tracking-wider">05</span>
            <h2 className="font-display font-bold text-[#2D3748] text-display-sm">
              Conference Banners
            </h2>
          </div>
          <p className="text-[#4A5568] mb-6 max-w-xl">
            Trade show and conference display banner templates.
          </p>

          <div className="space-y-8">
            {/* Wide Banner */}
            <div>
              <p className="font-mono text-[10px] text-[#6B7B8D] tracking-wider mb-3">WIDE BANNER — 2400x600</p>
              <div className="aspect-[4/1] bg-[#F5F3ED] rounded-2xl overflow-hidden flex items-center justify-between px-8 md:px-16 relative card-hover">
                <div className="relative z-10">
                  <p className="font-mono text-[#7CC842] tracking-[0.3em] text-xs mb-1">TSX-V: GEN</p>
                  <h3 className="font-display font-bold text-2xl md:text-4xl text-[#2D3748]">
                    Generation Uranium
                  </h3>
                  <p className="text-[#6B7B8D] text-sm mt-1 font-mono">Clean Energy Exploration</p>
                </div>
                <div className="relative z-10 text-right hidden md:flex gap-8">
                  {[
                    { value: "4", label: "Projects" },
                    { value: "25K+", label: "Hectares" },
                    { value: "YT/QC", label: "Jurisdictions" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="stat-number text-2xl">{stat.value}</p>
                      <p className="text-[#6B7B8D] font-mono text-[9px] tracking-wider uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── WEB COMPONENTS ─── */}
        <section id="web-components" className="scroll-mt-24 mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-[#7CC842] text-sm tracking-wider">06</span>
            <h2 className="font-display font-bold text-[#2D3748] text-display-sm">
              Web Components
            </h2>
          </div>
          <p className="text-[#4A5568] mb-6 max-w-xl">
            Reusable website components — hero banners, CTAs, and feature cards.
          </p>

          <div className="space-y-8">
            {/* CTA Banner */}
            <div className="bg-[#F5F3ED] rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 card-hover relative">
              <div className="relative z-10">
                <p className="mono-label mb-2">INVEST IN CLEAN ENERGY</p>
                <h3 className="font-display font-bold text-3xl text-[#2D3748]">
                  The uranium supercycle is here.
                </h3>
              </div>
              <div className="flex gap-3 relative z-10">
                <button className="bg-[#7CC842] text-white font-display font-bold px-6 py-3 rounded-lg text-sm tracking-wide hover:bg-[#6AB835] transition-all duration-300 whitespace-nowrap">
                  Learn More
                </button>
                <button className="border border-[#E8E5DD] text-[#4A5568] font-display font-medium px-6 py-3 rounded-lg text-sm tracking-wide hover:border-[#7CC842] hover:text-[#7CC842] transition-all duration-300 whitespace-nowrap">
                  Contact IR
                </button>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Strategic Assets", desc: "Premier uranium properties in Canada's most prolific mineral districts.", color: "#7CC842" },
                { title: "Proven Team", desc: "Management with decades of combined exploration and capital markets experience.", color: "#2563EB" },
                { title: "Market Timing", desc: "Positioned at the inflection point of the uranium supercycle.", color: "#EAB308" },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-xl p-6 card-hover group">
                  <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: card.color }} />
                  <h4 className="font-display font-bold text-lg text-[#2D3748] mb-2 group-hover:text-[#7CC842] transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
