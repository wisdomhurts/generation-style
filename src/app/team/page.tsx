import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Anthony Fiorilli",
    role: "Chief Executive Officer",
    bio: "Anthony brings over 15 years of experience in the resource sector, specializing in corporate development, capital markets, and strategic planning for junior mining companies.",
  },
  {
    name: "Rafael Ramos",
    role: "President",
    bio: "Rafael has extensive experience in mineral exploration and project development, with a track record of advancing early-stage projects through to resource definition.",
  },
  {
    name: "James McNulty",
    role: "VP Exploration",
    bio: "James is a seasoned geologist with over 20 years of experience in uranium exploration across multiple geological settings, including the Athabasca and Thelon basins.",
  },
  {
    name: "Sarah Chen",
    role: "Chief Financial Officer",
    bio: "Sarah brings deep expertise in financial management, corporate governance, and regulatory compliance for publicly listed mining companies.",
  },
];

const advisors = [
  {
    name: "Dr. Michael Roberts",
    role: "Technical Advisor",
    bio: "Dr. Roberts is a renowned geoscientist with 30+ years of experience in uranium exploration and deposit modeling. Former Chief Geologist at a major uranium producer.",
  },
  {
    name: "Patricia Williams",
    role: "Strategic Advisor",
    bio: "Patricia is a seasoned capital markets professional with extensive experience in mining finance, investor relations, and corporate strategy for resource companies.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="overline mb-4">LEADERSHIP</p>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-display-xl text-[#2D3748] mb-6">
            Experienced Management
          </h1>
          <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl mx-auto">
            Our team combines decades of experience in mineral exploration, capital markets, and corporate governance to advance Generation Uranium&apos;s vision.
          </p>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="card p-6 text-center">
                {/* Photo placeholder */}
                <div className="w-24 h-24 rounded-full bg-[#F5F3ED] border border-[#E8E5DD] mx-auto mb-5 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#D0CDC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[#2D3748] mb-1">{member.name}</h3>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#7CC842] mb-3">{member.role}</p>
                <p className="text-sm text-[#4A5568] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISORS ── */}
      <section className="bg-[#F5F3ED] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-display-md text-[#2D3748] mb-10 text-center">
            Strategic Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="card bg-white p-6 flex gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#F5F3ED] border border-[#E8E5DD] flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D0CDC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#2D3748] mb-1">{advisor.name}</h3>
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#7CC842] mb-2">{advisor.role}</p>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{advisor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
