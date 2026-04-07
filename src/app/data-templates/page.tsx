export default function DataTemplatesPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-20">
          <p className="mono-label mb-4">DATA &amp; TEMPLATES</p>
          <h1 className="font-display font-bold text-white text-display-lg mb-4">
            Data Visualization
          </h1>
          <p className="text-graphite text-lg max-w-2xl leading-relaxed">
            Ten template specimens for maps, charts, timelines, peer
            comparisons, and technical data — optimized for investor communications.
          </p>
        </div>

        {/* Template cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ─── 01 MAP FRAME ─── */}
          <section id="map-frame" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              {/* Preview area */}
              <div className="h-[220px] relative bg-gen-dark p-6 overflow-hidden">
                {/* Topo lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 220" fill="none">
                  <path d="M0,100 Q100,60 200,90 T400,80" stroke="#C8E64A" strokeWidth="1" fill="none"/>
                  <path d="M0,130 Q100,90 200,120 T400,110" stroke="#C8E64A" strokeWidth="0.8" fill="none"/>
                  <path d="M0,160 Q100,120 200,150 T400,140" stroke="#C8E64A" strokeWidth="0.6" fill="none"/>
                  <path d="M0,70 Q100,30 200,60 T400,50" stroke="#C8E64A" strokeWidth="0.5" fill="none"/>
                </svg>
                {/* Callout dots */}
                <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-gen-green rounded-full shadow-[0_0_8px_rgba(200,230,74,0.5)]" />
                <div className="absolute top-[55%] left-[50%] w-3 h-3 bg-uranium-yellow rounded-full shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-reactor-blue rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">PROPERTY MAP</p>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">01</span>
                  <h3 className="font-display font-bold text-white text-lg">Map Frame</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  Property boundary overlay with topo lines, callout markers, and legend panel.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 02 DATA SLIDE ─── */}
          <section id="data-slide" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-gen-dark p-6 flex items-end gap-3 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">MARKET DATA</p>
                {/* Bar chart */}
                {[25, 30, 42, 50, 73, 107].map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end h-[140px]">
                    <div
                      className="w-full bg-gen-green/80 rounded-t-sm hover:bg-gen-green transition-colors"
                      style={{ height: `${(v / 107) * 100}%` }}
                    />
                    <span className="text-[9px] text-white/30 mt-2 font-mono">{2019 + i}</span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">02</span>
                  <h3 className="font-display font-bold text-white text-lg">Data Slide</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  Bar chart with chartreuse accent showing uranium price trends over time.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 03 TIMELINE ─── */}
          <section id="timeline" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-gen-dark p-6 flex items-center overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">MILESTONES</p>
                {/* Horizontal timeline */}
                <div className="w-full relative mt-4">
                  <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-white/10" />
                  <div className="flex justify-between px-[10%]">
                    {["2021", "2022", "2023", "2024", "2025"].map((y, i) => (
                      <div key={y} className="flex flex-col items-center relative">
                        <div className={`w-3 h-3 rounded-full border-2 ${i < 4 ? "bg-gen-green border-gen-green shadow-[0_0_6px_rgba(200,230,74,0.4)]" : "bg-transparent border-white/30"}`} />
                        <span className={`text-[10px] mt-2 font-mono ${i < 4 ? "text-gen-green" : "text-white/30"}`}>{y}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">03</span>
                  <h3 className="font-display font-bold text-white text-lg">Timeline</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  Horizontal milestone dots marking corporate milestones from incorporation to PEA.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 04 PEER COMPARISON ─── */}
          <section id="peer-comparison" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-gen-dark p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">PEER COMPARISON</p>
                {/* Mini table */}
                <div className="mt-10 space-y-1.5 text-[10px] font-mono">
                  <div className="flex justify-between text-white/30 border-b border-white/5 pb-1">
                    <span>COMPANY</span><span>STAGE</span>
                  </div>
                  <div className="flex justify-between text-white/40"><span>Cameco Corp.</span><span>Producer</span></div>
                  <div className="flex justify-between text-white/40"><span>NexGen Energy</span><span>Development</span></div>
                  <div className="flex justify-between bg-gen-green/10 text-gen-green px-2 py-1 rounded -mx-2">
                    <span className="font-bold">Generation Uranium</span><span>Exploration</span>
                  </div>
                  <div className="flex justify-between text-white/40"><span>Cosa Resources</span><span>Exploration</span></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">04</span>
                  <h3 className="font-display font-bold text-white text-lg">Peer Comparison</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  Competitive positioning table with GEN highlighted among uranium sector peers.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 05 DRILL RESULTS ─── */}
          <section id="drill-results" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-gen-dark p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">DRILL INTERCEPTS</p>
                <div className="mt-10 space-y-2">
                  {[
                    { id: "YTH-001", w: "3.5m", g: "0.12%" },
                    { id: "YTH-003", w: "2.5m", g: "0.21%" },
                    { id: "YTH-004", w: "5.5m", g: "0.15%" },
                  ].map((r) => (
                    <div key={r.id} className="glass-dark rounded-lg px-4 py-2.5 flex items-center justify-between">
                      <span className="font-mono text-white/60 text-[11px]">{r.id}</span>
                      <span className="font-mono text-white/40 text-[10px]">{r.w}</span>
                      <span className="stat-number text-sm">{r.g}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">05</span>
                  <h3 className="font-display font-bold text-white text-lg">Drill Results</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  Technical assay intercept cards formatted for investor presentation clarity.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 06 CROSS SECTION ─── */}
          <section id="cross-section" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-gen-dark p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">CROSS SECTION</p>
                {/* Layered strata */}
                <svg className="absolute bottom-0 left-0 w-full h-[140px]" viewBox="0 0 400 140" fill="none" preserveAspectRatio="none">
                  <path d="M0,30 Q100,10 200,25 T400,20 L400,50 Q300,40 200,55 T0,60 Z" fill="#3D6B4F" opacity="0.3"/>
                  <path d="M0,60 Q100,40 200,55 T400,50 L400,80 Q300,70 200,85 T0,90 Z" fill="#4A5568" opacity="0.4"/>
                  <path d="M0,90 Q100,70 200,85 T400,80 L400,110 Q300,100 200,115 T0,120 Z" fill="#2D3A3A" opacity="0.6"/>
                  <path d="M0,120 Q100,100 200,115 T400,110 L400,140 L0,140 Z" fill="#1E2A2A" opacity="0.8"/>
                  {/* Mineralization zone */}
                  <rect x="150" y="55" width="80" height="20" rx="4" fill="#C8E64A" fillOpacity="0.2" stroke="#C8E64A" strokeWidth="1" strokeOpacity="0.4"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">06</span>
                  <h3 className="font-display font-bold text-white text-lg">Cross-Section</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  Geological cross-section with layered strata and mineralization zone highlights.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 07 CORE PHOTO ─── */}
          <section id="core-photo" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-gen-dark p-6 flex items-center justify-center overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">CORE PHOTO</p>
                <div className="w-[200px] h-[120px] border border-white/10 rounded-lg flex items-center justify-center bg-carbon">
                  <div className="text-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4A5568" strokeWidth="1.5" className="mx-auto mb-2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p className="font-mono text-[9px] text-white/30 tracking-wider">CORE SAMPLE</p>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-[9px] text-white/20">
                  <span>HOLE: YTH-003</span>
                  <span>DEPTH: 115.5m</span>
                  <span>U3O8: 0.21%</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">07</span>
                  <h3 className="font-display font-bold text-white text-lg">Core Photo</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  Photo frame template with overlaid hole ID, depth, and assay metadata.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 08 PROPERTY MAP ─── */}
          <section id="property-map" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-gen-dark p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">PROPERTY MAP</p>
                {/* Claim block shapes */}
                <div className="absolute inset-10 mt-8">
                  <div className="absolute top-[10%] left-[10%] w-[40%] h-[35%] border border-gen-green/40 bg-gen-green/5 rounded" />
                  <div className="absolute top-[15%] left-[45%] w-[35%] h-[30%] border border-gen-green/25 bg-gen-green/3 rounded" />
                  <div className="absolute top-[50%] left-[15%] w-[55%] h-[35%] border border-gen-green/30 bg-gen-green/4 rounded" />
                  <div className="absolute top-[20%] left-[25%] w-2 h-2 bg-gen-green rounded-full shadow-[0_0_6px_rgba(200,230,74,0.5)]" />
                  <div className="absolute top-[60%] left-[40%] w-2 h-2 bg-uranium-yellow rounded-full shadow-[0_0_6px_rgba(234,179,8,0.4)]" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">08</span>
                  <h3 className="font-display font-bold text-white text-lg">Property Map</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  Claim block shapes with boundary overlays, pins, and area calculations.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 09 CALLOUT LIBRARY ─── */}
          <section id="callout-library" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-gen-dark p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">CALLOUT LIBRARY</p>
                <div className="mt-10 space-y-3">
                  {/* Callout specimens */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gen-green rounded-full shadow-[0_0_6px_rgba(200,230,74,0.4)]" />
                    <div className="glass-dark rounded px-3 py-1.5">
                      <span className="font-mono text-[10px] text-gen-green">Zone A — High Priority</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-uranium-yellow rounded-full" />
                    <div className="glass-dark rounded px-3 py-1.5">
                      <span className="font-mono text-[10px] text-uranium-yellow">Zone B — Prospective</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-reactor-blue rounded-full" />
                    <div className="glass-dark rounded px-3 py-1.5">
                      <span className="font-mono text-[10px] text-reactor-blue">Historic Workings</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">09</span>
                  <h3 className="font-display font-bold text-white text-lg">Callout Library</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
                  Map callout specimens with color-coded pins and glass-dark label tooltips.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 10 INFOGRAPHICS ─── */}
          <section id="infographics" className="scroll-mt-24">
            <div className="bg-carbon rounded-2xl overflow-hidden card-hover">
              <div className="h-[220px] relative bg-gen-dark p-6 overflow-hidden">
                <p className="absolute top-6 left-6 font-mono text-gen-green text-[10px] tracking-[0.2em]">INFOGRAPHICS</p>
                <div className="mt-12 space-y-4">
                  {/* Progress bars */}
                  {[
                    { label: "Exploration", pct: 85 },
                    { label: "Permitting", pct: 45 },
                    { label: "Development", pct: 15 },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between mb-1">
                        <span className="font-mono text-[9px] text-white/40 tracking-wider">{b.label}</span>
                        <span className="font-mono text-[9px] text-gen-green">{b.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gen-green rounded-full" style={{ width: `${b.pct}%` }} />
                      </div>
                    </div>
                  ))}
                  {/* Mini donut */}
                  <div className="flex items-center gap-4 mt-2">
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="18" fill="none" stroke="#2D3A3A" strokeWidth="4" />
                      <circle cx="24" cy="24" r="18" fill="none" stroke="#C8E64A" strokeWidth="4"
                        strokeDasharray="113.1" strokeDashoffset="28.3" strokeLinecap="round"
                        transform="rotate(-90 24 24)" />
                    </svg>
                    <div>
                      <p className="stat-number text-lg">75%</p>
                      <p className="font-mono text-[9px] text-white/30 tracking-wider">PHASE COMPLETE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-gen-green text-sm">10</span>
                  <h3 className="font-display font-bold text-white text-lg">Infographics</h3>
                </div>
                <p className="text-graphite text-sm leading-relaxed">
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
