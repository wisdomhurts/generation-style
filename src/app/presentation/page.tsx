export default function PresentationPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-20">
          <p className="mono-label mb-4">PRESENTATION</p>
          <h1 className="font-display font-bold text-white text-display-lg mb-4">
            Slide Templates
          </h1>
          <p className="text-graphite text-lg max-w-2xl leading-relaxed">
            Investor deck templates rendered at 16:9 ratio. Five core slide
            types that cover every presentation need.
          </p>
        </div>

        {/* ─── HERO SLIDE ─── */}
        <section id="hero-slide" className="scroll-mt-24 mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-gen-green text-sm tracking-wider">01</span>
            <h2 className="font-display font-bold text-white text-display-sm">
              Hero Slide
            </h2>
          </div>
          <p className="text-graphite mb-8 max-w-xl">
            Opening slide — dark background, bold headline, chartreuse accent statistics strip.
          </p>

          <div className="aspect-video bg-gen-dark rounded-2xl overflow-hidden relative flex flex-col justify-between p-8 md:p-12 card-hover">
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,230,74,0.06)_0%,_transparent_60%)]" />

            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between">
              <p className="font-mono text-gen-green tracking-[0.25em] text-xs">
                GENERATION URANIUM
              </p>
              <p className="text-white/30 font-mono text-xs">TSX-V: GEN</p>
            </div>

            {/* Center content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-gen-green tracking-[0.3em] text-[10px] md:text-xs mb-4">
                CLEAN ENERGY EXPLORATION
              </p>
              <h3 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-3">
                Generating the Power
                <br />
                of Tomorrow
              </h3>
              <p className="text-white/40 text-sm md:text-base max-w-lg">
                Strategic uranium exploration across Canada&rsquo;s premier mineral districts
              </p>
            </div>

            {/* Stats strip */}
            <div className="relative z-10 grid grid-cols-4 gap-4 border-t border-white/10 pt-4">
              {[
                { label: "Projects", value: "4" },
                { label: "Hectares", value: "25,000+" },
                { label: "Jurisdiction", value: "Canada" },
                { label: "Exchange", value: "TSX-V" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="stat-number text-lg md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-white/30 font-mono text-[9px] md:text-[10px] tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider mb-24" />

        {/* ─── STATEMENT SLIDE ─── */}
        <section id="statement" className="scroll-mt-24 mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-gen-green text-sm tracking-wider">02</span>
            <h2 className="font-display font-bold text-white text-display-sm">
              Statement Slide
            </h2>
          </div>
          <p className="text-graphite mb-8 max-w-xl">
            Light background, large thesis statement — conviction and clarity.
          </p>

          <div className="aspect-video bg-warm-sand rounded-2xl overflow-hidden flex flex-col justify-between p-8 md:p-12 card-hover">
            <div className="flex items-center justify-between">
              <p className="font-mono text-gen-dark/60 tracking-[0.25em] text-xs">
                INVESTMENT THESIS
              </p>
              <div className="w-8 h-0.5 bg-gen-green glow-green-line" />
            </div>
            <div className="flex-1 flex items-center justify-center px-4 md:px-16">
              <blockquote className="font-display font-bold text-2xl md:text-4xl lg:text-5xl text-gen-dark text-center leading-snug">
                &ldquo;Uranium is the only scalable, carbon-free baseload energy
                source capable of meeting global decarbonization targets by
                2050.&rdquo;
              </blockquote>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-graphite text-xs">
                — World Nuclear Association, 2024
              </p>
              <p className="text-graphite text-xs font-mono">Generation Uranium Corp.</p>
            </div>
          </div>
        </section>

        <div className="section-divider mb-24" />

        {/* ─── SECTION DIVIDER SLIDE ─── */}
        <section id="section-divider" className="scroll-mt-24 mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-gen-green text-sm tracking-wider">03</span>
            <h2 className="font-display font-bold text-white text-display-sm">
              Section Divider
            </h2>
          </div>
          <p className="text-graphite mb-8 max-w-xl">
            Dark centered title — used to transition between deck sections.
          </p>

          <div className="aspect-video bg-gen-dark rounded-2xl overflow-hidden flex items-center justify-center relative card-hover">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,230,74,0.06)_0%,_transparent_60%)]" />
            <div className="text-center relative z-10">
              <div className="w-12 h-0.5 bg-gen-green mx-auto mb-6 glow-green-line" />
              <p className="font-mono text-gen-green tracking-[0.4em] text-[10px] md:text-xs mb-4">
                SECTION 02
              </p>
              <h3 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white">
                Project Portfolio
              </h3>
              <div className="w-12 h-0.5 bg-gen-green mx-auto mt-6 glow-green-line" />
            </div>
          </div>
        </section>

        <div className="section-divider mb-24" />

        {/* ─── SIGNATURE COMPONENTS ─── */}
        <section id="signature-components" className="scroll-mt-24 mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-gen-green text-sm tracking-wider">04</span>
            <h2 className="font-display font-bold text-white text-display-sm">
              Signature Components
            </h2>
          </div>
          <p className="text-graphite mb-8 max-w-xl">
            Big Number, Data Card, and Status Badge — reusable in any slide context.
          </p>

          <div className="aspect-video bg-carbon rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col justify-between card-hover border border-white/5">
            <p className="font-mono text-gen-green tracking-[0.25em] text-xs">
              COMPONENT SPECIMENS
            </p>

            {/* Big Numbers */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "7,600", unit: "ha", label: "Yath Project Area" },
                { number: "$80", unit: "/lb", label: "U\u2083O\u2088 Spot Price" },
                { number: "25,000+", unit: "ha", label: "Total Land Package" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-gen-dark rounded-xl p-4 md:p-6 border border-white/5 hover:border-gen-green/20 transition-all duration-300"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="stat-number text-3xl md:text-4xl">
                      {item.number}
                    </span>
                    <span className="text-gen-green text-sm font-mono">
                      {item.unit}
                    </span>
                  </div>
                  <p className="text-graphite text-xs mt-2 font-mono tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Data Cards + Status Badges */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="glass-dark rounded-lg px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gen-green shadow-[0_0_6px_rgba(200,230,74,0.5)]" />
                <div>
                  <p className="text-xs text-white/40 font-mono">Active Exploration</p>
                  <p className="text-sm font-display font-semibold text-white">Yath Project — Yukon</p>
                </div>
              </div>
              <div className="glass-dark rounded-lg px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-uranium-yellow shadow-[0_0_6px_rgba(234,179,8,0.4)]" />
                <div>
                  <p className="text-xs text-white/40 font-mono">Permitting Phase</p>
                  <p className="text-sm font-display font-semibold text-white">Lac Savane — Quebec</p>
                </div>
              </div>
              <span className="bg-gen-green/15 text-gen-green text-xs font-mono px-3 py-1.5 rounded-full border border-gen-green/20">
                Active
              </span>
              <span className="bg-uranium-yellow/15 text-uranium-yellow text-xs font-mono px-3 py-1.5 rounded-full border border-uranium-yellow/20">
                Permitting
              </span>
              <span className="bg-reactor-blue/15 text-reactor-blue text-xs font-mono px-3 py-1.5 rounded-full border border-reactor-blue/20">
                Acquired
              </span>
            </div>
          </div>
        </section>

        <div className="section-divider mb-24" />

        {/* ─── SPLIT IMAGE ─── */}
        <section id="split-image" className="scroll-mt-24 mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-gen-green text-sm tracking-wider">05</span>
            <h2 className="font-display font-bold text-white text-display-sm">
              Split Image Slide
            </h2>
          </div>
          <p className="text-graphite mb-8 max-w-xl">
            50/50 layout — visual on one side, content on the other.
          </p>

          <div className="aspect-video rounded-2xl overflow-hidden grid grid-cols-2 card-hover">
            {/* Left: Visual */}
            <div className="bg-gradient-to-br from-tundra-green/80 to-gen-dark flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[20%] left-[15%] w-24 h-24 border border-white/20 rounded-full" />
                <div className="absolute top-[40%] left-[40%] w-16 h-16 border border-white/15 rounded-full" />
                <div className="absolute bottom-[25%] right-[20%] w-32 h-32 border border-white/10 rounded-full" />
              </div>
              <div className="text-center relative z-10">
                <div className="w-16 h-16 mx-auto border border-white/20 rounded-lg flex items-center justify-center mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.6">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <p className="text-white/40 font-mono text-xs tracking-wider">FIELD PHOTOGRAPHY</p>
              </div>
            </div>
            {/* Right: Content */}
            <div className="bg-carbon p-6 md:p-10 flex flex-col justify-center">
              <p className="font-mono text-gen-green tracking-[0.25em] text-[10px] md:text-xs mb-4">
                YATH URANIUM PROJECT
              </p>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 leading-snug">
                7,600 Hectares in
                <br />
                the Heart of Yukon
              </h3>
              <p className="text-graphite text-sm leading-relaxed mb-6">
                Located within one of Canada&rsquo;s most prolific uranium
                districts, the Yath project represents a strategic land position
                with significant exploration upside.
              </p>
              <div className="flex gap-6">
                {[
                  { n: "7,600", l: "Hectares" },
                  { n: "12", l: "Mineral Claims" },
                  { n: "100%", l: "Ownership" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="stat-number text-2xl">{s.n}</p>
                    <p className="text-xs text-graphite font-mono tracking-wider mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
