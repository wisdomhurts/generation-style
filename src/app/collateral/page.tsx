export default function CollateralPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-gen-green tracking-[0.2em] text-sm font-medium mb-3">
            COLLATERAL
          </p>
          <h1 className="font-display italic text-5xl md:text-6xl text-gen-dark mb-4">
            Marketing Materials
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            Investor-facing collateral templates for one-pagers, quarterly
            updates, social media, letterheads, conference materials, and web
            components.
          </p>
        </div>

        {/* Investor One-Pager */}
        <section id="investor-one-pager" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Investor One-Pager
          </h2>
          <p className="text-slate mb-6">
            Single-page fact sheet with dark header, key statistics, and company
            overview.
          </p>
          <div className="bg-white border border-gen-dark/10 rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
            {/* Dark Header */}
            <div className="bg-gen-dark p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gen-green font-bold tracking-[0.2em] text-sm">
                  GENERATION URANIUM
                </p>
                <p className="text-white/50 text-xs">TSX-V: GEN</p>
              </div>
              <h3 className="font-display italic text-3xl text-white mb-2">
                Corporate Fact Sheet
              </h3>
              <p className="text-white/50 text-sm">
                Q4 2024 — Investor Overview
              </p>
              {/* Stats row */}
              <div className="grid grid-cols-4 gap-4 mt-6 pt-4 border-t border-white/10">
                {[
                  { value: "$8.2M", label: "Market Cap" },
                  { value: "32,000+", label: "Hectares" },
                  { value: "4", label: "Projects" },
                  { value: "TSX-V", label: "Exchange" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-gen-green text-lg font-bold">
                      {stat.value}
                    </p>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Content Body */}
            <div className="p-6 md:p-8 space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-gen-green uppercase tracking-wider mb-2">
                  Company Overview
                </h4>
                <p className="text-sm text-slate leading-relaxed">
                  Generation Uranium Corp. is a Canadian mineral exploration
                  company focused on acquiring and advancing high-potential
                  uranium properties in world-class jurisdictions, positioning
                  for the growing demand in clean energy.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gen-green uppercase tracking-wider mb-2">
                  Key Projects
                </h4>
                <div className="space-y-2">
                  {[
                    {
                      name: "Yath Project",
                      location: "Yukon Territory",
                      size: "7,600 ha",
                      status: "Active",
                    },
                    {
                      name: "Lac Savane",
                      location: "Quebec",
                      size: "12,400 ha",
                      status: "Permitting",
                    },
                  ].map((project) => (
                    <div
                      key={project.name}
                      className="flex items-center justify-between bg-arctic-white rounded-lg p-3"
                    >
                      <div>
                        <p className="text-sm font-semibold text-gen-dark">
                          {project.name}
                        </p>
                        <p className="text-xs text-slate">
                          {project.location} · {project.size}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          project.status === "Active"
                            ? "bg-gen-green/15 text-gen-green"
                            : "bg-uranium-yellow/15 text-uranium-yellow"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-gen-dark/5 pt-4">
                <div className="flex items-center justify-between text-xs text-slate">
                  <span>generationuranium.com</span>
                  <span>info@generationuranium.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quarterly Update */}
        <section id="quarterly-update" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Quarterly Update
          </h2>
          <p className="text-slate mb-6">
            Shareholder letter template with progress metrics and milestones.
          </p>
          <div className="bg-white border border-gen-dark/10 rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <div className="border-l-4 border-gen-green p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                  SHAREHOLDER UPDATE
                </p>
                <p className="text-slate text-xs">Q4 2024</p>
              </div>
              <h3 className="font-display italic text-2xl text-gen-dark mb-4">
                Quarter in Review
              </h3>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>Dear Shareholders,</p>
                <p>
                  The fourth quarter of 2024 marked a transformational period
                  for Generation Uranium. We completed the first phase of our
                  drill program at the Yath Project, with results exceeding
                  initial expectations.
                </p>
              </div>
              {/* Progress metrics */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gen-dark/5">
                {[
                  { metric: "Drill Holes", value: "12", change: "+8 QoQ" },
                  { metric: "Meters Drilled", value: "2,400m", change: "+1,800m" },
                  { metric: "Assays Pending", value: "5", change: "Expected Q1" },
                ].map((item) => (
                  <div key={item.metric} className="text-center">
                    <p className="text-xl font-bold text-gen-dark">
                      {item.value}
                    </p>
                    <p className="text-xs text-slate">{item.metric}</p>
                    <p className="text-[10px] text-gen-green mt-1">
                      {item.change}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section id="social-media" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Social Media
          </h2>
          <p className="text-slate mb-6">
            Templates for LinkedIn, Twitter/X, and Instagram posts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* LinkedIn */}
            <div>
              <p className="text-xs text-slate font-semibold mb-3 uppercase tracking-wider">
                LinkedIn — 1200x627
              </p>
              <div className="aspect-[1200/627] bg-gen-dark rounded-xl overflow-hidden p-5 flex flex-col justify-between">
                <p className="text-gen-green tracking-[0.2em] text-[10px] font-medium">
                  GENERATION URANIUM · TSX-V: GEN
                </p>
                <div>
                  <h4 className="font-display italic text-xl text-white leading-snug mb-2">
                    Drill Results Confirm High-Grade Uranium at Yath
                  </h4>
                  <div className="flex gap-3">
                    <span className="bg-gen-green/15 text-gen-green text-[9px] px-2 py-0.5 rounded-full">
                      #Uranium
                    </span>
                    <span className="bg-gen-green/15 text-gen-green text-[9px] px-2 py-0.5 rounded-full">
                      #CleanEnergy
                    </span>
                    <span className="bg-gen-green/15 text-gen-green text-[9px] px-2 py-0.5 rounded-full">
                      #TSXVenture
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Twitter / X */}
            <div>
              <p className="text-xs text-slate font-semibold mb-3 uppercase tracking-wider">
                Twitter/X — 1600x900
              </p>
              <div className="aspect-[16/9] bg-gen-dark rounded-xl overflow-hidden p-5 flex flex-col justify-center items-center text-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,200,66,0.06)_0%,_transparent_70%)]" />
                <p className="text-gen-green tracking-[0.3em] text-[10px] mb-2 relative z-10">
                  TSX-V: GEN
                </p>
                <h4 className="font-display italic text-2xl text-white leading-snug relative z-10">
                  The Future
                  <br />
                  is Nuclear
                </h4>
                <p className="text-white/40 text-[10px] mt-2 relative z-10">
                  generationuranium.com
                </p>
              </div>
            </div>
            {/* Instagram */}
            <div>
              <p className="text-xs text-slate font-semibold mb-3 uppercase tracking-wider">
                Instagram — 1080x1080
              </p>
              <div className="aspect-square bg-gen-dark rounded-xl overflow-hidden p-5 flex flex-col justify-between">
                <p className="text-gen-green tracking-[0.2em] text-[10px] font-medium">
                  GENERATION URANIUM
                </p>
                <div className="text-center">
                  <p className="text-5xl font-bold text-gen-green mb-1">
                    $107
                  </p>
                  <p className="text-white/50 text-xs">/lb U₃O₈ Spot Price</p>
                  <p className="text-gen-green text-[10px] mt-2">
                    ▲ 328% since 2020
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-white/30 text-[10px]">TSX-V: GEN</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email & Letterhead */}
        <section id="email-letterhead" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Email & Letterhead
          </h2>
          <p className="text-slate mb-6">
            Branded email header and corporate letterhead templates.
          </p>
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Email Header */}
            <div className="bg-white border border-gen-dark/10 rounded-2xl overflow-hidden">
              <div className="bg-gen-dark px-6 py-4 flex items-center justify-between">
                <p className="text-gen-green font-bold tracking-[0.15em] text-sm">
                  GENERATION URANIUM
                </p>
                <p className="text-white/40 text-xs">TSX-V: GEN</p>
              </div>
              <div className="h-1 bg-gen-green" />
              <div className="p-6 space-y-3">
                <p className="text-sm text-slate">Subject: Q4 2024 Exploration Update</p>
                <p className="text-sm text-gen-dark leading-relaxed">
                  Dear Investor,
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  We are pleased to share the results of our Phase 1 drill
                  program at the Yath Uranium Project...
                </p>
                <div className="pt-3 border-t border-gen-dark/5 text-xs text-slate">
                  <p className="font-semibold text-gen-dark">
                    Generation Uranium Corp.
                  </p>
                  <p>Suite 810 – 789 West Pender Street</p>
                  <p>Vancouver, BC V6C 1H2</p>
                  <p className="text-gen-green mt-1">
                    generationuranium.com
                  </p>
                </div>
              </div>
            </div>
            {/* Letterhead */}
            <div className="bg-white border border-gen-dark/10 rounded-2xl overflow-hidden p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-gen-green font-bold tracking-[0.15em] text-sm">
                    GENERATION URANIUM
                  </p>
                  <p className="text-slate text-xs mt-1">
                    Clean Energy Exploration
                  </p>
                </div>
                <div className="text-right text-xs text-slate">
                  <p>Suite 810 – 789 West Pender St.</p>
                  <p>Vancouver, BC V6C 1H2</p>
                  <p className="text-gen-green">TSX-V: GEN</p>
                </div>
              </div>
              <div className="border-t-2 border-gen-green pt-6 space-y-3">
                <p className="text-sm text-slate">January 15, 2025</p>
                <p className="text-sm text-gen-dark leading-relaxed">
                  To Whom It May Concern,
                </p>
                <div className="space-y-2 text-sm text-slate leading-relaxed">
                  <p>
                    This letter serves as formal communication from Generation
                    Uranium Corp. regarding our ongoing exploration activities...
                  </p>
                  <div className="h-16" />
                  <p className="text-gen-dark font-medium">
                    Respectfully,
                  </p>
                  <div className="h-8" />
                  <p className="text-gen-dark font-medium">
                    Management Team
                  </p>
                  <p className="text-xs text-slate">
                    Generation Uranium Corp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Banners */}
        <section id="conference-banners" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Conference Banners
          </h2>
          <p className="text-slate mb-6">
            Trade show and conference display banner templates.
          </p>
          <div className="space-y-6">
            {/* Wide Banner */}
            <div>
              <p className="text-xs text-slate font-semibold mb-3 uppercase tracking-wider">
                Wide Banner — 2400x600
              </p>
              <div className="aspect-[4/1] bg-gen-dark rounded-2xl overflow-hidden flex items-center justify-between px-8 md:px-16 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(124,200,66,0.08)_0%,_transparent_50%)]" />
                <div className="relative z-10">
                  <p className="text-gen-green tracking-[0.3em] text-xs font-medium mb-1">
                    TSX-V: GEN
                  </p>
                  <h3 className="font-display italic text-2xl md:text-4xl text-white">
                    Generation Uranium
                  </h3>
                  <p className="text-white/40 text-sm mt-1">
                    Clean Energy Exploration
                  </p>
                </div>
                <div className="relative z-10 text-right hidden md:block">
                  <div className="flex gap-8">
                    {[
                      { value: "4", label: "Projects" },
                      { value: "32K+", label: "Hectares" },
                      { value: "YT/QC", label: "Jurisdictions" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="text-gen-green text-2xl font-bold">
                          {stat.value}
                        </p>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Booth Backdrop */}
            <div>
              <p className="text-xs text-slate font-semibold mb-3 uppercase tracking-wider">
                Booth Backdrop — 8ft x 8ft
              </p>
              <div className="aspect-square max-w-md bg-gen-dark rounded-2xl overflow-hidden flex flex-col items-center justify-center p-10 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,200,66,0.06)_0%,_transparent_60%)]" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-0.5 bg-gen-green mx-auto mb-8" />
                  <p className="text-gen-green tracking-[0.4em] text-xs mb-4">
                    TSX-V: GEN
                  </p>
                  <h3 className="font-display italic text-4xl text-white mb-2">
                    Generation
                    <br />
                    Uranium
                  </h3>
                  <p className="text-white/40 text-sm mb-8">
                    Clean Energy Exploration
                  </p>
                  <div className="w-16 h-0.5 bg-gen-green mx-auto mb-8" />
                  <p className="text-white/30 text-xs">
                    generationuranium.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Components */}
        <section id="web-components" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Web Components
          </h2>
          <p className="text-slate mb-6">
            Reusable website components — hero banners, CTAs, and feature cards.
          </p>
          <div className="space-y-6">
            {/* CTA Banner */}
            <div className="bg-gen-dark rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gen-green tracking-[0.2em] text-xs font-medium mb-2">
                  INVEST IN CLEAN ENERGY
                </p>
                <h3 className="font-display italic text-3xl text-white">
                  The uranium supercycle is here.
                </h3>
              </div>
              <div className="flex gap-3">
                <button className="bg-gen-green text-gen-dark font-semibold px-6 py-3 rounded-lg text-sm tracking-wide hover:brightness-110 transition whitespace-nowrap">
                  Learn More
                </button>
                <button className="border border-white/20 text-white font-medium px-6 py-3 rounded-lg text-sm tracking-wide hover:border-gen-green hover:text-gen-green transition whitespace-nowrap">
                  Contact IR
                </button>
              </div>
            </div>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Strategic Assets",
                  desc: "Premier uranium properties in Canada's most prolific mineral districts.",
                  accent: "bg-gen-green",
                },
                {
                  title: "Proven Team",
                  desc: "Management with decades of combined exploration and capital markets experience.",
                  accent: "bg-reactor-blue",
                },
                {
                  title: "Market Timing",
                  desc: "Positioned at the inflection point of the uranium supercycle.",
                  accent: "bg-uranium-yellow",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-arctic-white rounded-xl p-6 border border-gen-dark/5 hover:border-gen-green/30 transition group"
                >
                  <div
                    className={`w-8 h-1 ${card.accent} rounded-full mb-4`}
                  />
                  <h4 className="font-display italic text-xl text-gen-dark mb-2 group-hover:text-gen-green transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
