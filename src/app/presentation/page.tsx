export default function PresentationPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-gen-green tracking-[0.2em] text-sm font-medium mb-3">
            PRESENTATION
          </p>
          <h1 className="font-display italic text-5xl md:text-6xl text-gen-dark mb-4">
            Slide Templates
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            Investor deck templates rendered at 16:9 ratio. Five core slide
            types that cover every presentation need.
          </p>
        </div>

        {/* Hero Slide */}
        <section id="hero-slide" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Hero Slide
          </h2>
          <p className="text-slate mb-6">
            Opening slide — dark background, italic headline, green accent
            statistics strip.
          </p>
          <div className="aspect-video bg-gen-dark rounded-2xl overflow-hidden relative flex flex-col justify-between p-8 md:p-12">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <p className="text-gen-green tracking-[0.25em] text-xs md:text-sm font-medium">
                GENERATION URANIUM
              </p>
              <p className="text-white/40 text-xs md:text-sm">TSX-V: GEN</p>
            </div>

            {/* Center content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <p className="text-gen-green tracking-[0.3em] text-[10px] md:text-xs mb-4">
                CLEAN ENERGY EXPLORATION
              </p>
              <h3 className="font-display italic text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-3">
                Generating the Power
                <br />
                of Tomorrow
              </h3>
              <p className="text-white/50 text-sm md:text-base max-w-lg">
                Strategic uranium exploration across Canada&rsquo;s premier mineral
                districts
              </p>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-4 gap-4 border-t border-white/10 pt-4">
              {[
                { label: "Projects", value: "4" },
                { label: "Hectares", value: "32,000+" },
                { label: "Jurisdiction", value: "Canada" },
                { label: "Exchange", value: "TSX-V" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-gen-green text-lg md:text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-[10px] md:text-xs tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statement Slide */}
        <section id="statement" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Statement Slide
          </h2>
          <p className="text-slate mb-6">
            White background, large italic thesis statement — conviction and
            clarity.
          </p>
          <div className="aspect-video bg-white border border-gen-dark/10 rounded-2xl overflow-hidden flex flex-col justify-between p-8 md:p-12">
            <div className="flex items-center justify-between">
              <p className="text-gen-green tracking-[0.25em] text-xs md:text-sm font-medium">
                INVESTMENT THESIS
              </p>
              <div className="w-8 h-0.5 bg-gen-green" />
            </div>
            <div className="flex-1 flex items-center justify-center px-4 md:px-16">
              <blockquote className="font-display italic text-2xl md:text-4xl lg:text-5xl text-gen-dark text-center leading-snug">
                &ldquo;Uranium is the only scalable, carbon-free baseload energy
                source capable of meeting global decarbonization targets by
                2050.&rdquo;
              </blockquote>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-slate text-xs">
                — World Nuclear Association, 2024
              </p>
              <p className="text-slate text-xs">Generation Uranium Corp.</p>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <section id="section-divider" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Section Divider
          </h2>
          <p className="text-slate mb-6">
            Dark centered title — used to transition between deck sections.
          </p>
          <div className="aspect-video bg-gen-dark rounded-2xl overflow-hidden flex items-center justify-center relative">
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,200,66,0.08)_0%,_transparent_70%)]" />
            <div className="text-center relative z-10">
              <div className="w-12 h-0.5 bg-gen-green mx-auto mb-6" />
              <p className="text-gen-green tracking-[0.4em] text-[10px] md:text-xs mb-4">
                SECTION 02
              </p>
              <h3 className="font-display italic text-3xl md:text-5xl lg:text-6xl text-white">
                Project Portfolio
              </h3>
              <div className="w-12 h-0.5 bg-gen-green mx-auto mt-6" />
            </div>
          </div>
        </section>

        {/* Signature Components */}
        <section id="signature-components" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Signature Components
          </h2>
          <p className="text-slate mb-6">
            Big Number, Data Card, and Status Badge — reusable in any slide
            context.
          </p>
          <div className="aspect-video bg-arctic-white border border-gen-dark/10 rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col justify-between">
            <p className="text-gen-green tracking-[0.25em] text-xs font-medium">
              COMPONENT SPECIMENS
            </p>

            {/* Big Numbers */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "7,600", unit: "ha", label: "Yath Project Area" },
                {
                  number: "$107",
                  unit: "/lb",
                  label: "U₃O₈ Spot Price",
                },
                { number: "32,000+", unit: "ha", label: "Total Land Package" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-4 md:p-6 border border-gen-dark/5"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-gen-dark">
                      {item.number}
                    </span>
                    <span className="text-gen-green text-sm font-medium">
                      {item.unit}
                    </span>
                  </div>
                  <p className="text-slate text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Data Cards + Status Badges */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-gen-dark text-white rounded-lg px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gen-green" />
                <div>
                  <p className="text-xs text-white/50">Active Exploration</p>
                  <p className="text-sm font-semibold">Yath Project — Yukon</p>
                </div>
              </div>
              <div className="bg-gen-dark text-white rounded-lg px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-uranium-yellow" />
                <div>
                  <p className="text-xs text-white/50">Permitting Phase</p>
                  <p className="text-sm font-semibold">
                    Lac Savane — Quebec
                  </p>
                </div>
              </div>
              <span className="bg-gen-green/15 text-gen-green text-xs font-semibold px-3 py-1.5 rounded-full">
                Active
              </span>
              <span className="bg-uranium-yellow/15 text-uranium-yellow text-xs font-semibold px-3 py-1.5 rounded-full">
                Permitting
              </span>
              <span className="bg-reactor-blue/15 text-reactor-blue text-xs font-semibold px-3 py-1.5 rounded-full">
                Acquired
              </span>
            </div>
          </div>
        </section>

        {/* Split Image */}
        <section id="split-image" className="scroll-mt-20 mb-20">
          <h2 className="font-display italic text-3xl text-gen-dark mb-2">
            Split Image Slide
          </h2>
          <p className="text-slate mb-6">
            50/50 layout — visual on one side, content on the other.
          </p>
          <div className="aspect-video rounded-2xl overflow-hidden grid grid-cols-2">
            {/* Left: Image placeholder */}
            <div className="bg-gradient-to-br from-tundra-green to-gen-dark flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[20%] left-[15%] w-24 h-24 border border-white/30 rounded-full" />
                <div className="absolute top-[40%] left-[40%] w-16 h-16 border border-white/20 rounded-full" />
                <div className="absolute bottom-[25%] right-[20%] w-32 h-32 border border-white/10 rounded-full" />
              </div>
              <div className="text-center relative z-10">
                <div className="w-16 h-16 mx-auto border-2 border-white/30 rounded-lg flex items-center justify-center mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <p className="text-white/50 text-xs">Field Photography</p>
              </div>
            </div>
            {/* Right: Content */}
            <div className="bg-white p-6 md:p-10 flex flex-col justify-center">
              <p className="text-gen-green tracking-[0.25em] text-[10px] md:text-xs font-medium mb-4">
                YATH URANIUM PROJECT
              </p>
              <h3 className="font-display italic text-2xl md:text-3xl text-gen-dark mb-4 leading-snug">
                7,600 Hectares in
                <br />
                the Heart of Yukon
              </h3>
              <p className="text-slate text-sm leading-relaxed mb-6">
                Located within one of Canada&rsquo;s most prolific uranium
                districts, the Yath project represents a strategic land position
                with significant exploration upside.
              </p>
              <div className="flex gap-6">
                <div>
                  <p className="text-2xl font-bold text-gen-dark">7,600</p>
                  <p className="text-xs text-slate">Hectares</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gen-dark">12</p>
                  <p className="text-xs text-slate">Mineral Claims</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gen-dark">100%</p>
                  <p className="text-xs text-slate">Ownership</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
