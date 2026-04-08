import Link from "next/link";
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon, TikTokIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#F5F3ED] border-t border-[#E8E5DD]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="relative font-[family-name:var(--font-display)] font-bold text-2xl text-[#2D3748]">
                g
                <span className="absolute -top-0.5 -right-1.5 w-1.5 h-1.5 rounded-full bg-[#7CC842]" />
              </span>
              <span className="ml-2 font-[family-name:var(--font-display)] font-semibold text-sm tracking-wide text-[#2D3748]">
                generation uranium
              </span>
            </Link>
            <p className="text-sm text-[#6B7B8D] leading-relaxed mb-6">
              Pioneering uranium exploration in the Thelon Basin, Nunavut, Canada.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><InstagramIcon className="w-5 h-5" /></a>
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><XIcon className="w-5 h-5" /></a>
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><YouTubeIcon className="w-5 h-5" /></a>
              <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><TikTokIcon className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-sm text-[#2D3748] mb-4 tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">Home</Link></li>
              <li><Link href="/team" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">Team</Link></li>
              <li><Link href="/news" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">News</Link></li>
              <li><Link href="/contact" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-sm text-[#2D3748] mb-4 tracking-wide">Projects</h4>
            <ul className="space-y-3">
              <li><Link href="/yath" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">Yath Uranium Project</Link></li>
              <li><Link href="/yath" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">Thelon Basin</Link></li>
              <li><Link href="/yath" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">Exploration Data</Link></li>
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-sm text-[#2D3748] mb-4 tracking-wide">Investors</h4>
            <ul className="space-y-3">
              <li><Link href="/investors" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">Investor Relations</Link></li>
              <li><Link href="/investors" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">Presentations</Link></li>
              <li><Link href="/news" className="text-sm text-[#6B7B8D] hover:text-[#7CC842] transition-colors">News Releases</Link></li>
            </ul>
          </div>
        </div>

        {/* Tickers + copyright */}
        <div className="mt-12 pt-8 border-t border-[#E8E5DD] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-[#6B7B8D]">
            <span className="font-semibold">TSX-V: GEN</span>
            <span className="font-semibold">OTCQB: GENRF</span>
            <span className="font-semibold">FRA: W85</span>
          </div>
          <p className="text-xs text-[#6B7B8D]">
            &copy; {new Date().getFullYear()} Generation Uranium Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
