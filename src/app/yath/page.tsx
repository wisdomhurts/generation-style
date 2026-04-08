import Footer from "@/components/Footer";

export default function YathPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="overline mb-4">YATH URANIUM PROJECT</p>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-display-xl text-[#2D3748] mb-6">
            Pioneering Uranium Exploration in the Thelon Basin
          </h1>
          <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl mx-auto mb-6">
            The Yath Uranium Project covers over 25,000 hectares of highly prospective ground in one of the world&apos;s most promising uranium districts.
          </p>
          <div className="accent-line mx-auto" />
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ── */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-display-sm text-[#2D3748] mb-6">
              Project Overview
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              The Yath Uranium Project is located within the Thelon Basin of Nunavut, Canada &mdash; a region known for hosting significant unconformity-style uranium deposits. The project encompasses a large, contiguous land package that provides excellent exploration potential.
            </p>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Historical exploration by government agencies and private companies has identified multiple uranium anomalies and geological features consistent with high-grade uranium mineralization. Generation Uranium is leveraging this extensive dataset to advance the project through systematic modern exploration.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              The Thelon Basin is geologically analogous to the Athabasca Basin in Saskatchewan, which hosts the world&apos;s highest-grade uranium mines, including Cameco&apos;s McArthur River and Cigar Lake operations.
            </p>
          </div>
          <div className="bg-[#F5F3ED] rounded-2xl aspect-[4/3] flex items-center justify-center border border-[#E8E5DD]">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-[#D0CDC5] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-sm text-[#6B7B8D]">Yath Project Location Map</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-[#F5F3ED] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="overline mb-3">EXPLORATION TIMELINE</p>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-display-md text-[#2D3748] mb-10">
            A History of Discovery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                era: "1970s",
                title: "Government Surveys",
                desc: "Initial geological mapping and airborne radiometric surveys by the Geological Survey of Canada identified anomalous uranium signatures across the Thelon Basin.",
              },
              {
                era: "1980&ndash;90s",
                title: "Private Exploration",
                desc: "Multiple exploration campaigns including ground geophysics, geochemical sampling, and shallow drilling confirmed uranium potential in the project area.",
              },
              {
                era: "2000s",
                title: "Modern Programs",
                desc: "Advanced geophysical techniques and diamond drilling programs further delineated targets and expanded the understanding of the geological framework.",
              },
              {
                era: "Today",
                title: "Generation Uranium",
                desc: "Generation Uranium has consolidated the land package and is applying modern exploration methods to advance the project toward resource definition.",
              },
            ].map((item) => (
              <div key={item.era} className="card bg-white p-6">
                <p className="font-[family-name:var(--font-display)] font-bold text-3xl text-[#7CC842] mb-3" dangerouslySetInnerHTML={{ __html: item.era }} />
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#2D3748] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEOLOGICAL FEATURES ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="overline mb-3">KEY GEOLOGICAL FEATURES</p>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-display-md text-[#2D3748] mb-6">
                Why the Thelon Basin Matters
              </h2>
              <p className="text-[#4A5568] leading-relaxed">
                The Thelon Basin shares remarkable geological similarities with the Athabasca Basin, the world&apos;s premier uranium district. Key features that make this area highly prospective include the presence of the Thelon Formation sandstone, basement unconformity targets, and evidence of hydrothermal alteration.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { num: "01", title: "Sandstone Cover", desc: "The Thelon Formation provides the essential sandstone cover sequence required for unconformity-type uranium deposit formation." },
                { num: "02", title: "Basement Unconformity", desc: "A major unconformity contact between the sandstone and underlying basement rocks creates the ideal structural setting." },
                { num: "03", title: "Alteration Signatures", desc: "Evidence of hydrothermal alteration, clay minerals, and geochemical anomalies indicate fluid flow systems associated with uranium transport." },
                { num: "04", title: "Structural Controls", desc: "Major fault zones and structural corridors provide pathways for uranium-bearing fluids, concentrating mineralization at favorable sites." },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <span className="flex-shrink-0 font-[family-name:var(--font-display)] font-bold text-2xl text-[#7CC842]">{item.num}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#2D3748] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
