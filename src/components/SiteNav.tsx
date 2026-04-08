"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback, useEffect } from "react";
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon, TikTokIcon } from "@/components/SocialIcons";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Foundation", href: "/foundation" },
  { label: "Presentation", href: "/presentation" },
  { label: "Data & Templates", href: "/data-templates" },
  { label: "Collateral", href: "/collateral" },
  { label: "Icons", href: "/icons" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-[#E8E5DD] ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="font-display font-bold text-sm tracking-[0.2em] text-[#2D3748] transition-colors duration-300">
            GENERATION
          </span>
          <span className="font-display font-bold text-sm tracking-[0.2em] text-[#7CC842] transition-all duration-300">
            STYLE
          </span>
        </Link>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm px-4 py-2 font-medium tracking-wide transition-all duration-300 link-underline ${
                  isActive
                    ? "text-[#7CC842]"
                    : "text-[#4A5568] hover:text-[#7CC842]"
                }`}
              >
                {isActive && (
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7CC842]" />
                )}
                <span className={isActive ? "ml-1" : ""}>{item.label}</span>
              </Link>
            );
          })}

          {/* Social Icons */}
          <div className="flex items-center gap-2 ml-3 mr-3">
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><FacebookIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><InstagramIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><XIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><YouTubeIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors duration-300"><TikTokIcon className="w-4 h-4" /></a>
          </div>

          {/* View Presentation CTA */}
          <Link
            href="/presentation"
            className="ml-1 px-4 py-2 rounded-lg bg-[#7CC842] text-white text-xs font-display font-bold tracking-wider hover:bg-[#6AB835] transition-all duration-300"
          >
            View Presentation
          </Link>

          {/* TSX-V Badge */}
          <a
            href="https://generationuranium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-3 py-1.5 rounded-full border border-[#E8E5DD] text-[#4A5568] text-xs font-mono tracking-wider hover:border-[#7CC842] hover:text-[#7CC842] transition-all duration-300"
          >
            TSX-V: GEN
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#4A5568] hover:text-[#7CC842] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
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
        <div className="md:hidden bg-white border-t border-[#E8E5DD] px-6 py-4 space-y-1">
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
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7CC842] mr-2" />
                )}
                {item.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-3 py-2.5">
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><FacebookIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><InstagramIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><XIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><YouTubeIcon className="w-4 h-4" /></a>
            <a href="#" className="text-[#6B7B8D] hover:text-[#7CC842] transition-colors"><TikTokIcon className="w-4 h-4" /></a>
          </div>
          <a
            href="https://generationuranium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2.5 text-sm font-mono text-[#4A5568] tracking-wider"
          >
            TSX-V: GEN
          </a>
        </div>
      )}
    </nav>
  );
}
