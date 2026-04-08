"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon, TikTokIcon } from "@/components/SocialIcons";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Yath Project", href: "/yath" },
  { label: "Investors", href: "/investors" },
  { label: "Team", href: "/team" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#E8E5DD] ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="relative font-[family-name:var(--font-display)] font-bold text-2xl text-[#2D3748]">
            g
            <span className="absolute -top-0.5 -right-1.5 w-1.5 h-1.5 rounded-full bg-[#7CC842]" />
          </span>
          <span className="ml-2 font-[family-name:var(--font-display)] font-semibold text-sm tracking-wide text-[#2D3748]">
            generation uranium
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm px-3 py-2 font-medium tracking-wide transition-colors duration-300 link-underline ${
                  isActive
                    ? "text-[#7CC842]"
                    : "text-[#4A5568] hover:text-[#7CC842]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Social Icons */}
          <div className="flex items-center gap-2 ml-3 mr-3 border-l border-[#E8E5DD] pl-3">
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><FacebookIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><InstagramIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><XIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><YouTubeIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><TikTokIcon className="w-4 h-4" /></a>
          </div>

          {/* CTA */}
          <Link
            href="/investors"
            className="px-5 py-2 rounded-lg bg-[#7CC842] text-white text-xs font-[family-name:var(--font-display)] font-bold tracking-wider hover:bg-[#6AB835] transition-all duration-300"
          >
            View Presentation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#4A5568] hover:text-[#7CC842] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E5DD] px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-[#7CC842]" : "text-[#4A5568] hover:text-[#7CC842]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-3 py-3 border-t border-[#E8E5DD] mt-2">
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><FacebookIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><InstagramIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><XIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><YouTubeIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><TikTokIcon className="w-4 h-4" /></a>
          </div>
          <Link
            href="/investors"
            className="block text-center py-2.5 mt-2 rounded-lg bg-[#7CC842] text-white text-sm font-[family-name:var(--font-display)] font-bold"
          >
            View Presentation
          </Link>
        </div>
      )}
    </nav>
  );
}
