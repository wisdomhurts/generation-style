import Footer from "@/components/Footer";
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon, TikTokIcon } from "@/components/SocialIcons";

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="overline mb-4">GET IN TOUCH</p>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-display-xl text-[#2D3748] mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl mx-auto">
            Have questions about Generation Uranium? We&apos;d love to hear from you. Reach out to our team using the form below or through our contact information.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="card p-8">
              <h2 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#2D3748] mb-6">
                Send us a Message
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#2D3748] mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E5DD] bg-white text-[#2D3748] text-sm placeholder:text-[#6B7B8D] focus:outline-none focus:border-[#7CC842] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2D3748] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E5DD] bg-white text-[#2D3748] text-sm placeholder:text-[#6B7B8D] focus:outline-none focus:border-[#7CC842] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2D3748] mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E5DD] bg-white text-[#2D3748] text-sm placeholder:text-[#6B7B8D] focus:outline-none focus:border-[#7CC842] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-[#7CC842] text-white font-[family-name:var(--font-display)] font-bold text-sm tracking-wide hover:bg-[#6AB835] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-8 lg:pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F5F3ED] flex items-center justify-center text-[#7CC842]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#2D3748] mb-1">Office Address</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Suite 810, 789 West Pender Street<br />
                    Vancouver, BC V6C 1H2, Canada
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F5F3ED] flex items-center justify-center text-[#7CC842]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#2D3748] mb-1">Phone</h3>
                  <p className="text-sm text-[#4A5568]">+1 (604) 555-0123</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F5F3ED] flex items-center justify-center text-[#7CC842]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#2D3748] mb-1">Email</h3>
                  <p className="text-sm text-[#4A5568]">info@generationuranium.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F5F3ED] flex items-center justify-center text-[#7CC842]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#2D3748] mb-2">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><FacebookIcon className="w-5 h-5" /></a>
                    <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><InstagramIcon className="w-5 h-5" /></a>
                    <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><XIcon className="w-5 h-5" /></a>
                    <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><YouTubeIcon className="w-5 h-5" /></a>
                    <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><TikTokIcon className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
