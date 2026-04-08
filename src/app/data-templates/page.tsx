export default function DataTemplatesPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-20">
          <p className="mono-label mb-4">DATA &amp; TEMPLATES</p>
          <h1 className="font-display font-bold text-[#2D3748] text-display-lg mb-4">
            Data Visualization
          </h1>
          <p className="text-[#4A5568] text-lg max-w-2xl leading-relaxed">
            Ten template specimens for maps, charts, timelines, peer
            comparisons, and technical data — optimized for investor communications.
          </p>
        </div>

        {/* Template cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ─── 01 MAP FRAME ─── */}
          <section id="map-frame" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              {/* Preview area */}
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 overflow-hidden">
                {/* Topo lines */}
                <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 400 220" fill="none">
                  <path d="M0,100 Q100,60 200,90 T400,80" stroke="#7CC842" strokeWidth="1" fill="none"/>
                  <path d="M0,130 Q100,90 200,120 T400,110" stroke="#7CC842" strokeWidth="0.8" fill="none"/>
                  <path d="M0,160 Q100,120 200,150 T400,140" stroke="#7CC842" strokeWidth="0.6" fill="none"/>
                  <path d="M0,70 Q100,30 200,60 T400,50" stroke="#7CC842" strokeWidth="0.5" fill="none"/>
                </svg>
                {/* Callout dots */}
                <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-[#7CC842] rounded-full" />
                <div className="absolute top-[55%] left-[50%] w-3 h-3 bg-[#EAB308] rounded-full" />
                <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-[#2563EB] rounded-full" />
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">PROPERTY MAP</p>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">01</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Map Frame</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Property boundary overlay with topo lines, callout markers, and legend panel.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 02 DATA SLIDE ─── */}
          <section id="data-slide" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 flex items-end gap-3 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">MARKET DATA</p>
                {/* Bar chart */}
                {[25, 30, 42, 50, 73, 107].map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end h-[140px]">
                    <div
                      className="w-full bg-[#7CC842]/60 rounded-t-sm hover:bg-[#7CC842] transition-colors"
                      style={{ height: `${(v / 107) * 100}%` }}
                    />
                    <span className="text-[9px] text-[#6B7B8D] mt-2 font-mono">{2019 + i}</span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">02</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Data Slide</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Bar chart with green accent showing uranium price trends over time.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 03 TIMELINE ─── */}
          <section id="timeline" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 flex items-center overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">MILESTONES</p>
                {/* Horizontal timeline */}
                <div className="w-full relative mt-4">
                  <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-[#E8E5DD]" />
                  <div className="flex justify-between px-[10%]">
                    {["2021", "2022", "2023", "2024", "2025"].map((y, i) => (
                      <div key={y} className="flex flex-col items-center relative">
                        <div className={`w-3 h-3 rounded-full border-2 ${i < 4 ? "bg-[#7CC842] border-[#7CC842]" : "bg-transparent border-[#E8E5DD]"}`} />
                        <span className={`text-[10px] mt-2 font-mono ${i < 4 ? "text-[#7CC842]" : "text-[#6B7B8D]"}`}>{y}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">03</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Timeline</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Horizontal milestone dots marking corporate milestones from incorporation to PEA.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 04 PEER COMPARISON ─── */}
          <section id="peer-comparison" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">PEER COMPARISON</p>
                {/* Mini table */}
                <div className="mt-10 space-y-1.5 text-[10px] font-mono">
                  <div className="flex justify-between text-[#6B7B8D] border-b border-[#E8E5DD] pb-1">
                    <span>COMPANY</span><span>STAGE</span>
                  </div>
                  <div className="flex justify-between text-[#4A5568]"><span>Cameco Corp.</span><span>Producer</span></div>
                  <div className="flex justify-between text-[#4A5568]"><span>NexGen Energy</span><span>Development</span></div>
                  <div className="flex justify-between bg-[#7CC842]/10 text-[#7CC842] px-2 py-1 rounded -mx-2">
                    <span className="font-bold">Generation Uranium</span><span>Exploration</span>
                  </div>
                  <div className="flex justify-between text-[#4A5568]"><span>Cosa Resources</span><span>Exploration</span></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">04</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Peer Comparison</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Competitive positioning table with GEN highlighted among uranium sector peers.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 05 DRILL RESULTS ─── */}
          <section id="drill-results" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">DRILL INTERCEPTS</p>
                <div className="mt-10 space-y-2">
                  {[
                    { id: "YTH-001", w: "3.5m", g: "0.12%" },
                    { id: "YTH-003", w: "2.5m", g: "0.21%" },
                    { id: "YTH-004", w: "5.5m", g: "0.15%" },
                  ].map((r) => (
                    <div key={r.id} className="bg-white rounded-lg border border-[#E8E5DD] px-4 py-2.5 flex items-center justify-between">
                      <span className="font-mono text-[#4A5568] text-[11px]">{r.id}</span>
                      <span className="font-mono text-[#6B7B8D] text-[10px]">{r.w}</span>
                      <span className="stat-number text-sm">{r.g}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">05</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Drill Results</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Technical assay intercept cards formatted for investor presentation clarity.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 06 CROSS SECTION ─── */}
          <section id="cross-section" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">CROSS SECTION</p>
                {/* Layered strata */}
                <svg className="absolute bottom-0 left-0 w-full h-[140px]" viewBox="0 0 400 140" fill="none" preserveAspectRatio="none">
                  <path d="M0,30 Q100,10 200,25 T400,20 L400,50 Q300,40 200,55 T0,60 Z" fill="#3D6B4F" opacity="0.2"/>
                  <path d="M0,60 Q100,40 200,55 T400,50 L400,80 Q300,70 200,85 T0,90 Z" fill="#4A5568" opacity="0.2"/>
                  <path d="M0,90 Q100,70 200,85 T400,80 L400,110 Q300,100 200,115 T0,120 Z" fill="#6B7B8D" opacity="0.2"/>
                  <path d="M0,120 Q100,100 200,115 T400,110 L400,140 L0,140 Z" fill="#2D3748" opacity="0.15"/>
                  {/* Mineralization zone */}
                  <rect x="150" y="55" width="80" height="20" rx="4" fill="#7CC842" fillOpacity="0.2" stroke="#7CC842" strokeWidth="1" strokeOpacity="0.4"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">06</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Cross-Section</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Geological cross-section with layered strata and mineralization zone highlights.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 07 CORE PHOTO ─── */}
          <section id="core-photo" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 flex items-center justify-center overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">CORE PHOTO</p>
                <div className="w-[200px] h-[120px] border border-[#E8E5DD] rounded-lg flex items-center justify-center bg-white">
                  <div className="text-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6B7B8D" strokeWidth="1.5" className="mx-auto mb-2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p className="font-mono text-[9px] text-[#6B7B8D] tracking-wider">CORE SAMPLE</p>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-[9px] text-[#6B7B8D]">
                  <span>HOLE: YTH-003</span>
                  <span>DEPTH: 115.5m</span>
                  <span>U3O8: 0.21%</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">07</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Core Photo</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Photo frame template with overlaid hole ID, depth, and assay metadata.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 08 PROPERTY MAP ─── */}
          <section id="property-map" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">PROPERTY MAP</p>
                {/* Claim block shapes */}
                <div className="absolute inset-10 mt-8">
                  <div className="absolute top-[10%] left-[10%] w-[40%] h-[35%] border border-[#7CC842]/40 bg-[#7CC842]/5 rounded" />
                  <div className="absolute top-[15%] left-[45%] w-[35%] h-[30%] border border-[#7CC842]/25 bg-[#7CC842]/3 rounded" />
                  <div className="absolute top-[50%] left-[15%] w-[55%] h-[35%] border border-[#7CC842]/30 bg-[#7CC842]/4 rounded" />
                  <div className="absolute top-[20%] left-[25%] w-2 h-2 bg-[#7CC842] rounded-full" />
                  <div className="absolute top-[60%] left-[40%] w-2 h-2 bg-[#EAB308] rounded-full" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">08</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Property Map</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Claim block shapes with boundary overlays, pins, and area calculations.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 09 CALLOUT LIBRARY ─── */}
          <section id="callout-library" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">CALLOUT LIBRARY</p>
                <div className="mt-10 space-y-3">
                  {/* Callout specimens */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#7CC842] rounded-full" />
                    <div className="bg-white rounded border border-[#E8E5DD] px-3 py-1.5">
                      <span className="font-mono text-[10px] text-[#7CC842]">Zone A — High Priority</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#EAB308] rounded-full" />
                    <div className="bg-white rounded border border-[#E8E5DD] px-3 py-1.5">
                      <span className="font-mono text-[10px] text-[#EAB308]">Zone B — Prospective</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#2563EB] rounded-full" />
                    <div className="bg-white rounded border border-[#E8E5DD] px-3 py-1.5">
                      <span className="font-mono text-[10px] text-[#2563EB]">Historic Workings</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">09</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Callout Library</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Map callout specimens with color-coded pins and label tooltips.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 10 INFOGRAPHICS ─── */}
          <section id="infographics" className="scroll-mt-24">
            <div className="bg-white rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-[#F5F3ED] p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-[#7CC842] text-[10px] tracking-[0.2em]">INFOGRAPHICS</p>
                <div className="mt-12 space-y-4">
                  {/* Progress bars */}
                  {[
                    { label: "Exploration", pct: 85 },
                    { label: "Permitting", pct: 45 },
                    { label: "Development", pct: 15 },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between mb-1">
                        <span className="font-mono text-[9px] text-[#6B7B8D] tracking-wider">{b.label}</span>
                        <span className="font-mono text-[9px] text-[#7CC842]">{b.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[#E8E5DD] rounded-full overflow-hidden">
                        <div className="h-full bg-[#7CC842] rounded-full" style={{ width: `${b.pct}%` }} />
                      </div>
                    </div>
                  ))}
                  {/* Mini donut */}
                  <div className="flex items-center gap-4 mt-2">
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="18" fill="none" stroke="#E8E5DD" strokeWidth="4" />
                      <circle cx="24" cy="24" r="18" fill="none" stroke="#7CC842" strokeWidth="4"
                        strokeDasharray="113.1" strokeDashoffset="28.3" strokeLinecap="round"
                        transform="rotate(-90 24 24)" />
                    </svg>
                    <div>
                      <p className="stat-number text-lg">75%</p>
                      <p className="font-mono text-[9px] text-[#6B7B8D] tracking-wider">PHASE COMPLETE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[#7CC842] text-sm">10</span>
                  <h3 className="font-display font-bold text-[#2D3748] text-lg">Infographics</h3>
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Progress bars, donut charts, and percentage indicators for project milestones.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
