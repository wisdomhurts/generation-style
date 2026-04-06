export default function DataTemplatesPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-gen-green tracking-[0.2em] text-sm font-medium mb-3">
            DATA & TEMPLATES
          </p>
          <h1 className="font-display italic text-5xl md:text-6xl text-gen-dark mb-4">
            Data Visualization
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            Ten template specimens for maps, charts, timelines, peer
            comparisons, and technical data — optimized for investor
            communications.
          </p>
        </div>

        {/* Map Frame */}
        <section id="map-frame" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Map Frame
          </h2>
          <p className="text-slate mb-6">
            Property boundary overlay with callout markers and legend.
          </p>
          <div className="aspect-video bg-arctic-white border border-gen-dark/10 rounded-2xl overflow-hidden p-6 md:p-10 relative">
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
              <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                PROPERTY MAP
              </p>
              <p className="font-display italic text-xl text-gen-dark">
                Yath Uranium Project
              </p>
            </div>
            {/* Simulated map area */}
            <div className="absolute inset-16 md:inset-20 bg-tundra-green/10 rounded-xl border border-tundra-green/30 relative">
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute left-0 right-0 border-t border-tundra-green"
                    style={{ top: `${(i + 1) * 16.66}%` }}
                  />
                ))}
                {[...Array(7)].map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute top-0 bottom-0 border-l border-tundra-green"
                    style={{ left: `${(i + 1) * 12.5}%` }}
                  />
                ))}
              </div>
              {/* Property boundary */}
              <div className="absolute top-[15%] left-[20%] w-[55%] h-[60%] border-2 border-gen-green rounded-lg bg-gen-green/5">
                <p className="absolute -top-5 left-2 text-[10px] text-gen-green font-semibold">
                  YATH BOUNDARY
                </p>
              </div>
              {/* Callout markers */}
              <div className="absolute top-[25%] left-[35%] flex items-center gap-1">
                <div className="w-3 h-3 bg-gen-green rounded-full border-2 border-white shadow-md" />
                <span className="text-[9px] bg-white px-1.5 py-0.5 rounded shadow text-gen-dark font-semibold">
                  Zone A — High Priority
                </span>
              </div>
              <div className="absolute top-[50%] left-[45%] flex items-center gap-1">
                <div className="w-3 h-3 bg-uranium-yellow rounded-full border-2 border-white shadow-md" />
                <span className="text-[9px] bg-white px-1.5 py-0.5 rounded shadow text-gen-dark font-semibold">
                  Zone B — Prospective
                </span>
              </div>
              <div className="absolute top-[35%] right-[15%] flex items-center gap-1">
                <div className="w-3 h-3 bg-reactor-blue rounded-full border-2 border-white shadow-md" />
                <span className="text-[9px] bg-white px-1.5 py-0.5 rounded shadow text-gen-dark font-semibold">
                  Historic Workings
                </span>
              </div>
            </div>
            {/* Legend */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white rounded-lg p-3 shadow border border-gen-dark/5">
              <p className="text-[10px] font-semibold text-gen-dark mb-2">
                LEGEND
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-gen-green rounded-full" />
                  <span className="text-[10px] text-slate">High Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-uranium-yellow rounded-full" />
                  <span className="text-[10px] text-slate">Prospective</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-reactor-blue rounded-full" />
                  <span className="text-[10px] text-slate">
                    Historic Workings
                  </span>
                </div>
              </div>
            </div>
            {/* Scale bar */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="flex items-center gap-1">
                <div className="w-16 h-0.5 bg-gen-dark" />
                <span className="text-[9px] text-slate">5 km</span>
              </div>
            </div>
          </div>
        </section>

        {/* Data Slide */}
        <section id="data-slide" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Data Slide
          </h2>
          <p className="text-slate mb-6">
            Bar chart with green accent showing uranium price trends.
          </p>
          <div className="aspect-video bg-white border border-gen-dark/10 rounded-2xl overflow-hidden p-6 md:p-10 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                  MARKET DATA
                </p>
                <p className="font-display italic text-xl text-gen-dark">
                  U₃O₈ Spot Price Trend (USD/lb)
                </p>
              </div>
              <p className="text-slate text-xs">Source: UxC, 2024</p>
            </div>
            <div className="flex-1 flex items-end gap-2 md:gap-4 px-4">
              {[
                { year: "2019", value: 25, price: "$25" },
                { year: "2020", value: 30, price: "$30" },
                { year: "2021", value: 42, price: "$42" },
                { year: "2022", value: 50, price: "$50" },
                { year: "2023", value: 73, price: "$73" },
                { year: "2024", value: 107, price: "$107" },
              ].map((item) => (
                <div key={item.year} className="flex-1 flex flex-col items-center">
                  <span className="text-xs font-semibold text-gen-dark mb-1">
                    {item.price}
                  </span>
                  <div
                    className="w-full bg-gen-green rounded-t-md transition-all"
                    style={{ height: `${(item.value / 107) * 100}%`, minHeight: '20px' }}
                  />
                  <span className="text-[10px] text-slate mt-2">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Timeline
          </h2>
          <p className="text-slate mb-6">
            Corporate milestones from 2021 to 2026.
          </p>
          <div className="bg-gen-dark rounded-2xl overflow-hidden p-6 md:p-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                  CORPORATE MILESTONES
                </p>
                <p className="font-display italic text-xl text-white">
                  Growth Trajectory
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-white/10" />
              <div className="grid grid-cols-6 gap-2">
                {[
                  { year: "2021", event: "Company Incorporation", active: true },
                  { year: "2022", event: "Yath Project Acquired", active: true },
                  {
                    year: "2023",
                    event: "TSX-V Listing · Initial Exploration",
                    active: true,
                  },
                  {
                    year: "2024",
                    event: "Phase 1 Drill Program · Lac Savane Acquisition",
                    active: true,
                  },
                  {
                    year: "2025",
                    event: "Phase 2 Exploration · Resource Estimate",
                    active: false,
                  },
                  {
                    year: "2026",
                    event: "Advanced Exploration · PEA Initiation",
                    active: false,
                  },
                ].map((item) => (
                  <div key={item.year} className="text-center">
                    <div
                      className={`w-3 h-3 rounded-full mx-auto mb-4 border-2 ${
                        item.active
                          ? "bg-gen-green border-gen-green"
                          : "bg-transparent border-white/30"
                      }`}
                    />
                    <p
                      className={`text-sm font-bold mb-1 ${
                        item.active ? "text-gen-green" : "text-white/40"
                      }`}
                    >
                      {item.year}
                    </p>
                    <p className="text-[10px] text-white/60 leading-tight">
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Peer Comparison */}
        <section id="peer-comparison" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Peer Comparison
          </h2>
          <p className="text-slate mb-6">
            Competitive positioning table with GEN highlighted.
          </p>
          <div className="bg-white border border-gen-dark/10 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8 pb-0">
              <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                PEER COMPARISON
              </p>
              <p className="font-display italic text-xl text-gen-dark">
                Uranium Sector Positioning
              </p>
            </div>
            <div className="p-4 md:p-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gen-dark/10">
                    <th className="text-left py-3 px-3 text-xs text-slate font-semibold uppercase tracking-wider">
                      Company
                    </th>
                    <th className="text-right py-3 px-3 text-xs text-slate font-semibold uppercase tracking-wider">
                      Market Cap
                    </th>
                    <th className="text-right py-3 px-3 text-xs text-slate font-semibold uppercase tracking-wider">
                      Stage
                    </th>
                    <th className="text-right py-3 px-3 text-xs text-slate font-semibold uppercase tracking-wider">
                      Jurisdiction
                    </th>
                    <th className="text-right py-3 px-3 text-xs text-slate font-semibold uppercase tracking-wider">
                      Key Asset
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Cameco Corp.",
                      cap: "$28.5B",
                      stage: "Producer",
                      jurisdiction: "Saskatchewan",
                      asset: "McArthur River",
                      highlight: false,
                    },
                    {
                      name: "NexGen Energy",
                      cap: "$4.8B",
                      stage: "Development",
                      jurisdiction: "Saskatchewan",
                      asset: "Rook I",
                      highlight: false,
                    },
                    {
                      name: "Denison Mines",
                      cap: "$1.6B",
                      stage: "Development",
                      jurisdiction: "Saskatchewan",
                      asset: "Wheeler River",
                      highlight: false,
                    },
                    {
                      name: "Generation Uranium",
                      cap: "$8.2M",
                      stage: "Exploration",
                      jurisdiction: "Yukon / Quebec",
                      asset: "Yath Project",
                      highlight: true,
                    },
                    {
                      name: "Cosa Resources",
                      cap: "$12M",
                      stage: "Exploration",
                      jurisdiction: "Saskatchewan",
                      asset: "Ursa",
                      highlight: false,
                    },
                    {
                      name: "Baselode Energy",
                      cap: "$15M",
                      stage: "Exploration",
                      jurisdiction: "Saskatchewan",
                      asset: "Shadow",
                      highlight: false,
                    },
                  ].map((row) => (
                    <tr
                      key={row.name}
                      className={`border-b border-gen-dark/5 ${
                        row.highlight
                          ? "bg-gen-green/10 font-semibold"
                          : "hover:bg-arctic-white"
                      }`}
                    >
                      <td className="py-3 px-3">
                        <span
                          className={
                            row.highlight ? "text-gen-green" : "text-gen-dark"
                          }
                        >
                          {row.name}
                        </span>
                      </td>
                      <td className="text-right py-3 px-3 text-granite">
                        {row.cap}
                      </td>
                      <td className="text-right py-3 px-3">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            row.stage === "Producer"
                              ? "bg-gen-green/15 text-gen-green"
                              : row.stage === "Development"
                                ? "bg-reactor-blue/15 text-reactor-blue"
                                : "bg-uranium-yellow/15 text-uranium-yellow"
                          }`}
                        >
                          {row.stage}
                        </span>
                      </td>
                      <td className="text-right py-3 px-3 text-slate">
                        {row.jurisdiction}
                      </td>
                      <td className="text-right py-3 px-3 text-slate">
                        {row.asset}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Drill Results */}
        <section id="drill-results" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Drill Results Table
          </h2>
          <p className="text-slate mb-6">
            Technical assay data formatted for investor presentation.
          </p>
          <div className="bg-white border border-gen-dark/10 rounded-2xl overflow-hidden p-6 md:p-8">
            <div className="mb-6">
              <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                EXPLORATION DATA
              </p>
              <p className="font-display italic text-xl text-gen-dark">
                Selected Drill Intercepts — Yath Project
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gen-dark/10">
                  <th className="text-left py-2 px-3 text-xs text-slate font-semibold">
                    Hole ID
                  </th>
                  <th className="text-right py-2 px-3 text-xs text-slate font-semibold">
                    From (m)
                  </th>
                  <th className="text-right py-2 px-3 text-xs text-slate font-semibold">
                    To (m)
                  </th>
                  <th className="text-right py-2 px-3 text-xs text-slate font-semibold">
                    Width (m)
                  </th>
                  <th className="text-right py-2 px-3 text-xs text-slate font-semibold">
                    U₃O₈ (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "YTH-001", from: "42.0", to: "45.5", width: "3.5", grade: "0.12" },
                  { id: "YTH-002", from: "78.0", to: "82.0", width: "4.0", grade: "0.08" },
                  { id: "YTH-003", from: "115.5", to: "118.0", width: "2.5", grade: "0.21" },
                  { id: "YTH-004", from: "56.0", to: "61.5", width: "5.5", grade: "0.15" },
                  { id: "YTH-005", from: "92.0", to: "94.5", width: "2.5", grade: "0.09" },
                ].map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-gen-dark/5 hover:bg-arctic-white"
                  >
                    <td className="py-2.5 px-3 font-medium text-gen-dark">
                      {row.id}
                    </td>
                    <td className="text-right py-2.5 px-3 text-granite">
                      {row.from}
                    </td>
                    <td className="text-right py-2.5 px-3 text-granite">
                      {row.to}
                    </td>
                    <td className="text-right py-2.5 px-3 text-granite">
                      {row.width}
                    </td>
                    <td className="text-right py-2.5 px-3 font-semibold text-gen-green">
                      {row.grade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[10px] text-slate mt-4">
              * True widths are estimated to be 75-85% of drilled widths.
              Results are preliminary and subject to verification.
            </p>
          </div>
        </section>

        {/* Cross Section */}
        <section id="cross-section" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Cross Section
          </h2>
          <p className="text-slate mb-6">
            Geological cross-section template with layered strata.
          </p>
          <div className="aspect-video bg-arctic-white border border-gen-dark/10 rounded-2xl overflow-hidden p-6 md:p-10 relative">
            <div className="mb-4">
              <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                GEOLOGICAL SECTION
              </p>
              <p className="font-display italic text-xl text-gen-dark">
                A-A&rsquo; Cross Section — Zone A
              </p>
            </div>
            <div className="relative h-[60%] mt-8">
              {/* Strata layers */}
              <div className="absolute inset-x-0 top-0 h-[20%] bg-tundra-green/20 rounded-t-lg border-b border-tundra-green/30">
                <span className="absolute right-2 top-1 text-[9px] text-tundra-green">
                  Overburden
                </span>
              </div>
              <div className="absolute inset-x-0 top-[20%] h-[25%] bg-granite/15 border-b border-granite/20">
                <span className="absolute right-2 top-1 text-[9px] text-granite">
                  Sandstone
                </span>
              </div>
              <div className="absolute inset-x-0 top-[45%] h-[20%] bg-reactor-blue/10 border-b border-reactor-blue/20">
                <span className="absolute right-2 top-1 text-[9px] text-reactor-blue">
                  Unconformity
                </span>
              </div>
              <div className="absolute inset-x-0 top-[65%] h-[35%] bg-gen-dark/10 rounded-b-lg">
                <span className="absolute right-2 top-1 text-[9px] text-gen-dark">
                  Basement Gneiss
                </span>
              </div>
              {/* Mineralization zone */}
              <div className="absolute left-[30%] top-[38%] w-[25%] h-[18%] bg-gen-green/30 border-2 border-gen-green rounded-lg flex items-center justify-center">
                <span className="text-[10px] font-bold text-gen-green">
                  U₃O₈ Mineralization
                </span>
              </div>
              {/* Drill holes */}
              <div className="absolute left-[35%] top-0 w-0.5 h-full bg-gen-dark/30 rotate-[5deg]">
                <span className="absolute -top-4 -left-3 text-[9px] font-semibold text-gen-dark">
                  YTH-001
                </span>
              </div>
              <div className="absolute left-[50%] top-0 w-0.5 h-[80%] bg-gen-dark/30 rotate-[-3deg]">
                <span className="absolute -top-4 -left-3 text-[9px] font-semibold text-gen-dark">
                  YTH-003
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 left-6 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-gen-green/30 border border-gen-green rounded-sm" />
                <span className="text-[9px] text-slate">Mineralization</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-0.5 bg-gen-dark/30" />
                <span className="text-[9px] text-slate">Drill Trace</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Photo */}
        <section id="core-photo" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Core Photo Template
          </h2>
          <p className="text-slate mb-6">
            Annotated drill core photography layout.
          </p>
          <div className="bg-white border border-gen-dark/10 rounded-2xl overflow-hidden p-6 md:p-10">
            <div className="mb-6">
              <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                CORE PHOTOGRAPHY
              </p>
              <p className="font-display italic text-xl text-gen-dark">
                YTH-003 · 115.5m – 118.0m
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { depth: "115.5–116.0m", note: "Fine-grained sandstone, weak alteration" },
                { depth: "116.0–117.0m", note: "Strong chlorite alteration, visible uraninite" },
                { depth: "117.0–118.0m", note: "Transitional zone, decreasing mineralization" },
              ].map((core) => (
                <div key={core.depth} className="rounded-lg overflow-hidden">
                  <div className="aspect-[3/2] bg-gradient-to-b from-granite/40 to-granite/20 flex items-center justify-center relative">
                    {/* Simulated core texture */}
                    <div className="absolute inset-2 rounded bg-gradient-to-b from-logo-grey/30 via-tundra-green/20 to-logo-grey/30">
                      <div className="absolute top-[30%] left-0 right-0 h-[30%] bg-gen-green/20 border-y border-gen-green/30" />
                    </div>
                    <div className="relative z-10 w-10 h-10 border-2 border-white/60 rounded flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-3 bg-arctic-white">
                    <p className="text-xs font-semibold text-gen-dark">
                      {core.depth}
                    </p>
                    <p className="text-[10px] text-slate mt-1">{core.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Map */}
        <section id="property-map" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Property Map
          </h2>
          <p className="text-slate mb-6">
            Regional-scale property map showing claim boundaries and
            infrastructure.
          </p>
          <div className="aspect-video bg-gen-dark rounded-2xl overflow-hidden p-6 md:p-10 relative">
            <div className="mb-4">
              <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                REGIONAL MAP
              </p>
              <p className="font-display italic text-xl text-white">
                Generation Uranium — Property Overview
              </p>
            </div>
            {/* Map simulation */}
            <div className="absolute inset-16 md:inset-20 top-24">
              {/* Canada outline placeholder */}
              <div className="absolute inset-0 border border-white/10 rounded-xl">
                {/* Properties marked */}
                <div className="absolute top-[30%] left-[25%] group">
                  <div className="w-4 h-4 bg-gen-green rounded-full border-2 border-gen-dark shadow-lg shadow-gen-green/20" />
                  <span className="absolute left-6 top-0 text-[10px] text-white whitespace-nowrap font-medium">
                    Yath — Yukon
                  </span>
                </div>
                <div className="absolute top-[55%] left-[60%] group">
                  <div className="w-4 h-4 bg-reactor-blue rounded-full border-2 border-gen-dark shadow-lg" />
                  <span className="absolute left-6 top-0 text-[10px] text-white whitespace-nowrap font-medium">
                    Lac Savane — Quebec
                  </span>
                </div>
                <div className="absolute top-[40%] left-[45%] group">
                  <div className="w-3 h-3 bg-uranium-yellow rounded-full border-2 border-gen-dark" />
                  <span className="absolute left-5 top-0 text-[9px] text-white/60 whitespace-nowrap">
                    Future Target
                  </span>
                </div>
              </div>
            </div>
            {/* Legend */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-gen-dark/80 border border-white/10 rounded-lg p-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-gen-green rounded-full" />
                  <span className="text-[10px] text-white/70">Flagship</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-reactor-blue rounded-full" />
                  <span className="text-[10px] text-white/70">Acquired</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-uranium-yellow rounded-full" />
                  <span className="text-[10px] text-white/70">Target</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Callout Library */}
        <section id="callout-library" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Callout Library
          </h2>
          <p className="text-slate mb-6">
            Reusable callout boxes for key statistics and highlights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                type: "Stat",
                value: "$107/lb",
                label: "U₃O₈ Spot Price",
                color: "border-gen-green",
                bg: "bg-gen-green/5",
              },
              {
                type: "Alert",
                value: "Phase 2",
                label: "Drill Program Approved",
                color: "border-reactor-blue",
                bg: "bg-reactor-blue/5",
              },
              {
                type: "Highlight",
                value: "7,600 ha",
                label: "Yath Project Total Area",
                color: "border-uranium-yellow",
                bg: "bg-uranium-yellow/5",
              },
              {
                type: "Quote",
                value: '"Tier-1 potential"',
                label: "— Independent Geological Assessment",
                color: "border-aurora-teal",
                bg: "bg-aurora-teal/5",
              },
              {
                type: "Metric",
                value: "4 Projects",
                label: "Active Exploration Portfolio",
                color: "border-gen-green",
                bg: "bg-gen-green/5",
              },
              {
                type: "Status",
                value: "On Track",
                label: "2025 Exploration Program",
                color: "border-tundra-green",
                bg: "bg-tundra-green/5",
              },
            ].map((callout) => (
              <div
                key={callout.label}
                className={`${callout.bg} border-l-4 ${callout.color} rounded-r-lg p-5`}
              >
                <p className="text-[10px] text-slate uppercase tracking-wider mb-1">
                  {callout.type}
                </p>
                <p className="text-xl font-bold text-gen-dark">
                  {callout.value}
                </p>
                <p className="text-sm text-slate mt-1">{callout.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Infographics */}
        <section id="infographics" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Infographics
          </h2>
          <p className="text-slate mb-6">
            Visual data storytelling components for presentations and
            one-pagers.
          </p>
          <div className="bg-gen-dark rounded-2xl overflow-hidden p-6 md:p-10">
            <div className="mb-8">
              <p className="text-gen-green tracking-[0.2em] text-xs font-medium">
                WHY URANIUM
              </p>
              <p className="font-display italic text-xl text-white">
                The Clean Energy Imperative
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "⚡",
                  stat: "10%",
                  label: "Global electricity from nuclear",
                },
                {
                  icon: "🌍",
                  stat: "440+",
                  label: "Reactors operating worldwide",
                },
                {
                  icon: "📈",
                  stat: "60+",
                  label: "Reactors under construction",
                },
                {
                  icon: "🎯",
                  stat: "2050",
                  label: "Net-zero target driving demand",
                },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="text-3xl font-bold text-gen-green mb-1">
                    {item.stat}
                  </p>
                  <p className="text-xs text-white/60 leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            {/* Supply/Demand visual */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-5">
                <p className="text-xs text-gen-green font-semibold mb-3">
                  SUPPLY DEFICIT
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>Mine Production</span>
                      <span>130M lbs</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[65%] bg-reactor-blue rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>Reactor Demand</span>
                      <span>180M lbs</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gen-green rounded-full" />
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-uranium-yellow mt-3">
                  ▲ 50M lb annual deficit
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <p className="text-xs text-gen-green font-semibold mb-3">
                  PRICE TRAJECTORY
                </p>
                <div className="flex items-end gap-1 h-20">
                  {[25, 30, 42, 50, 73, 107].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                      <div
                        className="w-full bg-gen-green/70 rounded-t"
                        style={{ height: `${(v / 107) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[9px] text-white/40">2019</span>
                  <span className="text-[9px] text-white/40">2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
