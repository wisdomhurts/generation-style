import Link from "next/link";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="overline mb-4">PIONEERING URANIUM EXPLORATION</p>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-display-xl text-[#2D3748] mb-6">
              Generating the Power of Tomorrow
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed mb-6 max-w-lg">
              Generation Uranium is advancing the Yath Uranium Project in Canada&apos;s prolific Thelon Basin &mdash; one of the world&apos;s most promising uranium districts.
            </p>
            <div className="accent-line mb-8" />
            <div className="flex flex-wrap gap-4">
              <Link
                href="/investors"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#7CC842] text-white font-[family-name:var(--font-display)] font-bold text-sm tracking-wide hover:bg-[#6AB835] transition-colors"
              >
                View Investor Presentation
              </Link>
              <Link
                href="/yath"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-[#E8E5DD] text-[#2D3748] font-[family-name:var(--font-display)] font-bold text-sm tracking-wide hover:border-[#7CC842] hover:text-[#7CC842] transition-colors"
              >
                Explore Yath Project
              </Link>
            </div>
          </div>
          <div className="bg-[#F5F3ED] rounded-2xl aspect-[4/3] flex items-center justify-center border border-[#E8E5DD]">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-[#D0CDC5] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-[#6B7B8D]">Yath Project Aerial</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#F5F3ED] border-y border-[#E8E5DD]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "25,000+", label: "HECTARES" },
            { value: "$80/lb", label: "U3O8 SPOT PRICE" },
            { value: "Thelon", label: "BASIN" },
            { value: "100%", label: "OWNED" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="stat-number text-3xl md:text-4xl mb-2">{stat.value}</p>
              <p className="text-xs font-semibold tracking-widest text-[#6B7B8D] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="overline mb-3">ABOUT GENERATION URANIUM</p>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-display-md text-[#2D3748] mb-6">
                At the Heart of Clean Energy
              </h2>
              <p className="text-[#4A5568] leading-relaxed mb-4">
                Generation Uranium Inc. is a Canadian mineral exploration company focused on the acquisition, exploration, and development of uranium projects. Our flagship Yath Uranium Project spans over 25,000 hectares in the Thelon Basin, Nunavut.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                With growing global demand for clean energy, uranium is poised to play a critical role in the world&apos;s energy transition. Generation Uranium is positioned at the forefront of this shift.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                  ),
                  title: "Strategic Location",
                  desc: "Located in the Thelon Basin, home to major uranium deposits and world-class geological potential.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: "Historical Data",
                  desc: "Decades of historical exploration data from government and private campaigns guide our exploration strategy.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: "Growth Potential",
                  desc: "Significant upside potential with a large land package in a proven uranium-bearing geological environment.",
                },
              ].map((card) => (
                <div key={card.title} className="card p-6 flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F5F3ED] flex items-center justify-center text-[#7CC842]">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#2D3748] mb-1">{card.title}</h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── YATH HIGHLIGHT ── */}
      <section className="bg-[#F5F3ED] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="overline mb-3">FLAGSHIP PROJECT</p>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-display-md text-[#2D3748] mb-4">
            Yath Uranium Project
          </h2>
          <p className="text-[#4A5568] leading-relaxed max-w-2xl mb-10">
            The Yath project covers over 25,000 hectares of prospective ground in the Thelon Basin, adjacent to historical uranium discoveries and analogous to world-class deposits.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-2xl aspect-[4/3] flex items-center justify-center border border-[#E8E5DD]">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-[#D0CDC5] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-sm text-[#6B7B8D]">Project Location Map</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Thelon Basin, Nunavut" },
                { label: "Size", value: "25,000+ Hectares" },
                { label: "Type", value: "Unconformity-style" },
                { label: "Analog", value: "Kiggavik Deposit" },
              ].map((fact) => (
                <div key={fact.label} className="card bg-white p-5">
                  <p className="text-xs font-semibold text-[#7CC842] tracking-wider uppercase mb-2">{fact.label}</p>
                  <p className="font-[family-name:var(--font-display)] font-semibold text-[#2D3748]">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY URANIUM ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-display-md text-[#2D3748] mb-12">
            The Clean Energy Revolution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Zero Carbon Emissions",
                desc: "Nuclear energy produces virtually zero greenhouse gas emissions during operation, making it essential for climate goals.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Reliable Baseload Power",
                desc: "Unlike wind and solar, nuclear provides consistent 24/7 power generation regardless of weather conditions.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Growing Global Demand",
                desc: "Over 60 new reactors under construction worldwide, driving unprecedented demand for uranium fuel.",
              },
            ].map((card) => (
              <div key={card.title} className="card p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#F5F3ED] flex items-center justify-center mx-auto mb-5 text-[#7CC842]">
                  {card.icon}
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[#2D3748] mb-3">{card.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#F5F3ED] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-display-md text-[#2D3748] mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-[#4A5568] mb-8">
            Explore our investor materials or get in touch with our team to learn about Generation Uranium&apos;s potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/investors"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#7CC842] text-white font-[family-name:var(--font-display)] font-bold text-sm tracking-wide hover:bg-[#6AB835] transition-colors"
            >
              Investor Presentation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[#E8E5DD] text-[#2D3748] font-[family-name:var(--font-display)] font-bold text-sm tracking-wide hover:border-[#7CC842] hover:text-[#7CC842] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
